import { House, Inbox, Info, LayoutDashboard, type LucideIcon } from "lucide-react";

export type AdminSubNavItem = {
  label: string;
  path: string;
  description: string;
  contentKey: string; // matches the backend content registry key
};

export type AdminNavItem = {
  label: string;
  path: string;
  icon: LucideIcon;
  children?: AdminSubNavItem[];
  showNewLeads?: boolean; // show the count of leads waiting for follow-up
};

// Editable sections of the website's home page — add new ones here
export const homeSections: AdminSubNavItem[] = [
  {
    label: "Banner",
    path: "/admin/home/banner",
    description: "Hero image, headline, buttons, highlights and the consultation form.",
    contentKey: "home.banner",
  },
  {
    label: "About Us",
    path: "/admin/home/about",
    description: "Photos, experience badge, introduction text and button.",
    contentKey: "home.about",
  },
  {
    label: "Treatments",
    path: "/admin/home/treatments",
    description: "The \"Your Journey to Parenthood\" grid of treatment cards with images and links.",
    contentKey: "home.treatments",
  },
  {
    label: "Welcome",
    path: "/admin/home/welcome",
    description: "The \"Welcome a little bundle of joy\" block with a photo, text and button.",
    contentKey: "home.welcome",
  },
  {
    label: "Why Choose Us",
    path: "/admin/home/why-us",
    description: "Heading, description and the numbered reason cards.",
    contentKey: "home.whyUs",
  },
  {
    label: "Video",
    path: "/admin/home/video",
    description: "Video link, cover image and the text around it.",
    contentKey: "home.video",
  },
  {
    label: "Process Steps",
    path: "/admin/home/process",
    description: "The numbered steps from consultation to your miracle.",
    contentKey: "home.process",
  },
  {
    label: "Testimonials",
    path: "/admin/home/testimonials",
    description: "Patient stories in the rotating slider, plus the photo beside it.",
    contentKey: "home.testimonials",
  },
  {
    label: "FAQ",
    path: "/admin/home/faq",
    description: "Frequently asked questions and answers.",
    contentKey: "home.faq",
  },
  {
    label: "Contact",
    path: "/admin/home/contact",
    description: "Address, phone, email, hours and the consultation request form.",
    contentKey: "home.contact",
  },
];

// Editable sections of the About page — add new ones here
export const aboutSections: AdminSubNavItem[] = [
  {
    label: "Page Banner",
    path: "/admin/about/hero",
    description: "Background image, title and intro text at the top of the page.",
    contentKey: "about.hero",
  },
  {
    label: "Doctor Profile",
    path: "/admin/about/doctor",
    description: "Photo, experience badge, introduction, key strengths and button.",
    contentKey: "about.doctor",
  },
  {
    label: "Qualifications",
    path: "/admin/about/qualifications",
    description: "Degrees, fellowships and training shown as numbered cards.",
    contentKey: "about.qualifications",
  },
  {
    label: "Call to Action",
    path: "/admin/about/cta",
    description: "Closing message with working hours and a contact button.",
    contentKey: "about.cta",
  },
];

export const adminNav: AdminNavItem[] = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Leads", path: "/admin/leads", icon: Inbox, showNewLeads: true },
  { label: "Home", path: "/admin/home", icon: House, children: homeSections },
  { label: "About", path: "/admin/about", icon: Info, children: aboutSections },
];

// Where each editable section is managed in the admin panel
export const contentEditorPaths: Record<string, string> = Object.fromEntries(
  adminNav.flatMap((item) => item.children ?? []).map((s) => [s.contentKey, s.path])
);

export const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
