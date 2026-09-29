/*
 * Editable sections of the About page. Each default is the page's original
 * content and is shown until an admin saves the section, or whenever the
 * API can't be reached.
 */
import type { BannerButton } from "./homeBanner";

/* ---------------- Page banner ---------------- */

export const ABOUT_HERO_KEY = "about.hero";

export type AboutHeroContent = {
  backgroundImage: string;
  label: string;
  title: string;
  titleHighlight: string; // gold line under the title
  description: string;
};

export const aboutHeroDefaults: AboutHeroContent = {
  backgroundImage:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
  label: "Conceive IVF Fertility Centre",
  title: "Compassionate care,",
  titleHighlight: "expertise & hope",
  description:
    "Meet the specialist behind Conceive IVF & Fertility Centre and discover a patient-centered approach to reproductive medicine.",
};

/* ---------------- Doctor profile ---------------- */

export const ABOUT_DOCTOR_KEY = "about.doctor";

export type AboutDoctorContent = {
  image: string;
  imageAlt: string;
  badgeValue: string; // empty hides the badge
  badgeLabel: string; // "\n" becomes a line break
  label: string;
  heading: string;
  headingHighlight: string; // gold words at the end of the heading
  paragraphs: string[];
  highlights: string[];
  button: BannerButton;
};

export const aboutDoctorDefaults: AboutDoctorContent = {
  image:
    "https://conceiveivf.in/wp-content/uploads/2024/12/young-entrepreneurs-mature-investor-watching-presentation-discussing-project.jpg",
  imageAlt: "Dr. Neha Gupta",
  badgeValue: "15+",
  badgeLabel: "Years of\nExperience",
  label: "About Dr. Neha Gupta",
  heading: "Dedicated to helping you build your",
  headingHighlight: "family",
  paragraphs: [
    "Dr. Neha Gupta is a highly accomplished Obstetrician, Gynecologist, and IVF Specialist with over 15 years of professional experience. She is the founder and lead consultant at Conceive IVF & Fertility Centre.",
    "She provides comprehensive care in reproductive medicine and minimally invasive gynecological surgery, with a focus on fertility-enhancing procedures, advanced laparoscopic surgeries, and personalized infertility treatments.",
    "Dedicated to patient-centered care, Dr. Gupta combines clinical excellence with compassion to help couples achieve their dream of parenthood.",
  ],
  highlights: [
    "Reproductive medicine expertise",
    "Advanced laparoscopic surgery",
    "Personalized infertility treatment",
    "Patient-centered fertility care",
  ],
  button: { label: "Book a Consultation →", link: "/contact" },
};

/* ---------------- Qualifications ---------------- */

export const ABOUT_QUALIFICATIONS_KEY = "about.qualifications";

export type Qualification = {
  year: string;
  degree: string;
  institute: string;
};

export type AboutQualificationsContent = {
  label: string;
  heading: string;
  headingHighlight: string;
  description: string;
  items: Qualification[];
};

export const aboutQualificationsDefaults: AboutQualificationsContent = {
  label: "Professional Qualifications",
  heading: "Academic & professional",
  headingHighlight: "milestones",
  description:
    "Dr. Neha Gupta's academic journey includes medical education, reproductive medicine, minimally invasive surgery, and specialized training in infertility ultrasound.",
  items: [
    { year: "Mar, 2007", degree: "M.B.B.S.", institute: "Gajra Raja Medical College, Gwalior (M.P.)" },
    {
      year: "Jun, 2011",
      degree: "M.S. Obstetrics and Gynaecology",
      institute:
        "Sawai Man Singh Medical College, Rajasthan University of Health Sciences, Jaipur, Rajasthan",
    },
    {
      year: "July, 2013",
      degree: "Fellowship in Reproductive Medicine",
      institute: "Ruby Hall IVF and Endoscopy Centre, Pune",
    },
    {
      year: "Dec, 2015",
      degree: "Fellowship in Minimal Invasive Surgery",
      institute: "World Laparoscopy Hospital, Gurgaon",
    },
    { year: "June, 2016", degree: "Ultrasound in Infertility", institute: "Ian Donald's School of Ultrasound" },
  ],
};

/* ---------------- Call to action ---------------- */

export const ABOUT_CTA_KEY = "about.cta";

export type AboutCtaContent = {
  label: string;
  heading: string;
  text: string;
  hoursLabel: string;
  hoursTitle: string; // "\n" becomes a line break
  hoursTime: string; // "\n" becomes a line break
  hoursNote: string;
  button: BannerButton;
};

export const aboutCtaDefaults: AboutCtaContent = {
  label: "We're Here For You",
  heading: "Begin your journey to parenthood with compassionate care.",
  text: "We're here to guide you every step of the way. Visit us during our convenient care hours to begin your journey to parenthood.",
  hoursLabel: "Working Hours",
  hoursTitle: "Visit Us During\nOur Care Hours",
  hoursTime: "Monday – Sunday\n10:00 AM – 6:00 PM",
  hoursNote: "Our team is available to guide you through your fertility journey and answer your questions.",
  button: { label: "Contact Us", link: "/contact" },
};
