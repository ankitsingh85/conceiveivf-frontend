import React, { useState } from "react";
import { Link } from "react-router-dom";

const contactFAQs = [
  {
    question: "What Makes Conceive IVF Fertility Centre Unique for IVF Treatments?",
    answer:
      "At Conceive IVF, advanced fertility technology is combined with personalized care and experienced medical guidance to support each patient's individual treatment journey.",
  },
  {
    question: "How Do I Know If IUI is the Right Option for Me?",
    answer:
      "Our fertility specialists evaluate your medical history, fertility factors and test results before recommending the treatment approach that may be appropriate for you.",
  },
  {
    question: "What is ICSI, and When is it Recommended?",
    answer:
      "ICSI, or Intracytoplasmic Sperm Injection, is a specialized fertility procedure in which a single sperm is injected directly into an egg. It may be considered in certain male-factor infertility cases or after previous IVF difficulties.",
  },
  {
    question: "How Soon Can I Start My Treatment at Conceive IVF?",
    answer:
      "After your consultation and the required fertility evaluation, your specialist can discuss the next steps and prepare a treatment plan based on your individual circumstances.",
  },
];

const services = [
  "In Vitro Fertilization (IVF)",
  "Intra Uterine Insemination (IUI)",
  "ICSI Treatment",
  "Egg Freezing",
  "Reproductive Surgery",
  "Semen / Sperm Freezing",
  "Male Infertility Assessment",
  "Female Infertility Assessment",
  "Embryology",
  "PGD / PGS",
];

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phone = "9255278000";

    const text = `
Hello Conceive IVF,

I would like to book a consultation.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Treatment: ${formData.treatment}
Message: ${formData.message}
    `.trim();

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <main className="contact-page bg-white text-[#3B2940] overflow-hidden">
      <style>{`
        .contact-page {
          width: 100%;
          color: #3B2940;
          font-family: "Manrope", Arial, sans-serif;
        }

        .contact-page * {
          box-sizing: border-box;
        }

        /* Same typography system as the About page */

        .contact-page .contact-hero-heading {
          color: #ffffff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 52px;
          line-height: 1.12;
          font-weight: 700;
        }

        .contact-page .contact-section-label {
          font-family: "Manrope", Arial, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .contact-page .contact-section-heading {
          color: #3B2940;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 36px;
          line-height: 1.2;
          font-weight: 700;
        }

        .contact-page .contact-body {
          color: #5F5660;
          font-family: "Manrope", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.7;
        }

        .contact-page .contact-card-title {
          color: #3B2940;
          font-family: "Manrope", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 700;
        }

        .contact-page .contact-small {
          font-family: "Manrope", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.6;
        }

        .contact-page .contact-form-heading {
          color: #3B2940;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 30px;
          line-height: 1.25;
          font-weight: 700;
        }

        .contact-page .contact-form-text,
        .contact-page .contact-label-text,
        .contact-page .contact-input-text,
        .contact-page .contact-button-text {
          font-family: "Manrope", Arial, sans-serif;
        }

        @media (max-width: 800px) {
          .contact-page .contact-hero-heading {
            font-size: 42px;
          }
        }

        .contact-page .contact-care-heading {
          font-size: 34px;
          line-height: 1.2;
        }

        .contact-page .contact-final-heading {
          font-size: 34px;
          line-height: 1.2;
        }

        @media (max-width: 600px) {
          .contact-page .contact-care-heading {
            font-size: 30px;
          }

          .contact-page .contact-final-heading {
            font-size: 30px;
          }

          .contact-page .contact-hero-heading {
            font-size: 34px;
            line-height: 1.18;
          }

          .contact-page .contact-section-heading {
            font-size: 30px;
            line-height: 36px;
          }

          .contact-page .contact-body {
            font-size: 16px;
            line-height: 1.65;
          }

          .contact-page .contact-form-heading {
            font-size: 28px;
          }
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[500px] lg:min-h-[500px] flex items-center bg-[#3B2940]">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=85"
            alt="Conceive IVF fertility care"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#3B2940]/90" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-['Manrope'] mb-7">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
              We're Here to Help
            </div>

            <h1 className="contact-hero-heading">
              Your First Step Toward
              <span className="block text-[#E0C98A]">
                Parenthood Begins Here
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-white/85 text-base sm:text-lg leading-8 font-['Manrope']">
              Connect with the Conceive IVF team and take the first step
              toward understanding your fertility options with compassionate,
              personalized care.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">

              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-[#C6A15B] hover:bg-[#B08B48] text-white font-semibold font-['Manrope'] transition-all duration-300"
              >
                Book a Consultation
              </a>

              {/* <a
                href="tel:01666226880"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 text-white font-semibold font-['Manrope'] transition-all duration-300"
              >
                Call Us
              </a> */}

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT INFO
      ===================================================== */}
      <section className="py-20 lg:py-10 bg-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-[#C6A15B] contact-section-label">
              Get In Touch
            </span>

            <h2 className="contact-section-heading mt-4">
              Let's Connect With You
            </h2>

            <p className="mt-5 contact-body">
              Whether you are exploring fertility treatment for the first time
              or looking for guidance about your next step, our team is here
              to help you understand your options.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 lg:gap-4 mt-10">

            {/* Phone */}
           
             <div className="rounded-[28px] border border-[#E8DFD2] bg-white p-8 shadow-[0_15px_50px_rgba(59,41,64,0.06)]">
              <div className="w-14 h-14 rounded-2xl bg-[#3B2940] flex items-center justify-center text-white">

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.23a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                </svg>

              </div>

              <p className="mt-6 text-sm text-[#C6A15B] font-semibold font-['Manrope']">
                Phone
              </p>
            <a href="tel:9255278000" >
              {/* <h3 className="mt-2 text-xl font-bold text-[#3B2940] font-['Manrope']">
                01666-226880
              </h3> */}
              <h3 className="mt-2 text-xl font-bold text-[#3B2940] font-['Manrope']">
                +91 9255278000
              </h3>
              

              {/* <p className="mt-1 text-[#5F5660] font-['Manrope']">
                9255278000
              </p> */}

            </a>
            <a href="tel:01666-226880" >
              <h3 className="mt-2 text-xl font-bold text-[#3B2940] font-['Manrope']">
                + 01666-226880
              </h3>

            </a>
            </div>

            {/* Email */}
            
                <div className="rounded-[28px] border border-[#E8DFD2] bg-white p-8 shadow-[0_15px_50px_rgba(59,41,64,0.06)]">
              <div className="w-14 h-14 rounded-2xl bg-[#C6A15B] flex items-center justify-center text-white">

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

              </div>

              <p className="mt-6 text-sm text-[#C6A15B] font-semibold font-['Manrope']">
                Email
              </p>
              <a
              href="mailto:conceiveivfsirsa@gmail.com"
              
            >
              <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#3B2940] font-['Manrope'] break-all">
                conceiveivfsirsa@gmail.com
              </h3>

            </a>
</div>

            {/* Clinic */}
            <div className="rounded-[28px] border border-[#E8DFD2] bg-white p-8 shadow-[0_15px_50px_rgba(59,41,64,0.06)]">

              <div className="w-14 h-14 rounded-2xl bg-[#3B2940] flex items-center justify-center text-white">

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

              </div>

              <p className="mt-6 text-sm text-[#C6A15B] font-semibold font-['Manrope']">
                Visit Conceive IVF
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#3B2940] font-['Manrope']">
                Opp Town Park, Dabwali Road, Sirsa.
              </h3>

              {/* <p className="mt-2 text-[#5F5660] leading-7 font-['Manrope']">
                Opp Town Park, Dabwali Road, Sirsa.
              </p> */}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOURS
      ===================================================== */}
      <section className="py-10 bg-[#F8F4EE]">

        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          <div className="rounded-[32px] bg-[#3B2940] p-8 sm:p-10 lg:p-12 text-center">

            <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center">

              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.7"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>

            </div>

            <p className="mt-6 text-[#E0C98A] contact-section-label">
              Care Hours
            </p>

            <h2 className="mt-3 text-white font-['Playfair_Display'] font-semibold contact-care-heading">
              Visit Us During Our Care Hours
            </h2>

            <p className="mt-4 text-white/75 font-['Manrope']">
              We are available throughout the week to help you begin your
              fertility journey.
            </p>

            <div className="mt-7 inline-flex items-center justify-center px-7 py-4 rounded-full bg-white text-[#3B2940] font-bold font-['Manrope']">
              Monday – Sunday&nbsp;&nbsp; 10:00 AM – 6:00 PM
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FORM + MAP
      ===================================================== */}
      <section
        id="contact-form"
        className="py-20 lg:py-10 bg-white"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">

            {/* LEFT CONTENT */}
            <div>

              <span className="text-[#C6A15B] contact-section-label">
                Appointment
              </span>

              <h2 className="contact-section-heading mt-4 leading-tight">
                Your Parenthood Journey
                <span className="block text-[#3B2940]">
                  Starts With a Conversation
                </span>
              </h2>

              <p className="mt-6 contact-body max-w-xl">
                Tell us a little about yourself and the treatment you are
                interested in. Our team can help you understand the next steps
                and guide you toward the appropriate consultation.
              </p>


              <div className="mt-10 space-y-5">

                {[
                  "Personalized fertility guidance",
                  "Experienced fertility care",
                  "Advanced fertility treatments",
                  "Support throughout your treatment journey",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >

                    <div className="w-9 h-9 rounded-full bg-[#F8F4EE] flex items-center justify-center shrink-0">

                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3B2940"
                        strokeWidth="2"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>

                    </div>

                    <span className="font-medium text-[#3B2940] font-['Manrope']">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* FORM */}
            <div className="rounded-[32px] bg-[#F8F4EE] border border-[#E8DFD2] p-6 sm:p-8 lg:p-10">

              <div className="mb-7">

                <h3 className="contact-form-heading">
                  Book a Consultation
                </h3>

                <p className="mt-2 text-sm text-[#5F5660] font-['Manrope']">
                  Fill in your details and connect with our team.
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div>

                  <label className="block text-sm font-semibold text-[#3B2940] font-['Manrope'] mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full h-14 rounded-2xl border border-[#E8DFD2] bg-white px-5 outline-none focus:border-[#3B2940] transition-all font-['Manrope'] text-sm"
                  />

                </div>


                <div className="grid sm:grid-cols-2 gap-5">

                  <div>

                    <label className="block text-sm font-semibold text-[#3B2940] font-['Manrope'] mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter phone number"
                      className="w-full h-14 rounded-2xl border border-[#E8DFD2] bg-white px-5 outline-none focus:border-[#3B2940] transition-all font-['Manrope'] text-sm"
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-[#3B2940] font-['Manrope'] mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      className="w-full h-14 rounded-2xl border border-[#E8DFD2] bg-white px-5 outline-none focus:border-[#3B2940] transition-all font-['Manrope'] text-sm"
                    />

                  </div>

                </div>


                <div>

                  <label className="block text-sm font-semibold text-[#3B2940] font-['Manrope'] mb-2">
                    Treatment of Interest
                  </label>

                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full h-14 rounded-2xl border border-[#E8DFD2] bg-white px-5 outline-none focus:border-[#3B2940] transition-all font-['Manrope'] text-sm text-[#5F5660]"
                  >

                    <option value="">
                      Select treatment
                    </option>

                    <option value="IVF">
                      IVF
                    </option>

                    <option value="IUI">
                      IUI
                    </option>

                    <option value="ICSI">
                      ICSI
                    </option>

                    <option value="Egg Freezing">
                      Egg Freezing
                    </option>

                    <option value="Infertility Assessment">
                      Infertility Assessment
                    </option>

                    <option value="PGD / PGS">
                      PGD / PGS
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                <div>

                  <label className="block text-sm font-semibold text-[#3B2940] font-['Manrope'] mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-2xl border border-[#E8DFD2] bg-white px-5 py-4 outline-none focus:border-[#3B2940] transition-all font-['Manrope'] text-sm resize-none"
                  />

                </div>


                <button
                  type="submit"
                  className="w-full h-14 rounded-full bg-[#C6A15B] hover:bg-[#B08B48] text-white font-bold font-['Manrope'] transition-all duration-300"
                >
                  Send Enquiry on WhatsApp
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAP / CLINIC LOCATION
      ===================================================== */}
      <section className="pb-14 lg:pb-14">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="rounded-[32px] overflow-hidden border border-[#E8DFD2] bg-[#F8F4EE]">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

              <div className="p-8 sm:p-10 lg:p-12">

                <span className="text-[#C6A15B] contact-section-label">
                  Find Us
                </span>

                <h2 className="contact-section-heading mt-4">
                  Visit Our Clinic
                </h2>

                <p className="mt-5 contact-body">
                  Our clinic is located at Opp Town Park, Dabwali Road,
                  Sirsa. Contact our team before your visit if you need
                  assistance with directions or appointment information.
                </p>

                <div className="mt-8 flex items-start gap-4">

                  <div className="w-11 h-11 rounded-xl bg-[#3B2940] flex items-center justify-center shrink-0">

                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.8"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>

                  </div>

                  <div>

                    <p className="font-bold text-[#3B2940] font-['Manrope']">
                      Conceive IVF Fertility Centre
                    </p>

                    <p className="mt-1 text-[#5F5660] leading-7 font-['Manrope']">
                      Opp Town Park,
                      <br />
                      Dabwali Road, Sirsa
                    </p>

                  </div>

                </div>


                <a
                  href="https://www.google.com/maps/search/?api=1&query=Conceive+IVF+Opp+Town+Park+Dabwali+Road+Sirsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#3B2940] hover:bg-[#2F2035] text-white font-semibold font-['Manrope'] transition-all"
                >
                  Get Directions
                </a>

              </div>


              <div className="min-h-[360px] lg:min-h-[460px] bg-[#F8F4EE]">

                <iframe
                  title="Conceive IVF Clinic Location"
                  src="https://www.google.com/maps?q=Opp%20Town%20Park%2C%20Dabwali%20Road%2C%20Sirsa&output=embed"
                  className="w-full h-full min-h-[360px] lg:min-h-[460px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="py-14 lg:py-10 bg-[#F8F4EE]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-[#C6A15B] contact-section-label">
              F.A.Q.
            </span>

            <h2 className="contact-section-heading mt-4">
              Have Questions?
            </h2>

            <p className="mt-5 contact-body">
              Here are some common questions patients ask before beginning
              their fertility journey with Conceive IVF.
            </p>

          </div>


          <div className="mt-12 space-y-4">

            {contactFAQs.map((faq, index) => {

              const isOpen = openFAQ === index;

              return (
                <div
                  key={index}
                  className={`rounded-[22px] border transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-[#D8C9A8] shadow-[0_15px_40px_rgba(59,41,64,0.06)]"
                      : "bg-white border-[#E8DFD2]"
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFAQ(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-5 text-left p-6 sm:p-7"
                  >

                    <span className="font-semibold text-[#3B2940] font-['Manrope'] text-sm sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-all ${
                        isOpen
                          ? "bg-[#3B2940] text-white"
                          : "bg-[#F8F4EE] text-[#3B2940]"
                      }`}
                    >

                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>

                    </span>

                  </button>


                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-7">

                      <div className="h-px bg-[#E8DFD2] mb-5" />

                      <p className="text-[#5F5660] leading-8 text-sm font-['Manrope']">
                        {faq.answer}
                      </p>

                    </div>
                  )}

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}
      {/* <section className="py-14 lg:py-14 bg-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-20">

            <div>

              <span className="text-[#C6A15B] contact-section-label">
                Our Services
              </span>

              <h2 className="contact-section-heading mt-4">
                Fertility Care Designed Around You
              </h2>

              <p className="mt-5 contact-body">
                Conceive IVF provides a range of fertility assessment and
                treatment services to support different stages of the
                parenthood journey.
              </p>

              <Link
                to="/"
                className="inline-flex mt-8 items-center gap-2 text-[#3B2940] font-bold font-['Manrope']"
              >
                Explore Conceive IVF
                <span>→</span>
              </Link>

            </div>


            <div className="grid sm:grid-cols-2 gap-4">

              {services.map((service, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-[#E8DFD2] p-5 bg-white hover:border-[#D8C9A8] hover:shadow-[0_10px_30px_rgba(59,41,64,0.05)] transition-all"
                >

                  <div className="w-9 h-9 rounded-full bg-[#F8F4EE] flex items-center justify-center shrink-0">

                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3B2940"
                      strokeWidth="2"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>

                  </div>

                  <span className="text-sm font-semibold text-[#3B2940] font-['Manrope']">
                    {service}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section> */}


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="px-5 sm:px-8 lg:px-10 pt-10 lg:pb-10">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-[32px] bg-[#3B2940] px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center">

            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5" />
            <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-[#C6A15B]/10" />

            <div className="relative z-10 max-w-3xl mx-auto">

              <p className="text-[#E0C98A] uppercase tracking-[0.18em] text-xs font-bold font-['Manrope']">
                Take The Next Step
              </p>

              <h2 className="mt-4 text-white font-['Playfair_Display'] font-semibold leading-tight contact-final-heading">
                Let’s Build Your
                <span className="block">
                  Parenthood Journey Together
                </span>
              </h2>

              <p className="mt-6 text-white/75 leading-8 font-['Manrope']">
                Connect with Conceive IVF and get personalized guidance for
                your fertility journey.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

                <a
                  href="tel:01666226880"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white text-[#3B2940] font-bold font-['Manrope'] hover:bg-[#F8F4EE] transition-all"
                >
                  Call 01666-226880
                </a>

                <a
                  href="https://wa.me/919255278000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-[#C6A15B] text-white font-bold font-['Manrope'] hover:bg-[#B08B48] transition-all"
                >
                  WhatsApp Us
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}