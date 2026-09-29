// Styles shared by the About page and its admin previews
export const aboutStyles = `
        .about-page {
          width: 100%;
          background: #ffffff;
          color: #3b2940;
          font-family: "Manrope", Arial, sans-serif;
        }

        .about-page * {
          box-sizing: border-box;
        }

        .about-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .about-hero {
          position: relative;
          min-height: 390px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(59, 41, 64, 0.96),
              rgba(47, 32, 53, 0.88)
            )
              center/cover no-repeat;
        }

        .about-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 90px 0;
        }

        .about-hero-label {
          display: inline-block;
          margin-bottom: 14px;
          color: #e0c98a;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .about-hero h1 {
          margin: 0;
          max-width: 760px;
          color: #ffffff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 52px;
          line-height: 1.12;
          font-weight: 700;
        }

        .about-hero h1 span {
          color: #e0c98a;
        }

        .about-hero-text {
          max-width: 650px;
          margin-top: 22px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          line-height: 1.7;
        }

        .about-breadcrumb {
          margin-top: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
        }

        .about-breadcrumb a {
          color: #e0c98a;
          text-decoration: none;
          font-weight: 600;
        }

        .about-section {
          padding: 45px 0;
        }

        .about-intro-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          align-items: center;
          gap: 75px;
        }

        .doctor-image-wrap {
          position: relative;
          max-width: 480px;
          margin: 0 auto;
        }

        .doctor-image {
          width: 100%;
          height: 540px;
          display: block;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(59, 41, 64, 0.14);
        }

        .experience-badge {
          position: absolute;
          right: -28px;
          bottom: 28px;
          width: 145px;
          height: 145px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #3b2940;
          color: #ffffff;
          text-align: center;
          border: 4px solid #c6a15b;
          box-shadow: 0 15px 35px rgba(59, 41, 64, 0.25);
        }

        .experience-badge strong {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
          line-height: 1;
        }

        .experience-badge span {
          margin-top: 6px;
          font-size: 12px;
          line-height: 1.35;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .section-label {
          color: #c6a15b;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .section-heading {
          margin: 12px 0 0;
          color: #3b2940;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 36px;
          line-height: 1.2;
          font-weight: 700;
        }

        .section-heading span {
          color: #c6a15b;
        }

        .about-copy {
          margin-top: 22px;
          color: #5f5660;
          font-size: 16px;
          line-height: 1.7;
        }

        .about-copy + .about-copy {
          margin-top: 14px;
        }

        .doctor-highlights {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 28px;
        }

        .doctor-highlight {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 14px;
          border: 1px solid #e8dfd2;
          border-radius: 14px;
          background: #ffffff;
        }

        .highlight-icon {
          flex: 0 0 30px;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #f8f4ee;
          color: #3b2940;
          font-size: 15px;
          font-weight: 800;
        }

        .doctor-highlight span:last-child {
          color: #5f5660;
          font-size: 14px;
          line-height: 1.5;
        }

        .about-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          padding: 14px 24px;
          border-radius: 10px;
          background: #c6a15b;
          color: #ffffff;
          font-size: 14px;
          line-height: 20px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .about-button:hover {
          background: #c6a15b;
          color: #3b2940;
          transform: translateY(-2px);
        }

        .qualification-section {
          background: #f8f4ee;
        }

        .qualification-header {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .qualification-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
          margin-top: 50px;
        }

        .qualification-card {
          padding: 28px 20px;
          min-height: 250px;
          border: 1px solid #e8dfd2;
          border-radius: 20px;
          background: #ffffff;
          transition: all 0.3s ease;
        }

        .qualification-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(24, 63, 69, 0.08);
        }

        .qualification-number {
          color: #3b2940;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 30px;
          line-height: 1;
          font-weight: 700;
        }

        .qualification-year {
          margin-top: 12px;
          color: #c6a15b;
          font-size: 12px;
          line-height: 18px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .qualification-card h3 {
          margin: 12px 0 0;
          color: #3b2940;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 700;
        }

        .qualification-card p {
          margin: 10px 0 0;
          color: #5f5660;
          font-size: 13px;
          line-height: 1.6;
        }

        .care-section {
          padding: 45px 0;
        }

        .care-box {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 60px;
          align-items: center;
          padding: 60px;
          border-radius: 28px;
          background: linear-gradient(135deg, #3b2940, #2f2035);
          border: 1px solid rgba(198, 161, 91, 0.45);
        }

        .care-content {
          position: relative;
          z-index: 2;
        }

        .care-label {
          color: #e0c98a;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .care-heading {
          margin-top: 12px;
          color: #ffffff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 34px;
          line-height: 1.2;
          font-weight: 700;
        }

        .care-text {
          margin-top: 18px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 16px;
          line-height: 1.7;
        }

        .hours-card {
          position: relative;
          z-index: 2;
          padding: 32px;
          border-radius: 20px;
          background: #f8f4ee;
          border: 1px solid #c6a15b;
          box-shadow: 0 20px 50px rgba(59, 41, 64, 0.16);
        }

        .hours-card-label {
          color: #c6a15b;
          font-size: 13px;
          line-height: 20px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .hours-card h3 {
          margin-top: 10px;
          color: #3b2940;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 26px;
          line-height: 1.25;
          font-weight: 700;
        }

        .hours-time {
          margin-top: 18px;
          color: #3b2940;
          font-size: 18px;
          line-height: 1.5;
          font-weight: 700;
        }

        .hours-note {
          margin-top: 8px;
          color: #5f5660;
          font-size: 14px;
          line-height: 1.6;
        }

        @media (max-width: 1100px) {
          .qualification-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .about-intro-grid {
            gap: 50px;
          }
        }

        @media (max-width: 800px) {
          .about-hero {
            min-height: 330px;
          }

          .about-hero-content {
            padding: 70px 0;
          }

          .about-hero h1 {
            font-size: 42px;
          }

          .about-intro-grid {
            grid-template-columns: 1fr;
          }

          .doctor-image-wrap {
            max-width: 520px;
          }

          .doctor-image {
            height: 500px;
          }

          .qualification-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .care-box {
            grid-template-columns: 1fr;
            padding: 40px 30px;
            gap: 35px;
          }
        }

        @media (max-width: 600px) {
          .about-container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .about-section,
          .care-section {
            padding: 70px 0;
          }

          .about-hero {
            min-height: 300px;
          }

          .about-hero-content {
            padding: 60px 0;
          }

          .about-hero h1 {
            font-size: 34px;
            line-height: 1.18;
          }

          .about-hero-text {
            font-size: 15px;
          }

          .section-heading {
            font-size: 30px;
            line-height: 36px;
          }

          .about-copy {
            font-size: 16px;
            line-height: 1.65;
          }

          .doctor-image {
            height: 430px;
            border-radius: 22px;
          }

          .experience-badge {
            right: 12px;
            bottom: 18px;
            width: 115px;
            height: 115px;
          }

          .experience-badge strong {
            font-size: 30px;
          }

          .experience-badge span {
            font-size: 10px;
          }

          .doctor-highlights {
            grid-template-columns: 1fr;
          }

          .qualification-grid {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-top: 35px;
          }

          .qualification-card {
            min-height: auto;
            padding: 24px 20px;
          }

          .care-box {
            padding: 32px 22px;
            border-radius: 22px;
          }

          .care-heading {
            font-size: 30px;
          }

          .hours-card {
            padding: 25px;
          }
        }
      
        /* Fewer than 5 qualifications: centre the cards instead of leaving empty columns */
        @media (min-width: 1101px) {
          .qualification-grid.is-short {
            grid-template-columns: repeat(var(--count), minmax(0, 240px));
            justify-content: center;
          }
        }
`;
