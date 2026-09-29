import { useRef, useState, type ReactNode } from "react";
import { ArrowDown, ArrowUp, ImagePlus, Link2, Loader2, Plus, Trash2, type LucideIcon } from "lucide-react";
import { apiRequest, resolveMediaUrl } from "../../lib/api";
import { cn } from "../../utils/cn";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-plum transition outline-none placeholder:text-gray-400 focus:border-plum focus:ring-2 focus:ring-plum/20";

/* ---------------------------------------------------------------- */

type EditorCardProps = {
  title: string;
  description?: string;
  icon: LucideIcon;
  children: ReactNode;
  delay?: number;
};

export function EditorCard({ title, description, icon: Icon, children, delay = 0 }: EditorCardProps) {
  return (
    <section
      className="fade-up rounded-2xl border border-line/70 bg-white p-5 sm:p-6"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-5 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sand text-gold-deep">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-lg font-semibold text-plum">{title}</h2>
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder?: string;
  hint?: string;
  required?: boolean;
  rows?: number; // renders a textarea when set
};

export function TextField({ label, value, onChange, maxLength, placeholder, hint, required, rows }: TextFieldProps) {
  const nearLimit = value.length > maxLength * 0.9;

  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline justify-between gap-3 text-sm font-medium text-gray-700">
        <span>
          {label}
          {required && <span className="text-plum"> *</span>}
        </span>
        <span className={cn("text-xs font-normal tabular-nums", nearLimit ? "text-plum" : "text-gray-400")}>
          {value.length}/{maxLength}
        </span>
      </span>
      {rows ? (
        <textarea
          className={cn(inputClass, "resize-y")}
          rows={rows}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          required={required}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className={inputClass}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          required={required}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {hint && <span className="mt-1 block text-xs text-gray-500">{hint}</span>}
    </label>
  );
}

/* ---------------------------------------------------------------- */

const MAX_IMAGE_MB = 5;
const ACCEPTED_IMAGES = "image/jpeg,image/png,image/webp,image/avif,image/gif";

// Uploads a picked file to the media store and reports its URL
function useImageUpload(onChange: (value: string) => void, onError: (message: string) => void) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) return onError("Please choose an image file.");
    if (file.size > MAX_IMAGE_MB * 1024 * 1024) return onError(`Image must be ${MAX_IMAGE_MB} MB or smaller.`);

    const body = new FormData();
    body.append("file", file);
    setUploading(true);
    try {
      const { url } = await apiRequest<{ url: string }>("/media", { method: "POST", body, auth: true });
      onChange(url);
    } catch (err) {
      onError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const fileInput = (
    <input
      ref={fileRef}
      type="file"
      accept={ACCEPTED_IMAGES}
      className="hidden"
      onChange={(e) => handleFile(e.target.files?.[0])}
    />
  );

  return { uploading, fileInput, pick: () => fileRef.current?.click() };
}

// Uploaded ("/api/media/…") and built-in ("asset:…") images aren't shown as editable URLs
const urlFieldState = (value: string) => {
  if (value.startsWith("/api/media/")) return { text: "", placeholder: "Using your uploaded image" };
  if (value.startsWith("asset:")) return { text: "", placeholder: "Using the website's built-in image" };
  return { text: value, placeholder: "https://..." };
};

type ImageFieldProps = {
  value: string;
  onChange: (value: string) => void;
  onError: (message: string) => void;
  alt?: string;
  aspectClass?: string; // preview shape, e.g. "aspect-[4/5]" for portraits
  hint?: string;
  fallbackSrc?: string; // image the website shows when nothing is chosen
};

export function ImageField({
  value,
  onChange,
  onError,
  alt = "Selected image",
  aspectClass = "aspect-[16/7]",
  hint = "A wide image (at least 1920px) looks best.",
  fallbackSrc,
}: ImageFieldProps) {
  const { uploading, fileInput, pick } = useImageUpload(onChange, onError);
  const url = urlFieldState(value);

  return (
    <div className="space-y-4">
      <div className={cn("relative overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200", aspectClass)}>
        {value || fallbackSrc ? (
          <img
            key={value || "fallback"}
            src={value ? resolveMediaUrl(value) : fallbackSrc}
            alt={alt}
            className="animate-fade-in h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">No image selected</div>
        )}
        {!value && fallbackSrc && (
          <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow">
            Default photo
          </span>
        )}
        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <Loader2 className="h-8 w-8 animate-spin text-plum" />
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {fileInput}
        <button
          type="button"
          disabled={uploading}
          onClick={pick}
          className="inline-flex items-center gap-2 rounded-lg bg-plum px-4 py-2 text-sm font-semibold text-white transition hover:bg-plum-deep disabled:opacity-60"
        >
          <ImagePlus className="h-4 w-4" /> {value || fallbackSrc ? "Replace image" : "Upload image"}
        </button>
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" /> {fallbackSrc ? "Use default photo" : "Remove"}
          </button>
        )}
      </div>

      <label className="block">
        <span className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700">
          <Link2 className="h-4 w-4" /> Or use an image URL
        </span>
        <input
          className={inputClass}
          value={url.text}
          placeholder={url.placeholder}
          maxLength={1000}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="mt-1 block text-xs text-gray-500">
          JPG, PNG, WEBP, AVIF or GIF up to {MAX_IMAGE_MB} MB. {hint}
        </span>
      </label>
    </div>
  );
}

// Small thumbnail + upload button, for images inside list items
export function ImageThumbField({
  value,
  onChange,
  onError,
  alt = "Selected image",
}: Pick<ImageFieldProps, "value" | "onChange" | "onError" | "alt">) {
  const { uploading, fileInput, pick } = useImageUpload(onChange, onError);

  return (
    <div className="flex items-center gap-3">
      {fileInput}
      <button
        type="button"
        onClick={pick}
        disabled={uploading}
        title={value ? "Replace image" : "Upload image"}
        className="group relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-200 transition hover:ring-plum"
      >
        {value ? (
          <img key={value} src={resolveMediaUrl(value)} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <ImagePlus className="mx-auto h-5 w-5 text-gray-400" />
        )}
        <span className="absolute inset-0 flex items-center justify-center bg-gray-900/40 text-white opacity-0 transition group-hover:opacity-100">
          {uploading ? <Loader2 className="h-5 w-5 animate-spin" /> : <ImagePlus className="h-5 w-5" />}
        </span>
        {uploading && (
          <span className="absolute inset-0 flex items-center justify-center bg-white/70">
            <Loader2 className="h-5 w-5 animate-spin text-plum" />
          </span>
        )}
      </button>
      <div className="flex flex-col items-start gap-1 text-xs">
        <button type="button" onClick={pick} className="font-semibold text-plum hover:underline">
          {value ? "Replace image" : "Upload image"}
        </button>
        {value && (
          <button type="button" onClick={() => onChange("")} className="text-gray-500 hover:text-red-600">
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */

type ListEditorProps<T> = {
  items: T[];
  onChange: (items: T[]) => void;
  max: number;
  addLabel: string;
  createItem: () => T;
  renderItem: (item: T, update: (item: T) => void, index: number) => ReactNode;
  compact?: boolean; // single-line items: controls sit in a row beside the item
};

export function ListEditor<T>({ items, onChange, max, addLabel, createItem, renderItem, compact }: ListEditorProps<T>) {
  const move = (from: number, to: number) => {
    const next = [...items];
    [next[from], next[to]] = [next[to], next[from]];
    onChange(next);
  };

  const iconButton =
    "rounded-md p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 disabled:pointer-events-none disabled:opacity-30";

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "flex gap-2 rounded-xl border border-line/70 bg-gray-50/60",
            compact ? "items-center p-2" : "p-3"
          )}
        >
          <div className="min-w-0 flex-1">
            {renderItem(item, (updated) => onChange(items.map((it, j) => (j === i ? updated : it))), i)}
          </div>
          <div className={cn("flex shrink-0 items-center gap-0.5", !compact && "flex-col")}>
            <button type="button" className={iconButton} disabled={i === 0} onClick={() => move(i, i - 1)} aria-label="Move up">
              <ArrowUp className="h-4 w-4" />
            </button>
            <button
              type="button"
              className={iconButton}
              disabled={i === items.length - 1}
              onClick={() => move(i, i + 1)}
              aria-label="Move down"
            >
              <ArrowDown className="h-4 w-4" />
            </button>
            <button
              type="button"
              className={cn(iconButton, "hover:bg-red-50 hover:text-red-600")}
              onClick={() => onChange(items.filter((_, j) => j !== i))}
              aria-label="Remove"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        disabled={items.length >= max}
        onClick={() => onChange([...items, createItem()])}
        className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 py-2.5 text-sm font-semibold text-gray-500 transition hover:border-plum/40 hover:bg-sand/40 hover:text-plum disabled:pointer-events-none disabled:opacity-50"
      >
        <Plus className="h-4 w-4" />
        {items.length >= max ? `Maximum of ${max} reached` : addLabel}
      </button>
    </div>
  );
}

/* ---------------------------------------------------------------- */

type ButtonFieldsProps = {
  value: { label: string; link: string };
  onChange: (value: { label: string; link: string }) => void;
  labelPlaceholder?: string;
};

export function ButtonFields({ value, onChange, labelPlaceholder = "Leave empty to hide" }: ButtonFieldsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <TextField
        label="Button text"
        value={value.label}
        maxLength={40}
        placeholder={labelPlaceholder}
        onChange={(label) => onChange({ ...value, label })}
      />
      <TextField
        label="Button link"
        value={value.link}
        maxLength={500}
        placeholder="#contact, /about or https://..."
        onChange={(link) => onChange({ ...value, link })}
      />
    </div>
  );
}

/* ---------------------------------------------------------------- */

type ListInputProps = {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder?: string;
  rows?: number;
};

// Single field inside a ListEditor row
export function ListInput({ value, onChange, maxLength, placeholder, rows }: ListInputProps) {
  const className =
    "w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-plum outline-none placeholder:text-gray-400 focus:border-plum focus:ring-2 focus:ring-plum/20";
  return rows ? (
    <textarea
      className={cn(className, "resize-y")}
      rows={rows}
      value={value}
      maxLength={maxLength}
      placeholder={placeholder}
      required
      onChange={(e) => onChange(e.target.value)}
    />
  ) : (
    <input
      className={className}
      value={value}
      maxLength={maxLength}
      placeholder={placeholder}
      required
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
