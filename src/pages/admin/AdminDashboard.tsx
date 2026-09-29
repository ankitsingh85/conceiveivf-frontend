import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Clock,
  Inbox,
  PencilLine,
  RefreshCw,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { apiRequest } from "../../lib/api";
import { cn } from "../../utils/cn";
import PageHeader from "../../components/admin/PageHeader";
import { adminNav, contentEditorPaths, getInitials } from "../../components/admin/adminNav";
import {
  LEAD_SOURCES,
  sourceMeta,
  statusMeta,
  timeAgo,
  type Lead,
  type LeadStats,
} from "../../lib/leads";

type ContentSection = {
  key: string;
  page: string;
  section: string;
  updatedAt: string | null;
  updatedBy: string | null;
};

type DashboardData = {
  stats: LeadStats;
  recentLeads: Lead[];
  sections: ContentSection[];
};

const cardClass = "fade-up rounded-2xl border border-line/70 bg-white shadow-[0_1px_3px_rgba(59,41,64,0.04)]";

const CardTitle = ({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) => (
  <div className="flex flex-wrap items-start justify-between gap-3">
    <div>
      <p className="text-sm font-medium text-muted">{eyebrow}</p>
      <h2 className="text-lg font-semibold text-plum">{title}</h2>
    </div>
    {children}
  </div>
);

/* ---------------------------------------------------------------- */

type StatCardProps = {
  label: string;
  value: string;
  note: string;
  noteClass?: string;
  icon: LucideIcon;
  delay: number;
  to?: string;
};

function StatCard({ label, value, note, noteClass = "text-muted", icon: Icon, delay, to }: StatCardProps) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-muted">{label}</p>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sand text-gold-deep transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <p className="mt-1 text-3xl font-bold tracking-tight text-plum">{value}</p>
      <p className={cn("mt-2 truncate text-xs font-medium", noteClass)}>{note}</p>
    </>
  );
  const className = cn(
    cardClass,
    "group block p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-plum/5"
  );
  return to ? (
    <Link to={to} className={className} style={{ animationDelay: `${delay}ms` }}>
      {body}
    </Link>
  ) : (
    <div className={className} style={{ animationDelay: `${delay}ms` }}>
      {body}
    </div>
  );
}

/* ---------------------------------------------------------------- */

// Leads received per day, last 7 or 30 days
function LeadsChart({ daily }: { daily: LeadStats["daily"] }) {
  const [range, setRange] = useState<7 | 30>(7);
  const days = daily.slice(-range);
  const total = days.reduce((sum, d) => sum + d.count, 0);

  // Round the scale up to a multiple of 3 so the gridlines land on whole numbers
  const max = Math.max(3, Math.ceil(Math.max(...days.map((d) => d.count)) / 3) * 3);
  const ticks = [max, (max * 2) / 3, max / 3, 0];

  const label = (date: string, i: number) => {
    const d = new Date(`${date}T00:00`);
    if (range === 7) return d.toLocaleDateString("en-IN", { weekday: "short" }).toUpperCase();
    // 30 days: label every 5th day and today
    return i % 5 === 4 || i === days.length - 1 ? String(d.getDate()) : "";
  };

  return (
    <div className={cn(cardClass, "p-5 sm:p-6 lg:col-span-8")} style={{ animationDelay: "320ms" }}>
      <CardTitle eyebrow="Statistics" title="Leads received">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">
            <span className="font-semibold text-plum">{total}</span> in {range} days
          </span>
          <div className="flex rounded-lg bg-sand p-1 text-xs font-semibold">
            {([7, 30] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={cn(
                  "rounded-md px-2.5 py-1 transition",
                  range === r ? "bg-plum text-gold-light shadow" : "text-muted hover:text-plum"
                )}
              >
                {r === 7 ? "7D" : "30D"}
              </button>
            ))}
          </div>
        </div>
      </CardTitle>

      <div className="mt-6 flex gap-3">
        {/* Y axis */}
        <div className="flex h-60 flex-col justify-between pb-7 text-right text-[11px] text-gray-400">
          {ticks.map((t, i) => (
            <span key={i} className="-translate-y-1/2 leading-none">
              {t}
            </span>
          ))}
        </div>

        {/* Bars */}
        <div className={cn("relative flex h-60 flex-1 items-end", range === 7 ? "gap-2 sm:gap-3" : "gap-[3px] sm:gap-1.5")}>
          <div className="pointer-events-none absolute inset-x-0 top-0 bottom-7 flex flex-col justify-between">
            {ticks.map((_, i) => (
              <span key={i} className="border-t border-dashed border-line" />
            ))}
          </div>

          {days.map((day, i) => {
            const isToday = i === days.length - 1;
            const pretty = new Date(`${day.date}T00:00`).toLocaleDateString("en-IN", {
              weekday: "short",
              day: "numeric",
              month: "short",
            });
            return (
              <div key={`${range}-${day.date}`} className="group relative flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div
                  className={cn(
                    "relative flex w-full flex-1 items-end rounded-xl bg-sand/70",
                    range === 30 && "rounded-md"
                  )}
                >
                  {day.count > 0 && (
                    <div
                      className={cn(
                        "animate-grow-y relative w-full transition-[filter] group-hover:brightness-110",
                        range === 7 ? "rounded-xl" : "rounded-md",
                        isToday ? "bg-gradient-to-t from-plum-deep to-plum" : "bg-gradient-to-t from-gold to-gold-light"
                      )}
                      style={{ height: `${(day.count / max) * 100}%`, animationDelay: `${380 + i * (range === 7 ? 70 : 18)}ms` }}
                    >
                      {range === 7 && (
                        <span
                          className={cn(
                            "absolute inset-x-0 top-2 text-center text-xs font-bold",
                            isToday ? "text-gold-light" : "text-plum"
                          )}
                        >
                          {day.count}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Tooltip */}
                  <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-lg bg-plum px-2.5 py-1.5 text-center text-[11px] whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    <span className="block font-semibold text-gold-light">
                      {day.count} lead{day.count === 1 ? "" : "s"}
                    </span>
                    {pretty}
                  </span>
                </div>
                <span className={cn("h-3 text-[11px] font-semibold", isToday ? "text-plum" : "text-gray-400")}>
                  {label(day.date, i)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */

// Ring split by which form each lead came from
function SourcesCard({ bySource, total }: { bySource: LeadStats["bySource"]; total: number }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setShown(true), 400);
    return () => window.clearTimeout(t);
  }, []);

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  const segments = LEAD_SOURCES.map((key) => {
    const fraction = total ? bySource[key] / total : 0;
    const segment = { key, fraction, offset };
    offset += fraction;
    return segment;
  });

  return (
    <div className={cn(cardClass, "p-5 sm:p-6 lg:col-span-4")} style={{ animationDelay: "400ms" }}>
      <CardTitle eyebrow="Lead sources" title="Where leads come from" />

      <div className="relative mx-auto mt-5 h-40 w-40">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="var(--color-sand)" strokeWidth="14" />
          {segments
            .filter((s) => s.fraction > 0)
            .map((s) => (
              <circle
                key={s.key}
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke={sourceMeta[s.key].color}
                strokeWidth="14"
                strokeDasharray={`${shown ? s.fraction * circumference : 0} ${circumference}`}
                strokeDashoffset={-s.offset * circumference}
                className="transition-[stroke-dasharray] duration-1000 ease-out motion-reduce:transition-none"
              />
            ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-plum">{total}</span>
          <span className="text-xs text-muted">total leads</span>
        </div>
      </div>

      <ul className="mt-5 space-y-2.5">
        {LEAD_SOURCES.map((key) => (
          <li key={key} className="flex items-center gap-3 text-sm">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: sourceMeta[key].color }} />
            <span className="flex-1 text-muted">{sourceMeta[key].label}</span>
            <span className="font-semibold text-plum">{bySource[key]}</span>
            <span className="w-10 text-right text-xs text-gray-400">
              {total ? Math.round((bySource[key] / total) * 100) : 0}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------------------------------------------------------- */

function RecentLeads({ leads }: { leads: Lead[] }) {
  return (
    <div className={cn(cardClass, "p-5 sm:p-6 lg:col-span-7")} style={{ animationDelay: "480ms" }}>
      <CardTitle eyebrow="Recent leads" title="Latest enquiries">
        <Link
          to="/admin/leads"
          className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-semibold text-gold-deep transition hover:bg-sand"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </CardTitle>

      {leads.length === 0 ? (
        <div className="mt-6 flex flex-col items-center rounded-xl border border-dashed border-line py-10 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-gold-deep">
            <Inbox className="h-6 w-6" />
          </span>
          <p className="mt-3 font-medium text-plum">No leads yet</p>
          <p className="mt-1 max-w-xs text-sm text-muted">Enquiries from the website's forms will appear here.</p>
        </div>
      ) : (
        <ul className="mt-4 divide-y divide-line/60">
          {leads.map((lead, i) => (
            <li key={lead._id} className="fade-up" style={{ animationDelay: `${540 + i * 60}ms` }}>
              <Link
                to={`/admin/leads?q=${encodeURIComponent(lead.phone)}`}
                className="-mx-2 flex items-center gap-3 rounded-xl px-2 py-3 transition hover:bg-sand/60"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand text-xs font-bold text-plum">
                  {getInitials(lead.name)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-plum">{lead.name}</p>
                  <p className="truncate text-xs text-muted">
                    {lead.treatment || "General enquiry"} · {sourceMeta[lead.source]?.label}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-semibold", statusMeta[lead.status].className)}>
                    {statusMeta[lead.status].label}
                  </span>
                  <p className="mt-1 text-[11px] text-gray-400">{timeAgo(lead.createdAt)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */

function TopTreatments({ items }: { items: LeadStats["byTreatment"] }) {
  const max = Math.max(1, ...items.map((t) => t.count));
  return (
    <div className={cn(cardClass, "p-5 sm:p-6 lg:col-span-5")} style={{ animationDelay: "540ms" }}>
      <CardTitle eyebrow="Interest" title="Most requested treatments" />
      {items.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-line py-10 text-center text-sm text-muted">
          No treatment requests yet.
        </p>
      ) : (
        <ul className="mt-5 space-y-4">
          {items.map((t, i) => (
            <li key={t.treatment}>
              <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
                <span className="truncate font-medium text-plum">{t.treatment}</span>
                <span className="text-muted">{t.count}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-sand">
                <div
                  className={cn(
                    "animate-grow-x h-full rounded-full",
                    i === 0 ? "bg-gradient-to-r from-plum to-plum-deep" : "bg-gradient-to-r from-gold-light to-gold"
                  )}
                  style={{ width: `${(t.count / max) * 100}%`, animationDelay: `${600 + i * 90}ms` }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */

// How much of the website's content has been customised
function ContentCard({ sections }: { sections: ContentSection[] }) {
  const edited = sections.filter((s) => s.updatedAt);
  const pct = sections.length ? Math.round((edited.length / sections.length) * 100) : 0;
  const recent = [...edited]
    .sort((a, b) => new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime())
    .slice(0, 4);

  const pages = adminNav
    .filter((item) => item.children)
    .map((item) => {
      const keys = new Set(item.children!.map((c) => c.contentKey));
      const pageSections = sections.filter((s) => keys.has(s.key));
      return {
        label: item.label,
        path: item.path,
        total: pageSections.length,
        edited: pageSections.filter((s) => s.updatedAt).length,
      };
    });

  return (
    <div className={cn(cardClass, "p-5 sm:p-6")} style={{ animationDelay: "600ms" }}>
      <CardTitle eyebrow="Website content" title="Page sections">
        <span className="rounded-xl bg-plum px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-gold-light">
          Customised: {pct}%
        </span>
      </CardTitle>

      <div className="mt-5 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {pages.map((page, i) => (
            <Link key={page.path} to={page.path} className="group block">
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-plum group-hover:underline">{page.label} page</span>
                <span className="text-muted">
                  {page.edited}/{page.total} edited
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-sand">
                {page.edited > 0 && (
                  <div
                    className="animate-grow-x h-full rounded-full bg-gradient-to-r from-gold-light to-gold"
                    style={{ width: `${(page.edited / page.total) * 100}%`, animationDelay: `${660 + i * 120}ms` }}
                  />
                )}
              </div>
            </Link>
          ))}
          <p className="text-xs text-muted">Sections not edited yet show the website's original content.</p>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">Recently updated</p>
          {recent.length === 0 ? (
            <Link
              to="/admin/home/banner"
              className="flex items-center gap-3 rounded-xl border border-dashed border-line px-4 py-4 text-sm text-muted transition hover:border-gold hover:text-plum"
            >
              <PencilLine className="h-4 w-4 text-gold-deep" /> Nothing edited yet — start with the Home banner
            </Link>
          ) : (
            <ul className="divide-y divide-line/60">
              {recent.map((s) => (
                <li key={s.key}>
                  <Link
                    to={contentEditorPaths[s.key] ?? "/admin/dashboard"}
                    className="-mx-2 flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 text-sm transition hover:bg-sand/60"
                  >
                    <span className="min-w-0">
                      <span className="font-medium text-plum">{s.section}</span>
                      <span className="text-muted"> · {s.page}</span>
                    </span>
                    <span className="shrink-0 text-xs text-gray-400">
                      {timeAgo(s.updatedAt!)}
                      {s.updatedBy ? ` by ${s.updatedBy.split(" ")[0]}` : ""}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */

export default function AdminDashboard() {
  const { admin } = useAuth();
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState("");

  const load = useCallback(() => {
    setError("");
    setData(null);
    Promise.all([
      apiRequest<LeadStats>("/leads/stats", { auth: true }),
      apiRequest<{ items: Lead[] }>("/leads?limit=5", { auth: true }),
      apiRequest<{ sections: ContentSection[] }>("/content", { auth: true }),
    ])
      .then(([stats, recent, content]) =>
        setData({ stats, recentLeads: recent.items, sections: content.sections })
      )
      .catch((err) => setError(err.message));
  }, []);

  useEffect(load, [load]);

  const stats = data?.stats;
  const converted = stats?.byStatus.converted ?? 0;
  const conversion = stats?.total ? Math.round((converted / stats.total) * 100) : 0;

  return (
    <>
      <PageHeader crumbs={[{ label: "Dashboard" }]}>
        <span className="flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 font-medium text-plum">
          <CalendarDays className="h-4 w-4 text-gold-deep" />
          {new Date().toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}
        </span>
      </PageHeader>

      <div className="space-y-6 px-4 pt-4 pb-10 sm:px-6 lg:px-8">
        <div className="fade-up">
          <h1 className="font-display text-2xl font-semibold text-plum sm:text-3xl">Dashboard Overview</h1>
          <p className="mt-1 text-muted">
            Welcome back, {admin?.name.split(" ")[0]}. Here's what's happening with your website.
          </p>
        </div>

        {error && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-100">
            {error}
            <button onClick={load} className="inline-flex items-center gap-1.5 font-semibold hover:underline">
              <RefreshCw className="h-4 w-4" /> Retry
            </button>
          </div>
        )}

        {!data && !error && (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-[132px] animate-pulse rounded-2xl bg-white ring-1 ring-line/70" />
            ))}
          </div>
        )}

        {data && stats && (
          <>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                label="Total Leads"
                value={String(stats.total)}
                note={`${stats.last7Days} in the last 7 days`}
                icon={UsersRound}
                delay={0}
                to="/admin/leads"
              />
              <StatCard
                label="New Leads"
                value={String(stats.byStatus.new)}
                note={stats.byStatus.new ? "Waiting for follow-up" : "All caught up"}
                noteClass={stats.byStatus.new ? "text-gold-deep" : "text-emerald-600"}
                icon={Sparkles}
                delay={80}
                to="/admin/leads?status=new"
              />
              <StatCard
                label="Leads Today"
                value={String(stats.today)}
                note={stats.today ? "Enquiries received today" : "No enquiries yet today"}
                icon={Clock}
                delay={160}
              />
              <StatCard
                label="Converted"
                value={String(converted)}
                note={`${conversion}% conversion rate`}
                noteClass="text-emerald-600"
                icon={BadgeCheck}
                delay={240}
                to="/admin/leads?status=converted"
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
              <LeadsChart daily={stats.daily} />
              <SourcesCard bySource={stats.bySource} total={stats.total} />
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
              <RecentLeads leads={data.recentLeads} />
              <TopTreatments items={stats.byTreatment} />
            </div>

            <ContentCard sections={data.sections} />
          </>
        )}
      </div>
    </>
  );
}
