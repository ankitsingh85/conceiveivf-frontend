const steps = [
  {
    title: "Consultation",
    desc: "Meet our specialist, share your history and get all your questions answered.",
  },
  {
    title: "Evaluation",
    desc: "Comprehensive diagnostic tests for both partners to understand the root cause.",
  },
  {
    title: "Personalised Plan",
    desc: "A tailored treatment protocol designed around your body and your goals.",
  },
  {
    title: "Treatment",
    desc: "Expert care in our advanced lab with continuous monitoring and support.",
  },
  {
    title: "Your Miracle",
    desc: "Pregnancy confirmation and ongoing guidance as you welcome your little one.",
  },
];

export default function Process() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">

        {/* =========================================
            HEADING
        ========================================= */}

        <div className="mx-auto max-w-2xl text-center">

          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-[#C6A15B]
            "
          >
            Your Journey
          </span>

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
            Five simple steps to parenthood
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
            md:grid-cols-5
          "
        >

          {/* Progress Line */}

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


          {/* Step Cards */}

          {steps.map((s, i) => (

            <div
              key={s.title}
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

              <p
                className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-[#5F5660]
                "
              >
                {s.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}