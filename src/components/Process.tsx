import type { CSSProperties } from "react";
import { useSiteContent } from "../hooks/useSiteContent";
import { HOME_PROCESS_KEY, homeProcessDefaults, type HomeProcessContent } from "../content/homeSections";

export default function Process() {
  const content = useSiteContent(HOME_PROCESS_KEY, homeProcessDefaults);
  return <ProcessView content={content} />;
}

// Pure markup — also used by the admin live preview. `content` is null while loading.
export function ProcessView({ content }: { content: HomeProcessContent | null }) {
  if (!content) return <section className="py-14" style={{ minHeight: 420 }} />;

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6 animate-fade-in">

        {/* =========================================
            HEADING
        ========================================= */}

        <div className="mx-auto max-w-2xl text-center">

          {content.label && (
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-widest
                text-[#C6A15B]
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
              text-[#3B2940]
              sm:text-4xl
            "
          >
            {content.heading}
          </h2>

        </div>


        {/* =========================================
            STEPS
        ========================================= */}

        <div
          className="
            relative
            mt-16
            grid
            gap-10
            md:grid-cols-[repeat(var(--steps),minmax(0,1fr))]
          "
          style={{ "--steps": content.steps.length } as CSSProperties}
        >

          {/* Progress Line */}

          {content.steps.length > 1 && (
            <div
              className="
                absolute
                top-8
                right-[10%]
                left-[10%]
                hidden
                h-0.5
                bg-gradient-to-r
                from-[#E0C98A]
                via-[#C6A15B]
                to-[#3B2940]
                md:block
              "
            />
          )}


          {/* Step Cards */}

          {content.steps.map((s, i) => (

            <div
              key={i}
              className="
                relative
                text-center
              "
            >

              {/* Number Circle */}

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border-4
                  border-white
                  bg-gradient-to-br
                  from-[#C6A15B]
                  to-[#B08B48]
                  font-display
                  text-xl
                  font-bold
                  text-white
                  shadow-lg
                  shadow-[#C6A15B]/25
                "
              >
                {i + 1}
              </div>


              {/* Title */}

              <h3
                className="
                  mt-5
                  font-bold
                  text-[#3B2940]
                "
              >
                {s.title}
              </h3>


              {/* Description */}

              {s.description && (
                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-[#5F5660]
                  "
                >
                  {s.description}
                </p>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
