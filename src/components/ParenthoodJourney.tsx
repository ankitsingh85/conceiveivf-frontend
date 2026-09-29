import SmartLink from "./SmartLink";
import { useSiteContent } from "../hooks/useSiteContent";
import { resolveMediaUrl } from "../lib/api";
import {
  HOME_TREATMENTS_KEY,
  homeTreatmentsDefaults,
  type HomeTreatmentsContent,
} from "../content/homeSections";

export default function ParenthoodJourney() {
  const content = useSiteContent(HOME_TREATMENTS_KEY, homeTreatmentsDefaults);
  return <ParenthoodJourneyView content={content} />;
}

// Pure markup — also used by the admin live preview. `content` is null while loading.
export function ParenthoodJourneyView({ content }: { content: HomeTreatmentsContent | null }) {
  return (
    <section
      id="parenthood-journey"
      className="parenthood-journey"
      style={content ? undefined : { minHeight: 700 }}
    >
      <style>{`
        /* =========================================
           PARENTHOOD JOURNEY
        ========================================= */

        .parenthood-journey {
          width: 100%;
          background: #f8f4ee;

          /* REDUCED TOP + BOTTOM SPACE */
          padding: 40px 20px 40px;

          margin: 0;
        }

        .parenthood-journey-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }

        /* =========================================
           HEADING
        ========================================= */

        .journey-heading {
          max-width: 760px;

          margin: 0 auto 35px;

          text-align: center;
        }

        .journey-small-title {
          display: inline-block;

          color: #C6A15B;

          font-size: 12px;
          line-height: 18px;

          font-weight: 700;

          letter-spacing: 1.8px;

          text-transform: uppercase;
        }

        .journey-heading h2 {
          margin: 7px 0 0;

          color: #3B2940;

          font-family: inherit;

          font-size: 38px;
          line-height: 1.15;

          font-weight: 700;

          letter-spacing: -0.8px;
        }

        .journey-heading h2 span {
          color: #3B2940;
        }

        .journey-heading p {
          max-width: 650px;

          margin: 12px auto 0;

          color: #5F5660;

          font-family: inherit;

          font-size: 15px;

          line-height: 1.55;

          font-weight: 400;
        }

        /* =========================================
           TREATMENT GRID
        ========================================= */

        .treatment-grid {
          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 18px;
        }

        /* =========================================
           TREATMENT CARD
        ========================================= */

        .treatment-item {
          position: relative;

          display: flex;

          align-items: center;

          min-height: 108px;

          padding: 12px 15px 12px 12px;

          background: #ffffff;

          border: 1px solid #E8DFD2;

          border-radius: 17px;

          text-decoration: none;

          overflow: hidden;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .treatment-item::before {
          content: "";

          position: absolute;

          left: 0;
          top: 0;
          bottom: 0;

          width: 3px;

          background: #3B2940;

          transform: scaleY(0);

          transform-origin: bottom;

          transition: transform 0.3s ease;
        }

        .treatment-item:hover {
          transform: translateY(-4px);

          border-color: rgba(59, 41, 64, 0.18);

          box-shadow:
            0 14px 35px rgba(59, 41, 64, 0.09);
        }

        .treatment-item:hover::before {
          transform: scaleY(1);
        }

        /* =========================================
           IMAGE
        ========================================= */

        .treatment-image-wrapper {
          flex: 0 0 82px;

          width: 82px;
          height: 82px;

          border-radius: 14px;

          overflow: hidden;

          background: #F8F4EE;

          position: relative;
        }

        .treatment-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;

          transition: transform 0.4s ease;
        }

        .treatment-item:hover .treatment-image {
          transform: scale(1.08);
        }

        /* =========================================
           CONTENT
        ========================================= */

        .treatment-content {
          flex: 1;

          min-width: 0;

          padding-left: 15px;

          padding-right: 7px;
        }

        .treatment-number {
          display: block;

          margin-bottom: 5px;

          color: #C6A15B;

          font-size: 9px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: 1.4px;
        }

        .treatment-title {
          margin: 0;

          color: #3B2940;

          font-family: inherit;

          font-size: 16px;

          line-height: 1.3;

          font-weight: 700;
        }

        /* =========================================
           ARROW
        ========================================= */

        .treatment-arrow {
          flex: 0 0 31px;

          width: 31px;
          height: 31px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #F8F4EE;

          color: #3B2940;

          font-size: 15px;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .treatment-item:hover .treatment-arrow {
          background: #3B2940;

          color: #ffffff;

          transform: translateX(3px);
        }

        /* =========================================
           FIRST CARD
        ========================================= */

        .treatment-item:nth-child(1) {
          background:
            linear-gradient(
              135deg,
              #F8F4EE 0%,
              #ffffff 100%
            );
        }

        .treatment-item:nth-child(1)
        .treatment-image-wrapper {
          border: 2px solid rgba(198, 161, 91, 0.18);
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {

          .parenthood-journey {
            padding: 45px 20px 50px;
          }

          .journey-heading {
            margin-bottom: 30px;
          }

          .journey-heading h2 {
            font-size: 34px;
          }

          .journey-heading p {
            font-size: 14px;
          }

          .treatment-grid {
            grid-template-columns: repeat(2, 1fr);

            gap: 15px;
          }

          .treatment-item {
            min-height: 105px;
          }

          .treatment-image-wrapper {
            flex-basis: 76px;

            width: 76px;
            height: 76px;
          }

          .treatment-title {
            font-size: 15px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .parenthood-journey {
            padding: 38px 14px 45px;
          }

          .journey-heading {
            margin-bottom: 25px;
          }

          .journey-small-title {
            font-size: 10px;

            line-height: 16px;

            letter-spacing: 1.3px;
          }

          .journey-heading h2 {
            margin-top: 6px;

            font-size: 28px;

            line-height: 1.18;

            letter-spacing: -0.4px;
          }

          .journey-heading p {
            margin-top: 10px;

            padding: 0;

            font-size: 13px;

            line-height: 1.55;
          }

          .treatment-grid {
            grid-template-columns: repeat(2, 1fr);

            gap: 11px;
          }

          .treatment-item {
            min-height: 142px;

            display: flex;

            flex-direction: column;

            align-items: flex-start;

            justify-content: flex-start;

            padding: 8px;

            border-radius: 14px;
          }

          .treatment-image-wrapper {
            flex: none;

            width: 100%;

            height: 92px;

            border-radius: 10px;
          }

          .treatment-content {
            width: 100%;

            padding: 8px 2px 0;
          }

          .treatment-number {
            margin-bottom: 4px;

            font-size: 7px;
          }

          .treatment-title {
            padding-right: 3px;

            font-size: 13px;

            line-height: 1.28;
          }

          .treatment-arrow {
            position: absolute;

            right: 7px;

            bottom: 7px;

            width: 24px;
            height: 24px;

            font-size: 12px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 380px) {

          .parenthood-journey {
            padding: 32px 11px 38px;
          }

          .journey-heading {
            margin-bottom: 22px;
          }

          .journey-heading h2 {
            font-size: 25px;
          }

          .journey-heading p {
            font-size: 12px;
          }

          .treatment-grid {
            gap: 9px;
          }

          .treatment-item {
            min-height: 132px;

            padding: 7px;

            border-radius: 12px;
          }

          .treatment-image-wrapper {
            height: 86px;

            border-radius: 9px;
          }

          .treatment-content {
            padding-top: 7px;
          }

          .treatment-title {
            font-size: 12px;
          }

          .treatment-arrow {
            width: 22px;
            height: 22px;

            right: 6px;
            bottom: 6px;

            font-size: 11px;
          }
        }
      `}</style>

      {content && (
      <div className="parenthood-journey-container animate-fade-in">

        {/* HEADING */}
        <div className="journey-heading">

          {content.label && (
            <div className="journey-small-title">
              {content.label}
            </div>
          )}

          <h2>
            {content.heading}
          </h2>

          {content.description && (
            <p>
              {content.description}
            </p>
          )}

        </div>

        {/* TREATMENTS */}
        <div className="treatment-grid">

          {content.items.map((treatment, index) => (
            <SmartLink
              to={treatment.link || "#"}
              className="treatment-item"
              key={index}
            >

              <div className="treatment-image-wrapper">
                {treatment.image && (
                  <img
                    src={resolveMediaUrl(treatment.image)}
                    alt={treatment.title}
                    className="treatment-image"
                  />
                )}
              </div>

              <div className="treatment-content">

                <span className="treatment-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="treatment-title">
                  {treatment.title}
                </div>

              </div>

              <div className="treatment-arrow">
                →
              </div>

            </SmartLink>
          ))}

        </div>

      </div>
      )}
    </section>
  );
}
