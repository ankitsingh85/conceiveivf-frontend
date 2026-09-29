import { Link } from "react-router-dom";
import imgSp from "../images/img-sp.png";
export default function SemenSpermFreezing() {
  const candidates = [
    {
      number: "01",
      title: "Medical Reasons",
      text: "Men undergoing chemotherapy or radiation therapy, or dealing with conditions such as testicular cancer, autoimmune diseases, or severe infections.",
    },
    {
      number: "02",
      title: "Occupational Risks",
      text: "Men working in high-risk occupations, including military or hazardous environments, where fertility may potentially be compromised.",
    },
    {
      number: "03",
      title: "Age-Related Concerns",
      text: "Men planning to delay fatherhood who want to preserve their sperm for potential future fertility treatment.",
    },
    {
      number: "04",
      title: "Lifestyle Choices",
      text: "Men choosing to preserve fertility for personal reasons, including before undergoing a vasectomy.",
    },
    {
      number: "05",
      title: "Assisted Reproductive Technology",
      text: "Couples using donor sperm or situations where providing a fresh semen sample on the day of treatment may be difficult.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Initial Consultation & Screening",
      text: "The process begins with a detailed consultation with a fertility specialist. Routine blood tests and screening for infectious diseases such as HIV, Hepatitis B, and Hepatitis C are conducted.",
    },
    {
      number: "02",
      title: "Semen Collection",
      text: "Sperm is typically collected through masturbation in a private, sterile environment at the clinic. Alternatives such as TESA or electroejaculation may be considered when required.",
    },
    {
      number: "03",
      title: "Semen Analysis",
      text: "The semen sample is analysed for sperm count, motility, and morphology to assess its quality before freezing.",
    },
    {
      number: "04",
      title: "Sample Preparation",
      text: "The sample is mixed with a cryoprotectant solution designed to protect sperm cells from damage during the freezing process.",
    },
    {
      number: "05",
      title: "Freezing Process",
      text: "The prepared sample is placed into labelled cryovials and gradually cooled before being stored in liquid nitrogen tanks at -196°C.",
    },
    {
      number: "06",
      title: "Secure Storage",
      text: "Frozen sperm can be stored for extended periods. Applicable legal and ethical requirements and individual consent determine storage and future use.",
    },
  ];

  const advantages = [
    {
      title: "Fertility Preservation",
      text: "Provides an option for individuals at risk of infertility due to medical treatments or other circumstances.",
    },
    {
      title: "Convenience in ART",
      text: "Ensures sperm availability for IVF or IUI procedures even when a fresh sample cannot be provided at the time of treatment.",
    },
    {
      title: "Extended Storage",
      text: "Properly preserved sperm can remain stored for an extended period without significant loss of quality.",
    },
    {
      title: "Future Family Planning",
      text: "Allows men to preserve the possibility of using their sperm in future fertility treatment.",
    },
  ];

  const risks = [
    "Some sperm may lose motility or viability during the freezing and thawing process.",
    "Clear consent is required for storage and future use of frozen sperm.",
    "Legal and ethical restrictions may apply depending on the circumstances and intended use.",
    "Long-term storage may involve additional costs.",
  ];

  const features = [
    "Advanced cryopreservation technology",
    "Experienced embryologists and andrologists",
    "Secure, monitored storage tanks with backup systems",
    "Ethical and transparent cost structure",
    "Personalised counselling and support",
  ];

  return (
    <div className="sperm-page">
      <style>{`
        .sperm-page {
          width: 100%;
          background: #ffffff;
          color: #3B2940;
          font-family: "Manrope", Arial, sans-serif;
        }

        .sperm-page *,
        .sperm-page *::before,
        .sperm-page *::after {
          box-sizing: border-box;
        }

        .sperm-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .sperm-display {
          font-family: "Playfair Display", Georgia, serif;
        }

        /* HERO */

        .sperm-hero {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(59, 41, 64, 0.95),
              rgba(59, 41, 64, 0.76)
            ),
            url("https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2000&q=85")
              center/cover no-repeat;
        }

        .sperm-hero-content {
          max-width: 780px;
          padding: 60px 0;
        }

        .sperm-eyebrow {
          display: inline-block;
          color: #E0C98A;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .sperm-hero h1 {
          margin: 14px 0 0;
          color: #ffffff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 54px;
          line-height: 1.12;
          font-weight: 700;
        }

        .sperm-hero h1 span {
          color: #E0C98A;
        }

        .sperm-hero-description {
          max-width: 700px;
          margin-top: 22px;
          color: rgba(255,255,255,0.9);
          font-size: 16px;
          line-height: 1.7;
        }

        .sperm-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          color: rgba(255,255,255,0.78);
          font-size: 14px;
        }

        .sperm-breadcrumb a {
          color: #ffffff;
          font-weight: 700;
          text-decoration: none;
        }

        .sperm-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .sperm-primary-btn,
        .sperm-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 22px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .sperm-primary-btn {
          background: #C6A15B;
          color: #ffffff;
        }

        .sperm-primary-btn:hover {
          background: #B08B48;
          transform: translateY(-2px);
        }

        .sperm-secondary-btn {
          border: 1px solid rgba(255,255,255,0.55);
          color: #ffffff;
          background: rgba(255,255,255,0.08);
        }

        .sperm-secondary-btn:hover {
          background: #ffffff;
          color: #3B2940;
        }

        /* INTRO */

        .sperm-section {
          padding: 40px 0;
        }

        .sperm-intro-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 70px;
          align-items: center;
        }

        .sperm-image-wrapper {
          position: relative;
        }

        .sperm-main-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(24,63,69,0.13);
        }

        .temperature-badge {
          position: absolute;
          right: -24px;
          bottom: 28px;
          width: 145px;
          height: 145px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #C6A15B;
          color: #ffffff;
          text-align: center;
          box-shadow: 0 15px 35px rgba(220,63,115,0.25);
        }

        .temperature-badge strong {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 32px;
          line-height: 1;
        }

        .temperature-badge span {
          margin-top: 7px;
          font-size: 11px;
          line-height: 1.35;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .section-label {
          color: #3B2940;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .section-heading {
          margin: 12px 0 0;
          color: #3B2940;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 36px;
          line-height: 1.2;
          font-weight: 700;
        }

        .section-heading span {
          color: #3B2940;
        }

        .section-text {
          margin-top: 20px;
          color: #5F5660;
          font-size: 16px;
          line-height: 1.7;
        }

        .info-points {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 28px;
        }

        .info-point {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.5;
        }

        .info-check {
          width: 28px;
          height: 28px;
          min-width: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #F8F4EE;
          color: #C6A15B;
          font-weight: 800;
        }

        /* CANDIDATES */

        .cream-section {
          background: #F8F4EE;
        }

        .center-heading {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .center-heading .section-text {
          margin-left: auto;
          margin-right: auto;
        }

        .candidate-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 50px;
        }

        .candidate-card {
          position: relative;
          padding: 30px;
          min-height: 235px;
          border: 1px solid #E8DFD2;
          border-radius: 22px;
          background: #ffffff;
          transition: all 0.3s ease;
        }

        .candidate-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(24,63,69,0.08);
        }

        .card-number {
          color: #C6A15B;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 32px;
          line-height: 1;
          font-weight: 700;
        }

        .candidate-card h3 {
          margin: 18px 0 0;
          color: #3B2940;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 700;
        }

        .candidate-card p {
          margin: 10px 0 0;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.65;
        }

        .candidate-card:nth-child(4) {
          grid-column: 1;
        }

        .candidate-card:nth-child(5) {
          grid-column: 2;
        }

        /* PROCESS */

        .process-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
        }

        .process-header-text {
          max-width: 560px;
        }

        .process-list {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .process-card {
          position: relative;
          padding: 30px;
          border-radius: 22px;
          background: #ffffff;
          border: 1px solid #E8DFD2;
          box-shadow: 0 8px 30px rgba(24,63,69,0.04);
        }

        .process-card::before {
          content: "";
          position: absolute;
          left: 30px;
          top: 0;
          width: 45px;
          height: 4px;
          border-radius: 0 0 5px 5px;
          background: #C6A15B;
        }

        .process-card h3 {
          margin-top: 20px;
          color: #3B2940;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 700;
        }

        .process-card p {
          margin-top: 10px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.65;
        }

        /* ADVANTAGES */

        .advantages-section {
          background: #3B2940;
          color: #ffffff;
        }

        .advantages-section .section-label {
          color: #E0C98A;
        }

        .advantages-section .section-heading {
          color: #ffffff;
        }

        .advantages-section .section-heading span {
          color: #E0C98A;
        }

        .advantages-section .section-text {
          color: rgba(255,255,255,0.85);
        }

        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 45px;
        }

        .advantage-card {
          padding: 28px 22px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          background: rgba(255,255,255,0.09);
        }

        .advantage-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #C6A15B;
          color: #ffffff;
          font-weight: 800;
        }

        .advantage-card h3 {
          margin-top: 18px;
          color: #ffffff;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 700;
        }

        .advantage-card p {
          margin-top: 9px;
          color: rgba(255,255,255,0.78);
          font-size: 14px;
          line-height: 1.65;
        }

        /* RISKS */

        .risks-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 70px;
          align-items: center;
        }

        .risk-image {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 25px;
        }

        .risk-list {
          margin-top: 28px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .risk-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-radius: 14px;
          background: #F8F4EE;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.6;
        }

        .risk-icon {
          width: 26px;
          height: 26px;
          min-width: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #F8F4EE;
          color: #C6A15B;
          font-weight: 800;
        }

        /* CLINIC */

        .clinic-box {
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 60px;
          align-items: center;
          padding: 5px;
          border-radius: 30px;
          background: #F8F4EE;
        }

        .clinic-list {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .clinic-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.5;
        }

        .clinic-feature-icon {
          width: 30px;
          height: 30px;
          min-width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #C6A15B;
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
        }

        .clinic-image {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 22px;
        }

        .clinic-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          padding: 14px 24px;
          border-radius: 10px;
          background: #3B2940;
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .clinic-btn:hover {
          background: #2F2035;
          transform: translateY(-2px);
        }

        /* CTA */

        .final-cta {
          padding: 45px 0;
          background: #ffffff;
        }

        .final-cta-box {
          padding: 65px 30px;
          border-radius: 28px;
          background: #3B2940;
          text-align: center;
        }

        .final-cta-box .section-label {
          color: #E0C98A;
        }

        .final-cta-box h2 {
          max-width: 700px;
          margin: 12px auto 0;
          color: #ffffff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
          line-height: 1.2;
          font-weight: 700;
        }

        .final-cta-box p {
          max-width: 650px;
          margin: 18px auto 0;
          color: rgba(255,255,255,0.78);
          font-size: 16px;
          line-height: 1.7;
        }

        @media (max-width: 1000px) {
          .sperm-intro-grid,
          .risks-grid {
            gap: 45px;
          }

          .candidate-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .candidate-card:nth-child(4),
          .candidate-card:nth-child(5) {
            grid-column: auto;
          }

          .process-list {
            grid-template-columns: repeat(2, 1fr);
          }

          .advantages-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .clinic-box {
            padding: 45px;
          }
        }

        @media (max-width: 800px) {
          .sperm-hero {
            min-height: 410px;
          }

          .sperm-hero-content {
            padding: 80px 0;
          }

          .sperm-hero h1 {
            font-size: 44px;
          }

          .sperm-intro-grid,
          .risks-grid,
          .clinic-box {
            grid-template-columns: 1fr;
          }

          .sperm-main-image {
            height: 450px;
          }

          .risk-image,
          .clinic-image {
            height: 350px;
          }

          .process-header {
            display: block;
          }
        }

        @media (max-width: 600px) {
          .sperm-container {
            padding: 0 18px;
          }

          .sperm-section,
          .final-cta {
            padding: 50px 0;
          }

          .sperm-hero {
            min-height: 390px;
          }

          .sperm-hero-content {
            padding: 65px 0;
          }

          .sperm-hero h1 {
            font-size: 34px;
            line-height: 1.18;
          }

          .sperm-hero-description {
            font-size: 15px;
          }

          .sperm-hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .sperm-primary-btn,
          .sperm-secondary-btn {
            width: 100%;
          }

          .section-heading {
            font-size: 30px;
            line-height: 36px;
          }

          .section-text {
            font-size: 16px;
          }

          .sperm-main-image {
            height: 380px;
            border-radius: 22px;
          }

          .temperature-badge {
            right: 12px;
            bottom: 18px;
            width: 115px;
            height: 115px;
          }

          .temperature-badge strong {
            font-size: 27px;
          }

          .temperature-badge span {
            font-size: 9px;
          }

          .info-points {
            grid-template-columns: 1fr;
          }

          .candidate-grid,
          .process-list,
          .advantages-grid {
            grid-template-columns: 1fr;
          }

          .candidate-card {
            min-height: auto;
          }

          .process-card {
            padding: 25px;
          }

          .risk-image,
          .clinic-image {
            height: 280px;
          }

          .clinic-box {
            padding: 0px 22px;
            border-radius: 22px;
          }

          .final-cta-box {
            padding: 45px 20px;
          }

          .final-cta-box h2 {
            font-size: 30px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="sperm-hero">
        <div className="sperm-container">
          <div className="sperm-hero-content">
            <span className="sperm-eyebrow">
              Conceive IVF Fertility Centre
            </span>

            <h1>
              Semen / Sperm
              <br />
              <span>Freezing</span>
            </h1>

            <p className="sperm-hero-description">
              Preserve your fertility today and keep your options open for
              tomorrow with advanced sperm cryopreservation.
            </p>

            <div className="sperm-hero-buttons">
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("openAppointment"))
                }
                className="sperm-primary-btn"
              >
                Book Appointment →
              </button>

              <a href="#sperm-freezing" className="sperm-secondary-btn">
                Learn More ↓
              </a>
            </div>

            <div className="sperm-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Semen / Sperm Freezing</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS SPERM FREEZING */}
      <section id="sperm-freezing" className="sperm-section">
        <div className="sperm-container">
          <div className="sperm-intro-grid">
            <div className="sperm-image-wrapper">
              <img
                className="sperm-main-image"
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85"
                alt="Sperm freezing and fertility laboratory"
              />

              <div className="temperature-badge">
                <strong>-196°C</strong>
                <span>Liquid<br />Nitrogen</span>
              </div>
            </div>

            <div>
              <span className="section-label">
                What Is Sperm Freezing?
              </span>

              <h2 className="section-heading">
                Preserve your fertility for the{" "}
                <span>future</span>
              </h2>

              <p className="section-text">
                Sperm freezing, also known as cryopreservation, is a procedure
                in which sperm cells are preserved at extremely low
                temperatures in liquid nitrogen.
              </p>

              <p className="section-text">
                The process helps maintain sperm viability for future use and
                allows preserved sperm to be used in fertility treatments such
                as In-Vitro Fertilisation (IVF) or Intrauterine Insemination
                (IUI).
              </p>

              <div className="info-points">
                <div className="info-point">
                  <span className="info-check">✓</span>
                  <span>Fertility preservation option</span>
                </div>

                <div className="info-point">
                  <span className="info-check">✓</span>
                  <span>Stored in liquid nitrogen</span>
                </div>

                <div className="info-point">
                  <span className="info-check">✓</span>
                  <span>Future IVF or IUI use</span>
                </div>

                <div className="info-point">
                  <span className="info-check">✓</span>
                  <span>Secure cryopreservation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD CONSIDER */}
      <section className="sperm-section cream-section">
        <div className="sperm-container">
          <div className="center-heading">
            <span className="section-label">
              Is It Right For You?
            </span>

            <h2 className="section-heading">
              Who should consider{" "}
              <span>sperm freezing?</span>
            </h2>

            <p className="section-text">
              Sperm cryopreservation may be considered in several medical,
              occupational, lifestyle and assisted reproductive situations.
            </p>
          </div>

          <div className="candidate-grid">
            {candidates.map((item) => (
              <div className="candidate-card" key={item.number}>
                <div className="card-number">{item.number}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sperm-section">
        <div className="sperm-container">
          <div className="process-header">
            <div>
              <span className="section-label">
                The Process
              </span>

              <h2 className="section-heading">
                Steps in sperm{" "}
                <span>freezing</span>
              </h2>
            </div>

            <div className="process-header-text">
              <p className="section-text">
                From consultation and semen analysis to cryopreservation and
                storage, each stage follows a structured laboratory process.
              </p>
            </div>
          </div>

          <div className="process-list">
            {steps.map((step) => (
              <div className="process-card" key={step.number}>
                <div className="card-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="sperm-section advantages-section">
        <div className="sperm-container">
          <div className="center-heading">
            <span className="section-label">
              Benefits
            </span>

            <h2 className="section-heading">
              Advantages of{" "}
              <span>sperm freezing</span>
            </h2>

            <p className="section-text">
              Preserving sperm can provide flexibility and an option for future
              fertility treatment when circumstances change.
            </p>
          </div>

          <div className="advantages-grid">
            {advantages.map((item, index) => (
              <div className="advantage-card" key={item.title}>
                <div className="advantage-icon">
                  {index + 1}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISKS */}
      <section className="sperm-section">
        <div className="sperm-container">
          <div className="risks-grid">
            <div>
              <img
                className="risk-image"
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85"
                alt="Fertility laboratory"
              />
            </div>

            <div>
              <span className="section-label">
                Important Considerations
              </span>

              <h2 className="section-heading">
                Risks &{" "}
                <span>limitations</span>
              </h2>

              <p className="section-text">
                Sperm freezing is a widely used fertility preservation
                technique, but there are important considerations related to
                freezing, thawing, storage and future use.
              </p>

              <div className="risk-list">
                {risks.map((risk) => (
                  <div className="risk-item" key={risk}>
                    <span className="risk-icon">!</span>
                    <span>{risk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEIVE IVF */}
      <section className="sperm-section cream-section">
        <div className="sperm-container">
          <div className="clinic-box">
            <div>
              <span className="section-label">
                Why Conceive IVF?
              </span>

              <h2 className="section-heading">
                Sperm freezing with{" "}
                <span>care & precision</span>
              </h2>

              <p className="section-text">
                At Conceive IVF Fertility Centre, sperm freezing is supported
                by cryopreservation technology, experienced laboratory
                professionals, secure storage systems and personalised
                counselling.
              </p>

              <div className="clinic-list">
                {features.map((feature) => (
                  <div className="clinic-feature" key={feature}>
                    <span className="clinic-feature-icon">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="clinic-btn">
                Talk to a Fertility Specialist →
              </Link>
            </div>

            <div>
              <img
  className="clinic-image"
  src={imgSp}
  alt="Conceive IVF fertility laboratory"
/>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="sperm-container">
          <div className="final-cta-box">
            <span className="section-label">
              Your Fertility, Your Future
            </span>

            <h2>
              Take the first step toward preserving your fertility.
            </h2>

            <p>
              Speak with our fertility team to understand whether sperm
              freezing is suitable for your individual circumstances.
            </p>

            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("openAppointment"))
              }
              className="sperm-primary-btn"
            >
              Book Your Appointment →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}