import { useSiteContent } from "../hooks/useSiteContent";
import { withBold } from "../utils/text";
import { HOME_WHY_US_KEY, homeWhyUsDefaults, type HomeWhyUsContent } from "../content/homeSections";

export default function WhyUs() {
  const content = useSiteContent(HOME_WHY_US_KEY, homeWhyUsDefaults);
  return <WhyUsView content={content} />;
}

// Pure markup — also used by the admin live preview. `content` is null while loading.
export function WhyUsView({ content }: { content: HomeWhyUsContent | null }) {
  return (
    <section
      id="why-us"
      className="
        relative
        overflow-hidden
        bg-[#3B2940]
        py-10
        text-white
      "
      style={content ? undefined : { minHeight: 560 }}
    >
      {/* Decorative Circle */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          right-0
          h-96
          w-96
          translate-x-1/3
          -translate-y-1/3
          rounded-full
          bg-[#C6A15B]/10
          blur-3xl
        "
      />

      {content && (
      <div className="relative mx-auto max-w-7xl px-6 animate-fade-in">

        {/* =========================================
            HEADING
        ========================================= */}

        <div className="grid items-end gap-8 lg:grid-cols-2">

          <div>

            {content.label && (
              <span
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-widest
                  text-[#E0C98A]
                "
              >
                {content.label}
              </span>
            )}

            <h2
              className="
                mt-3
                font-display
                text-3xl
                font-bold
                text-white
                sm:text-4xl
              "
            >
              {content.heading}
            </h2>

          </div>


          {/* Description */}

          {content.description && (
            <p
              className="
                text-[#F8F4EE]/90
              "
            >
              {withBold(content.description, "text-[#E0C98A]")}
            </p>
          )}

        </div>


        {/* =========================================
            CARDS
        ========================================= */}

        {content.items.length > 0 && (
          <div
            className="
              mt-14
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {content.items.map((r, i) => (

              <div
                key={i}
                className="
                  rounded-3xl
                  border
                  border-[#E0C98A]/20
                  bg-white/10
                  p-7
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C6A15B]/40
                  hover:bg-white/15
                "
              >

                {/* Number */}

                <span
                  className="
                    font-display
                    text-4xl
                    font-bold
                    text-[#C6A15B]
                  "
                >
                  {String(i + 1).padStart(2, "0")}
                </span>


                {/* Title */}

                <h3
                  className="
                    mt-4
                    text-lg
                    font-bold
                    text-white
                  "
                >
                  {r.title}
                </h3>


                {/* Description */}

                {r.description && (
                  <p
                    className="
                      mt-2
                      text-sm
                      leading-relaxed
                      text-[#F8F4EE]/80
                    "
                  >
                    {r.description}
                  </p>
                )}

              </div>

            ))}

          </div>
        )}

      </div>
      )}
    </section>
  );
}
