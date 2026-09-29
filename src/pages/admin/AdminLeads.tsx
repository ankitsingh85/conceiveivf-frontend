import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  Download,
  Inbox,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  RefreshCw,
  Search,
  Trash2,
  X,
} from "lucide-react";
import { apiRequest } from "../../lib/api";
import { cn } from "../../utils/cn";
import PageHeader from "../../components/admin/PageHeader";
import { useLeadCount } from "../../context/LeadCountContext";
import {
  formatDateTime,
  formatPreferred,
  LEAD_SOURCES,
  LEAD_STATUSES,
  sourceMeta,
  statusMeta,
  timeAgo,
  whatsappNumber,
  type Lead,
  type LeadStatus,
} from "../../lib/leads";

type ListResponse = {
  items: Lead[];
  total: number;
  page: number;
  pages: number;
  counts: Record<"all" | LeadStatus, number>;
};

const PAGE_SIZE = 20;

const emptyCounts = { all: 0, new: 0, contacted: 0, converted: 0, closed: 0 };

/* ---------------------------------------------------------------- */

function StatusPill({ status }: { status: LeadStatus }) {
  const meta = statusMeta[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold", meta.className)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", meta.dot)} />
      {meta.label}
    </span>
  );
}

/* ---------------------------------------------------------------- */

type DrawerProps = {
  lead: Lead;
  onClose: () => void;
  onUpdate: (id: string, patch: { status?: LeadStatus; notes?: string }) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
};

function LeadDrawer({ lead, onClose, onUpdate, onDelete }: DrawerProps) {
  const [notes, setNotes] = useState(lead.notes);
  const [savingNotes, setSavingNotes] = useState(false);
  const [busyStatus, setBusyStatus] = useState<LeadStatus | null>(null);

  useEffect(() => setNotes(lead.notes), [lead._id, lead.notes]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const setStatus = async (status: LeadStatus) => {
    if (status === lead.status) return;
    setBusyStatus(status);
    await onUpdate(lead._id, { status });
    setBusyStatus(null);
  };

  const saveNotes = async () => {
    setSavingNotes(true);
    await onUpdate(lead._id, { notes });
    setSavingNotes(false);
  };

  const details: [string, string][] = [
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Treatment", lead.treatment],
    ["Preferred visit", formatPreferred(lead.preferredDate, lead.preferredTime)],
    ["Form", sourceMeta[lead.source]?.label ?? lead.source],
    ["Received", formatDateTime(lead.createdAt)],
  ];

  const actionClass =
    "flex flex-1 items-center justify-center gap-2 rounded-xl border border-line px-3 py-2.5 text-sm font-medium text-plum transition hover:border-gold hover:bg-sand";

  return (
    <>
      <div className="animate-fade-in fixed inset-0 z-50 bg-plum-deep/30 backdrop-blur-[2px]" onClick={onClose} />
      <aside
        role="dialog"
        aria-label={`Lead: ${lead.name}`}
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl"
        style={{ animation: "slideInRight 0.3s cubic-bezier(0.22, 1, 0.36, 1) both" }}
      >
        <div className="flex items-start justify-between gap-3 border-b border-line px-6 py-5">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">Lead</p>
            <h2 className="mt-1 truncate text-xl font-semibold text-plum">{lead.name}</h2>
            <p className="mt-0.5 text-sm text-muted">{timeAgo(lead.createdAt)}</p>
          </div>
          <button onClick={onClose} className="rounded-lg p-2 text-muted hover:bg-sand" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-5">
          {/* Quick actions */}
          <div className="flex gap-2">
            <a href={`tel:${lead.phone.replace(/[^\d+]/g, "")}`} className={actionClass}>
              <Phone className="h-4 w-4 text-gold-deep" /> Call
            </a>
            <a
              href={`https://wa.me/${whatsappNumber(lead.phone)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClass}
            >
              <MessageCircle className="h-4 w-4 text-gold-deep" /> WhatsApp
            </a>
            {lead.email && (
              <a href={`mailto:${lead.email}`} className={actionClass}>
                <Mail className="h-4 w-4 text-gold-deep" /> Email
              </a>
            )}
          </div>

          {/* Status */}
          <div>
            <p className="mb-2 text-sm font-medium text-plum">Status</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {LEAD_STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  disabled={busyStatus !== null}
                  className={cn(
                    "flex items-center justify-center gap-1.5 rounded-xl border px-2 py-2 text-xs font-semibold transition",
                    lead.status === s
                      ? "border-plum bg-plum text-white"
                      : "border-line text-muted hover:border-gold hover:text-plum"
                  )}
                >
                  {busyStatus === s ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <span className={cn("h-1.5 w-1.5 rounded-full", lead.status === s ? "bg-gold-light" : statusMeta[s].dot)} />
                  )}
                  {statusMeta[s].label}
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <dl className="divide-y divide-line/70 rounded-xl border border-line/70">
            {details
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div key={label} className="flex gap-4 px-4 py-3 text-sm">
                  <dt className="w-32 shrink-0 text-muted">{label}</dt>
                  <dd className="min-w-0 font-medium break-words text-plum">{value}</dd>
                </div>
              ))}
          </dl>

          {/* Message */}
          {lead.message && (
            <div>
              <p className="mb-2 text-sm font-medium text-plum">Message</p>
              <p className="rounded-xl bg-sand px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap text-muted">
                {lead.message}
              </p>
            </div>
          )}

          {/* Notes */}
          <div>
            <label htmlFor="lead-notes" className="mb-2 block text-sm font-medium text-plum">
              Internal notes
            </label>
            <textarea
              id="lead-notes"
              rows={4}
              maxLength={2000}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Called on Monday, visiting on Friday at 11am"
              className="w-full resize-y rounded-xl border border-line px-4 py-3 text-sm text-plum outline-none placeholder:text-gray-400 focus:border-gold focus:ring-4 focus:ring-gold/15"
            />
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="text-xs text-gray-400">Only visible to admins.</p>
              <button
                onClick={saveNotes}
                disabled={savingNotes || notes === lead.notes}
                className="inline-flex items-center gap-2 rounded-lg bg-plum px-4 py-2 text-sm font-semibold text-white transition hover:bg-plum-deep disabled:opacity-40"
              >
                {savingNotes && <Loader2 className="h-4 w-4 animate-spin" />}
                Save notes
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-line px-6 py-4">
          <button
            onClick={() => {
              if (window.confirm(`Delete the lead from ${lead.name}? This can't be undone.`)) onDelete(lead._id);
            }}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" /> Delete lead
          </button>
        </div>
      </aside>
    </>
  );
}

/* ---------------------------------------------------------------- */

const csvEscape = (value: string) => `"${String(value ?? "").replace(/"/g, '""')}"`;

export default function AdminLeads() {
  const [params, setParams] = useSearchParams();
  const status = (params.get("status") ?? "") as LeadStatus | "";
  const source = params.get("source") ?? "";
  const q = params.get("q") ?? "";
  const page = Math.max(Number(params.get("page")) || 1, 1);

  const [data, setData] = useState<ListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState(q);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);
  const [toast, setToast] = useState("");
  const { refresh: refreshNewCount } = useLeadCount();
  const requestId = useRef(0);

  const updateParams = useCallback(
    (patch: Record<string, string>) => {
      setParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          for (const [key, value] of Object.entries(patch)) {
            if (value) next.set(key, value);
            else next.delete(key);
          }
          // Changing a filter goes back to the first page
          if (!("page" in patch)) next.delete("page");
          return next;
        },
        { replace: true }
      );
    },
    [setParams]
  );

  const buildQuery = (extra: Record<string, string | number>) => {
    const query = new URLSearchParams();
    if (status) query.set("status", status);
    if (source) query.set("source", source);
    if (q) query.set("q", q);
    for (const [key, value] of Object.entries(extra)) query.set(key, String(value));
    return query.toString();
  };

  const load = useCallback(() => {
    const id = ++requestId.current;
    setLoading(true);
    setError("");
    apiRequest<ListResponse>(`/leads?${buildQuery({ page, limit: PAGE_SIZE })}`, { auth: true })
      .then((res) => {
        if (id === requestId.current) setData(res);
      })
      .catch((err) => {
        if (id === requestId.current) setError(err.message);
      })
      .finally(() => {
        if (id === requestId.current) setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, source, q, page]);

  useEffect(load, [load]);

  // Debounce typing in the search box
  useEffect(() => {
    if (search === q) return;
    const t = window.setTimeout(() => updateParams({ q: search.trim() }), 300);
    return () => window.clearTimeout(t);
  }, [search, q, updateParams]);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(""), 3000);
    return () => window.clearTimeout(t);
  }, [toast]);

  const selected = data?.items.find((l) => l._id === selectedId) ?? null;

  const updateLead = async (id: string, patch: { status?: LeadStatus; notes?: string }) => {
    try {
      const { lead } = await apiRequest<{ lead: Lead }>(`/leads/${id}`, { method: "PATCH", body: patch, auth: true });
      setData((d) => (d ? { ...d, items: d.items.map((l) => (l._id === id ? lead : l)) } : d));
      if (patch.status) {
        setToast(`Marked as ${statusMeta[patch.status].label.toLowerCase()}`);
        refreshNewCount();
        // Status counts (and the current tab's contents) have changed
        apiRequest<ListResponse>(`/leads?${buildQuery({ page, limit: PAGE_SIZE })}`, { auth: true })
          .then((res) => setData((d) => (d ? { ...d, counts: res.counts, total: res.total, pages: res.pages } : d)))
          .catch(() => {});
      } else {
        setToast("Notes saved");
      }
    } catch (err) {
      setToast(err instanceof Error ? err.message : "Update failed");
    }
  };

  const deleteLead = async (id: string) => {
    try {
      await apiRequest(`/leads/${id}`, { method: "DELETE", auth: true });
      setSelectedId(null);
      setToast("Lead deleted");
      refreshNewCount();
      load();
    } catch (err) {
      setToast(err instanceof Error ? err.message : "Delete failed");
    }
  };

  const exportCsv = async () => {
    setExporting(true);
    try {
      const res = await apiRequest<ListResponse>(`/leads?${buildQuery({ page: 1, limit: 1000 })}`, { auth: true });
      const header = ["Received", "Name", "Phone", "Email", "Treatment", "Preferred visit", "Message", "Form", "Status", "Notes"];
      const rows = res.items.map((l) => [
        formatDateTime(l.createdAt),
        l.name,
        l.phone,
        l.email,
        l.treatment,
        formatPreferred(l.preferredDate, l.preferredTime),
        l.message,
        sourceMeta[l.source]?.label ?? l.source,
        statusMeta[l.status].label,
        l.notes,
      ]);
      const csv = [header, ...rows].map((row) => row.map(csvEscape).join(",")).join("\r\n");
      // BOM so Excel reads the file as UTF-8
      const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `conceive-leads-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      setToast(`Exported ${res.items.length} lead${res.items.length === 1 ? "" : "s"}`);
    } catch (err) {
      setToast(err instanceof Error ? err.message : "Export failed");
    } finally {
      setExporting(false);
    }
  };

  const counts = data?.counts ?? emptyCounts;
  const tabs: { key: LeadStatus | ""; label: string; count: number }[] = [
    { key: "", label: "All", count: counts.all },
    ...LEAD_STATUSES.map((s) => ({ key: s, label: statusMeta[s].label, count: counts[s] })),
  ];

  const from = data && data.total ? (page - 1) * PAGE_SIZE + 1 : 0;
  const to = data ? Math.min(page * PAGE_SIZE, data.total) : 0;
  const filtered = Boolean(status || source || q);

  return (
    <>
      <PageHeader crumbs={[{ label: "Leads" }]}>
        <button
          onClick={exportCsv}
          disabled={exporting || !data?.total}
          className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 font-medium text-plum transition hover:border-gold hover:bg-sand disabled:opacity-50"
        >
          {exporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4 text-gold-deep" />}
          Export CSV
        </button>
      </PageHeader>

      <div className="space-y-5 px-4 pt-4 pb-10 sm:px-6 lg:px-8">
        <div className="fade-up">
          <h1 className="font-display text-2xl font-semibold text-plum sm:text-3xl">Leads</h1>
          <p className="mt-1 text-muted">Enquiries and appointment requests sent through the website's forms.</p>
        </div>

        {/* Status tabs */}
        <div className="fade-up flex gap-2 overflow-x-auto pb-1" style={{ animationDelay: "60ms" }}>
          {tabs.map((tab) => (
            <button
              key={tab.key || "all"}
              onClick={() => updateParams({ status: tab.key })}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition",
                status === tab.key
                  ? "border-plum bg-plum text-white"
                  : "border-line bg-white text-muted hover:border-gold hover:text-plum"
              )}
            >
              {tab.label}
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs font-semibold",
                  status === tab.key ? "bg-white/15 text-gold-light" : "bg-sand text-plum"
                )}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Table card */}
        <div
          className="fade-up rounded-2xl border border-line/70 bg-white shadow-[0_1px_3px_rgba(59,41,64,0.04)]"
          style={{ animationDelay: "120ms" }}
        >
          <div className="flex flex-wrap items-center gap-3 border-b border-line/70 p-4">
            <div className="relative w-full sm:w-auto sm:max-w-xs sm:flex-1">
              <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, phone, email..."
                className="w-full rounded-xl border border-line bg-sand/40 py-2 pr-3 pl-10 text-sm text-plum outline-none placeholder:text-gray-400 focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/15"
              />
            </div>
            <select
              value={source}
              onChange={(e) => updateParams({ source: e.target.value })}
              className="rounded-xl border border-line bg-white px-3 py-2 text-sm text-plum outline-none focus:border-gold focus:ring-4 focus:ring-gold/15"
              aria-label="Filter by form"
            >
              <option value="">All forms</option>
              {LEAD_SOURCES.map((s) => (
                <option key={s} value={s}>
                  {sourceMeta[s].label}
                </option>
              ))}
            </select>
            {filtered && (
              <button
                onClick={() => {
                  setSearch("");
                  updateParams({ status: "", source: "", q: "" });
                }}
                className="text-sm font-medium text-gold-deep hover:underline"
              >
                Clear filters
              </button>
            )}
            <button
              onClick={load}
              className="ml-auto rounded-lg p-2 text-muted transition hover:bg-sand hover:text-plum"
              aria-label="Refresh"
              title="Refresh"
            >
              <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
            </button>
          </div>

          {error ? (
            <div className="flex flex-col items-center gap-3 py-14 text-center text-sm text-red-700">
              {error}
              <button onClick={load} className="font-semibold hover:underline">
                Try again
              </button>
            </div>
          ) : !data ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-7 w-7 animate-spin text-gold" />
            </div>
          ) : data.items.length === 0 ? (
            <div className="flex flex-col items-center px-6 py-16 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand text-gold-deep">
                <Inbox className="h-7 w-7" />
              </span>
              <p className="mt-4 font-medium text-plum">{filtered ? "No leads match these filters" : "No leads yet"}</p>
              <p className="mt-1 max-w-sm text-sm text-muted">
                {filtered
                  ? "Try a different status, form or search."
                  : "When visitors fill in a form on the website, their details will appear here."}
              </p>
            </div>
          ) : (
            <div className={cn("overflow-x-auto transition-opacity", loading && "opacity-60")}>
              <table className="w-full min-w-[820px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line/70 text-xs tracking-wide text-gray-400 uppercase">
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Phone</th>
                    <th className="px-4 py-3 font-semibold">Treatment</th>
                    <th className="px-4 py-3 font-semibold">Form</th>
                    <th className="px-4 py-3 font-semibold">Received</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.items.map((lead, i) => (
                    <tr
                      key={lead._id}
                      onClick={() => setSelectedId(lead._id)}
                      className="fade-up cursor-pointer border-b border-line/50 transition-colors last:border-0 hover:bg-sand/50"
                      style={{ animationDelay: `${160 + i * 30}ms` }}
                    >
                      <td className="px-4 py-3">
                        <p className="flex items-center gap-2 font-medium text-plum">
                          {lead.status === "new" && <span className="h-2 w-2 shrink-0 rounded-full bg-gold" title="New" />}
                          {lead.name}
                        </p>
                        {lead.email && <p className="text-xs text-muted">{lead.email}</p>}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <a
                          href={`tel:${lead.phone.replace(/[^\d+]/g, "")}`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-plum hover:text-gold-deep hover:underline"
                        >
                          {lead.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-muted">
                        {lead.treatment || "—"}
                        {lead.preferredDate && (
                          <p className="mt-0.5 flex items-center gap-1 text-xs text-gold-deep">
                            <CalendarClock className="h-3 w-3" />
                            {formatPreferred(lead.preferredDate, lead.preferredTime)}
                          </p>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                          <span className="h-2 w-2 rounded-full" style={{ background: sourceMeta[lead.source]?.color }} />
                          {sourceMeta[lead.source]?.label ?? lead.source}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-muted" title={formatDateTime(lead.createdAt)}>
                        {timeAgo(lead.createdAt)}
                      </td>
                      <td className="px-4 py-3">
                        <StatusPill status={lead.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {data && data.total > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line/70 px-4 py-3 text-sm text-muted">
              <span>
                Showing {from}–{to} of {data.total}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => updateParams({ page: String(page - 1) })}
                  disabled={page <= 1}
                  className="rounded-lg p-2 transition hover:bg-sand disabled:opacity-30"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="px-2 font-medium text-plum">
                  {page} / {data.pages}
                </span>
                <button
                  onClick={() => updateParams({ page: String(page + 1) })}
                  disabled={page >= data.pages}
                  className="rounded-lg p-2 transition hover:bg-sand disabled:opacity-30"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {selected && (
        <LeadDrawer lead={selected} onClose={() => setSelectedId(null)} onUpdate={updateLead} onDelete={deleteLead} />
      )}

      {toast && (
        <div
          role="status"
          className="animate-dropdown fixed right-4 bottom-6 z-[60] rounded-xl bg-plum px-4 py-3 text-sm font-medium text-white shadow-2xl sm:right-8"
        >
          {toast}
        </div>
      )}
    </>
  );
}
