import { useEffect, useState } from "react";
import { useSiteContent } from "../hooks/useSiteContent";
import { resolveMediaUrl } from "../lib/api";
import {
  HOME_TESTIMONIALS_KEY,
  homeTestimonialsDefaults,
  type HomeTestimonialsContent,
} from "../content/homeSections";

export default function Testimonials() {
  const content = useSiteContent(HOME_TESTIMONIALS_KEY, homeTestimonialsDefaults);
  return <TestimonialsView content={content} />;
}

// Pure markup — also used by the admin live preview. `content` is null while loading.
export function TestimonialsView({ content }: { content: HomeTestimonialsContent | null }) {
  const [i, setI] = useState(0);
  const count = content?.items.length ?? 0;

  useEffect(() => {
    if (count < 2) return;
    const t = setInterval(() => {
      setI((p) => (p + 1) % count);
    }, 5000);

    return () => clearInterval(t);
  }, [count]);

  if (!content || count === 0) {
    return <section id="testimonials" className="py-14" style={{ minHeight: content ? 0 : 560 }} />;
  }

  // Keep the index valid if testimonials were removed
  const current = i % count;
  const t = content.items[current];

  return (
    <section id="testimonials" className="py-14">
      <div className="mx-auto max-w-7xl px-6 animate-fade-in">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">
            {content.image && (
              <img
                src={resolveMediaUrl(content.image)}
                alt={content.imageAlt}
                className="h-[460px] w-full rounded-[2.5rem] object-cover shadow-xl"
              />
            )}

            {content.imageQuote && (
              <div className="absolute right-6 bottom-6 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
                <p className="text-sm font-semibold text-[#3B2940]">
                  {content.imageQuote}
                </p>
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            {content.label && (
              <span className="text-sm font-semibold uppercase tracking-widest text-[#C6A15B]">
                {content.label}
              </span>
            )}

            <h2 className="mt-3 font-display text-3xl font-bold text-[#3B2940] sm:text-4xl">
              {content.heading}
            </h2>

            {/* Testimonial Card */}
            <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#F8F4EE] to-[#F3EDE4] p-8 shadow-inner">
              <span className="font-display text-6xl leading-none text-[#C6A15B]/40">
                "
              </span>

              <p
                key={current}
                className="fade-up -mt-4 text-lg leading-relaxed text-[#5F5660]"
              >
                {t.text}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#3B2940]">
                    {t.name}
                  </p>

                  {t.city && (
                    <p className="text-sm text-[#7A7078]">
                      {t.city}
                    </p>
                  )}
                </div>

                <div className="text-[#C6A15B]">
                  ★★★★★
                </div>
              </div>
            </div>

            {/* Slider Dots */}
            {count > 1 && (
              <div className="mt-6 flex gap-2">
                {content.items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Story ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === current
                        ? "w-8 bg-[#C6A15B]"
                        : "w-2.5 bg-[#E0C98A]"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
