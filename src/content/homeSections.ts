/*
 * Editable home page sections (besides Banner and About Us, which have their
 * own files). Each default is the website's original content and is shown
 * until an admin saves the section, or whenever the API can't be reached.
 */
import type { BannerButton } from "./homeBanner";

export type TitledItem = {
  title: string;
  description: string;
};

/* ---------------- Treatments ("Your Journey to Parenthood") ---------------- */

export const HOME_TREATMENTS_KEY = "home.treatments";

export type TreatmentCard = {
  title: string;
  image: string;
  link: string;
};

export type HomeTreatmentsContent = {
  label: string;
  heading: string;
  description: string;
  items: TreatmentCard[];
};

export const homeTreatmentsDefaults: HomeTreatmentsContent = {
  label: "Conceive IVF Fertility Centre",
  heading: "Your Journey to Parenthood Starts Here",
  description:
    "Explore our advanced fertility treatments designed to support you at every step of your journey towards parenthood.",
  items: [
    { title: "In Vitro Fertilization (IVF)", image: "asset:img1", link: "#" },
    { title: "Intra Uterine Insemination (IUI)", image: "asset:img2", link: "#" },
    { title: "ICSI Treatment", image: "asset:img3", link: "#" },
    { title: "Egg Freezing", image: "asset:img4", link: "#" },
    { title: "Reproductive Surgery", image: "asset:img5", link: "#" },
    { title: "Semen / Sperm Freezing", image: "asset:img6", link: "#" },
    { title: "InFertility Assessment - Male", image: "asset:img7", link: "#" },
    { title: "InFertility Assessment - Female", image: "asset:img8", link: "#" },
    { title: "Embryology", image: "asset:img9", link: "#" },
    { title: "CASA", image: "asset:img10", link: "#" },
    { title: "PGS / PGD", image: "asset:img11", link: "#" },
  ],
};

/* ---------------- Welcome ---------------- */

export const HOME_WELCOME_KEY = "home.welcome";

export type HomeWelcomeContent = {
  image: string;
  imageAlt: string;
  heading: string;
  text: string;
  button: BannerButton;
};

export const homeWelcomeDefaults: HomeWelcomeContent = {
  image:
    "https://images.pexels.com/photos/8442033/pexels-photo-8442033.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  imageAlt: "Advanced fertility lab",
  heading: "Welcome a little bundle of joy into your life!",
  text: "At Conceive IVF Fertility Centre, we’re dedicated to turning your dreams of parenthood into reality. Our success rates speak for themselves—your chances of taking home a baby after just one transfer are over 44.83% higher¹ than the average US IVF clinic. Whether you’re just starting to explore parenthood or have been facing challenges in conceiving, our compassionate fertility experts are here to guide and support you every step of the way.",
  button: { label: "Book Your Consultation", link: "#contact" },
};

/* ---------------- Why Choose Us ---------------- */

export const HOME_WHY_US_KEY = "home.whyUs";

export type HomeWhyUsContent = {
  label: string;
  heading: string;
  description: string; // **text** is shown in gold bold
  items: TitledItem[];
};

export const homeWhyUsDefaults: HomeWhyUsContent = {
  label: "Why Choose Us",
  heading: "Our success rates speak for themselves",
  description:
    "At **Conceive IVF Fertility Centre**, we offer state-of-the-art facilities, personalized treatment plans, and a team of expert fertility specialists dedicated to your success. Our holistic approach ensures emotional and physical support throughout your journey to parenthood.",
  items: [
    {
      title: "State-of-the-Art Facilities",
      description:
        "Our advanced medical equipment and modern labs ensure precise diagnoses and effective treatments for better success rates.",
    },
    {
      title: "Personalized Treatment Plans",
      description:
        "Every fertility journey is unique, and we tailor treatments to meet your specific needs and goals.",
    },
    {
      title: "Expert Team of Fertility Specialists",
      description:
        "Our experienced specialists and embryologists provide expert care and guidance throughout your journey.",
    },
    {
      title: "Holistic Support for Emotional and Physical Well-Being",
      description:
        "We offer counseling and wellness programs to support you emotionally and physically at every step.",
    },
  ],
};

/* ---------------- Video ---------------- */

export const HOME_VIDEO_KEY = "home.video";

export type HomeVideoContent = {
  label: string;
  title: string;
  titleHighlight: string; // gold words at the end of the title
  description: string;
  posterImage: string;
  posterAlt: string;
  videoUrl: string;
  bottomText: string;
};

export const homeVideoDefaults: HomeVideoContent = {
  label: "Professional Results",
  title: "The Best Possible",
  titleHighlight: "Results",
  description:
    "Creating miracles every day – trusted care, compassionate support, and successful journeys to parenthood!",
  posterImage: "asset:video-poster",
  posterAlt: "Conceive IVF Fertility Centre",
  videoUrl: "https://www.youtube.com/",
  bottomText: "Your journey. Our expertise. Your miracle.",
};

/* ---------------- Process steps ---------------- */

export const HOME_PROCESS_KEY = "home.process";

export type HomeProcessContent = {
  label: string;
  heading: string;
  steps: TitledItem[];
};

export const homeProcessDefaults: HomeProcessContent = {
  label: "Your Journey",
  heading: "Five simple steps to parenthood",
  steps: [
    {
      title: "Consultation",
      description: "Meet our specialist, share your history and get all your questions answered.",
    },
    {
      title: "Evaluation",
      description: "Comprehensive diagnostic tests for both partners to understand the root cause.",
    },
    {
      title: "Personalised Plan",
      description: "A tailored treatment protocol designed around your body and your goals.",
    },
    {
      title: "Treatment",
      description: "Expert care in our advanced lab with continuous monitoring and support.",
    },
    {
      title: "Your Miracle",
      description: "Pregnancy confirmation and ongoing guidance as you welcome your little one.",
    },
  ],
};

/* ---------------- Testimonials ---------------- */

export const HOME_TESTIMONIALS_KEY = "home.testimonials";

export type Testimonial = {
  name: string;
  city: string;
  text: string;
};

export type HomeTestimonialsContent = {
  image: string;
  imageAlt: string;
  imageQuote: string;
  label: string;
  heading: string;
  items: Testimonial[];
};

export const homeTestimonialsDefaults: HomeTestimonialsContent = {
  image:
    "https://images.pexels.com/photos/35759308/pexels-photo-35759308.png?auto=compress&cs=tinysrgb&fit=crop&h=700&w=800",
  imageAlt: "Happy family",
  imageQuote: "\"Every miracle begins with hope\"",
  label: "Success Stories",
  heading: "Stories of hope, joy and new beginnings",
  items: [
    {
      name: "Neha & Rohan",
      city: "Hyderabad",
      text: "After 6 years of trying, Conceive IVF gave us our miracle. The doctors were honest, kind and always available. We can't thank them enough for our baby girl.",
    },
    {
      name: "Sneha & Arjun",
      city: "Bengaluru",
      text: "The team treated us like family. Every step was explained clearly and the counsellor helped us stay strong emotionally. Successful on our very first cycle!",
    },
    {
      name: "Pooja & Vikram",
      city: "Chennai",
      text: "World-class lab, transparent pricing and truly compassionate staff. Our twins are here because of this wonderful team. Highly recommended.",
    },
  ],
};

/* ---------------- FAQ ---------------- */

export const HOME_FAQ_KEY = "home.faq";

export type FaqItem = {
  question: string;
  answer: string;
};

export type HomeFaqContent = {
  label: string;
  heading: string;
  items: FaqItem[];
};

export const homeFaqDefaults: HomeFaqContent = {
  label: "FAQ",
  heading: "Questions we're often asked",
  items: [
    {
      question: "When should we consider seeing a fertility specialist?",
      answer:
        "If you're under 35 and have been trying for 12 months, or over 35 and trying for 6 months, it's a good time to consult us. Couples with known conditions such as PCOS, endometriosis or irregular cycles should come earlier.",
    },
    {
      question: "How long does one IVF cycle take?",
      answer:
        "A typical IVF cycle takes about 4–6 weeks from the start of stimulation to the pregnancy test. Your care coordinator will give you a detailed, personalised timeline.",
    },
    {
      question: "Is IVF painful?",
      answer:
        "Most patients experience only mild discomfort. Egg retrieval is done under short anaesthesia, and embryo transfer is a quick, painless procedure similar to a pap smear.",
    },
    {
      question: "What are your success rates?",
      answer:
        "Our take-home baby rate after a single transfer is over 44.83% higher than the average IVF clinic. Individual outcomes depend on age, diagnosis and other factors, which we'll discuss openly with you.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes. We offer transparent, all-inclusive packages along with flexible EMI options so that finances never stand between you and parenthood.",
    },
  ],
};

/* ---------------- Contact ---------------- */

export const HOME_CONTACT_KEY = "home.contact";

export type HomeContactContent = {
  label: string;
  heading: string;
  description: string;
  address: string; // "\n" becomes a line break
  phone: string;
  email: string;
  hours: string;
  treatments: string[];
  submitText: string;
  successTitle: string;
  successText: string;
};

export const homeContactDefaults: HomeContactContent = {
  label: "Get in Touch",
  heading: "Start your journey today",
  description:
    "Book a free consultation with our fertility specialists. We're here to listen, guide and support you.",
  address: "Conceive IVF Fertility Centre,\nMain Road, Hyderabad, Telangana 500001",
  phone: "+91 99999 99999",
  email: "care@conceiveivf.in",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  treatments: ["Not sure yet", "IVF", "ICSI", "IUI", "Egg Freezing", "Fertility Evaluation"],
  submitText: "Request Free Consultation",
  successTitle: "Thank you!",
  successText: "Our care coordinator will call you within 24 hours to schedule your consultation.",
};
