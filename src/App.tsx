import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

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
import { aboutSections, homeSections } from "./components/admin/adminNav";
import AdminLayout from "./components/admin/AdminLayout";

function AppContent() {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith("/admin");

  const [appointmentOpen, setAppointmentOpen] = useState(false);

  /*
   * Global Appointment Popup Listener
   *
   * Navbar ya kisi bhi component se:
   *
   * window.dispatchEvent(new Event("openAppointment"));
   *
   * karne par popup open hoga.
   */
  useEffect(() => {
    const openAppointment = () => {
      setAppointmentOpen(true);
    };

    window.addEventListener(
      "openAppointment",
      openAppointment
    );

    return () => {
      window.removeEventListener(
        "openAppointment",
        openAppointment
      );
    };
  }, []);

  return (
    <div className="min-h-screen">

        {/* =========================
            COMMON NAVBAR
        ========================== */}
        {!isAdminRoute && <Navbar />}

        {/* =========================
            ROUTES
        ========================== */}
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/semen-sperm-freezing"
            element={<SemenSpermFreezing />}
          />

          <Route
            path="/infertility-assessment-male"
            element={<InfertilityAssessmentMale />}
          />

          <Route
            path="/casa"
            element={<CASA />}
          />

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

          <Route
            path="/icsi"
            element={<ICSI />}
          />

          <Route
            path="/egg-freezing"
            element={<EggFreezing />}
          />

          <Route
            path="/embryology"
            element={<Embryology />}
          />

          <Route
            path="/pgd-pgs"
            element={<PGDPGS />}
          />

          <Route
            path="/videos"
            element={<Videos />}
          />

          <Route
            path="/patient-review"
            element={<PatientReview />}
          />

          <Route
            path="/faq"
            element={<FAQ />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* =========================
              ADMIN (JWT protected)
          ========================== */}
          <Route
            path="/admin"
            element={
              <AuthProvider>
                <Outlet />
              </AuthProvider>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="login" element={<AdminLogin />} />
            <Route path="signup" element={<AdminSignup />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="leads" element={<AdminLeads />} />
                <Route path="home" element={<AdminSectionsOverview pageName="Home" sections={homeSections} />} />
                <Route path="home/banner" element={<BannerEditor />} />
                <Route path="home/about" element={<AboutEditor />} />
                <Route path="home/treatments" element={<TreatmentsEditor />} />
                <Route path="home/welcome" element={<WelcomeEditor />} />
                <Route path="home/why-us" element={<WhyUsEditor />} />
                <Route path="home/video" element={<VideoEditor />} />
                <Route path="home/process" element={<ProcessEditor />} />
                <Route path="home/testimonials" element={<TestimonialsEditor />} />
                <Route path="home/faq" element={<FaqEditor />} />
                <Route path="home/contact" element={<ContactEditor />} />
                <Route path="about" element={<AdminSectionsOverview pageName="About" sections={aboutSections} />} />
                <Route path="about/hero" element={<AboutHeroEditor />} />
                <Route path="about/doctor" element={<AboutDoctorEditor />} />
                <Route path="about/qualifications" element={<AboutQualificationsEditor />} />
                <Route path="about/cta" element={<AboutCtaEditor />} />
                <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
              </Route>
            </Route>
          </Route>

        </Routes>

        {/* =========================
            COMMON FOOTER
        ========================== */}
        {!isAdminRoute && <Footer />}

        {/* =========================
            BOOK APPOINTMENT POPUP
        ========================== */}
        {!isAdminRoute && (
          <BookAppointmentModal
            isOpen={appointmentOpen}
            onClose={() => setAppointmentOpen(false)}
          />
        )}

        {/* =========================
            WHATSAPP BUTTON
        ========================== */}
        {!isAdminRoute && (
        <a
          href="https://wa.me/+919255278000"
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

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}