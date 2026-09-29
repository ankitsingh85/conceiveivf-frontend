import { useState } from "react";
import { useSiteContent } from "../hooks/useSiteContent";
import { HOME_FAQ_KEY, homeFaqDefaults, type HomeFaqContent } from "../content/homeSections";

export default function FAQ() {
  const content = useSiteContent(HOME_FAQ_KEY, homeFaqDefaults);
  return <FaqView content={content} />;
}

// Pure markup — also used by the admin live preview. `content` is null while loading.
export function FaqView({ content }: { content: HomeFaqContent | null }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        .faq-section {
          background: #F8F4EE;
          padding: 40px 20px 40px;
          font-family: "Manrope", Arial, sans-serif;
        }

        .faq-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* HEADING */

        .faq-heading {
          text-align: center;
        }

        .faq-label {
          color: #C6A15B;
          font-family: "Manrope", Arial, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .faq-heading h2 {
          margin: 12px 0 0;
          color: #3B2940;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 30px;
          line-height: 36px;
          font-weight: 700;
        }

        /* FAQ LIST */

        .faq-list {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-item {
          width: 100%;
          overflow: hidden;
          border: 1px solid #E8DFD2;
          border-radius: 18px;
          background: #FFFFFF;
          box-shadow: 0 3px 12px rgba(59, 41, 64, 0.04);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: #E0C98A;
          box-shadow: 0 8px 25px rgba(59, 41, 64, 0.07);
        }

        /* QUESTION */

        .faq-question {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding: 22px 28px;
          border: 0;
          background: transparent;
          color: #3B2940;
          font-family: "Manrope", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
        }

        .faq-question-text {
          flex: 1;
        }

        /* PLUS BUTTON */

        .faq-plus {
          display: flex;
          width: 38px;
          height: 38px;
          min-width: 38px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #F8F4EE;
          color: #C6A15B;
          font-size: 25px;
          line-height: 1;
          font-weight: 400;
          transition: transform 0.3s ease;
        }

        .faq-plus.open {
          transform: rotate(45deg);
          background: #3B2940;
          color: #E0C98A;
        }

        /* ANSWER */

        .faq-answer-wrapper {
          display: grid;
          transition: grid-template-rows 0.3s ease;
        }

        .faq-answer-wrapper.closed {
          grid-template-rows: 0fr;
        }

        .faq-answer-wrapper.open {
          grid-template-rows: 1fr;
        }

        .faq-answer-inner {
          overflow: hidden;
        }

        .faq-answer {
          max-width: 100%;
          padding: 0 28px 24px;
          color: #5F5660;
          font-family: "Manrope", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 400;
        }

        /* TABLET */

        @media (max-width: 991px) {
          .faq-section {
            padding: 80px 20px;
          }

          .faq-container {
            max-width: 900px;
          }

          .faq-list {
            margin-top: 40px;
          }

          .faq-question {
            padding: 21px 24px;
          }

          .faq-answer {
            padding: 0 24px 22px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .faq-section {
            padding: 65px 15px;
          }

          .faq-heading h2 {
            font-size: 30px;
            line-height: 36px;
          }

          .faq-label {
            font-size: 13px;
          }

          .faq-list {
            margin-top: 32px;
            gap: 12px;
          }

          .faq-item {
            border-radius: 15px;
          }

          .faq-question {
            gap: 15px;
            padding: 18px 17px;
            font-size: 15px;
            line-height: 1.45;
          }

          .faq-plus {
            width: 34px;
            height: 34px;
            min-width: 34px;
            font-size: 22px;
          }

          .faq-answer {
            padding: 0 17px 20px;
            font-size: 14px;
            line-height: 1.7;
          }
        }

        @media (max-width: 380px) {
          .faq-heading h2 {
            font-size: 28px;
            line-height: 34px;
          }

          .faq-question {
            padding: 17px 15px;
            font-size: 14px;
          }

          .faq-answer {
            padding-left: 15px;
            padding-right: 15px;
            font-size: 13.5px;
          }
        }
      `}</style>

      <section
        id="faq"
        className="faq-section"
        style={content ? undefined : { minHeight: 560 }}
      >
        {content && (
        <div className="faq-container animate-fade-in">

          {/* HEADING */}
          <div className="faq-heading">
            {content.label && (
              <span className="faq-label">
                {content.label}
              </span>
            )}

            <h2>
              {content.heading}
            </h2>
          </div>

          {/* FAQ LIST */}
          <div className="faq-list">

            {content.items.map((f, i) => {
              const isOpen = open === i;

              return (
                <div
                  key={i}
                  className="faq-item"
                >

                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpen(isOpen ? null : i)
                    }
                    className="faq-question"
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">
                      {f.question}
                    </span>

                    <span
                      className={`faq-plus ${
                        isOpen ? "open" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`faq-answer-wrapper ${
                      isOpen ? "open" : "closed"
                    }`}
                  >
                    <div className="faq-answer-inner">
                      <p className="faq-answer">
                        {f.answer}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
        )}
      </section>
    </>
  );
}
