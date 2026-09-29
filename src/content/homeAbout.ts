import type { BannerButton } from "./homeBanner";

export const HOME_ABOUT_KEY = "home.about";

export type HomeAboutContent = {
  image: string; // empty = the photo bundled with the website
  imageAlt: string;
  smallImage: string; // empty hides the small overlapping photo
  smallImageAlt: string;
  badgeValue: string; // empty hides the badge
  badgeLabel: string;
  label: string;
  heading: string;
  paragraphs: string[]; // **text** is shown in bold
  button: BannerButton;
};

// Shown until an admin saves the section, and whenever the API can't be reached
export const homeAboutDefaults: HomeAboutContent = {
  image: "",
  imageAlt: "Advanced fertility lab",
  smallImage:
    "https://images.pexels.com/photos/3995921/pexels-photo-3995921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  smallImageAlt: "Happy family",
  badgeValue: "15+",
  badgeLabel: "Years of trusted care",
  label: "About Us",
  heading: "Welcome to Conceive IVF Fertility Centre",
  paragraphs: [
    "At **Conceive IVF Fertility Centre**, we bring over 15 years of expertise in helping couples on their journey to parenthood. We believe every journey is unique and deserves personalized care.",
    "As a trusted leader in fertility treatments, we combine advanced medical technology with compassionate support to help you achieve your dream of having a family.",
    "Our expert team specializes in cutting-edge solutions like IVF, ICSI, and IUI, tailored to your specific needs. With a state-of-the-art facility and a patient-first approach, we are dedicated to turning hope into happiness.",
    "With over 15 years of experience, Conceive IVF is where care, expertise, and success come together—because your miracle starts here.",
  ],
  button: { label: "Talk to a Specialist", link: "#contact" },
};
