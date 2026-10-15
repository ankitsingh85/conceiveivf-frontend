
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookAppointmentModal from "./components/BookAppointmentModal";

import About from "./pages/About";
import SemenSpermFreezing from "./pages/SemenSpermFreezing";
import InfertilityAssessmentMale from "./pages/InfertilityAssessmentMale";
import CASA from "./pages/CASA";
import InfertilityAssessmentFemale from "./pages/InfertilityAssessmentFemale";
import ReproductiveSurgery from "./pages/ReproductiveSurgery";
import IUI from "./pages/IUI";
import InVitroFertilization from "./pages/InVitroFertilization";
import ICSI from "./pages/ICSI";
import EggFreezing from "./pages/EggFreezing";
import Embryology from "./pages/Embryology";
import PGDPGS from "./pages/PGDPGS";
import Videos from "./pages/Videos";
import PatientReview from "./pages/PatientReview";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLeads from "./pages/admin/AdminLeads";
import AdminSectionsOverview from "./pages/admin/AdminSectionsOverview";

import BannerEditor from "./pages/admin/home/BannerEditor";
import AboutEditor from "./pages/admin/home/AboutEditor";
import TreatmentsEditor from "./pages/admin/home/TreatmentsEditor";
import WelcomeEditor from "./pages/admin/home/WelcomeEditor";
import WhyUsEditor from "./pages/admin/home/WhyUsEditor";
import VideoEditor from "./pages/admin/home/VideoEditor";
import ProcessEditor from "./pages/admin/home/ProcessEditor";
import TestimonialsEditor from "./pages/admin/home/TestimonialsEditor";
import FaqEditor from "./pages/admin/home/FaqEditor";
import ContactEditor from "./pages/admin/home/ContactEditor";

import AboutHeroEditor from "./pages/admin/about/HeroEditor";
import AboutDoctorEditor from "./pages/admin/about/DoctorEditor";
import AboutQualificationsEditor from "./pages/admin/about/QualificationsEditor";
import AboutCtaEditor from "./pages/admin/about/CtaEditor";

import {
  aboutSections,
  homeSections,
} from "./components/admin/adminNav";

import AdminLayout from "./components/admin/AdminLayout";

// =====================================================
// SEO CONFIGURATION
// =====================================================

const SITE_URL = "https://conceive-ivf.com"; // no trailing slash — paths start with "/"

type SeoData = {
  title: string;
  description: string;
};

const seoPages: Record<string, SeoData> = {
  "/": {
    title: "IVF centre in Sirsa, fertility clinic in Sirsa",
    description:
      "Conceive IVF is a leading IVF centre and fertility clinic in Sirsa, offering IVF treatment, infertility care and expert guidance to help couples achieve their dream of parenthood.",
  },

  "/about": {
    title: "Gynaecologist in Sirsa for Pregnancy Problems | Conceive IVF",
    description:
      "Looking for a gynaecologist in Sirsa for pregnancy problems? Conceive IVF provides expert gynaecological and fertility care, with personalized evaluation and treatment for pregnancy-related concerns.",
  },

  "/semen-sperm-freezing": {
    title: "Azoospermia Treatment in Sirsa | Low Sperm Count Treatment",
    description:
      "Conceive IVF offers advanced treatment for low sperm count and azoospermia in Sirsa, along with sperm freezing and personalized fertility care for male infertility.",
  },

  "/infertility-assessment-male": {
    title: "Male Infertility Treatment in Sirsa | Male Fertility Specialist",
    description:
      "Looking for male infertility treatment in Sirsa? Conceive IVF offers comprehensive male infertility assessment, diagnosis and personalized fertility treatment to help improve your chances of conception.",
  },

  "/casa": {
    title: "CASA Test | Conceive IVF",
    description:
      "Learn about computer-assisted semen analysis (CASA) and how it helps assess sperm parameters during fertility evaluation.",
  },

  "/infertility-assesment-female": {
    title: "Female Infertility Treatment in Sirsa | Fertility Specialist",
    description:
      "Conceive IVF provides expert female infertility treatment in Sirsa, including fertility assessment, diagnosis and personalized care for women facing conception challenges.",
  },

  "/reproductive-surgery": {
    title: "Reproductive Surgery | Conceive IVF",
    description:
      "Explore reproductive surgery services and learn how selected procedures may support fertility care.",
  },

  "/iui-intrauterine-insemination": {
    title: "IUI Treatment | Conceive IVF",
    description:
      "Understand intrauterine insemination (IUI), the treatment process and fertility consultation options at Conceive IVF.",
  },

  "/in-vitro-fertilization": {
    title: "Best IVF Centre in Sirsa | IVF Specialist & Fertility Clinic",
    description:
      "Conceive IVF is a trusted IVF clinic in Sirsa offering infertility treatment, IVF, fertility care and test tube baby services with experienced IVF doctors and specialists.",
  },

  "/icsi": {
    title: "ICSI Cost in Haryana | ICSI Treatment & Fertility Care",
    description:
      "Looking for ICSI cost in Haryana? Conceive IVF offers advanced ICSI treatment with personalized fertility care, expert guidance and transparent information about treatment costs.",
  },

  "/egg-freezing": {
    title: "Egg Freezing in Sirsa | Fertility Preservation Clinic",
    description:
      "Conceive IVF provides egg freezing and fertility preservation in Sirsa, helping women preserve their fertility for future pregnancy with personalized guidance and advanced reproductive care.",
  },

  "/embryology": {
    title: "Embryology Services | Conceive IVF",
    description:
      "Discover the role of embryology in fertility treatment, embryo development and laboratory procedures.",
  },

  "/pgd-pgs": {
    title: "PGD & PGS Services | Conceive IVF",
    description:
      "Learn about preimplantation genetic testing options and their role in selected fertility treatments.",
  },

  "/videos": {
    title: "Fertility Videos | Conceive IVF",
    description:
      "Explore fertility education videos covering IVF treatments, reproductive health and fertility care.",
  },

  "/patient-review": {
    title: "Patient Reviews | Conceive IVF",
    description:
      "Read patient experiences and reviews about fertility care and treatment journeys at Conceive IVF.",
  },

  "/faq": {
    title: "Frequently Asked Questions | Conceive IVF",
    description:
      "Find answers to common questions about IVF, IUI, fertility treatments, appointments and reproductive care.",
  },

  "/blog": {
    title: "Fertility & IVF Blog | Conceive IVF",
    description:
      "Explore articles about fertility, IVF treatments, reproductive health and fertility care from Conceive IVF.",
  },

  "/contact": {
    title: "Contact Us | Conceive IVF",
    description:
      "Contact Conceive IVF to enquire about fertility services, treatment consultations and appointment options.",
  },
};

// =====================================================
// APP CONTENT
// =====================================================

function AppContent() {
  const { pathname } = useLocation();

  const isAdminRoute = pathname.startsWith("/admin");

  const [appointmentOpen, setAppointmentOpen] = useState(false);

  // Get SEO details for the current page.
  // Blog detail pages need their article-specific metadata
  // to be added inside BlogDetail separately.

  const currentSeo: SeoData =
    seoPages[pathname] ??
    (pathname.startsWith("/blog/")
      ? {
          title: "Fertility Article | Conceive IVF",
          description:
            "Read fertility information, treatment guidance and reproductive health articles from Conceive IVF.",
        }
      : {
          title: "Page Not Found | Conceive IVF",
          description:
            "Explore fertility services and information available from Conceive IVF.",
        });

  // "/" stays as the homepage; other paths lose any trailing slash so
  // "/about" and "/about/" share one canonical URL
  const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  // Global appointment popup listener.
  useEffect(() => {
    const openAppointment = () => {
      setAppointmentOpen(true);
    };

    window.addEventListener("openAppointment", openAppointment);

    return () => {
      window.removeEventListener(
        "openAppointment",
        openAppointment
      );
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* SEO META TAGS */}

      <Helmet>
        <title>
          {isAdminRoute
            ? "Admin | Conceive IVF"
            : currentSeo.title}
        </title>

        <meta
          name="description"
          content={currentSeo.description}
        />

        <meta
  name="robots"
  content={
    isAdminRoute
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  }
/>

        {/* Each tag must be a direct child of <Helmet>: with React 19 it
            drops tags wrapped in a fragment (only the first one survived) */}
        {!isAdminRoute && <link rel="canonical" href={canonicalUrl} />}

        {!isAdminRoute && <meta property="og:title" content={currentSeo.title} />}

        {!isAdminRoute && <meta property="og:description" content={currentSeo.description} />}

        {!isAdminRoute && <meta property="og:url" content={canonicalUrl} />}

        {!isAdminRoute && (
          <meta property="og:type" content={pathname.startsWith("/blog/") ? "article" : "website"} />
        )}

        {!isAdminRoute && <meta property="og:site_name" content="Conceive IVF" />}

        {!isAdminRoute && <meta name="twitter:card" content="summary" />}

        {!isAdminRoute && <meta name="twitter:title" content={currentSeo.title} />}

        {!isAdminRoute && <meta name="twitter:description" content={currentSeo.description} />}
      </Helmet>

      {/* COMMON NAVBAR */}

      {!isAdminRoute && <Navbar />}

      {/* ROUTES */}

      <Routes>
        {/* PUBLIC PAGES */}

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/semen-sperm-freezing"
          element={<SemenSpermFreezing />}
        />

        <Route
          path="/infertility-assessment-male"
          element={<InfertilityAssessmentMale />}
        />

        <Route path="/casa" element={<CASA />} />

        <Route
          path="/infertility-assesment-female"
          element={<InfertilityAssessmentFemale />}
        />

        <Route
          path="/reproductive-surgery"
          element={<ReproductiveSurgery />}
        />

        <Route
          path="/iui-intrauterine-insemination"
          element={<IUI />}
        />

        <Route
          path="/in-vitro-fertilization"
          element={<InVitroFertilization />}
        />

        <Route path="/icsi" element={<ICSI />} />

        <Route
          path="/egg-freezing"
          element={<EggFreezing />}
        />

        <Route
          path="/embryology"
          element={<Embryology />}
        />

        <Route path="/pgd-pgs" element={<PGDPGS />} />

        <Route path="/videos" element={<Videos />} />

        <Route
          path="/patient-review"
          element={<PatientReview />}
        />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/blog" element={<Blog />} />

        <Route
          path="/blog/:id"
          element={<BlogDetail />}
        />

        <Route path="/contact" element={<Contact />} />

        {/* ADMIN ROUTES */}

        <Route
          path="/admin"
          element={
            <AuthProvider>
              <Outlet />
            </AuthProvider>
          }
        >
          <Route
            index
            element={
              <Navigate to="dashboard" replace />
            }
          />

          <Route
            path="login"
            element={<AdminLogin />}
          />

          <Route
            path="signup"
            element={<AdminSignup />}
          />

          <Route element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route
                path="dashboard"
                element={<AdminDashboard />}
              />

              <Route
                path="leads"
                element={<AdminLeads />}
              />

              <Route
                path="home"
                element={
                  <AdminSectionsOverview
                    pageName="Home"
                    sections={homeSections}
                  />
                }
              />

              <Route
                path="home/banner"
                element={<BannerEditor />}
              />

              <Route
                path="home/about"
                element={<AboutEditor />}
              />

              <Route
                path="home/treatments"
                element={<TreatmentsEditor />}
              />

              <Route
                path="home/welcome"
                element={<WelcomeEditor />}
              />

              <Route
                path="home/why-us"
                element={<WhyUsEditor />}
              />

              <Route
                path="home/video"
                element={<VideoEditor />}
              />

              <Route
                path="home/process"
                element={<ProcessEditor />}
              />

              <Route
                path="home/testimonials"
                element={<TestimonialsEditor />}
              />

              <Route
                path="home/faq"
                element={<FaqEditor />}
              />

              <Route
                path="home/contact"
                element={<ContactEditor />}
              />

              <Route
                path="about"
                element={
                  <AdminSectionsOverview
                    pageName="About"
                    sections={aboutSections}
                  />
                }
              />

              <Route
                path="about/hero"
                element={<AboutHeroEditor />}
              />

              <Route
                path="about/doctor"
                element={<AboutDoctorEditor />}
              />

              <Route
                path="about/qualifications"
                element={<AboutQualificationsEditor />}
              />

              <Route
                path="about/cta"
                element={<AboutCtaEditor />}
              />

              <Route
                path="*"
                element={
                  <Navigate
                    to="/admin/dashboard"
                    replace
                  />
                }
              />
            </Route>
          </Route>
        </Route>

        {/* UNKNOWN PUBLIC ROUTES */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>

      {/* COMMON FOOTER */}

      {!isAdminRoute && <Footer />}

      {/* BOOK APPOINTMENT POPUP */}

      {!isAdminRoute && (
        <BookAppointmentModal
          isOpen={appointmentOpen}
          onClose={() => setAppointmentOpen(false)}
        />
      )}

      {/* WHATSAPP BUTTON */}

      {!isAdminRoute && (
        <a
          href="https://wa.me/919255278000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="
            fixed
            right-5
            bottom-5
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-xl
            transition-transform
            duration-300
            hover:scale-110
          "
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.3a8.3 8.3 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.3 8.3 0 1 1 12 20.3z" />
          </svg>
        </a>
      )}
    </div>
  );
}

// =====================================================
// APP ROOT
// =====================================================

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
