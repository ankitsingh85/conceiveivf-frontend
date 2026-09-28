import React from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    no: "01",
    title: "Pre-Freezing Evaluation",
    text: "A comprehensive fertility assessment is performed to evaluate ovarian reserve and overall reproductive health. Blood tests and ultrasound may be used to assess hormone levels and the ovaries.",
  },
  {
    no: "02",
    title: "Ovarian Stimulation",
    text: "Hormonal medications are used to stimulate the ovaries so that multiple mature eggs can develop and be available for retrieval.",
  },
  {
    no: "03",
    title: "Follicular Monitoring",
    text: "Regular ultrasound scans and blood tests help the fertility team monitor follicle development and assess the maturity of the developing eggs.",
  },
  {
    no: "04",
    title: "Egg Retrieval",
    text: "Once the eggs are mature, they are retrieved through a minor procedure called follicular aspiration under ultrasound guidance.",
  },
  {
    no: "05",
    title: "Egg Evaluation",
    text: "The retrieved eggs are carefully evaluated by the embryology team to identify suitable mature eggs for preservation.",
  },
  {
    no: "06",
    title: "Vitrification",
    text: "Suitable eggs are rapidly frozen using vitrification, an advanced freezing technique designed to minimise ice crystal formation.",
  },
  {
    no: "07",
    title: "Safe Storage",
    text: "The frozen eggs are stored under controlled conditions so they can potentially be used for future fertility treatment.",
  },
  {
    no: "08",
    title: "Future Fertility Treatment",
    text: "When pregnancy is desired, preserved eggs may be thawed and used as part of an IVF or other appropriate reproductive treatment.",
  },
];

const suitableFor = [
  "Women delaying pregnancy",
  "Career, education or personal goals",
  "Women undergoing chemotherapy or radiation",
  "Individuals planning parenthood for later",
  "Women with declining ovarian reserve",
  "Those wishing to preserve reproductive potential",
  "Medical conditions that may affect fertility",
  "Individuals seeking greater flexibility in family planning",
];

const advantages = [
  {
    no: "01",
    title: "Fertility Preservation",
    text: "Egg freezing allows mature eggs to be preserved at the time they are retrieved for possible use in the future.",
  },
  {
    no: "02",
    title: "Family Planning Flexibility",
    text: "Preserving eggs can provide additional flexibility for individuals who wish to delay pregnancy while considering future family plans.",
  },
  {
    no: "03",
    title: "Medical Fertility Preservation",
    text: "Egg freezing may be considered before treatments such as chemotherapy or radiation that could affect reproductive potential.",
  },
  {
    no: "04",
    title: "Greater Personal Control",
    text: "The process can give women an option to preserve eggs while making reproductive decisions according to their individual circumstances.",
  },
  {
    no: "05",
    title: "Preserving Younger Eggs",
    text: "Freezing eggs at a younger age may preserve eggs when their quality is generally better compared with later reproductive years.",
  },
  {
    no: "06",
    title: "Future IVF Option",
    text: "Preserved eggs may potentially be thawed later and used as part of an IVF treatment plan.",
  },
];

const risks = [
  {
    title: "Ovarian Hyperstimulation Syndrome",
    text: "A rare condition can occur when the ovaries respond excessively to fertility medications used during ovarian stimulation.",
  },
  {
    title: "Egg Retrieval Risks",
    text: "Egg retrieval is a medical procedure and may involve minor risks such as bleeding or infection.",
  },
  {
    title: "Emotional & Financial Factors",
    text: "Egg freezing can involve physical, emotional and financial considerations, including the costs associated with freezing and storage.",
  },
];

export default function EggFreezing() {
  return (
    <main className="bg-white text-[#3B2940]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#3B2940]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1800&q=85"
            alt="Egg freezing fertility treatment"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#3B2940]/88" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">

            <div className="max-w-3xl">

              <p className="mb-5 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/80">
                Conceive IVF Fertility Centre
              </p>

              <h1 className="font-['Playfair_Display'] text-[34px] font-bold leading-[1.12] text-white sm:text-5xl lg:text-[58px]">
                Egg Freezing
              </h1>

              <p className="mt-6 max-w-2xl font-['Manrope'] text-base leading-7 text-white/85 sm:text-lg">
                Preserve your fertility for the future with egg freezing,
                also known as oocyte cryopreservation. A fertility
                preservation option for women who may wish to delay pregnancy
                or protect their reproductive options.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(new Event("openAppointment"))
                  }
                  className="rounded-full bg-[#C6A15B] px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#B08B48]"
                >
                  Book Appointment
                </button>

                <a
                  href="#egg-freezing-process"
                  className="rounded-full border border-white/40 px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#3B2940]"
                >
                  Explore Egg Freezing
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div className="overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85"
              alt="Fertility laboratory"
              className="h-[350px] w-full object-cover sm:h-[470px]"
            />
          </div>

          <div>

            <p className="mb-4 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Understanding Egg Freezing
            </p>

            <h2 className="font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Preserve your fertility for the future
            </h2>

            <div className="mt-6 space-y-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">

              <p>
                Egg freezing, also known as oocyte cryopreservation, is a
                medical procedure that allows mature eggs to be retrieved and
                preserved for potential future use.
              </p>

              <p>
                The eggs are frozen at very low temperatures so they can be
                stored and potentially used later as part of IVF or other
                reproductive treatment.
              </p>

              <p>
                Egg freezing may be considered by women who wish to delay
                pregnancy because of personal, professional or medical
                reasons, or those who want to preserve their reproductive
                options.
              </p>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-[#F8F4EE] p-5">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A15B]">
                  Egg
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Fertility preserved
                </p>
              </div>

              <div className="rounded-2xl bg-[#F8F4EE] p-5">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A15B]">
                  Future
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Treatment option
                </p>
              </div>

              <div className="col-span-2 rounded-2xl bg-[#F8F4EE] p-5 sm:col-span-1">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#3B2940]">
                  IVF
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Potential future use
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS EGG FREEZING */}
      <section className="bg-[#F8F4EE] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
                What Is Egg Freezing?
              </p>

              <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
                A way to preserve reproductive options
              </h2>

              <p className="mt-6 font-['Manrope'] text-base leading-7 text-[#5F5660]">
                Egg freezing involves retrieving mature eggs from the ovaries
                and preserving them at sub-zero temperatures for possible
                future use. The eggs can later be thawed and considered for
                IVF or other reproductive treatments.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Mature eggs are retrieved",
                  "Egg quality is evaluated",
                  "Suitable eggs are vitrified",
                  "Eggs are safely stored",
                ].map((item) => (

                  <div key={item} className="flex items-center gap-3">

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C6A15B] text-sm font-bold text-white">
                      ✓
                    </span>

                    <span className="font-['Manrope'] text-sm font-semibold text-[#5F5660]">
                      {item}
                    </span>

                  </div>

                ))}

              </div>
            </div>

            <div className="overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
                alt="Fertility specialist"
                className="h-[350px] w-full object-cover sm:h-[460px]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="egg-freezing-process"
        className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Egg Freezing Process
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Eight carefully coordinated stages
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              From the initial fertility evaluation to ovarian stimulation,
              egg retrieval and vitrification, each stage is coordinated by
              the fertility and embryology team.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => (

              <div
                key={step.no}
                className="group rounded-[24px] border border-[#E8DFD2] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex items-start justify-between gap-3">

                  <span className="font-['Playfair_Display'] text-3xl font-bold text-[#C6A15B]/30">
                    {step.no}
                  </span>

                  <span className="rounded-full bg-[#F8F4EE] px-3 py-1 font-['Manrope'] text-[10px] font-bold uppercase tracking-wider text-[#C6A15B]">
                    Egg Freezing
                  </span>

                </div>

                <h3 className="mt-5 font-['Manrope'] text-[17px] font-bold text-[#3B2940]">
                  {step.title}
                </h3>

                <p className="mt-3 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  {step.text}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* WHO SHOULD CONSIDER */}
      <section className="bg-[#3B2940] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">

          <div>

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/70">
              Who Should Consider Egg Freezing?
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-white sm:text-[40px]">
              Is fertility preservation suitable for you?
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-white/75">
              Egg freezing may be considered for different personal, family
              planning and medical circumstances. A fertility specialist can
              assess your individual situation and discuss whether fertility
              preservation is appropriate.
            </p>

            <div className="mt-8">

              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("openAppointment"))
                }
                className="inline-flex rounded-full bg-[#C6A15B] px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#B08B48]"
              >
                Consult Our Specialist
              </button>

            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            {suitableFor.map((item, index) => (

              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
              >

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C6A15B] font-['Manrope'] text-xs font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="font-['Manrope'] text-sm leading-6 text-white/85">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Advantages Of Egg Freezing
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Preserve possibilities for the future
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              Egg freezing can provide an option for fertility preservation
              while allowing individuals greater flexibility around future
              family planning.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {advantages.map((item) => (

              <div
                key={item.no}
                className="rounded-[24px] bg-[#F8F4EE] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <span className="font-['Playfair_Display'] text-4xl font-bold text-[#C6A15B]/25">
                  {item.no}
                </span>

                <h3 className="mt-6 font-['Manrope'] text-lg font-bold text-[#3B2940]">
                  {item.title}
                </h3>

                <p className="mt-3 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* VITRIFICATION */}
      <section className="bg-[#F8F4EE] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85"
              alt="Embryology laboratory"
              className="h-[350px] w-full object-cover sm:h-[480px]"
            />

          </div>

          <div>

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Advanced Egg Preservation
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Precision through vitrification
            </h2>

            <p className="mt-6 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              After retrieval, suitable mature eggs are evaluated and frozen
              using vitrification. This rapid freezing method is designed to
              prevent the formation of damaging ice crystals and helps preserve
              the eggs for potential future treatment.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-['Manrope'] text-base font-bold text-[#3B2940]">
                  Egg Evaluation
                </h3>

                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  Retrieved eggs are evaluated to identify suitable mature eggs.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-['Manrope'] text-base font-bold text-[#3B2940]">
                  Vitrification
                </h3>

                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  Eggs are rapidly frozen using an advanced preservation method.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-['Manrope'] text-base font-bold text-[#3B2940]">
                  Safe Storage
                </h3>

                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  Preserved eggs are stored under controlled conditions.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-['Manrope'] text-base font-bold text-[#3B2940]">
                  Future Use
                </h3>

                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  Eggs may potentially be used later as part of fertility
                  treatment.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* RISKS */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
                Risks & Considerations
              </p>

              <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
                Understanding the treatment considerations
              </h2>

              <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
                Although egg freezing is generally considered a fertility
                preservation option, it is important to understand the
                potential risks and physical, emotional and financial
                considerations associated with treatment.
              </p>

              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85"
                alt="Fertility consultation"
                className="mt-8 h-[280px] w-full rounded-[26px] object-cover"
              />

            </div>

            <div className="space-y-4">

              {risks.map((risk, index) => (

                <div
                  key={risk.title}
                  className="rounded-[22px] border border-[#E8DFD2] bg-white p-6"
                >

                  <div className="flex gap-5">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F8F4EE] font-['Manrope'] text-sm font-bold text-[#C6A15B]">
                      0{index + 1}
                    </div>

                    <div>

                      <h3 className="font-['Manrope'] text-[17px] font-bold text-[#3B2940]">
                        {risk.title}
                      </h3>

                      <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                        {risk.text}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>
        </div>
      </section>

      {/* SUCCESS RATE */}
      <section className="overflow-hidden bg-[#F8F4EE] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Egg Freezing Success
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Outcomes depend on individual factors
            </h2>

            <p className="mt-6 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              The source page explains that the outcome of egg freezing can
              depend on factors such as the woman's age when the eggs are
              frozen and the number of eggs retrieved.
            </p>

            <div className="mt-7 rounded-[24px] border border-[#E8DFD2] bg-white p-6">

              <p className="font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                Younger women generally tend to have better egg quality, and
                freezing eggs at an earlier age may improve the potential for
                future conception. Egg freezing does not guarantee a future
                pregnancy.
              </p>

            </div>

            <p className="mt-5 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
              A fertility specialist can evaluate your age, ovarian reserve,
              reproductive history and individual fertility goals before
              discussing the available options.
            </p>

          </div>

          <div className="relative overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85"
              alt="Fertility care"
              className="h-[380px] w-full object-cover sm:h-[500px]"
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">

              <p className="font-['Playfair_Display'] text-xl font-bold text-[#3B2940]">
                Your fertility journey is individual
              </p>

              <p className="mt-1 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                Discuss your fertility goals and preservation options with a
                qualified specialist.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#3B2940] px-6 py-14 text-center sm:px-12">

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/5" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#C6A15B]/20" />

          <div className="relative mx-auto max-w-3xl">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/70">
              Begin Your Fertility Journey
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-white sm:text-[42px]">
              Explore your egg freezing options
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-['Manrope'] text-base leading-7 text-white/75">
              Speak with the Conceive IVF team about your fertility goals,
              preservation needs and available treatment options.
            </p>

            <div className="mt-8">

              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("openAppointment"))
                }
                className="inline-flex rounded-full bg-[#C6A15B] px-8 py-4 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#B08B48]"
              >
                Book Your Consultation
              </button>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}