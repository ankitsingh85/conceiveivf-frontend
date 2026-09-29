import SmartLink from "./SmartLink";
import { useSiteContent } from "../hooks/useSiteContent";
import { resolveMediaUrl } from "../lib/api";
import { HOME_WELCOME_KEY, homeWelcomeDefaults, type HomeWelcomeContent } from "../content/homeSections";

// "Welcome a little bundle of joy" section on the home page
export default function Services() {
  const content = useSiteContent(HOME_WELCOME_KEY, homeWelcomeDefaults);
  return <WelcomeView content={content} />;
}

// Pure markup — also used by the admin live preview. `content` is null while loading.
export function WelcomeView({ content }: { content: HomeWelcomeContent | null }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

       

        .about-font-body {
          font-family: "Manrope", Arial, sans-serif;
        }

        /* =========================================
           PURPLE + GOLD COLOR COMBINATION
        ========================================= */

        .about-purple {
          color: #3B2940;
        }

        .about-purple-bg {
          background-color: #3B2940;
        }

        .about-purple-hover:hover {
          background-color: #2F2035;
        }

        .about-gold {
          color: #C6A15B;
        }

        .about-gold-bg {
          background-color: #C6A15B;
        }

        .about-gold-hover:hover {
          background-color: #B08B48;
        }

        .about-cream-bg {
          background-color: #F8F4EE;
        }

        .about-body-text {
          color: #5F5660;
        }
      `}</style>

      <section
        id="welcome"
        className="py-14 about-font-body"
        style={content ? undefined : { minHeight: 520 }}
      >
        {content && (
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 animate-fade-in">

          {/* =========================================
              LEFT IMAGE
          ========================================= */}

          <div className="relative">

            {content.image && (
              <img
                src={resolveMediaUrl(content.image)}
                alt={content.imageAlt}
                className="
                  rounded-[2rem]
                  object-cover
                  shadow-xl
                "
              />
            )}

          </div>


          {/* =========================================
              RIGHT CONTENT
          ========================================= */}

          <div className="about-font-body">

            {/* =========================================
                HEADING
            ========================================= */}

            <h2
              className="
                about-font-display
                mt-3
                text-3xl
                font-bold
                text-[#3B2940]
                sm:text-4xl
              "
            >
              {content.heading}
            </h2>


            {/* =========================================
                BODY TEXT
            ========================================= */}

            {content.text && (
              <p
                className="
                  mt-4
                  text-base
                  leading-relaxed
                  text-[#5F5660]
                "
              >
                {content.text}
              </p>
            )}


            {/* =========================================
                BUTTON
            ========================================= */}

            {content.button.label && (
              <SmartLink
                to={content.button.link || "#contact"}
                className="
                  about-gold-bg
                  about-gold-hover
                  mt-10
                  inline-block
                  rounded-full
                  px-8
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#C6A15B]/20
                  transition
                "
              >
                {content.button.label}
              </SmartLink>
            )}

          </div>

        </div>
        )}
      </section>
    </>
  );
}
