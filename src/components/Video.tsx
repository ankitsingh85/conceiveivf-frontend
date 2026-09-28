import videoImage from "../images/vid-img.png";

export default function VideoSection() {
  return (
    <section id="videos" className="video-section">
      <style>{`
        .video-section {
          width: 100%;
          background: #F8F4EE;
          padding: 40px 20px 40px;
        }

        .video-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* =========================================
           HEADING
        ========================================= */

        .video-heading {
          text-align: center;
          margin-bottom: 38px;
        }

        .video-label {
          display: block;
          color: #C6A15B;
          font-family: inherit;
          font-size: 13px;
          line-height: 20px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .video-title {
          margin: 10px 0 0;
          color: #3B2940;
          font-family: inherit;
          font-size: 42px;
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.8px;
        }

        .video-title span {
          color: #C6A15B;
        }

        .video-description {
          max-width: 760px;
          margin: 14px auto 0;
          color: #5F5660;
          font-family: inherit;
          font-size: 15px;
          line-height: 1.6;
        }

        /* =========================================
           VIDEO
        ========================================= */

        .video-wrapper {
          position: relative;
          width: 100%;
          max-width: 1050px;
          height: 500px;
          margin: 0 auto;
          overflow: hidden;
          background: #F8F4EE;
          border-radius: 24px;
          border: 1px solid #E8DFD2;
          box-shadow:
            0 18px 45px rgba(59, 41, 64, 0.10);
        }

        .video-poster {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        /* =========================================
           OVERLAY
        ========================================= */

        .video-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 41, 64, 0.12);
          cursor: pointer;
          text-decoration: none;
        }

        /* =========================================
           PLAY BUTTON
        ========================================= */

        .video-play-button {
          width: 82px;
          height: 82px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #C6A15B;

          border: 6px solid rgba(255, 255, 255, 0.85);

          box-shadow:
            0 10px 35px rgba(47, 32, 53, 0.20);

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .video-play-button::before {
          content: "";

          margin-left: 5px;

          width: 0;
          height: 0;

          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          border-left: 18px solid #ffffff;
        }

        .video-overlay:hover .video-play-button {
          transform: scale(1.08);
          background: #3B2940;
        }

        /* =========================================
           BOTTOM TEXT
        ========================================= */

        .video-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
          text-align: center;
        }

        .video-bottom-line {
          width: 35px;
          height: 2px;
          background: #C6A15B;
        }

        .video-bottom-text {
          color: #3B2940;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {
          .video-section {
            padding: 45px 20px 55px;
          }

          .video-title {
            font-size: 36px;
          }

          .video-wrapper {
            height: 420px;
            border-radius: 20px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {
          .video-section {
            padding: 40px 15px 50px;
          }

          .video-heading {
            margin-bottom: 28px;
          }

          .video-label {
            font-size: 10px;
            letter-spacing: 1.5px;
          }

          .video-title {
            margin-top: 7px;
            font-size: 29px;
            line-height: 1.2;
          }

          .video-description {
            margin-top: 11px;
            font-size: 13px;
            line-height: 1.55;
          }

          .video-wrapper {
            height: 270px;
            border-radius: 16px;
          }

          .video-play-button {
            width: 65px;
            height: 65px;
            border-width: 5px;
          }

          .video-play-button::before {
            border-top-width: 9px;
            border-bottom-width: 9px;
            border-left-width: 14px;
          }

          .video-bottom {
            margin-top: 15px;
          }

          .video-bottom-text {
            font-size: 11px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 380px) {
          .video-section {
            padding: 35px 12px 45px;
          }

          .video-title {
            font-size: 26px;
          }

          .video-description {
            font-size: 12px;
          }

          .video-wrapper {
            height: 235px;
          }

          .video-play-button {
            width: 58px;
            height: 58px;
          }
        }
      `}</style>

      <div className="video-container">

        {/* HEADING */}

        <div className="video-heading">

          <span className="video-label">
            Professional Results
          </span>

          <h2 className="video-title">
            The Best Possible <span>Results</span>
          </h2>

          <p className="video-description">
            Creating miracles every day – trusted care, compassionate
            support, and successful journeys to parenthood!
          </p>

        </div>

        {/* VIDEO */}

        <div className="video-wrapper">

          <img
            src={videoImage}
            alt="Conceive IVF Fertility Centre"
            className="video-poster"
          />

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="video-overlay"
            aria-label="Play video"
          >
            <span className="video-play-button" />
          </a>

        </div>

        {/* BOTTOM */}

        <div className="video-bottom">

          <span className="video-bottom-line" />

          <span className="video-bottom-text">
            Your journey. Our expertise. Your miracle.
          </span>

          <span className="video-bottom-line" />

        </div>

      </div>
    </section>
  );
}