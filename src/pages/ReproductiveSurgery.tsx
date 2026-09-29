import { Link } from "react-router-dom";

export default function ReproductiveSurgery() {
  const surgeries = [
    {
      number: "01",
      title: "Hysteroscopy",
      text: "A minimally invasive procedure used to diagnose and treat abnormalities within the uterus. It may be used to remove polyps, fibroids or adhesions.",
    },
    {
      number: "02",
      title: "Laparoscopy",
      text: "A keyhole surgical procedure that allows specialists to view and treat conditions affecting the uterus, fallopian tubes and ovaries.",
    },
    {
      number: "03",
      title: "Myomectomy",
      text: "A surgical procedure to remove uterine fibroids while preserving the uterus, particularly for women planning future pregnancies.",
    },
    {
      number: "04",
      title: "Ovarian Drilling",
      text: "A procedure that may be performed for selected women with PCOS to help restore regular ovulation.",
    },
    {
      number: "05",
      title: "Endometriosis Surgery",
      text: "Surgical removal or treatment of endometrial tissue growing outside the uterus, with the aim of reducing symptoms and addressing fertility-related concerns.",
    },
    {
      number: "06",
      title: "Embryo Culture",
      text: "Fertilised eggs are cultured in the laboratory for around 3 to 5 days while embryologists monitor their growth and development.",
    },
  ];

  const suitableFor = [
    "Uterine abnormalities such as fibroids, polyps or adhesions",
    "Blocked or damaged fallopian tubes",
    "Severe endometriosis causing pain or infertility",
    "Selected cases of unexplained infertility",
    "Ovarian cysts or PCOS-related complications",
    "Reversal of selected sterilisation procedures",
  ];

  const benefits = [
    {
      number: "01",
      title: "Improved Fertility",
      text: "Surgery can address physical barriers to conception such as certain blockages, adhesions or structural abnormalities.",
    },
    {
      number: "02",
      title: "Symptom Relief",
      text: "Treatment of conditions such as endometriosis or fibroids may help reduce pain and other symptoms.",
    },
    {
      number: "03",
      title: "Organ Preservation",
      text: "Minimally invasive techniques can help address reproductive conditions while preserving reproductive organs when appropriate.",
    },
    {
      number: "04",
      title: "Pregnancy Support",
      text: "Treating certain structural or reproductive conditions may support improved pregnancy outcomes in selected patients.",
    },
  ];

  const risks = [
    {
      title: "Surgical Risks",
      text: "As with any surgery, potential risks can include bleeding, infection or injury to nearby organs.",
    },
    {
      title: "Adhesion Formation",
      text: "Scar tissue may develop after surgery and, in some cases, can affect reproductive function.",
    },
    {
      title: "Recovery Time",
      text: "Even minimally invasive procedures require appropriate rest, follow-up and recovery.",
    },
    {
      title: "Emotional Impact",
      text: "Fertility-related procedures can be emotionally demanding, making communication and support important throughout treatment.",
    },
  ];

  return (
    <div className="reproductive-page">
      <style>{`
        .reproductive-page {
          width: 100%;
          background: #FFFFFF;
          color: #3B2940;
          font-family: "Manrope", Arial, sans-serif;
        }

        .reproductive-page *,
        .reproductive-page *::before,
        .reproductive-page *::after {
          box-sizing: border-box;
        }

        .rp-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* HERO */
        .rp-hero {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(47, 32, 53, .97) 0%,
              rgba(59, 41, 64, .88) 45%,
              rgba(59, 41, 64, .42) 100%
            ),
            url("https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2000&q=90")
              center/cover no-repeat;
        }

        .rp-hero-content {
          max-width: 780px;
          padding: 65px 0;
        }

        .rp-eyebrow {
          display: inline-block;
          color: #E0C98A;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .rp-hero h1 {
          margin: 15px 0 0;
          color: #FFFFFF;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 56px;
          line-height: 1.1;
          font-weight: 700;
        }

        .rp-hero h1 span {
          color: #E0C98A;
        }

        .rp-hero-description {
          max-width: 690px;
          margin-top: 22px;
          color: rgba(255,255,255,.9);
          font-size: 16px;
          line-height: 1.75;
        }

        .rp-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .rp-btn {
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

        .rp-btn-primary {
          background: #C6A15B;
          color: #FFFFFF;
        }

        .rp-btn-primary:hover {
          background: #B08B48;
          transform: translateY(-2px);
        }

        .rp-btn-outline {
          color: #FFFFFF;
          border: 1px solid rgba(255,255,255,.55);
          background: rgba(255,255,255,.08);
        }

        .rp-btn-outline:hover {
          background: #FFFFFF;
          color: #3B2940;
        }

        .rp-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          color: rgba(255,255,255,.76);
          font-size: 13px;
        }

        .rp-breadcrumb a {
          color: #FFFFFF;
          font-weight: 700;
          text-decoration: none;
        }

        /* COMMON */
        .rp-section {
          padding: 40px 0;
        }

        .rp-soft {
          background: #FFFFFFaf7;
        }

        .rp-label {
          display: inline-block;
          color: #3B2940;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .rp-heading {
          margin: 12px 0 0;
          color: #3B2940;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 36px;
          line-height: 1.2;
          font-weight: 700;
        }

        .rp-heading span {
          color: #3B2940;
        }

        .rp-text {
          margin-top: 18px;
          color: #5F5660;
          font-size: 16px;
          line-height: 1.75;
        }

        /* INTRO */
        .rp-intro {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 70px;
          align-items: center;
        }

        .rp-image-wrap {
          position: relative;
        }

        .rp-main-image {
          width: 100%;
          height: 510px;
          display: block;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(59,41,64,.14);
        }

        .rp-badge {
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
          color: #FFFFFF;
          text-align: center;
          box-shadow: 0 15px 35px rgba(198,161,91,.25);
        }

        .rp-badge strong {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 31px;
          line-height: 1;
        }

        .rp-badge span {
          margin-top: 8px;
          font-size: 9px;
          line-height: 1.4;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .06em;
        }

        .rp-check-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 13px;
          margin-top: 28px;
        }

        .rp-check {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.5;
        }

        .rp-check-icon {
          width: 27px;
          height: 27px;
          min-width: 27px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #FFFFFF0f4;
          color: #C6A15B;
          font-weight: 800;
        }

        /* SURGERIES */
        .rp-center {
          max-width: 750px;
          margin: 0 auto;
          text-align: center;
        }

        .rp-surgery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 50px;
        }

        .rp-surgery-card {
          position: relative;
          min-height: 280px;
          padding: 30px;
          border-radius: 22px;
          border: 1px solid #E8DFD2;
          background: #FFFFFF;
          transition: all .3s ease;
        }

        .rp-surgery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(59,41,64,.08);
        }

        .rp-card-number {
          color: #C6A15B;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 36px;
          line-height: 1;
          font-weight: 700;
        }

        .rp-surgery-card h3 {
          margin-top: 18px;
          color: #3B2940;
          font-size: 19px;
          line-height: 1.35;
          font-weight: 700;
        }

        .rp-surgery-card p {
          margin-top: 10px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.7;
        }

        /* MINIMALLY INVASIVE */
        .rp-feature {
          padding: 0 0 90px;
        }

        .rp-feature-box {
          display: grid;
          grid-template-columns: 1fr .85fr;
          gap: 55px;
          align-items: center;
          padding: 55px;
          border-radius: 30px;
          background: #3B2940;
          overflow: hidden;
        }

        .rp-feature-box .rp-label {
          color: #E0C98A;
        }

        .rp-feature-box .rp-heading {
          color: #FFFFFF;
        }

        .rp-feature-box .rp-heading span {
          color: #E0C98A;
        }

        .rp-feature-box .rp-text {
          color: rgba(255,255,255,.84);
        }

        .rp-feature-points {
          display: flex;
          flex-direction: column;
          gap: 13px;
          margin-top: 25px;
        }

        .rp-feature-point {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          color: rgba(255,255,255,.9);
          font-size: 14px;
          line-height: 1.5;
        }

        .rp-feature-point-icon {
          width: 27px;
          height: 27px;
          min-width: 27px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #C6A15B;
          color: #FFFFFF;
          font-weight: 800;
        }

        .rp-feature-image {
          width: 100%;
          height: 370px;
          display: block;
          object-fit: cover;
          border-radius: 22px;
        }

        /* SUITABILITY */
        .rp-suitability {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 65px;
          align-items: center;
        }

        .rp-suitability-image {
          width: 100%;
          height: 460px;
          display: block;
          object-fit: cover;
          border-radius: 26px;
        }

        .rp-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 28px;
        }

        .rp-list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.55;
        }

        .rp-list-icon {
          width: 29px;
          height: 29px;
          min-width: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #FFFFFF0f4;
          color: #C6A15B;
          font-weight: 800;
        }

        /* BENEFITS */
        .rp-benefit-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 48px;
        }

        .rp-benefit-card {
          padding: 28px 22px;
          min-height: 240px;
          border-radius: 20px;
          background: #FFFFFF;
          border: 1px solid #E8DFD2;
        }

        .rp-benefit-number {
          color: #3B2940;
          font-size: 12px;
          line-height: 18px;
          font-weight: 700;
          letter-spacing: .1em;
        }

        .rp-benefit-card h3 {
          margin-top: 16px;
          color: #3B2940;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 700;
        }

        .rp-benefit-card p {
          margin-top: 9px;
          color: #5F5660;
          font-size: 13px;
          line-height: 1.65;
        }

        /* RISKS */
        .rp-risk-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 45px;
        }

        .rp-risk-card {
          padding: 28px 22px;
          border-radius: 20px;
          border: 1px solid #E8DFD2;
          background: #FFFFFF;
        }

        .rp-risk-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #FFFFFF0f4;
          color: #C6A15B;
          font-weight: 800;
        }

        .rp-risk-card h3 {
          margin-top: 17px;
          color: #3B2940;
          font-size: 17px;
          font-weight: 700;
        }

        .rp-risk-card p {
          margin-top: 9px;
          color: #5F5660;
          font-size: 13px;
          line-height: 1.65;
        }

        .rp-note {
          max-width: 850px;
          margin: 35px auto 0;
          padding: 20px 24px;
          border-left: 4px solid #C6A15B;
          background: #FFFFFF0f4;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.7;
        }

        /* OUTCOMES */
        .rp-outcomes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
        }

        .rp-outcome-image {
          width: 100%;
          height: 410px;
          display: block;
          object-fit: cover;
          border-radius: 25px;
        }

        .rp-outcome-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 28px;
        }

        .rp-outcome-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .rp-outcome-number {
          width: 42px;
          height: 42px;
          min-width: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #3B2940;
          color: #FFFFFF;
          font-size: 13px;
          font-weight: 700;
        }

        .rp-outcome-item h3 {
          color: #3B2940;
          font-size: 16px;
          font-weight: 700;
        }

        .rp-outcome-item p {
          margin-top: 5px;
          color: #5F5660;
          font-size: 13px;
          line-height: 1.6;
        }

        /* CTA */
        .rp-cta {
          padding: 40px 0;
          background: #FFFFFFaf7;
        }

        .rp-cta-box {
          padding: 65px 30px;
          border-radius: 30px;
          background: #3B2940;
          text-align: center;
        }

        .rp-cta-box .rp-label {
          color: #E0C98A;
        }

        .rp-cta-box h2 {
          max-width: 760px;
          margin: 12px auto 0;
          color: #FFFFFF;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
          line-height: 1.2;
          font-weight: 700;
        }

        .rp-cta-box p {
          max-width: 650px;
          margin: 18px auto 0;
          color: rgba(255,255,255,.78);
          font-size: 16px;
          line-height: 1.7;
        }

        .rp-cta-box .rp-btn {
          margin-top: 28px;
        }

        /* RESPONSIVE */
        @media (max-width: 1050px) {
          .rp-surgery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .rp-benefit-grid,
          .rp-risk-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .rp-intro,
          .rp-suitability {
            gap: 45px;
          }
        }

        @media (max-width: 850px) {
          .rp-hero {
            min-height: 470px;
          }

          .rp-hero h1 {
            font-size: 46px;
          }

          .rp-intro,
          .rp-feature-box,
          .rp-suitability,
          .rp-outcomes {
            grid-template-columns: 1fr;
          }

          .rp-main-image {
            height: 450px;
          }

          .rp-feature-image {
            height: 330px;
          }

          .rp-suitability-image {
            height: 380px;
          }
        }

        @media (max-width: 650px) {
          .rp-container {
            padding: 0 18px;
          }

          .rp-section {
            padding: 70px 0;
          }

          .rp-hero {
            min-height: 430px;
          }

          .rp-hero-content {
            padding: 70px 0;
          }

          .rp-hero h1 {
            font-size: 35px;
            line-height: 1.18;
          }

          .rp-hero-description {
            font-size: 15px;
          }

          .rp-buttons {
            flex-direction: column;
          }

          .rp-btn {
            width: 100%;
          }

          .rp-heading {
            font-size: 30px;
            line-height: 36px;
          }

          .rp-text {
            font-size: 15px;
          }

          .rp-main-image {
            height: 380px;
            border-radius: 22px;
          }

          .rp-badge {
            right: 12px;
            bottom: 18px;
            width: 115px;
            height: 115px;
          }

          .rp-badge strong {
            font-size: 26px;
          }

          .rp-check-list {
            grid-template-columns: 1fr;
          }

          .rp-surgery-grid,
          .rp-benefit-grid,
          .rp-risk-grid {
            grid-template-columns: 1fr;
          }

          .rp-surgery-card {
            min-height: auto;
            padding: 27px;
          }

          .rp-feature {
            padding-bottom: 70px;
          }

          .rp-feature-box {
            padding: 30px 22px;
            border-radius: 22px;
          }

          .rp-feature-image {
            height: 280px;
            border-radius: 20px;
          }

          .rp-suitability-image {
            height: 300px;
            border-radius: 22px;
          }

          .rp-outcome-image {
            height: 280px;
          }

          .rp-cta {
            padding: 70px 0;
          }

          .rp-cta-box {
            padding: 45px 20px;
            border-radius: 22px;
          }

          .rp-cta-box h2 {
            font-size: 30px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="rp-hero">
        <div className="rp-container">
          <div className="rp-hero-content">
            <span className="rp-eyebrow">
              Conceive IVF Fertility Centre
            </span>

            <h1>
              Reproductive
              <br />
              <span>Surgery</span>
            </h1>

            <p className="rp-hero-description">
              Specialised surgical care for structural and reproductive
              conditions that may affect fertility, conception or pregnancy.
            </p>

            <div className="rp-buttons">
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("openAppointment"))
                }
                className="rp-btn rp-btn-primary"
              >
                Book Appointment →
              </button>

              <a
                href="#surgeries"
                className="rp-btn rp-btn-outline"
              >
                Explore Procedures ↓
              </a>
            </div>

            <div className="rp-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Reproductive Surgery</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="rp-section">
        <div className="rp-container">
          <div className="rp-intro">
            <div className="rp-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=90"
                alt="Reproductive surgery and fertility care"
                className="rp-main-image"
              />

              <div className="rp-badge">
                <strong>15+</strong>
                <span>
                  Years of
                  <br />
                  Expertise
                </span>
              </div>
            </div>

            <div>
              <span className="rp-label">
                Understanding Reproductive Surgery
              </span>

              <h2 className="rp-heading">
                Advanced surgical care for{" "}
                <span>reproductive health</span>
              </h2>

              <p className="rp-text">
                Reproductive surgery is a specialised area of medicine that
                addresses structural abnormalities, diseases and other
                conditions affecting the reproductive organs.
              </p>

              <p className="rp-text">
                These procedures may be used to diagnose or treat conditions
                that can affect fertility, cause pain or create structural
                challenges for conception or pregnancy.
              </p>

              <div className="rp-check-list">
                <div className="rp-check">
                  <span className="rp-check-icon">✓</span>
                  <span>Minimally invasive techniques</span>
                </div>

                <div className="rp-check">
                  <span className="rp-check-icon">✓</span>
                  <span>Fertility-focused surgical care</span>
                </div>

                <div className="rp-check">
                  <span className="rp-check-icon">✓</span>
                  <span>Advanced diagnostic procedures</span>
                </div>

                <div className="rp-check">
                  <span className="rp-check-icon">✓</span>
                  <span>Individualised treatment planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section
        id="surgeries"
        className="rp-section rp-soft"
      >
        <div className="rp-container">
          <div className="rp-center">
            <span className="rp-label">
              Types of Reproductive Surgeries
            </span>

            <h2 className="rp-heading">
              Surgical solutions designed around{" "}
              <span>your needs</span>
            </h2>

            <p className="rp-text">
              Depending on the condition and fertility goals, different
              procedures may be considered as part of a personalised treatment
              plan.
            </p>
          </div>

          <div className="rp-surgery-grid">
            {surgeries.map((surgery) => (
              <div
                className="rp-surgery-card"
                key={surgery.number}
              >
                <div className="rp-card-number">
                  {surgery.number}
                </div>

                <h3>{surgery.title}</h3>

                <p>{surgery.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINIMALLY INVASIVE */}
      <section className="rp-feature">
        <div className="rp-container">
          <div className="rp-feature-box">
            <div>
              <span className="rp-label">
                Modern Surgical Approach
              </span>

              <h2 className="rp-heading">
                Minimally invasive techniques for{" "}
                <span>greater comfort</span>
              </h2>

              <p className="rp-text">
                Advances in reproductive surgery have made minimally invasive
                approaches possible for many conditions. These procedures can
                offer smaller incisions, shorter recovery periods and reduced
                surgical impact when clinically appropriate.
              </p>

              <div className="rp-feature-points">
                <div className="rp-feature-point">
                  <span className="rp-feature-point-icon">✓</span>
                  <span>Smaller surgical incisions</span>
                </div>

                <div className="rp-feature-point">
                  <span className="rp-feature-point-icon">✓</span>
                  <span>Shorter recovery in many procedures</span>
                </div>

                <div className="rp-feature-point">
                  <span className="rp-feature-point-icon">✓</span>
                  <span>Reduced surgical trauma when suitable</span>
                </div>

                <div className="rp-feature-point">
                  <span className="rp-feature-point-icon">✓</span>
                  <span>Fertility-focused treatment planning</span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1100&q=90"
                alt="Modern minimally invasive surgery facility"
                className="rp-feature-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD CONSIDER */}
      <section className="rp-section">
        <div className="rp-container">
          <div className="rp-suitability">
            <div>
              <img
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1100&q=90"
                alt="Fertility specialist consultation"
                className="rp-suitability-image"
              />
            </div>

            <div>
              <span className="rp-label">
                Who May Need Reproductive Surgery?
              </span>

              <h2 className="rp-heading">
                When surgery may become part of a{" "}
                <span>fertility plan</span>
              </h2>

              <p className="rp-text">
                Reproductive surgery may be considered when a structural or
                medical condition is affecting fertility, reproductive health
                or the ability to conceive.
              </p>

              <div className="rp-list">
                {suitableFor.map((item) => (
                  <div className="rp-list-item" key={item}>
                    <span className="rp-list-icon">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="rp-section rp-soft">
        <div className="rp-container">
          <div className="rp-center">
            <span className="rp-label">
              Potential Benefits
            </span>

            <h2 className="rp-heading">
              How reproductive surgery may{" "}
              <span>help</span>
            </h2>

            <p className="rp-text">
              The benefits depend on the underlying condition, individual
              health and the specific procedure being performed.
            </p>
          </div>

          <div className="rp-benefit-grid">
            {benefits.map((benefit) => (
              <div
                className="rp-benefit-card"
                key={benefit.number}
              >
                <div className="rp-benefit-number">
                  {benefit.number}
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISKS */}
      <section className="rp-section">
        <div className="rp-container">
          <div className="rp-center">
            <span className="rp-label">
              Risks & Considerations
            </span>

            <h2 className="rp-heading">
              Understanding the procedure{" "}
              <span>before treatment</span>
            </h2>

            <p className="rp-text">
              Like any surgical procedure, reproductive surgery involves
              potential risks. Your fertility specialist can explain the
              benefits, alternatives and risks relevant to your individual
              situation.
            </p>
          </div>

          <div className="rp-risk-grid">
            {risks.map((risk, index) => (
              <div
                className="rp-risk-card"
                key={risk.title}
              >
                <div className="rp-risk-icon">
                  {index + 1}
                </div>

                <h3>{risk.title}</h3>

                <p>{risk.text}</p>
              </div>
            ))}
          </div>

          <div className="rp-note">
            Every surgical decision is individual. The suitability of a
            procedure, expected outcome and recovery can vary according to the
            condition, age, overall health and fertility goals.
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="rp-section rp-soft">
        <div className="rp-container">
          <div className="rp-outcomes">
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90"
                alt="Doctor discussing fertility treatment"
                className="rp-outcome-image"
              />
            </div>

            <div>
              <span className="rp-label">
                Treatment Outcomes
              </span>

              <h2 className="rp-heading">
                Outcomes depend on your{" "}
                <span>individual condition</span>
              </h2>

              <p className="rp-text">
                The outcome of reproductive surgery depends on factors such as
                the underlying condition, age, overall health and the extent of
                reproductive damage.
              </p>

              <div className="rp-outcome-list">
                <div className="rp-outcome-item">
                  <div className="rp-outcome-number">01</div>

                  <div>
                    <h3>Fibroid Removal</h3>
                    <p>
                      Treating selected fibroids may help address structural
                      problems that can interfere with conception or pregnancy.
                    </p>
                  </div>
                </div>

                <div className="rp-outcome-item">
                  <div className="rp-outcome-number">02</div>

                  <div>
                    <h3>Endometriosis Surgery</h3>
                    <p>
                      Surgical treatment may help relieve symptoms and address
                      fertility-related effects in selected cases.
                    </p>
                  </div>
                </div>

                <div className="rp-outcome-item">
                  <div className="rp-outcome-number">03</div>

                  <div>
                    <h3>Tubal Surgery</h3>
                    <p>
                      Restoration of tubal function varies according to the
                      extent and type of tubal damage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rp-cta">
        <div className="rp-container">
          <div className="rp-cta-box">
            <span className="rp-label">
              Conceive IVF Fertility Centre
            </span>

            <h2>
              Understand your options for reproductive surgery.
            </h2>

            <p>
              Speak with our fertility specialists to understand whether
              reproductive surgery may be appropriate for your condition and
              fertility goals.
            </p>

            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("openAppointment"))
              }
              className="rp-btn rp-btn-primary"
            >
              Book Your Consultation →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}