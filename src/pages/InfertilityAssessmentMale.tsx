import { Link } from "react-router-dom";

export default function InfertilityAssessmentMale() {
  const assessmentSteps = [
    {
      number: "01",
      title: "Comprehensive Medical History",
      text: "Detailed review of medical, surgical, and sexual history. Discussion of lifestyle factors, medications, and family history of infertility.",
    },
    {
      number: "02",
      title: "Physical Examination",
      text: "Examination of the testes and penis for abnormalities. Evaluation for signs of varicocele or hormonal imbalances.",
    },
    {
      number: "03",
      title: "Semen Analysis",
      text: "A cornerstone test for male infertility assessment. The semen sample is analysed for sperm count, motility, morphology, volume and viscosity.",
    },
    {
      number: "04",
      title: "Advanced Semen Tests",
      text: "Additional testing can include Sperm DNA Fragmentation, Reactive Oxygen Species (ROS) testing and Vitality testing.",
    },
    {
      number: "05",
      title: "Hormonal Profile",
      text: "Blood tests may measure Testosterone, FSH, LH, Prolactin and Thyroid Hormones.",
    },
    {
      number: "06",
      title: "Ultrasound Imaging",
      text: "Scrotal ultrasound can evaluate the testes and epididymis, while TRUS can assess the prostate and seminal vesicles.",
    },
    {
      number: "07",
      title: "Genetic Testing",
      text: "Screening may identify chromosomal abnormalities or Y-chromosome microdeletions that can affect sperm production.",
    },
    {
      number: "08",
      title: "Testicular Biopsy",
      text: "A minor surgical procedure used to evaluate sperm production directly from the testes, particularly in cases of azoospermia.",
    },
    {
      number: "09",
      title: "Lifestyle & Environmental Assessment",
      text: "Evaluation of occupational exposures, diet, stress, and habits that may impact fertility.",
    },
  ];

  const semenTests = [
    {
      title: "Sperm Count",
      text: "Measures the total number of sperm present in the semen sample.",
    },
    {
      title: "Motility",
      text: "Evaluates the percentage of sperm that are moving effectively.",
    },
    {
      title: "Morphology",
      text: "Examines the shape and structure of sperm cells.",
    },
    {
      title: "Volume & Viscosity",
      text: "Helps assess the overall quality and characteristics of the semen sample.",
    },
  ];

  const advancedTests = [
    {
      title: "Sperm DNA Fragmentation",
      text: "Evaluates the integrity of sperm DNA, which is important for fertilisation and embryo development.",
    },
    {
      title: "ROS Testing",
      text: "Assesses oxidative stress levels present in the semen.",
    },
    {
      title: "Vitality Test",
      text: "Measures the percentage of live sperm in the ejaculate.",
    },
  ];

  const suitableFor = [
    "Low sperm count",
    "Poor sperm quality",
    "History of undescended testicles, varicocele or testicular trauma",
    "Exposure to environmental toxins, smoking or heavy alcohol consumption",
    "Unexplained infertility",
  ];

  const successTips = [
    {
      number: "01",
      title: "Timely Assessment",
      text: "Early diagnosis can help address infertility issues before they become more complex.",
    },
    {
      number: "02",
      title: "Healthy Habits",
      text: "Maintaining a healthy weight, avoiding tobacco and alcohol, and reducing stress can support better outcomes.",
    },
    {
      number: "03",
      title: "Choose Expert Care",
      text: "Choose a well-equipped fertility clinic with experienced specialists.",
    },
    {
      number: "04",
      title: "Comprehensive Support",
      text: "Counselling services can help manage the emotional challenges of the infertility journey.",
    },
  ];

  return (
    <div className="male-assessment-page">
      <style>{`
        .male-assessment-page {
          width: 100%;
          background: #fff;
          color: #3B2940;
          font-family: "Manrope", Arial, sans-serif;
        }

        .male-assessment-page *,
        .male-assessment-page *::before,
        .male-assessment-page *::after {
          box-sizing: border-box;
        }

        .male-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .male-display {
          font-family: "Playfair Display", Georgia, serif;
        }

        /* HERO */

        .male-hero {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(59, 41, 64, 0.95),
              rgba(59, 41, 64, 0.72)
            ),
            url("https://conceiveivf.in/wp-content/uploads/2024/12/images-10-e1735625592878.jpeg")
              center/cover no-repeat;
        }

        .male-hero-content {
          max-width: 780px;
          padding: 60px 0;
        }

        .male-eyebrow {
          display: inline-block;
          color: #E0C98A;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .male-hero h1 {
          margin: 14px 0 0;
          color: #fff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 54px;
          line-height: 1.12;
          font-weight: 700;
        }

        .male-hero h1 span {
          color: #E0C98A;
        }

        .male-hero-description {
          max-width: 700px;
          margin-top: 22px;
          color: rgba(255,255,255,.9);
          font-size: 16px;
          line-height: 1.7;
        }

        .male-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          color: rgba(255,255,255,.8);
          font-size: 14px;
        }

        .male-breadcrumb a {
          color: #fff;
          font-weight: 700;
          text-decoration: none;
        }

        .male-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .male-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 22px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all .25s ease;
        }

        .male-btn-primary {
          background: #C6A15B;
          color: #fff;
        }

        .male-btn-primary:hover {
          background: #B08B48;
          transform: translateY(-2px);
        }

        .male-btn-secondary {
          border: 1px solid rgba(255,255,255,.55);
          background: rgba(255,255,255,.08);
          color: #fff;
        }

        .male-btn-secondary:hover {
          background: #fff;
          color: #3B2940;
        }

        /* COMMON */

        .male-section {
          padding: 45px 0;
        }

        .male-section.cream {
          background: #F8F4EE;
        }

        .male-label {
          color: #3B2940;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .male-heading {
          margin: 12px 0 0;
          color: #3B2940;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 36px;
          line-height: 1.2;
          font-weight: 700;
        }

        .male-heading span {
          color: #3B2940;
        }

        .male-text {
          margin-top: 20px;
          color: #5F5660;
          font-size: 16px;
          line-height: 1.7;
        }

        /* INTRO */

        .male-intro {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 70px;
          align-items: center;
        }

        .male-image-wrap {
          position: relative;
        }

        .male-main-image {
          width: 100%;
          height: 500px;
          display: block;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(59,41,64,.14);
        }

        .male-image-badge {
          position: absolute;
          right: -25px;
          bottom: 28px;
          width: 140px;
          height: 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #C6A15B;
          color: #fff;
          text-align: center;
          box-shadow: 0 15px 35px rgba(198,161,91,.25);
        }

        .male-image-badge strong {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 32px;
          line-height: 1;
        }

        .male-image-badge span {
          margin-top: 6px;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .05em;
        }

        .male-check-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 28px;
        }

        .male-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.5;
        }

        .male-check {
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

        /* ASSESSMENT */

        .assessment-header {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .assessment-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 50px;
        }

        .assessment-card {
          position: relative;
          padding: 30px;
          min-height: 240px;
          border: 1px solid #E8DFD2;
          border-radius: 22px;
          background: #fff;
          transition: all .3s ease;
        }

        .assessment-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(59,41,64,.08);
        }

        .assessment-number {
          color: #C6A15B;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 32px;
          line-height: 1;
          font-weight: 700;
        }

        .assessment-card h3 {
          margin-top: 18px;
          color: #3B2940;
          font-size: 18px;
          line-height: 1.35;
          font-weight: 700;
        }

        .assessment-card p {
          margin-top: 10px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.65;
        }

        /* SEMEN ANALYSIS */

        .semen-layout {
          display: grid;
          grid-template-columns: 1fr .8fr;
          gap: 60px;
          align-items: center;
        }

        .semen-card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 28px;
        }

        .semen-card {
          padding: 22px;
          border-radius: 18px;
          background: #F8F4EE;
          border: 1px solid #E8DFD2;
        }

        .semen-card h3 {
          color: #3B2940;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
        }

        .semen-card p {
          margin-top: 7px;
          color: #5F5660;
          font-size: 13px;
          line-height: 1.6;
        }

        .semen-image {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 26px;
        }

        /* ADVANCED TESTS */

        .advanced-box {
          padding: 55px;
          border-radius: 28px;
          background: #3B2940;
        }

        .advanced-box .male-label {
          color: #E0C98A;
        }

        .advanced-box .male-heading {
          color: #fff;
        }

        .advanced-box .male-heading span {
          color: #E0C98A;
        }

        .advanced-box .male-text {
          color: rgba(255,255,255,.82);
        }

        .advanced-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 35px;
        }

        .advanced-card {
          padding: 25px;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 20px;
          background: rgba(255,255,255,.09);
        }

        .advanced-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #C6A15B;
          color: #fff;
          font-weight: 800;
        }

        .advanced-card h3 {
          margin-top: 17px;
          color: #fff;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 700;
        }

        .advanced-card p {
          margin-top: 8px;
          color: rgba(255,255,255,.78);
          font-size: 14px;
          line-height: 1.6;
        }

        /* WHO SHOULD */

        .who-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 65px;
          align-items: center;
        }

        .who-image {
          width: 100%;
          height: 450px;
          display: block;
          object-fit: cover;
          border-radius: 26px;
        }

        .who-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 28px;
        }

        .who-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-radius: 15px;
          background: #F8F4EE;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.55;
        }

        .who-icon {
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

        /* SUCCESS */

        .success-section {
          background: #F8F4EE;
        }

        .success-header {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .success-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 45px;
        }

        .success-card {
          padding: 28px 22px;
          border-radius: 20px;
          background: #fff;
          border: 1px solid #E8DFD2;
        }

        .success-number {
          color: #C6A15B;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 30px;
          line-height: 1;
          font-weight: 700;
        }

        .success-card h3 {
          margin-top: 17px;
          color: #3B2940;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 700;
        }

        .success-card p {
          margin-top: 9px;
          color: #5F5660;
          font-size: 14px;
          line-height: 1.6;
        }

        /* CTA */

        .male-final-cta {
          padding: 45px 0;
          background: #fffffe;
        }

        .male-final-box {
          padding: 65px 30px;
          border-radius: 28px;
          background: #3B2940;
          text-align: center;
        }

        .male-final-box .male-label {
          color: #E0C98A;
        }

        .male-final-box h2 {
          max-width: 720px;
          margin: 12px auto 0;
          color: #fff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
          line-height: 1.2;
          font-weight: 700;
        }

        .male-final-box p {
          max-width: 650px;
          margin: 18px auto 0;
          color: rgba(255,255,255,.78);
          font-size: 16px;
          line-height: 1.7;
        }

        .male-final-box .male-btn {
          margin-top: 28px;
        }

        @media (max-width: 1000px) {
          .assessment-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .success-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .male-intro,
          .semen-layout,
          .who-grid {
            gap: 45px;
          }
        }

        @media (max-width: 800px) {
          .male-hero {
            min-height: 410px;
          }

          .male-hero-content {
            padding: 75px 0;
          }

          .male-hero h1 {
            font-size: 44px;
          }

          .male-intro,
          .semen-layout,
          .who-grid {
            grid-template-columns: 1fr;
          }

          .advanced-box {
            padding: 40px 30px;
          }

          .advanced-grid {
            grid-template-columns: 1fr;
          }

          .male-main-image {
            height: 450px;
          }

          .who-image,
          .semen-image {
            height: 350px;
          }
        }

        @media (max-width: 600px) {
          .male-container {
            padding: 0 18px;
          }

          .male-section,
          .male-final-cta {
            padding: 70px 0;
          }

          .male-hero {
            min-height: 390px;
          }

          .male-hero-content {
            padding: 65px 0;
          }

          .male-hero h1 {
            font-size: 34px;
            line-height: 1.18;
          }

          .male-hero-description {
            font-size: 15px;
          }

          .male-hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .male-btn {
            width: 100%;
          }

          .male-heading {
            font-size: 30px;
            line-height: 36px;
          }

          .male-text {
            font-size: 16px;
          }

          .male-main-image {
            height: 380px;
            border-radius: 22px;
          }

          .male-image-badge {
            right: 12px;
            bottom: 18px;
            width: 115px;
            height: 115px;
          }

          .male-image-badge strong {
            font-size: 27px;
          }

          .male-image-badge span {
            font-size: 9px;
          }

          .male-check-grid {
            grid-template-columns: 1fr;
          }

          .assessment-grid,
          .semen-card-grid,
          .success-grid {
            grid-template-columns: 1fr;
          }

          .assessment-card {
            min-height: auto;
          }

          .advanced-box {
            padding: 32px 22px;
            border-radius: 22px;
          }

          .who-image,
          .semen-image {
            height: 280px;
            border-radius: 22px;
          }

          .male-final-box {
            padding: 45px 20px;
          }

          .male-final-box h2 {
            font-size: 30px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="male-hero">
        <div className="male-container">
          <div className="male-hero-content">
            <span className="male-eyebrow">
              Conceive IVF Fertility Centre
            </span>

            <h1>
              Male Infertility
              <br />
              <span>Assessment</span>
            </h1>

            <p className="male-hero-description">
              Comprehensive evaluation and diagnostic services to identify and
              understand the underlying causes of male infertility.
            </p>

            <div className="male-hero-buttons">
              <Link to="/contact" className="male-btn male-btn-primary">
                Book Appointment →
              </Link>

              <a
                href="#assessment"
                className="male-btn male-btn-secondary"
              >
                Explore Assessment ↓
              </a>
            </div>

            <div className="male-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Infertility Assessment - Male</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="male-section">
        <div className="male-container">
          <div className="male-intro">
            <div className="male-image-wrap">
              <img
                src="https://conceiveivf.in/wp-content/uploads/2024/12/images-8.jpeg"
                alt="Male infertility assessment"
                className="male-main-image"
              />

              <div className="male-image-badge">
                <strong>360°</strong>
                <span>
                  Complete
                  <br />
                  Assessment
                </span>
              </div>
            </div>

            <div>
              <span className="male-label">
                Male Fertility Assessment
              </span>

              <h2 className="male-heading">
                Understanding male infertility with{" "}
                <span>comprehensive care</span>
              </h2>

              <p className="male-text">
                Male infertility assessment is a critical component of
                understanding and addressing fertility challenges.
              </p>

              <p className="male-text">
                At our advanced fertility clinic in Sirsa, we provide
                comprehensive evaluation and diagnostic services to identify
                and treat the underlying causes of male infertility.
              </p>

              <p className="male-text">
                Male infertility refers to a man's inability to contribute to
                conception despite regular unprotected intercourse over a
                significant period, typically 12 months.
              </p>

              <div className="male-check-grid">
                <div className="male-check-item">
                  <span className="male-check">✓</span>
                  <span>Medical history evaluation</span>
                </div>

                <div className="male-check-item">
                  <span className="male-check">✓</span>
                  <span>Physical examination</span>
                </div>

                <div className="male-check-item">
                  <span className="male-check">✓</span>
                  <span>Semen analysis</span>
                </div>

                <div className="male-check-item">
                  <span className="male-check">✓</span>
                  <span>Hormonal and genetic testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSESSMENT STEPS */}
      <section
        id="assessment"
        className="male-section cream"
      >
        <div className="male-container">
          <div className="assessment-header">
            <span className="male-label">
              Complete Evaluation
            </span>

            <h2 className="male-heading">
              Steps in male infertility{" "}
              <span>assessment</span>
            </h2>

            <p className="male-text">
              A structured assessment helps identify medical, hormonal,
              genetic, physical, lifestyle and environmental factors that may
              affect male fertility.
            </p>
          </div>

          <div className="assessment-grid">
            {assessmentSteps.map((step) => (
              <div
                className="assessment-card"
                key={step.number}
              >
                <div className="assessment-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEMEN ANALYSIS */}
      <section className="male-section">
        <div className="male-container">
          <div className="semen-layout">
            <div>
              <span className="male-label">
                Important Fertility Test
              </span>

              <h2 className="male-heading">
                Semen analysis: the{" "}
                <span>cornerstone test</span>
              </h2>

              <p className="male-text">
                Semen analysis is a cornerstone test for male infertility
                assessment. The semen sample is analysed to evaluate several
                important parameters of sperm and semen quality.
              </p>

              <div className="semen-card-grid">
                {semenTests.map((test) => (
                  <div
                    className="semen-card"
                    key={test.title}
                  >
                    <h3>{test.title}</h3>
                    <p>{test.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://conceiveivf.in/wp-content/uploads/2024/12/images-10-e1735625592878.jpeg"
                alt="Sperm and fertility assessment"
                className="semen-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED TESTS */}
      <section className="male-section">
        <div className="male-container">
          <div className="advanced-box">
            <span className="male-label">
              Advanced Diagnostics
            </span>

            <h2 className="male-heading">
              Advanced semen{" "}
              <span>tests</span>
            </h2>

            <p className="male-text">
              When clinically appropriate, additional tests can provide more
              information about sperm quality and factors affecting
              fertilisation and embryo development.
            </p>

            <div className="advanced-grid">
              {advancedTests.map((test, index) => (
                <div
                  className="advanced-card"
                  key={test.title}
                >
                  <div className="advanced-icon">
                    {index + 1}
                  </div>

                  <h3>{test.title}</h3>

                  <p>{test.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD UNDERGO */}
      <section className="male-section">
        <div className="male-container">
          <div className="who-grid">
            <div>
              <img
                src="https://conceiveivf.in/wp-content/uploads/2024/12/images-8.jpeg"
                alt="Male fertility evaluation"
                className="who-image"
              />
            </div>

            <div>
              <span className="male-label">
                Is Assessment Needed?
              </span>

              <h2 className="male-heading">
                Who should undergo male infertility{" "}
                <span>assessment?</span>
              </h2>

              <p className="male-text">
                Male infertility assessment is recommended for individuals or
                couples experiencing difficulty conceiving, particularly in
                situations involving sperm quality, medical history, lifestyle
                factors or unexplained infertility.
              </p>

              <div className="who-list">
                {suitableFor.map((item) => (
                  <div
                    className="who-item"
                    key={item}
                  >
                    <span className="who-icon">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAXIMISE SUCCESS */}
      <section className="male-section success-section">
        <div className="male-container">
          <div className="success-header">
            <span className="male-label">
              Supporting Better Outcomes
            </span>

            <h2 className="male-heading">
              How to maximise{" "}
              <span>success rates</span>
            </h2>

            <p className="male-text">
              Timely assessment, healthy habits, expert care and emotional
              support can all be important parts of the fertility journey.
            </p>
          </div>

          <div className="success-grid">
            {successTips.map((item) => (
              <div
                className="success-card"
                key={item.number}
              >
                <div className="success-number">
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="male-final-cta">
        <div className="male-container">
          <div className="male-final-box">
            <span className="male-label">
              Conceive IVF Fertility Centre
            </span>

            <h2>
              Take the first step toward understanding your fertility.
            </h2>

            <p>
              Speak with our fertility team for a comprehensive male
              infertility assessment and personalised guidance.
            </p>

            <Link
              to="/contact"
              className="male-btn male-btn-primary"
            >
              Book Your Appointment →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}