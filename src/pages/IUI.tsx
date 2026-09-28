import { Link } from "react-router-dom";

export default function IUI() {
  const steps = [
    {
      number: "01",
      title: "Ovarian Stimulation",
      text: "In some cases, fertility medicines may be used to stimulate ovulation and increase the number of available eggs. Ultrasound and blood tests help monitor follicle development.",
    },
    {
      number: "02",
      title: "Monitoring",
      text: "Regular monitoring helps assess follicle growth and hormone levels and determine the appropriate time for ovulation and insemination.",
    },
    {
      number: "03",
      title: "Sperm Collection & Preparation",
      text: "A sperm sample is collected and specially washed and concentrated to separate healthy, motile sperm from seminal fluid and other impurities.",
    },
    {
      number: "04",
      title: "Timing",
      text: "The IUI procedure is carefully timed with ovulation. The source page notes that ovulation commonly occurs 36–48 hours after an ovulation-triggering injection such as hCG.",
    },
    {
      number: "05",
      title: "Insemination",
      text: "A thin, flexible catheter is used to place the prepared sperm directly into the uterus. The procedure is generally quick and does not require anaesthesia.",
    },
    {
      number: "06",
      title: "Post-Procedure",
      text: "A short period of rest may be advised after insemination. Normal activities can usually be resumed, while strenuous activities should be avoided.",
    },
    {
      number: "07",
      title: "Pregnancy Test",
      text: "Around two weeks after IUI, a blood pregnancy test can be performed. A urine pregnancy test may also be used if the period is delayed.",
    },
  ];

  const suitableFor = [
    "Unexplained infertility",
    "Cervical mucus problems",
    "Mild male-factor infertility",
    "Reduced sperm count or motility",
    "Selected ovulatory disorders such as PCOS",
    "Sexual dysfunction",
    "Use of frozen sperm",
    "Selected serodiscordant situations",
  ];

  const advantages = [
    {
      number: "01",
      title: "Simple Procedure",
      text: "IUI is a relatively simple and less invasive fertility treatment compared with more advanced assisted reproductive procedures.",
    },
    {
      number: "02",
      title: "Cost-Effective",
      text: "The source describes IUI as a relatively affordable treatment option for couples who meet the appropriate clinical criteria.",
    },
    {
      number: "03",
      title: "Minimal Recovery",
      text: "The procedure generally requires little recovery time, allowing patients to return to normal activities soon afterwards.",
    },
    {
      number: "04",
      title: "Precise Timing",
      text: "IUI coordinates prepared sperm placement with ovulation to improve the opportunity for fertilisation.",
    },
  ];

  const risks = [
    {
      number: "01",
      title: "Multiple Pregnancy",
      text: "The chance of twins or higher-order multiple pregnancy can increase, particularly when ovulation-stimulating medicines are used.",
    },
    {
      number: "02",
      title: "Infection",
      text: "There is a small risk of infection associated with the insemination procedure.",
    },
    {
      number: "03",
      title: "OHSS",
      text: "Ovarian hyperstimulation syndrome can occur as a complication of fertility medicines used for ovarian stimulation.",
    },
  ];

  return (
    <div className="iui-page">
      <style>{`
        .iui-page {
          width: 100%;
          background: #fff;
          color: #3B2940;
          font-family: "Manrope", Arial, sans-serif;
        }

        .iui-page *,
        .iui-page *::before,
        .iui-page *::after {
          box-sizing: border-box;
        }

        .iui-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* =========================
           HERO
        ========================= */

        .iui-hero {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          overflow: hidden;

          background:
            linear-gradient(
              90deg,
              rgba(59, 41, 64, .97) 0%,
              rgba(47, 32, 53, .90) 45%,
              rgba(47, 32, 53, .42) 100%
            ),
            url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=90")
              center/cover no-repeat;
        }

        .iui-hero-content {
          max-width: 790px;
          padding: 65px 0;
        }

        .iui-eyebrow {
          display: inline-block;
          color: #E0C98A;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .iui-hero h1 {
          margin: 15px 0 0;
          color: #fff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 56px;
          line-height: 1.1;
          font-weight: 700;
        }

        .iui-hero h1 span {
          color: #E0C98A;
        }

        .iui-hero-description {
          max-width: 700px;
          margin-top: 22px;
          color: rgba(255,255,255,.9);
          font-size: 16px;
          line-height: 1.75;
        }

        .iui-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .iui-btn {
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

        .iui-btn-primary {
          background: #C6A15B;
          color: #fff;
        }

        .iui-btn-primary:hover {
          background: #B08B48;
          transform: translateY(-2px);
        }

        .iui-btn-outline {
          color: #fff;
          border: 1px solid rgba(255,255,255,.55);
          background: rgba(255,255,255,.08);
        }

        .iui-btn-outline:hover {
          background: #fff;
          color: #C6A15B;
        }

        .iui-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          color: rgba(255,255,255,.75);
          font-size: 13px;
        }

        .iui-breadcrumb a {
          color: #fff;
          font-weight: 700;
          text-decoration: none;
        }

        /* =========================
           COMMON
        ========================= */

        .iui-section {
          padding: 45px 0;
        }

        .iui-soft {
          background: #F8F4EE;
        }

        .iui-label {
          display: inline-block;
          color: #C6A15B;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .iui-heading {
          margin: 12px 0 0;
          color: #3B2940;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 36px;
          line-height: 1.2;
          font-weight: 700;
        }

        .iui-heading span {
          color: #C6A15B;
        }

        .iui-text {
          margin-top: 18px;
          color: #5F5660;
          font-size: 16px;
          line-height: 1.75;
        }

        .iui-center {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        /* =========================
           INTRO
        ========================= */

        .iui-intro {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 70px;
          align-items: center;
        }

        .iui-image-wrap {
          position: relative;
        }

        .iui-main-image {
          width: 100%;
          height: 510px;
          display: block;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(59,41,64,.14);
        }

        .iui-badge {
          position: absolute;
          right: -22px;
          bottom: 25px;
          width: 145px;
          height: 145px;

          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          border-radius: 50%;
          background: #C6A15B;
          color: #fff;
          text-align: center;
          box-shadow: 0 15px 35px rgba(198,161,91,.25);
        }

        .iui-badge strong {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 32px;
          line-height: 1;
        }

        .iui-badge span {
          margin-top: 8px;
          font-size: 9px;
          line-height: 1.4;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .06em;
        }

        .iui-check-list {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 13px;
          margin-top: 28px;
        }

        .iui-check {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.5;
        }

        .iui-check-icon {
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

        /* =========================
           WHAT IS IUI
        ========================= */

        .iui-what-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .iui-what-image {
          width: 100%;
          height: 430px;
          display: block;
          object-fit: cover;
          border-radius: 25px;
        }

        .iui-highlight {
          margin-top: 25px;
          padding: 22px 24px;
          border-left: 4px solid #C6A15B;
          border-radius: 0 14px 14px 0;
          background: #F8F4EE;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.7;
        }

        /* =========================
           STEPS
        ========================= */

        .iui-step-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
          margin-top: 50px;
        }

        .iui-step-card {
          min-height: 270px;
          padding: 30px;
          border-radius: 22px;
          border: 1px solid #E8DFD2;
          background: #fff;
          transition: all .3s ease;
        }

        .iui-step-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(59,41,64,.08);
        }

        .iui-step-number {
          color: #C6A15B;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
          line-height: 1;
          font-weight: 700;
        }

        .iui-step-card h3 {
          margin-top: 18px;
          color: #3B2940;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 700;
        }

        .iui-step-card p {
          margin-top: 10px;
          color: #5F5660;
          font-size: 13px;
          line-height: 1.7;
        }

        /* =========================
           WHEN TO PREFER IUI
        ========================= */

        .iui-prefer {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 65px;
          align-items: center;
        }

        .iui-prefer-image {
          width: 100%;
          height: 500px;
          display: block;
          object-fit: cover;
          border-radius: 26px;
        }

        .iui-suitable-list {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 13px;
          margin-top: 28px;
        }

        .iui-suitable-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.5;
        }

        .iui-suitable-icon {
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
           ADVANTAGES
        ========================= */

        .iui-advantage-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 18px;
          margin-top: 48px;
        }

        .iui-advantage-card {
          padding: 28px 22px;
          min-height: 245px;
          border-radius: 20px;
          border: 1px solid #E8DFD2;
          background: #fff;
          transition: all .3s ease;
        }

        .iui-advantage-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(59,41,64,.07);
        }

        .iui-number {
          color: #C6A15B;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .1em;
        }

        .iui-advantage-card h3 {
          margin-top: 16px;
          color: #3B2940;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 700;
        }

        .iui-advantage-card p {
          margin-top: 9px;
          color: #5F5660;
          font-size: 13px;
          line-height: 1.65;
        }

        /* =========================
           RISKS
        ========================= */

        .iui-risk-section {
          background: #2F2035;
        }

        .iui-risk-section .iui-label {
          color: #E0C98A;
        }

        .iui-risk-section .iui-heading {
          color: #fff;
        }

        .iui-risk-section .iui-heading span {
          color: #E0C98A;
        }

        .iui-risk-section .iui-text {
          color: rgba(255,255,255,.82);
        }

        .iui-risk-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
          margin-top: 45px;
        }

        .iui-risk-card {
          padding: 30px 24px;
          border-radius: 20px;
          background: rgba(255,255,255,.09);
          border: 1px solid rgba(255,255,255,.14);
        }

        .iui-risk-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #C6A15B;
          color: #fff;
          font-weight: 800;
        }

        .iui-risk-card h3 {
          margin-top: 18px;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
        }

        .iui-risk-card p {
          margin-top: 9px;
          color: rgba(255,255,255,.76);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =========================
           SUCCESS RATE
        ========================= */

        .iui-success {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 65px;
          align-items: center;
        }

        .iui-success-image {
          width: 100%;
          height: 430px;
          display: block;
          object-fit: cover;
          border-radius: 26px;
        }

        .iui-rate-box {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          margin-top: 28px;
          padding: 18px 22px;
          border-radius: 18px;
          background: #F8F4EE;
        }

        .iui-rate-number {
          color: #C6A15B;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 42px;
          line-height: 1;
          font-weight: 700;
        }

        .iui-rate-label {
          color: #5F5660;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 600;
        }

        .iui-success-note {
          margin-top: 22px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.7;
        }

        /* =========================
           CTA
        ========================= */

        .iui-cta {
          padding: 40px 0;
          background: #F8F4EE;
        }

        .iui-cta-box {
          padding: 65px 30px;
          border-radius: 30px;
          background: #3B2940;
          text-align: center;
        }

        .iui-cta-box .iui-label {
          color: #E0C98A;
        }

        .iui-cta-box h2 {
          max-width: 760px;
          margin: 12px auto 0;
          color: #fff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
          line-height: 1.2;
          font-weight: 700;
        }

        .iui-cta-box p {
          max-width: 650px;
          margin: 18px auto 0;
          color: rgba(255,255,255,.78);
          font-size: 16px;
          line-height: 1.7;
        }

        .iui-cta-box .iui-btn {
          margin-top: 28px;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 1050px) {
          .iui-step-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .iui-advantage-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .iui-intro,
          .iui-prefer,
          .iui-success {
            gap: 45px;
          }
        }

        @media (max-width: 850px) {
          .iui-hero {
            min-height: 470px;
          }

          .iui-hero h1 {
            font-size: 46px;
          }

          .iui-intro,
          .iui-what-box,
          .iui-prefer,
          .iui-success {
            grid-template-columns: 1fr;
          }

          .iui-main-image {
            height: 450px;
          }

          .iui-what-image,
          .iui-success-image {
            height: 350px;
          }

          .iui-prefer-image {
            height: 380px;
          }

          .iui-risk-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .iui-container {
            padding: 0 18px;
          }

          .iui-section {
            padding: 70px 0;
          }

          .iui-hero {
            min-height: 430px;
          }

          .iui-hero-content {
            padding: 70px 0;
          }

          .iui-hero h1 {
            font-size: 35px;
            line-height: 1.18;
          }

          .iui-hero-description {
            font-size: 15px;
          }

          .iui-buttons {
            flex-direction: column;
          }

          .iui-btn {
            width: 100%;
          }

          .iui-heading {
            font-size: 30px;
            line-height: 36px;
          }

          .iui-text {
            font-size: 15px;
          }

          .iui-main-image {
            height: 380px;
            border-radius: 22px;
          }

          .iui-badge {
            right: 12px;
            bottom: 18px;
            width: 115px;
            height: 115px;
          }

          .iui-badge strong {
            font-size: 26px;
          }

          .iui-check-list,
          .iui-suitable-list {
            grid-template-columns: 1fr;
          }

          .iui-step-grid,
          .iui-advantage-grid {
            grid-template-columns: 1fr;
          }

          .iui-step-card,
          .iui-advantage-card {
            min-height: auto;
          }

          .iui-what-image,
          .iui-success-image {
            height: 280px;
            border-radius: 22px;
          }

          .iui-prefer-image {
            height: 280px;
            border-radius: 22px;
          }

          .iui-risk-grid {
            grid-template-columns: 1fr;
          }

          .iui-rate-number {
            font-size: 34px;
          }

          .iui-cta {
            padding: 70px 0;
          }

          .iui-cta-box {
            padding: 45px 20px;
            border-radius: 22px;
          }

          .iui-cta-box h2 {
            font-size: 30px;
          }
        }
      `}</style>

      {/* =========================
          HERO
      ========================= */}

      <section className="iui-hero">
        <div className="iui-container">
          <div className="iui-hero-content">
            <span className="iui-eyebrow">
              Conceive IVF Fertility Centre
            </span>

            <h1>
              Intrauterine
              <br />
              <span>Insemination (IUI)</span>
            </h1>

            <p className="iui-hero-description">
              A simple and minimally invasive fertility treatment that places
              specially prepared sperm directly into the uterus around the
              time of ovulation.
            </p>

            <div className="iui-buttons">
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("openAppointment"))
                }
                className="iui-btn iui-btn-primary"
              >
                Book Appointment →
              </button>

              <a
                href="#what-is-iui"
                className="iui-btn iui-btn-outline"
              >
                Explore IUI ↓
              </a>
            </div>

            <div className="iui-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Intrauterine Insemination</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          INTRO
      ========================= */}

      <section className="iui-section">
        <div className="iui-container">
          <div className="iui-intro">
            <div className="iui-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=90"
                alt="Fertility treatment consultation"
                className="iui-main-image"
              />

              <div className="iui-badge">
                <strong>IUI</strong>
                <span>
                  Fertility
                  <br />
                  Treatment
                </span>
              </div>
            </div>

            <div>
              <span className="iui-label">
                Understanding IUI
              </span>

              <h2 className="iui-heading">
                A simple approach to{" "}
                <span>fertility treatment</span>
              </h2>

              <p className="iui-text">
                Intrauterine Insemination (IUI) is a fertility treatment
                designed to help couples overcome certain types of
                infertility.
              </p>

              <p className="iui-text">
                The procedure involves placing specially prepared sperm
                directly into the uterus during ovulation, increasing the
                opportunity for fertilisation.
              </p>

              <p className="iui-text">
                According to the source page, IUI may be particularly helpful
                for unexplained infertility, mild male-factor infertility,
                cervical mucus problems, sexual dysfunction, selected
                serodiscordant situations and the use of frozen sperm.
              </p>

              <div className="iui-check-list">
                <div className="iui-check">
                  <span className="iui-check-icon">✓</span>
                  <span>Minimally invasive treatment</span>
                </div>

                <div className="iui-check">
                  <span className="iui-check-icon">✓</span>
                  <span>Prepared sperm placed directly in uterus</span>
                </div>

                <div className="iui-check">
                  <span className="iui-check-icon">✓</span>
                  <span>Timed around ovulation</span>
                </div>

                <div className="iui-check">
                  <span className="iui-check-icon">✓</span>
                  <span>Personalised fertility planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHAT IS IUI
      ========================= */}

      <section
        id="what-is-iui"
        className="iui-section iui-soft"
      >
        <div className="iui-container">
          <div className="iui-what-box">
            <div>
              <span className="iui-label">
                What Is IUI?
              </span>

              <h2 className="iui-heading">
                How intrauterine insemination{" "}
                <span>works</span>
              </h2>

              <p className="iui-text">
                IUI is a form of assisted reproductive treatment in which
                prepared sperm is placed directly into a woman’s uterus.
              </p>

              <p className="iui-text">
                The process usually involves monitoring ovulation, preparing
                the sperm sample and performing insemination at an appropriate
                time in the cycle.
              </p>

              <div className="iui-highlight">
                The source page describes IUI as a minimally invasive and
                relatively affordable treatment option that can be considered
                before more advanced treatments such as IVF in suitable cases.
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=90"
                alt="Doctor explaining fertility treatment"
                className="iui-what-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          IUI STEPS
      ========================= */}

      <section className="iui-section">
        <div className="iui-container">
          <div className="iui-center">
            <span className="iui-label">
              IUI Treatment Process
            </span>

            <h2 className="iui-heading">
              Steps involved in{" "}
              <span>IUI</span>
            </h2>

            <p className="iui-text">
              The treatment is carefully planned around the woman’s
              ovulation and involves monitoring, sperm preparation,
              insemination and pregnancy testing.
            </p>
          </div>

          <div className="iui-step-grid">
            {steps.map((step) => (
              <div
                className="iui-step-card"
                key={step.number}
              >
                <div className="iui-step-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          WHEN TO PREFER IUI
      ========================= */}

      <section className="iui-section iui-soft">
        <div className="iui-container">
          <div className="iui-prefer">
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=90"
                alt="Fertility specialist discussing IUI"
                className="iui-prefer-image"
              />
            </div>

            <div>
              <span className="iui-label">
                When to Prefer IUI?
              </span>

              <h2 className="iui-heading">
                Who may benefit from{" "}
                <span>IUI treatment?</span>
              </h2>

              <p className="iui-text">
                IUI may be considered in specific fertility situations.
                According to the source page, the decision is guided by
                fertility specialists after considering the couple’s health,
                fertility concerns and treatment goals.
              </p>

              <div className="iui-suitable-list">
                {suitableFor.map((item) => (
                  <div
                    className="iui-suitable-item"
                    key={item}
                  >
                    <span className="iui-suitable-icon">
                      ✓
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ADVANTAGES
      ========================= */}

      <section className="iui-section">
        <div className="iui-container">
          <div className="iui-center">
            <span className="iui-label">
              Advantages of IUI
            </span>

            <h2 className="iui-heading">
              Why IUI can be considered as a{" "}
              <span>first-line option</span>
            </h2>

            <p className="iui-text">
              The source page highlights the simplicity, affordability,
              minimal recovery time and controlled timing associated with IUI.
            </p>
          </div>

          <div className="iui-advantage-grid">
            {advantages.map((item) => (
              <div
                className="iui-advantage-card"
                key={item.number}
              >
                <div className="iui-number">
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          RISKS
      ========================= */}

      <section className="iui-section iui-risk-section">
        <div className="iui-container">
          <div className="iui-center">
            <span className="iui-label">
              Risks & Complications
            </span>

            <h2 className="iui-heading">
              Understanding IUI{" "}
              <span>risks</span>
            </h2>

            <p className="iui-text">
              While IUI is generally a minimally invasive procedure, the
              source page identifies some potential risks, particularly when
              fertility medicines are used.
            </p>
          </div>

          <div className="iui-risk-grid">
            {risks.map((risk) => (
              <div
                className="iui-risk-card"
                key={risk.number}
              >
                <div className="iui-risk-icon">
                  {risk.number}
                </div>

                <h3>{risk.title}</h3>

                <p>{risk.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SUCCESS RATE
      ========================= */}

      <section className="iui-section">
        <div className="iui-container">
          <div className="iui-success">
            <div>
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=90"
                alt="Fertility specialist and patient consultation"
                className="iui-success-image"
              />
            </div>

            <div>
              <span className="iui-label">
                IUI Success Rate
              </span>

              <h2 className="iui-heading">
                Success depends on{" "}
                <span>individual factors</span>
              </h2>

              <p className="iui-text">
                The source page states that IUI success varies according to
                factors such as the woman’s age, the underlying cause of
                infertility and the quality of the sperm sample.
              </p>

              <div className="iui-rate-box">
                <div className="iui-rate-number">
                  10–20%
                </div>

                <div className="iui-rate-label">
                  Average success rate
                  <br />
                  per IUI cycle
                </div>
              </div>

              <p className="iui-success-note">
                The 10–20% figure is the range stated on the source page and
                should be understood as an average range rather than an
                individual prediction. Younger age and certain infertility
                factors may influence outcomes.
              </p>

              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("openAppointment"))
                }
                className="iui-btn iui-btn-primary"
                style={{ marginTop: "26px" }}
              >
                Discuss Your Options →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className="iui-cta">
        <div className="iui-container">
          <div className="iui-cta-box">
            <span className="iui-label">
              Conceive IVF Fertility Centre
            </span>

            <h2>
              Take the next step towards your parenthood journey.
            </h2>

            <p>
              Speak with our fertility specialists to understand whether IUI
              may be suitable for your fertility needs and treatment goals.
            </p>

            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("openAppointment"))
              }
              className="iui-btn iui-btn-primary"
            >
              Book Your IUI Consultation →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}