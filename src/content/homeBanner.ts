export const HOME_BANNER_KEY = "home.banner";

export type BannerButton = {
  label: string;
  link: string;
};

export type BannerStat = {
  value: string;
  label: string; // "\n" becomes a line break
};

export type HomeBannerContent = {
  backgroundImage: string;
  eyebrow: string;
  title: string; // "\n" becomes a line break
  titleHighlight: string; // italic line shown after the title
  description: string;
  primaryButton: BannerButton;
  secondaryButton: BannerButton; // hidden when the label is empty
  tagline: string;
  stats: BannerStat[];
  enquiry: {
    label: string;
    title: string;
    subtitle: string;
    treatments: string[];
    submitText: string;
    note: string;
  };
};

// Shown until an admin saves the banner, and whenever the API can't be reached
export const homeBannerDefaults: HomeBannerContent = {
  backgroundImage:
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=2200&q=90",
  eyebrow: "CONCEIVE IVF FERTILITY CENTRE",
  title: "Your journey\nto parenthood",
  titleHighlight: "starts here.",
  description:
    "Fifteen years with Dr. Neha Gupta. IVF, ICSI and IUI, a quiet, wonderfully bench, and a free first visit — opposite Town Park, Dabwali Road, Sirsa.",
  primaryButton: { label: "Book a free first visit", link: "#contact" },
  secondaryButton: { label: "", link: "" },
  tagline: "Creating Little Miracles.",
  stats: [
    { value: "15+", label: "YEARS OF CARE" },
    { value: "Free", label: "FIRST\nCONSULTATION" },
    { value: "7 days", label: "10:00 – 18:00" },
  ],
  enquiry: {
    label: "GET IN TOUCH",
    title: "Book a Consultation",
    subtitle: "Take the first step towards your parenthood journey.",
    treatments: [
      "IVF Treatment",
      "ICSI Treatment",
      "IUI Treatment",
      "Fertility Consultation",
      "Other",
    ],
    submitText: "Request a Consultation",
    note: "Your information is safe and confidential.",
  },
};
