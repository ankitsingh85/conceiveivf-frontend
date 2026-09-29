import { Link } from "react-router-dom";

export default function InfertilityAssessmentFemale() {
  const assessmentSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      text: "A detailed consultation reviews menstrual cycles, ovulation patterns, previous pregnancies, miscarriages, ectopic pregnancies and other reproductive history.",
      points: [
        "Menstrual & ovulation history",
        "Previous pregnancies",
        "Miscarriage or ectopic pregnancy history",
        "Lifestyle and health factors",
      ],
    },
    {
      number: "02",
      title: "Physical Examination",
      text: "A thorough physical evaluation helps identify conditions that may affect fertility, including ovarian cysts, fibroids and other reproductive abnormalities.",
      points: [
        "Reproductive health examination",
        "Assessment for ovarian cysts",
        "Fibroid evaluation",
        "BMI assessment",
      ],
    },
  ];

  const diagnosticTests = [
    {
      number: "01",
      title: "Hormonal Testing",
      text: "Evaluates reproductive hormones such as FSH, LH, AMH, prolactin, estradiol and thyroid hormones to understand ovarian reserve, ovulation and hormonal balance.",
    },
    {
      number: "02",
      title: "Transvaginal Ultrasound",
      text: "Examines the uterus, ovaries and endometrial lining and helps identify fibroids, cysts and abnormalities of the uterine lining.",
    },
    {
      number: "03",
      title: "Hysterosalpingography (HSG)",
      text: "An X-ray based investigation used to assess the fallopian tubes and identify blockages or abnormalities within the uterus.",
    },
    {
      number: "04",
      title: "Ovarian Reserve Testing",
      text: "AMH testing and antral follicle counting through ultrasound can help evaluate ovarian reserve and provide information about egg quantity.",
    },
    {
      number: "05",
      title: "Laparoscopy",
      text: "A minimally invasive procedure that can help detect and treat conditions such as endometriosis, adhesions and pelvic inflammatory disease.",
    },
    {
      number: "06",
      title: "Sonohysterography",
      text: "A saline infusion ultrasound that provides a clearer view of the uterine cavity and can identify polyps, adhesions and other abnormalities.",
    },
    {
      number: "07",
      title: "Cervical Mucus Testing",
      text: "Assesses cervical mucus quality to determine whether it provides a suitable environment for sperm movement and survival.",
    },
    {
      number: "08",
      title: "Endometrial Biopsy",
      text: "Evaluates the uterine lining for receptivity and helps investigate chronic inflammation or infections when clinically indicated.",
    },
  ];

  const reasons = [
    {
      number: "01",
      title: "Experienced Expertise",
      text: "Female fertility evaluation is guided by experienced fertility specialists including Dr. Neha Gupta.",
    },
    {
      number: "02",
      title: "Advanced Diagnostics",
      text: "Modern diagnostic approaches help provide a detailed understanding of reproductive health.",
    },
    {
      number: "03",
      title: "Personalised Care",
      text: "Assessment findings can be used to develop an individualised fertility care plan according to patient needs.",
    },
  ];

  return (
    <div className="female-assessment-page">
      <style>{`
        .female-assessment-page {
          width: 100%;
          background: #fff;
          color: #3B2940;
          font-family: "Manrope", Arial, sans-serif;
        }

        .female-assessment-page *,
        .female-assessment-page *::before,
        .female-assessment-page *::after {
          box-sizing: border-box;
        }

        .female-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* HERO */
        .female-hero {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(47, 32, 53, 0.96) 0%,
              rgba(59, 41, 64, 0.88) 45%,
              rgba(59, 41, 64, 0.48) 100%
            ),
            url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=90")
              center/cover no-repeat;
        }

        .female-hero-content {
          max-width: 760px;
          padding: 60px 0;
        }

        .female-eyebrow {
          display: inline-block;
          color: #E0C98A;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .female-hero h1 {
          margin: 15px 0 0;
          color: #fff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 56px;
          line-height: 1.1;
          font-weight: 700;
        }

        .female-hero h1 span {
          color: #E0C98A;
        }

        .female-hero-description {
          max-width: 680px;
          margin-top: 22px;
          color: rgba(255,255,255,.9);
          font-size: 16px;
          line-height: 1.75;
        }

        .female-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .female-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 24px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all .25s ease;
        }

        .female-btn-primary {
          background: #C6A15B;
          color: #fff;
        }

        .female-btn-primary:hover {
          background: #B08B48;
          transform: translateY(-2px);
        }

        .female-btn-outline {
          color: #fff;
          border: 1px solid rgba(255,255,255,.55);
          background: rgba(255,255,255,.08);
        }

        .female-btn-outline:hover {
          background: #fff;
          color: #C6A15B;
        }

        .female-breadcrumb {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-top: 28px;
          color: rgba(255,255,255,.75);
          font-size: 13px;
        }

        .female-breadcrumb a {
          color: #fff;
          font-weight: 700;
          text-decoration: none;
        }

        /* COMMON */
        .female-section {
          padding: 45px 0;
        }

        .female-soft {
          background: #F8F4EE;
        }

        .female-label {
          display: inline-block;
          color: #C6A15B;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .female-heading {
          margin: 12px 0 0;
          color: #3B2940;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 36px;
          line-height: 1.2;
          font-weight: 700;
        }

        .female-heading span {
          color: #C6A15B;
        }

        .female-text {
          margin-top: 18px;
          color: #5F5660;
          font-size: 16px;
          line-height: 1.75;
        }

        /* INTRO */
        .female-intro {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 70px;
          align-items: center;
        }

        .female-image-wrap {
          position: relative;
        }

        .female-main-image {
          width: 100%;
          height: 510px;
          display: block;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(59,41,64,.14);
        }

        .female-image-badge {
          position: absolute;
          right: -22px;
          bottom: 25px;
          width: 145px;
          height: 145px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          background: #C6A15B;
          color: #fff;
          box-shadow: 0 15px 35px rgba(198,161,91,.25);
        }

        .female-image-badge strong {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 32px;
          line-height: 1;
        }

        .female-image-badge span {
          margin-top: 8px;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .06em;
        }

        .female-check-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 13px;
          margin-top: 28px;
        }

        .female-check {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.5;
        }

        .female-check-icon {
          width: 27px;
          height: 27px;
          min-width: 27px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #F8F4EE;
          color: #C6A15B;
          font-weight: 800;
        }

        /* STEPS */
        .female-center-heading {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .female-step-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
          margin-top: 50px;
        }

        .female-step-card {
          position: relative;
          padding: 35px;
          border-radius: 24px;
          background: #fff;
          border: 1px solid #E8DFD2;
          transition: all .3s ease;
        }

        .female-step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(59,41,64,.08);
        }

        .female-step-number {
          color: #C6A15B;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 40px;
          line-height: 1;
          font-weight: 700;
        }

        .female-step-card h3 {
          margin-top: 18px;
          color: #3B2940;
          font-size: 20px;
          line-height: 1.35;
          font-weight: 700;
        }

        .female-step-card p {
          margin-top: 11px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.7;
        }

        .female-step-points {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-top: 20px;
        }

        .female-step-point {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #5F5660;
          font-size: 13px;
          line-height: 1.5;
        }

        .female-step-point span:first-child {
          color: #C6A15B;
          font-weight: 800;
        }

        /* DIAGNOSTIC */
        .female-diagnostic-header {
          max-width: 760px;
        }

        .female-diagnostic-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 48px;
        }

        .female-diagnostic-card {
          min-height: 270px;
          padding: 27px 22px;
          border-radius: 20px;
          background: #fff;
          border: 1px solid #E8DFD2;
          transition: all .3s ease;
        }

        .female-diagnostic-card:hover {
          transform: translateY(-5px);
          border-color: #E0C98A;
          box-shadow: 0 18px 40px rgba(59,41,64,.07);
        }

        .female-card-number {
          color: #C6A15B;
          font-size: 12px;
          line-height: 18px;
          font-weight: 700;
          letter-spacing: .1em;
        }

        .female-diagnostic-card h3 {
          margin-top: 16px;
          color: #3B2940;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 700;
        }

        .female-diagnostic-card p {
          margin-top: 9px;
          color: #5F5660;
          font-size: 13px;
          line-height: 1.65;
        }

        /* FEATURE BANNER */
        .female-feature {
          padding: 0 0 45px;
        }

        .female-feature-box {
          display: grid;
          grid-template-columns: 1fr .85fr;
          gap: 55px;
          align-items: center;
          padding: 55px;
          border-radius: 30px;
          background: #3B2940;
          overflow: hidden;
        }

        .female-feature-box .female-label {
          color: #E0C98A;
        }

        .female-feature-box .female-heading {
          color: #fff;
        }

        .female-feature-box .female-heading span {
          color: #E0C98A;
        }

        .female-feature-box .female-text {
          color: rgba(255,255,255,.84);
        }

        .female-feature-image {
          width: 100%;
          height: 370px;
          display: block;
          object-fit: cover;
          border-radius: 22px;
        }

        .female-feature-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
          margin-top: 25px;
        }

        .female-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          color: rgba(255,255,255,.9);
          font-size: 14px;
          line-height: 1.5;
        }

        .female-feature-item span:first-child {
          width: 27px;
          height: 27px;
          min-width: 27px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #C6A15B;
          color: #fff;
          font-weight: 800;
        }

        /* WHY US */
        .female-reasons {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 45px;
        }

        .female-reason-card {
          padding: 30px;
          border-radius: 22px;
          border: 1px solid #E8DFD2;
          background: #fff;
        }

        .female-reason-number {
          color: #C6A15B;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 32px;
          line-height: 1;
          font-weight: 700;
        }

        .female-reason-card h3 {
          margin-top: 17px;
          color: #3B2940;
          font-size: 18px;
          font-weight: 700;
        }

        .female-reason-card p {
          margin-top: 9px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.65;
        }

        /* CTA */
        .female-cta {
          padding: 45px 0;
          background: #F8F4EE;
        }

        .female-cta-box {
          padding: 65px 30px;
          border-radius: 30px;
          background: #3B2940;
          text-align: center;
        }

        .female-cta-box .female-label {
          color: #E0C98A;
        }

        .female-cta-box h2 {
          max-width: 760px;
          margin: 12px auto 0;
          color: #fff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
          line-height: 1.2;
          font-weight: 700;
        }

        .female-cta-box p {
          max-width: 650px;
          margin: 18px auto 0;
          color: rgba(255,255,255,.78);
          font-size: 16px;
          line-height: 1.7;
        }

        .female-cta-box .female-btn {
          margin-top: 28px;
        }

        /* RESPONSIVE */
        @media (max-width: 1050px) {
          .female-diagnostic-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .female-intro {
            gap: 45px;
          }
        }

        @media (max-width: 850px) {
          .female-hero {
            min-height: 460px;
          }

          .female-hero h1 {
            font-size: 46px;
          }

          .female-intro,
          .female-feature-box {
            grid-template-columns: 1fr;
          }

          .female-main-image {
            height: 450px;
          }

          .female-feature-image {
            height: 330px;
          }
        }

        @media (max-width: 650px) {
          .female-container {
            padding: 0 18px;
          }

          .female-section {
            padding: 70px 0;
          }

          .female-hero {
            min-height: 430px;
          }

          .female-hero-content {
            padding: 70px 0;
          }

          .female-hero h1 {
            font-size: 35px;
            line-height: 1.18;
          }

          .female-hero-description {
            font-size: 15px;
          }

          .female-hero-buttons {
            flex-direction: column;
          }

          .female-btn {
            width: 100%;
          }

          .female-heading {
            font-size: 30px;
            line-height: 36px;
          }

          .female-text {
            font-size: 15px;
          }

          .female-main-image {
            height: 380px;
            border-radius: 22px;
          }

          .female-image-badge {
            right: 12px;
            bottom: 18px;
            width: 115px;
            height: 115px;
          }

          .female-image-badge strong {
            font-size: 26px;
          }

          .female-image-badge span {
            font-size: 9px;
          }

          .female-check-list {
            grid-template-columns: 1fr;
          }

          .female-step-grid,
          .female-diagnostic-grid,
          .female-reasons {
            grid-template-columns: 1fr;
          }

          .female-step-card {
            padding: 27px;
          }

          .female-diagnostic-card {
            min-height: auto;
          }

          .female-feature {
            padding-bottom: 70px;
          }

          .female-feature-box {
            padding: 30px 22px;
            border-radius: 22px;
          }

          .female-feature-image {
            height: 280px;
            border-radius: 20px;
          }

          .female-cta {
            padding: 70px 0;
          }

          .female-cta-box {
            padding: 45px 20px;
            border-radius: 22px;
          }

          .female-cta-box h2 {
            font-size: 30px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="female-hero">
        <div className="female-container">
          <div className="female-hero-content">
            <span className="female-eyebrow">
              Conceive IVF Fertility Centre
            </span>

            <h1>
              Female Infertility
              <br />
              <span>Assessment</span>
            </h1>

            <p className="female-hero-description">
              A comprehensive evaluation designed to understand the factors
              that may affect conception and create a personalised fertility
              care plan.
            </p>

            <div className="female-hero-buttons">
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("openAppointment"))
                }
                className="female-btn female-btn-primary"
              >
                Book Appointment →
              </button>

              <a
                href="#assessment-process"
                className="female-btn female-btn-outline"
              >
                Explore Assessment ↓
              </a>
            </div>

            <div className="female-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Female Infertility Assessment</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="female-section">
        <div className="female-container">
          <div className="female-intro">
            <div className="female-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90"
                alt="Female fertility consultation"
                className="female-main-image"
              />

              <div className="female-image-badge">
                <strong>360°</strong>
                <span>
                  Fertility
                  <br />
                  Assessment
                </span>
              </div>
            </div>

            <div>
              <span className="female-label">
                Understanding Female Infertility
              </span>

              <h2 className="female-heading">
                A clearer understanding of your{" "}
                <span>fertility health</span>
              </h2>

              <p className="female-text">
                Assessing female infertility involves a series of evaluations
                to identify and address factors that may prevent conception.
                At Conceive IVF, the assessment approach combines detailed
                consultation, physical examination and appropriate diagnostic
                testing.
              </p>

              <p className="female-text">
                The aim is to understand individual reproductive health and
                provide personalised guidance based on the findings.
              </p>

              <div className="female-check-list">
                <div className="female-check">
                  <span className="female-check-icon">✓</span>
                  <span>Detailed reproductive history</span>
                </div>

                <div className="female-check">
                  <span className="female-check-icon">✓</span>
                  <span>Hormonal evaluation</span>
                </div>

                <div className="female-check">
                  <span className="female-check-icon">✓</span>
                  <span>Ultrasound assessment</span>
                </div>

                <div className="female-check">
                  <span className="female-check-icon">✓</span>
                  <span>Individualised fertility planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="assessment-process"
        className="female-section female-soft"
      >
        <div className="female-container">
          <div className="female-center-heading">
            <span className="female-label">
              Step-by-Step Process
            </span>

            <h2 className="female-heading">
              How female infertility is{" "}
              <span>assessed</span>
            </h2>

            <p className="female-text">
              The assessment begins with understanding your medical and
              reproductive history before moving to physical examination and
              diagnostic investigations when required.
            </p>
          </div>

          <div className="female-step-grid">
            {assessmentSteps.map((step) => (
              <div className="female-step-card" key={step.number}>
                <div className="female-step-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

                <div className="female-step-points">
                  {step.points.map((point) => (
                    <div
                      className="female-step-point"
                      key={point}
                    >
                      <span>✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC TESTING */}
      <section className="female-section">
        <div className="female-container">
          <div className="female-diagnostic-header">
            <span className="female-label">
              Diagnostic Testing
            </span>

            <h2 className="female-heading">
              Investigations that help reveal{" "}
              <span>fertility factors</span>
            </h2>

            <p className="female-text">
              Depending on the individual situation, fertility specialists may
              recommend different investigations to understand ovarian
              function, the uterus, fallopian tubes and other reproductive
              factors.
            </p>
          </div>

          <div className="female-diagnostic-grid">
            {diagnosticTests.map((test) => (
              <div
                className="female-diagnostic-card"
                key={test.number}
              >
                <div className="female-card-number">
                  {test.number}
                </div>

                <h3>{test.title}</h3>

                <p>{test.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className="female-feature">
        <div className="female-container">
          <div className="female-feature-box">
            <div>
              <span className="female-label">
                Personalised Fertility Care
              </span>

              <h2 className="female-heading">
                Every fertility journey deserves a{" "}
                <span>personalised approach</span>
              </h2>

              <p className="female-text">
                Female infertility can involve different factors. A
                comprehensive assessment helps specialists understand the
                individual situation and decide which investigations and
                treatment options may be appropriate.
              </p>

              <div className="female-feature-list">
                <div className="female-feature-item">
                  <span>✓</span>
                  <span>
                    Detailed assessment of reproductive history
                  </span>
                </div>

                <div className="female-feature-item">
                  <span>✓</span>
                  <span>
                    Advanced diagnostic investigations
                  </span>
                </div>

                <div className="female-feature-item">
                  <span>✓</span>
                  <span>
                    Specialist-led interpretation of findings
                  </span>
                </div>

                <div className="female-feature-item">
                  <span>✓</span>
                  <span>
                    Personalised fertility treatment planning
                  </span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1100&q=90"
                alt="Fertility specialist consultation"
                className="female-feature-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CONCEIVE IVF */}
      <section className="female-section female-soft">
        <div className="female-container">
          <div className="female-center-heading">
            <span className="female-label">
              Why Choose Conceive IVF
            </span>

            <h2 className="female-heading">
              Care built around your{" "}
              <span>fertility journey</span>
            </h2>

            <p className="female-text">
              Conceive IVF provides a comprehensive approach to female
              infertility assessment, from evaluation through personalised
              fertility planning.
            </p>
          </div>

          <div className="female-reasons">
            {reasons.map((reason) => (
              <div
                className="female-reason-card"
                key={reason.number}
              >
                <div className="female-reason-number">
                  {reason.number}
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="female-cta">
        <div className="female-container">
          <div className="female-cta-box">
            <span className="female-label">
              Conceive IVF Fertility Centre
            </span>

            <h2>
              Take the first step towards understanding your fertility.
            </h2>

            <p>
              Connect with our fertility team for a personalised consultation
              and understand which assessment options may be suitable for you.
            </p>

            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("openAppointment"))
              }
              className="female-btn female-btn-primary"
            >
              Book Your Consultation →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}