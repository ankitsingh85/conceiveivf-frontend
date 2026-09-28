import { useEffect, useState } from "react";

const items = [
  {
    name: "Neha & Rohan",
    city: "Hyderabad",
    text: "After 6 years of trying, Conceive IVF gave us our miracle. The doctors were honest, kind and always available. We can't thank them enough for our baby girl.",
  },
  {
    name: "Sneha & Arjun",
    city: "Bengaluru",
    text: "The team treated us like family. Every step was explained clearly and the counsellor helped us stay strong emotionally. Successful on our very first cycle!",
  },
  {
    name: "Pooja & Vikram",
    city: "Chennai",
    text: "World-class lab, transparent pricing and truly compassionate staff. Our twins are here because of this wonderful team. Highly recommended.",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((p) => (p + 1) % items.length);
    }, 5000);

    return () => clearInterval(t);
  }, []);

  const t = items[i];

  return (
    <section id="testimonials" className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/35759308/pexels-photo-35759308.png?auto=compress&cs=tinysrgb&fit=crop&h=700&w=800"
              alt="Happy family"
              className="h-[460px] w-full rounded-[2.5rem] object-cover shadow-xl"
            />

            <div className="absolute right-6 bottom-6 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold text-[#3B2940]">
                "Every miracle begins with hope"
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#C6A15B]">
              Success Stories
            </span>

            <h2 className="mt-3 font-display text-3xl font-bold text-[#3B2940] sm:text-4xl">
              Stories of hope, joy and new beginnings
            </h2>

            {/* Testimonial Card */}
            <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#F8F4EE] to-[#F3EDE4] p-8 shadow-inner">
              <span className="font-display text-6xl leading-none text-[#C6A15B]/40">
                "
              </span>

              <p
                key={i}
                className="fade-up -mt-4 text-lg leading-relaxed text-[#5F5660]"
              >
                {t.text}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#3B2940]">
                    {t.name}
                  </p>

                  <p className="text-sm text-[#7A7078]">
                    {t.city}
                  </p>
                </div>

                <div className="text-[#C6A15B]">
                  ★★★★★
                </div>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="mt-6 flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Story ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === i
                      ? "w-8 bg-[#C6A15B]"
                      : "w-2.5 bg-[#E0C98A]"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}