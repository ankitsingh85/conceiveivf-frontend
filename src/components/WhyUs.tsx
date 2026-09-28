const reasons = [
  {
    title: "State-of-the-Art Facilities",
    desc: "Our advanced medical equipment and modern labs ensure precise diagnoses and effective treatments for better success rates.",
  },
  {
    title: "Personalized Treatment Plans",
    desc: "Every fertility journey is unique, and we tailor treatments to meet your specific needs and goals.",
  },
  {
    title: "Expert Team of Fertility Specialists",
    desc: "Our experienced specialists and embryologists provide expert care and guidance throughout your journey.",
  },
  {
    title: "Holistic Support for Emotional and Physical Well-Being",
    desc: "We offer counseling and wellness programs to support you emotionally and physically at every step.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="
        relative
        overflow-hidden
        bg-[#3B2940]
        py-14
        text-white
      "
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

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =========================================
            HEADING
        ========================================= */}

        <div className="grid items-end gap-8 lg:grid-cols-2">

          <div>

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-widest
                text-[#E0C98A]
              "
            >
              Why Choose Us
            </span>

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
              Our success rates speak for themselves
            </h2>

          </div>


          {/* Description */}

          <p
            className="
              text-[#F8F4EE]/90
            "
          >
            At{" "}
            <strong className="text-[#E0C98A]">
              Conceive IVF Fertility Centre
            </strong>
            , we offer state-of-the-art facilities, personalized treatment
            plans, and a team of expert fertility specialists dedicated to
            your success. Our holistic approach ensures emotional and
            physical support throughout your journey to parenthood.
          </p>

        </div>


        {/* =========================================
            CARDS
        ========================================= */}

        <div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {reasons.map((r, i) => (

            <div
              key={r.title}
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
                0{i + 1}
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

              <p
                className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-[#F8F4EE]/80
                "
              >
                {r.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}