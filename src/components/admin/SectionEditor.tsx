import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { CheckCircle2, ChevronDown, Eye, Loader2, RefreshCw, RotateCcw, Save, XCircle } from "lucide-react";
import { apiRequest } from "../../lib/api";
import { cn } from "../../utils/cn";
import PageHeader, { type Crumb } from "./PageHeader";

type Toast = { type: "success" | "error"; message: string } | null;

type ContentResponse<T> = { data: T | null; updatedAt: string | null };

export type EditorApi<T> = {
  draft: T;
  set: <K extends keyof T>(key: K, value: T[K]) => void;
  update: (updater: (draft: T) => T) => void;
  showError: (message: string) => void;
};

type SectionEditorProps<T> = {
  contentKey: string;
  defaults: T;
  crumbs: Crumb[];
  title: string;
  description: string;
  renderPreview: (draft: T) => ReactNode;
  children: (api: EditorApi<T>) => ReactNode;
};

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value));

/**
 * Everything an editable website section needs: loading, live preview,
 * unsaved-change tracking, save bar, Ctrl+S and success/error toasts.
 * Each section page only supplies its form fields and preview.
 */
export default function SectionEditor<T extends object>({
  contentKey,
  defaults,
  crumbs,
  title,
  description,
  renderPreview,
  children,
}: SectionEditorProps<T>) {
  const [saved, setSaved] = useState<T | null>(null);
  const [draft, setDraft] = useState<T | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [loadError, setLoadError] = useState("");
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<Toast>(null);
  const [previewOpen, setPreviewOpen] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  const isDirty = !!draft && !!saved && JSON.stringify(draft) !== JSON.stringify(saved);

  const load = useCallback(() => {
    setLoadError("");
    setDraft(null);
    apiRequest<ContentResponse<T>>(`/content/${contentKey}`)
      .then(({ data, updatedAt }) => {
        const content = data ? { ...defaults, ...data } : clone(defaults);
        setSaved(content);
        setDraft(clone(content));
        setUpdatedAt(updatedAt);
      })
      .catch((err) => setLoadError(err.message));
  }, [contentKey, defaults]);

  useEffect(load, [load]);

  // Auto-hide the toast
  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(t);
  }, [toast]);

  // Warn before closing the tab with unsaved changes
  useEffect(() => {
    if (!isDirty) return;
    const onBeforeUnload = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [isDirty]);

  // Ctrl/Cmd + S saves
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        formRef.current?.requestSubmit();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    if (!draft || !isDirty || saving) return;

    setSaving(true);
    try {
      const res = await apiRequest<ContentResponse<T>>(`/content/${contentKey}`, {
        method: "PUT",
        body: draft,
        auth: true,
      });
      const content = { ...defaults, ...res.data };
      setSaved(content);
      setDraft(clone(content));
      setUpdatedAt(res.updatedAt);
      setToast({ type: "success", message: `${title} saved. The website is now updated.` });
    } catch (err) {
      setToast({ type: "error", message: err instanceof Error ? err.message : "Save failed" });
    } finally {
      setSaving(false);
    }
  };

  // Keep preview links from navigating away from the editor
  const blockPreviewLinks = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) e.preventDefault();
  };

  if (loadError) {
    return (
      <>
        <PageHeader crumbs={crumbs} />
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md rounded-2xl bg-white p-8 text-center ring-1 ring-line/70">
            <XCircle className="mx-auto h-10 w-10 text-red-500" />
            <p className="mt-3 text-gray-700">{loadError}</p>
            <button
              onClick={load}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-plum px-4 py-2 text-sm font-semibold text-white hover:bg-plum-deep"
            >
              <RefreshCw className="h-4 w-4" /> Try again
            </button>
          </div>
        </div>
      </>
    );
  }

  if (!draft) {
    return (
      <>
        <PageHeader crumbs={crumbs} />
        <div className="flex justify-center py-24">
          <Loader2 className="h-8 w-8 animate-spin text-plum" />
        </div>
      </>
    );
  }

  const api: EditorApi<T> = {
    draft,
    set: (key, value) => setDraft((d) => (d ? { ...d, [key]: value } : d)),
    update: (updater) => setDraft((d) => (d ? updater(d) : d)),
    showError: (message) => setToast({ type: "error", message }),
  };

  return (
    <>
      <PageHeader crumbs={crumbs}>
        <span className="text-sm text-gray-500">
          {updatedAt
            ? `Last saved ${new Date(updatedAt).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" })}`
            : "Original content — not edited yet"}
        </span>
      </PageHeader>

      <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="fade-up mb-6">
          <h1 className="font-display text-2xl font-semibold text-plum sm:text-3xl">{title}</h1>
          <p className="mt-1 text-gray-500">{description}</p>
        </div>

        {/* Live preview */}
        <section
          className="fade-up mb-6 overflow-hidden rounded-2xl border border-line/70 bg-white"
          style={{ animationDelay: "80ms" }}
        >
          <button
            type="button"
            onClick={() => setPreviewOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:px-6"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sand text-gold-deep">
                <Eye className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-lg font-semibold text-plum">Live preview</span>
                <span className="block text-sm text-gray-500">Updates as you type</span>
              </span>
            </span>
            <ChevronDown
              className={cn("h-5 w-5 text-gray-400 transition-transform duration-300", previewOpen && "rotate-180")}
            />
          </button>
          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-500 ease-out",
              previewOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <div className="border-t border-line/70" onClickCapture={blockPreviewLinks}>
                {renderPreview(draft)}
              </div>
            </div>
          </div>
        </section>

        {/* Previews may contain their own <form>, so they must stay outside this one */}
        <form ref={formRef} onSubmit={handleSave}>
          {children(api)}

          {/* Save bar */}
          <div className="sticky bottom-4 z-20 mt-8">
            <div
              className={cn(
                "flex flex-wrap items-center justify-between gap-3 rounded-2xl border bg-white/95 px-4 py-3 shadow-xl backdrop-blur transition-colors duration-300 sm:px-5",
                isDirty ? "border-plum/30 shadow-plum/15" : "border-line/70 shadow-gray-200/60"
              )}
            >
              <p className="flex items-center gap-2 text-sm font-medium">
                {isDirty ? (
                  <>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-plum opacity-60" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-plum" />
                    </span>
                    <span className="text-gray-800">You have unsaved changes</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-gold-deep" />
                    <span className="text-gray-500">All changes saved</span>
                  </>
                )}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Replace everything with the original website content? You can still discard before saving."
                      )
                    ) {
                      setDraft(clone(defaults));
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span className="hidden sm:inline">Original content</span>
                </button>
                <button
                  type="button"
                  disabled={!isDirty || saving}
                  onClick={() => saved && setDraft(clone(saved))}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-40"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  disabled={!isDirty || saving}
                  className="inline-flex items-center gap-2 rounded-lg bg-plum px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-plum/25 transition hover:bg-plum-deep disabled:opacity-40 disabled:shadow-none"
                >
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  {saving ? "Saving..." : "Save changes"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          className={cn(
            "animate-dropdown fixed top-24 right-4 z-50 flex max-w-sm items-start gap-3 rounded-xl bg-white px-4 py-3 text-sm shadow-2xl ring-1 sm:right-8",
            toast.type === "success" ? "ring-gold-deep/20" : "ring-red-200"
          )}
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
          ) : (
            <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
          )}
          <p className="text-gray-700">{toast.message}</p>
        </div>
      )}
    </>
  );
}
