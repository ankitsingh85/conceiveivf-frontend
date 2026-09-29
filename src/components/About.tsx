import doctorImage from "../images/doctor.webp";
import SmartLink from "./SmartLink";
import { useSiteContent } from "../hooks/useSiteContent";
import { resolveMediaUrl } from "../lib/api";
import { withBold } from "../utils/text";
import { HOME_ABOUT_KEY, homeAboutDefaults, type HomeAboutContent } from "../content/homeAbout";

export default function About() {
  const content = useSiteContent(HOME_ABOUT_KEY, homeAboutDefaults);
  return <AboutView content={content} />;
}

/*
 * Pure "About Us" markup — also used by the admin panel for the live preview.
 * `content` is null while the first load is in flight.
 */
export function AboutView({ content }: { content: HomeAboutContent | null }) {
  return (
    <>
      <style>{`
        .about-font-display {
          font-family: "Playfair Display", Georgia, serif;
        }

        .about-font-body {
          font-family: "Manrope", Arial, sans-serif;
        }

        /* =========================================
           PURPLE + GOLD COLOR SYSTEM
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

        .about-border {
          border-color: #E8DFD2;
        }

        .about-body-text {
          color: #5F5660;
        }
      `}</style>

      <section
        id="about"
        className="py-14 about-font-body"
        style={content ? undefined : { minHeight: 600 }}
      >
        {content && (
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 animate-fade-in">

          {/* =========================================
              LEFT IMAGE
          ========================================= */}

          <div className="relative">

            <img
              src={content.image ? resolveMediaUrl(content.image) : doctorImage}
              alt={content.imageAlt}
              className="
                w-full
                rounded-[2rem]
                object-cover
                shadow-xl
              "
            />

            {/* Small Family Image */}

            {content.smallImage && (
              <img
                src={resolveMediaUrl(content.smallImage)}
                alt={content.smallImageAlt}
                className="
                  absolute
                  -right-6
                  -bottom-10
                  hidden
                  h-48
                  w-48
                  rounded-3xl
                  border-8
                  border-white
                  object-cover
                  shadow-xl
                  md:block
                "
              />
            )}

            {/* Experience Badge */}

            {content.badgeValue && (
              <div
                className="
                  absolute
                  -top-6
                  -left-6
                  hidden
                  rounded-2xl
                  about-purple-bg
                  px-6
                  py-4
                  text-white
                  shadow-xl
                  md:block
                "
              >
                <p className="about-font-display text-3xl font-bold">
                  {content.badgeValue}
                </p>

                {content.badgeLabel && (
                  <p className="text-xs opacity-80">
                    {content.badgeLabel}
                  </p>
                )}
              </div>
            )}

          </div>


          {/* =========================================
              RIGHT CONTENT
          ========================================= */}

          <div className="about-font-body">

            {/* Section Label */}

            {content.label && (
              <span
                className="
                  about-gold
                  text-sm
                  font-semibold
                  uppercase
                  tracking-widest
                "
              >
                {content.label}
              </span>
            )}


            {/* Heading */}

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


            {/* Paragraphs */}

            {content.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`
                  ${i === 0 ? "mt-6" : "mt-4"}
                  text-base
                  leading-relaxed
                  text-[#5F5660]
                `}
              >
                {withBold(paragraph, "font-bold text-[#3B2940]")}
              </p>
            ))}


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
