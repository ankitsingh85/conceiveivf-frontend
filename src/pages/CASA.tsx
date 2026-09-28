import { Link } from "react-router-dom";

export default function CASA() {
  const parameters = [
    {
      number: "01",
      title: "Concentration",
      text: "Determines the number of sperm cells per milliliter of semen and helps identify low sperm count.",
    },
    {
      number: "02",
      title: "Motility",
      text: "Assesses sperm movement and categorizes sperm as progressively motile, non-progressively motile, or immotile.",
    },
    {
      number: "03",
      title: "Morphology",
      text: "Analyses the shape and structure of sperm to identify abnormalities.",
    },
    {
      number: "04",
      title: "Velocity & Kinetics",
      text: "Measures sperm speed and movement trajectory and provides information about sperm movement patterns.",
    },
    {
      number: "05",
      title: "Viability",
      text: "Distinguishes live sperm from dead sperm using specialized assessment techniques.",
    },
    {
      number: "06",
      title: "DNA Integrity",
      text: "Some CASA systems can assess DNA fragmentation, an important factor related to sperm fertilizing ability.",
    },
  ];

  const purposes = [
    {
      number: "01",
      title: "Sperm Quality Assessment",
      text: "CASA evaluates important semen parameters to determine the potential fertility of the male partner.",
    },
    {
      number: "02",
      title: "Treatment Planning",
      text: "CASA results can help fertility specialists determine an appropriate treatment approach such as IVF or ICSI.",
    },
    {
      number: "03",
      title: "Monitoring Progress",
      text: "CASA can help monitor changes in sperm quality over time, particularly when lifestyle or medical interventions are being used.",
    },
  ];

  const advantages = [
    {
      title: "Precision",
      text: "Automated and objective analysis helps reduce human error during semen assessment.",
    },
    {
      title: "Efficiency",
      text: "Computer-assisted analysis can provide results faster than traditional manual assessment.",
    },
    {
      title: "Repeatability",
      text: "Consistent measurements allow reliable comparison of semen parameters over time.",
    },
    {
      title: "Detailed Insights",
      text: "CASA can generate comprehensive information that may not be available through basic manual analysis.",
    },
  ];

  const facilityPoints = [
    "Accurate and objective male fertility diagnostics",
    "Advanced semen analysis technology",
    "Experienced fertility and laboratory professionals",
    "Personalised treatment planning",
    "Support for IVF and ICSI treatment decisions",
  ];

  return (
    <div className="casa-page">
      <style>{`
        .casa-page {
          width: 100%;
          background: #FFFFFF;
          color: #3B2940;
          font-family: "Manrope", Arial, sans-serif;
        }

        .casa-page *,
        .casa-page *::before,
        .casa-page *::after {
          box-sizing: border-box;
        }

        .casa-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* =========================
           HERO
        ========================= */

        .casa-hero {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(59, 41, 64, 0.96),
              rgba(59, 41, 64, 0.72)
            ),
            url("https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=2000&q=90")
              center/cover no-repeat;
        }

        .casa-hero-content {
          max-width: 800px;
          padding: 60px 0;
        }

        .casa-eyebrow {
          display: inline-block;
          color: #E0C98A;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .casa-hero h1 {
          margin: 14px 0 0;
          color: #FFFFFF;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 56px;
          line-height: 1.12;
          font-weight: 700;
        }

        .casa-hero h1 span {
          color: #E0C98A;
        }

        .casa-hero-description {
          max-width: 700px;
          margin-top: 22px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          line-height: 1.7;
        }

        .casa-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
        }

        .casa-breadcrumb a {
          color: #FFFFFF;
          font-weight: 700;
          text-decoration: none;
        }

        .casa-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .casa-btn {
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

        .casa-btn-primary {
          background: #C6A15B;
          color: #FFFFFF;
        }

        .casa-btn-primary:hover {
          background: #B08B48;
          transform: translateY(-2px);
        }

        .casa-btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.55);
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
        }

        .casa-btn-secondary:hover {
          background: #FFFFFF;
          color: #3B2940;
        }

        /* =========================
           COMMON
        ========================= */

        .casa-section {
          padding: 45px 0;
        }

        .casa-cream {
          background: #F8F4EE;
        }

        .casa-label {
          color: #3B2940;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .casa-heading {
          margin: 12px 0 0;
          color: #3B2940;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 36px;
          line-height: 1.2;
          font-weight: 700;
        }

        .casa-heading span {
          color: #3B2940;
        }

        .casa-text {
          margin-top: 20px;
          color: #5F5660;
          font-size: 16px;
          line-height: 1.7;
        }

        /* =========================
           INTRO
        ========================= */

        .casa-intro {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 70px;
          align-items: center;
        }

        .casa-image-wrap {
          position: relative;
        }

        .casa-main-image {
          width: 100%;
          height: 500px;
          display: block;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(59, 41, 64, 0.14);
        }

        .casa-badge {
          position: absolute;
          right: -25px;
          bottom: 28px;
          width: 145px;
          height: 145px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #C6A15B;
          color: #FFFFFF;
          text-align: center;
          box-shadow: 0 15px 35px rgba(198, 161, 91, 0.25);
        }

        .casa-badge strong {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 34px;
          line-height: 1;
        }

        .casa-badge span {
          margin-top: 7px;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .casa-check-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 28px;
        }

        .casa-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.5;
        }

        .casa-check {
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

        /* =========================
           PURPOSE
        ========================= */

        .casa-center-heading {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .casa-purpose-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 50px;
        }

        .casa-purpose-card {
          padding: 32px;
          min-height: 250px;
          border: 1px solid #E8DFD2;
          border-radius: 22px;
          background: #FFFFFF;
          transition: all 0.3s ease;
        }

        .casa-purpose-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(59, 41, 64, 0.08);
        }

        .casa-number {
          color: #C6A15B;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 34px;
          line-height: 1;
          font-weight: 700;
        }

        .casa-purpose-card h3 {
          margin-top: 18px;
          color: #3B2940;
          font-size: 18px;
          line-height: 1.35;
          font-weight: 700;
        }

        .casa-purpose-card p {
          margin-top: 10px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.65;
        }

        /* =========================
           PARAMETERS
        ========================= */

        .parameters-layout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 65px;
          align-items: center;
        }

        .parameters-image {
          width: 100%;
          height: 470px;
          display: block;
          object-fit: cover;
          border-radius: 26px;
        }

        .parameter-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 30px;
        }

        .parameter-card {
          padding: 24px;
          border-radius: 18px;
          border: 1px solid #E8DFD2;
          background: #FFFFFF;
        }

        .parameter-card h3 {
          margin-top: 14px;
          color: #3B2940;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 700;
        }

        .parameter-card p {
          margin-top: 8px;
          color: #5F5660;
          font-size: 13px;
          line-height: 1.6;
        }

        .parameter-small-number {
          color: #3B2940;
          font-size: 12px;
          line-height: 18px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        /* =========================
           ADVANTAGES
        ========================= */

        .casa-advantages {
          background: #3B2940;
          color: #FFFFFF;
        }

        .casa-advantages .casa-label {
          color: #bcecef;
        }

        .casa-advantages .casa-heading {
          color: #FFFFFF;
        }

        .casa-advantages .casa-heading span {
          color: #E0C98A;
        }

        .casa-advantages .casa-text {
          color: rgba(255, 255, 255, 0.84);
        }

        .advantage-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 45px;
        }

        .advantage-card {
          padding: 28px 22px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.09);
        }

        .advantage-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #C6A15B;
          color: #FFFFFF;
          font-weight: 800;
        }

        .advantage-card h3 {
          margin-top: 18px;
          color: #FFFFFF;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 700;
        }

        .advantage-card p {
          margin-top: 9px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 14px;
          line-height: 1.65;
        }

        /* =========================
           CLINIC
        ========================= */

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
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 28px;
        }

        .clinic-feature {
          display: flex;
          align-items: flex-start;
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
          color: #FFFFFF;
          font-size: 13px;
          font-weight: 800;
        }

        .clinic-image {
          width: 100%;
          height: 390px;
          display: block;
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
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .clinic-btn:hover {
          background: #2F2035;
          transform: translateY(-2px);
        }

        /* =========================
           CTA
        ========================= */

        .casa-final-cta {
          padding: 45px 0;
          background: #F8F4EE;
        }

        .casa-final-box {
          padding: 65px 30px;
          border-radius: 28px;
          background: #3B2940;
          text-align: center;
        }

        .casa-final-box .casa-label {
          color: #bcecef;
        }

        .casa-final-box h2 {
          max-width: 720px;
          margin: 12px auto 0;
          color: #FFFFFF;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
          line-height: 1.2;
          font-weight: 700;
        }

        .casa-final-box p {
          max-width: 650px;
          margin: 18px auto 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 16px;
          line-height: 1.7;
        }

        .casa-final-box .casa-btn {
          margin-top: 28px;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 1000px) {
          .casa-intro {
            gap: 45px;
          }

          .casa-purpose-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .advantage-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .parameters-layout {
            gap: 45px;
          }

          .clinic-box {
            padding: 45px;
          }
        }

        @media (max-width: 800px) {
          .casa-hero {
            min-height: 420px;
          }

          .casa-hero-content {
            padding: 80px 0;
          }

          .casa-hero h1 {
            font-size: 44px;
          }

          .casa-intro,
          .parameters-layout,
          .clinic-box {
            grid-template-columns: 1fr;
          }

          .casa-main-image {
            height: 450px;
          }

          .parameters-image,
          .clinic-image {
            height: 350px;
          }
        }

        @media (max-width: 600px) {
          .casa-container {
            padding: 0 18px;
          }

          .casa-section,
          .casa-final-cta {
            padding: 70px 0;
          }

          .casa-hero {
            min-height: 390px;
          }

          .casa-hero-content {
            padding: 65px 0;
          }

          .casa-hero h1 {
            font-size: 34px;
            line-height: 1.18;
          }

          .casa-hero-description {
            font-size: 15px;
          }

          .casa-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .casa-btn {
            width: 100%;
          }

          .casa-heading {
            font-size: 30px;
            line-height: 36px;
          }

          .casa-text {
            font-size: 16px;
          }

          .casa-main-image {
            height: 380px;
            border-radius: 22px;
          }

          .casa-badge {
            right: 12px;
            bottom: 18px;
            width: 115px;
            height: 115px;
          }

          .casa-badge strong {
            font-size: 27px;
          }

          .casa-badge span {
            font-size: 9px;
          }

          .casa-check-grid {
            grid-template-columns: 1fr;
          }

          .casa-purpose-grid,
          .parameter-grid,
          .advantage-grid {
            grid-template-columns: 1fr;
          }

          .casa-purpose-card {
            min-height: auto;
          }

          .parameters-image,
          .clinic-image {
            height: 280px;
            border-radius: 22px;
          }

          .clinic-box {
            padding: 32px 22px;
            border-radius: 22px;
          }

          .casa-final-box {
            padding: 45px 20px;
          }

          .casa-final-box h2 {
            font-size: 30px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="casa-hero">
        <div className="casa-container">
          <div className="casa-hero-content">
            <span className="casa-eyebrow">
              Conceive IVF Fertility Centre
            </span>

            <h1>
              Computer-Assisted
              <br />
              <span>Semen Analysis</span>
            </h1>

            <p className="casa-hero-description">
              Advanced computer-assisted semen analysis designed to provide
              objective and detailed information about sperm quality and male
              reproductive health.
            </p>

            <div className="casa-buttons">
              <Link
                to="/contact"
                className="casa-btn casa-btn-primary"
              >
                Book Appointment →
              </Link>

              <a
                href="#what-is-casa"
                className="casa-btn casa-btn-secondary"
              >
                Explore CASA ↓
              </a>
            </div>

            <div className="casa-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>CASA</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CASA */}
      <section
        id="what-is-casa"
        className="casa-section"
      >
        <div className="casa-container">
          <div className="casa-intro">
            <div className="casa-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1100&q=90"
                alt="Computer assisted semen analysis laboratory"
                className="casa-main-image"
              />

              <div className="casa-badge">
                <strong>CASA</strong>
                <span>
                  Advanced
                  <br />
                  Analysis
                </span>
              </div>
            </div>

            <div>
              <span className="casa-label">
                What Is CASA?
              </span>

              <h2 className="casa-heading">
                Objective analysis for a clearer view of{" "}
                <span>sperm quality</span>
              </h2>

              <p className="casa-text">
                CASA stands for Computer-Assisted Semen Analysis. It is a
                state-of-the-art system that uses advanced computer imaging and
                software to analyse semen samples with precision.
              </p>

              <p className="casa-text">
                Unlike traditional manual methods, CASA provides automated and
                objective measurements of important semen parameters, helping
                fertility specialists obtain a clearer picture of male
                reproductive health.
              </p>

              <div className="casa-check-grid">
                <div className="casa-check-item">
                  <span className="casa-check">✓</span>
                  <span>Computer-assisted analysis</span>
                </div>

                <div className="casa-check-item">
                  <span className="casa-check">✓</span>
                  <span>Objective semen assessment</span>
                </div>

                <div className="casa-check-item">
                  <span className="casa-check">✓</span>
                  <span>Detailed sperm measurements</span>
                </div>

                <div className="casa-check-item">
                  <span className="casa-check">✓</span>
                  <span>Support for fertility planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="casa-section casa-cream">
        <div className="casa-container">
          <div className="casa-center-heading">
            <span className="casa-label">
              Purpose of CASA in IVF
            </span>

            <h2 className="casa-heading">
              How CASA supports{" "}
              <span>fertility care</span>
            </h2>

            <p className="casa-text">
              CASA can play an important role in identifying male-factor
              infertility, assessing sperm quality and supporting treatment
              planning.
            </p>
          </div>

          <div className="casa-purpose-grid">
            {purposes.map((item) => (
              <div
                className="casa-purpose-card"
                key={item.number}
              >
                <div className="casa-number">
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARAMETERS */}
      <section className="casa-section">
        <div className="casa-container">
          <div className="parameters-layout">
            <div>
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1100&q=90"
                alt="Semen analysis laboratory testing"
                className="parameters-image"
              />
            </div>

            <div>
              <span className="casa-label">
                Detailed Assessment
              </span>

              <h2 className="casa-heading">
                Key parameters measured by{" "}
                <span>CASA</span>
              </h2>

              <p className="casa-text">
                CASA evaluates multiple semen and sperm characteristics to
                provide detailed information that can support fertility
                assessment and treatment decisions.
              </p>

              <div className="parameter-grid">
                {parameters.map((item) => (
                  <div
                    className="parameter-card"
                    key={item.number}
                  >
                    <div className="parameter-small-number">
                      {item.number}
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="casa-section casa-advantages">
        <div className="casa-container">
          <div className="casa-center-heading">
            <span className="casa-label">
              Benefits
            </span>

            <h2 className="casa-heading">
              Advantages of{" "}
              <span>CASA</span>
            </h2>

            <p className="casa-text">
              Computer-assisted analysis offers several advantages compared
              with conventional manual semen assessment.
            </p>
          </div>

          <div className="advantage-grid">
            {advantages.map((item, index) => (
              <div
                className="advantage-card"
                key={item.title}
              >
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

      {/* CONCEIVE IVF */}
      <section className="casa-section casa-cream">
        <div className="casa-container">
          <div className="clinic-box">
            <div>
              <span className="casa-label">
                CASA at Conceive IVF
              </span>

              <h2 className="casa-heading">
                Advanced diagnostics with{" "}
                <span>personalised care</span>
              </h2>

              <p className="casa-text">
                At Conceive IVF, CASA can form an important part of the male
                fertility evaluation process. The information obtained from
                semen analysis can help specialists understand sperm
                characteristics and plan treatment according to individual
                needs.
              </p>

              <div className="clinic-list">
                {facilityPoints.map((point) => (
                  <div
                    className="clinic-feature"
                    key={point}
                  >
                    <span className="clinic-feature-icon">
                      ✓
                    </span>

                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="clinic-btn"
              >
                Talk to a Fertility Specialist →
              </Link>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1100&q=90"
                alt="Advanced fertility laboratory"
                className="clinic-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="casa-final-cta">
        <div className="casa-container">
          <div className="casa-final-box">
            <span className="casa-label">
              Conceive IVF Fertility Centre
            </span>

            <h2>
              Get a clearer understanding of male fertility with advanced
              semen analysis.
            </h2>

            <p>
              Speak with our fertility team to understand whether CASA-based
              semen analysis is appropriate for your fertility evaluation.
            </p>

            <Link
              to="/contact"
              className="casa-btn casa-btn-primary"
            >
              Book Your Appointment →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}