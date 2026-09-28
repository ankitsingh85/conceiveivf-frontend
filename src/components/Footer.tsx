import logo from "../images/conceiveivf-logo.webp";

export default function Footer() {
  return (
    <footer className="footer-section">
      <style>{`
        .footer-section {
          width: 100%;
          background: #3B2940;
          padding: 40px 20px 20px;
          color: #3B2940;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr 0.8fr 1.25fr;
          gap: 50px;
        }

        .footer-logo {
          width: 185px;
          height: auto;
          display: block;
          padding: 10px;
          background-color: white;
          border-radius: 8px;
          margin-bottom: 22px;
        }

        .footer-tagline {
          max-width: 310px;
          margin: 0;
          color: #F8F4EE;
          font-family: inherit;
          font-size: 14px;
          line-height: 1.45;
          font-weight: 400;
        }

        /* SOCIAL */
        .footer-social {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-top: 35px;
        }

        .footer-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          color: #FFFFFF;
          text-decoration: none;
          transition: transform 0.25s ease;
        }

        .footer-social a:hover {
          transform: translateY(-2px);
        }

        .footer-social svg {
          width: 30px;
          height: 30px;
          fill: currentColor;
        }

        /* HEADINGS */
        .footer-heading {
          margin: 0 0 18px;
          color: #E0C98A;
          font-family: inherit;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 700;
        }

        /* SERVICES / BLOG LINKS */
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .footer-links a {
          color: #F8F4EE;
          font-family: inherit;
          font-size: 14px;
          line-height: 1.3;
          font-weight: 400;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .footer-links a:hover {
          color: #E0C98A;
        }

        /* CONTACT */
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .footer-contact-icon {
          flex: 0 0 15px;
          width: 15px;
          height: 20px;
          color: #E0C98A;
          display: flex;
          align-items: center;
          justify-content: center;
          
        }

        .footer-contact-icon svg {
          width: 15px;
          height: 15px;
          fill: currentColor;
        }

        .footer-contact-text {
          color: #F8F4EE;
          font-family: inherit;
          font-size: 14px;
          line-height: 1.45;
          text-decoration: none;
        }

        .footer-contact-text:hover {
          color: #E0C98A;
        }

        /* BOTTOM */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 45px;
          padding-top: 18px;
          border-top: 1px solid #C6A15B;
        }

        .footer-copyright {
          margin: 0;
          color: #F8F4EE;
          font-family: inherit;
          font-size: 13px;
          line-height: 1.5;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .footer-bottom-links a {
          color: #F8F4EE;
          font-family: inherit;
          font-size: 13px;
          text-decoration: none;
        }

        .footer-bottom-links a:hover {
          color: #E0C98A;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .footer-section {
            padding: 45px 20px 22px;
          }

          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 35px;
          }

          .footer-logo {
            width: 100px;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .footer-section {
            padding: 40px 18px 20px;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 35px 20px;
          }

          .footer-logo {
            width: 95px;
            margin-bottom: 16px;
          }

          .footer-tagline {
            font-size: 12px;
          }

          .footer-social {
            margin-top: 22px;
            gap: 18px;
          }

          .footer-heading {
            margin-bottom: 15px;
            font-size: 14px;
          }

          .footer-links {
            gap: 10px;
          }

          .footer-links a {
            font-size: 12px;
            line-height: 1.35;
          }

          .footer-contact {
            gap: 13px;
          }

          .footer-contact-text {
            font-size: 12px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: center;
            margin-top: 30px;
            padding-top: 15px;
            text-align: center;
          }

          .footer-bottom-links {
            gap: 14px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 380px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .footer-tagline {
            max-width: 280px;
          }

          .footer-social {
            margin-top: 18px;
          }

          .footer-bottom {
            gap: 8px;
          }
        }
      `}</style>

      <div className="footer-container">

        <div className="footer-grid">

          {/* COLUMN 1 */}

          <div>
            <img
              src={logo}
              alt="Conceive IVF Fertility Centre"
              className="footer-logo"
            />

            <p className="footer-tagline">
              Creating Little Miracles, One Family at a Time –
              <br />
              Let’s Build Yours Together.
            </p>

            <div className="footer-social">

              {/* FACEBOOK */}
              <a href="https://www.facebook.com/people/Conceive-ivf-fertility-centre/100087744469285/" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a href="https://www.instagram.com/conceive_ivf_fertility_centre/?next=%2Fsirsa_journey%2F" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 12 16.5a4.5 4.5 0 0 1 0-9zm0 2A2.5 2.5 0 1 0 12 14.5a2.5 2.5 0 0 0 0-5zM17.5 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                </svg>
              </a>

              {/* YOUTUBE */}
              <a href="https://www.youtube.com/channel/UC7WCURDpaTo3D-i8_SBcw2w" aria-label="YouTube">
                <svg viewBox="0 0 24 24">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>

            </div>
          </div>


          {/* COLUMN 2 — OUR SERVICES */}

          <div>
            <h3 className="footer-heading">
              Our Services
            </h3>

            <ul className="footer-links">

              <li>
                <a href="in-vitro-fertilization">
                  In Vitro Fertilization (IVF)
                </a>
              </li>

              <li>
                <a href="/iui-intrauterine-insemination">
                  Intra Uterine Insemination (IUI)
                </a>
              </li>

              <li>
                <a href="/icsi">
                  ICSI Treatment (ICSI)
                </a>
              </li>

              <li>
                <a href="/egg-freezing">
                  Egg Freezing
                </a>
              </li>

              <li>
                <a href="/reproductive-surgery">
                  Reproductive Surgery
                </a>
              </li>

              <li>
                <a href="/semen-sperm-freezing">
                  Semen / Sperm Freezing
                </a>
              </li>

              <li>
                <a href="/infertility-assessment-male">
                  InFertility Assessment- Male
                </a>
              </li>

              <li>
                <a href="/infertility-assesment-female">
                  InFertility Assesment-Female
                </a>
              </li>

              <li>
                <a href="/embryology">
                  Embryology
                </a>
              </li>

            </ul>
          </div>


          {/* COLUMN 3 — Quick Links */}

          <div>
            <h3 className="footer-heading">
              Quick Links
            </h3>

            <ul className="footer-links">

              <li>
                <a href="/">
                  Home
                </a>
              </li>

              <li>
                <a href="/about">
                  About us
                </a>
              </li>

              <li>
                <a href="/videos">
                  Our Videos
                </a>
              </li>

              <li>
                <a href="/patient-review">
                  Patient Review
                </a>
              </li>

              <li>
                <a href="#">
                  Average Cost of Treatment
                </a>
              </li>

              <li>
                <a href="/contact">
                  Contact
                </a>
              </li>

            </ul>
          </div>


          {/* COLUMN 4 — CONTACT US */}

          <div>

            <h3 className="footer-heading">
              Contact Us
            </h3>

            <div className="footer-contact">

              {/* PHONE */}
              <div className="footer-contact-item">

                <span className="footer-contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.6 2.5 9.2 2a1.5 1.5 0 0 1 1.7.9l1.3 3.1a1.5 1.5 0 0 1-.4 1.7L10.2 9.3a16.5 16.5 0 0 0 4.5 4.5l1.6-1.6a1.5 1.5 0 0 1 1.7-.4l3.1 1.3a1.5 1.5 0 0 1 .9 1.7l-.5 2.6a2.5 2.5 0 0 1-2.5 2.1C10.2 19.5 4.5 13.8 4.5 6.5A2.5 2.5 0 0 1 6.6 2.5z" />
                  </svg>
                </span>

                <a
                  href="tel:01666226880"
                  className="footer-contact-text"
                >
                  01666-226880
                </a>
                <a
                  href="tel:9255278000"
                  className="footer-contact-text"
                >
                  +91 9255278000
                </a>

              </div>


              {/* EMAIL */}
              <div className="footer-contact-item">

                <span className="footer-contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.5l9 5.6 9-5.6V7H3zm18 10V9.8l-8.5 5.3a1 1 0 0 1-1 0L3 9.8V17h18z" />
                  </svg>
                </span>

                <a
                  href="mailto:conceiveivfsirsa@gmail.com"
                  className="footer-contact-text"
                >
                  conceiveivfsirsa@gmail.com
                </a>

              </div>


              {/* LOCATION */}
              <div className="footer-contact-item">

                <span className="footer-contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                  </svg>
                </span>

                <span className="footer-contact-text">
                  Opp Town Park, Dabwali Road Sirsa
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="footer-bottom">

          <p className="footer-copyright">
            © {new Date().getFullYear()} Conceive IVF Fertility Centre.
            All rights reserved. Developed by <b><a href="https://lybtechnology.com/">LYB Technology</a></b>
          </p>

          <div className="footer-bottom-links">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}