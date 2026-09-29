// Lead types and display helpers shared by the admin Leads page and dashboard

export const LEAD_STATUSES = ["new", "contacted", "converted", "closed"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const LEAD_SOURCES = ["home-banner", "home-contact", "appointment", "contact-page"] as const;
export type LeadSourceKey = (typeof LEAD_SOURCES)[number];

export type Lead = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  treatment: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
  source: LeadSourceKey;
  status: LeadStatus;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

export type LeadStats = {
  total: number;
  today: number;
  last7Days: number;
  byStatus: Record<LeadStatus, number>;
  bySource: Record<LeadSourceKey, number>;
  byTreatment: { treatment: string; count: number }[];
  daily: { date: string; count: number }[];
};

export const statusMeta: Record<LeadStatus, { label: string; className: string; dot: string }> = {
  new: { label: "New", className: "bg-[#fbf1dc] text-gold-deep", dot: "bg-gold" },
  contacted: { label: "Contacted", className: "bg-plum/10 text-plum", dot: "bg-plum" },
  converted: { label: "Converted", className: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500" },
  closed: { label: "Closed", className: "bg-gray-100 text-gray-500", dot: "bg-gray-400" },
};

export const sourceMeta: Record<LeadSourceKey, { label: string; color: string }> = {
  "home-banner": { label: "Home banner form", color: "#3b2940" },
  "home-contact": { label: "Home contact form", color: "#c6a15b" },
  appointment: { label: "Appointment popup", color: "#8a6a9a" },
  "contact-page": { label: "Contact page", color: "#e0c98a" },
};

export const formatDateTime = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

// "2026-10-05" + "11:30" → "5 Oct 2026, 11:30 am"
export const formatPreferred = (date: string, time: string) => {
  if (!date) return time;
  const d = new Date(`${date}T${time || "00:00"}`);
  const day = d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  return time ? `${day}, ${d.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })}` : day;
};

export const timeAgo = (iso: string) => {
  const minutes = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} hr${hours > 1 ? "s" : ""} ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days} day${days > 1 ? "s" : ""} ago`;
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
};

// Phone number in the international form used by WhatsApp links (assumes India if no country code)
export const whatsappNumber = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10 ? `91${digits}` : digits;
};
