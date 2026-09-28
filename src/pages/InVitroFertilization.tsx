import React from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    no: "01",
    title: "Pre IVF Evaluation",
    text: "A comprehensive medical assessment is performed to understand the reproductive health of both partners and plan the appropriate treatment.",
  },
  {
    no: "02",
    title: "Ovarian Stimulation",
    text: "Hormonal medications may be used to stimulate the ovaries so that multiple mature eggs can develop for fertilisation.",
  },
  {
    no: "03",
    title: "Follicular Monitoring",
    text: "Serial ultrasound scans and, when required, hormonal blood tests are used to monitor follicle growth and maturity.",
  },
  {
    no: "04",
    title: "Egg Retrieval",
    text: "Once the eggs are mature, they are retrieved from the ovaries using ultrasound-guided follicular aspiration. The source describes this as a short procedure performed under general anaesthesia.",
  },
  {
    no: "05",
    title: "Sperm Collection & Preparation",
    text: "A semen sample is collected and processed to remove debris and non-viable sperm so that suitable sperm can be selected for fertilisation.",
  },
  {
    no: "06",
    title: "Fertilisation",
    text: "The retrieved eggs and selected sperm are combined in the laboratory. Fertilisation may be performed using conventional IVF or ICSI.",
  },
  {
    no: "07",
    title: "Embryo Culture",
    text: "After fertilisation, embryos are cultured in the laboratory for approximately 3 to 5 days while their development is monitored.",
  },
  {
    no: "08",
    title: "Embryo Transfer",
    text: "Selected embryos are transferred into the uterus using a thin catheter. The procedure is generally performed under ultrasound guidance.",
  },
  {
    no: "09",
    title: "Pregnancy Test",
    text: "Approximately two weeks after embryo transfer, a blood pregnancy test is performed to determine whether pregnancy has been achieved.",
  },
];

const suitableFor = [
  "Blocked or damaged fallopian tubes",
  "Low sperm count or poor sperm motility",
  "Unexplained infertility",
  "Endometriosis-related fertility problems",
  "Selected cases involving PCOS",
  "Couples who have not achieved pregnancy with other treatments",
  "Individuals using donor eggs or sperm",
  "Individuals or couples requiring assisted reproductive treatment",
];

const advantages = [
  {
    no: "01",
    title: "Controlled Fertilisation",
    text: "Eggs and sperm are brought together in a controlled laboratory environment, allowing the fertilisation process to be carefully managed.",
  },
  {
    no: "02",
    title: "Embryo Development",
    text: "Embryos can be observed during their early development before an appropriate embryo is selected for transfer.",
  },
  {
    no: "03",
    title: "Flexible Family Planning",
    text: "IVF treatment may allow eggs or embryos to be frozen for potential future use, depending on the individual treatment plan.",
  },
  {
    no: "04",
    title: "Advanced Treatment Options",
    text: "IVF can be combined with procedures such as ICSI or selected embryo testing when medically appropriate.",
  },
];

const risks = [
  {
    title: "Ovarian Hyperstimulation Syndrome",
    text: "Fertility medications can sometimes cause the ovaries to respond excessively, leading to symptoms ranging from mild discomfort to more significant complications.",
  },
  {
    title: "Multiple Pregnancy",
    text: "Transfer of more than one embryo can increase the possibility of multiple pregnancy, which carries additional pregnancy-related risks.",
  },
  {
    title: "Procedural Risks",
    text: "Egg retrieval may involve uncommon complications such as bleeding, infection or injury to nearby structures.",
  },
  {
    title: "Emotional & Financial Stress",
    text: "IVF can be physically and emotionally demanding, and repeated treatment cycles may also create additional financial stress.",
  },
];

export default function InVitroFertilization() {
  return (
    <main className="bg-white text-[#3B2940]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#3B2940]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85"
            alt="IVF fertility care"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3B2940]/85" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-3xl">
              <p className="mb-5 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/80">
                Conceive IVF Fertility Centre
              </p>

              <h1 className="font-['Playfair_Display'] text-[34px] font-bold leading-[1.12] text-white sm:text-5xl lg:text-[58px]">
                In Vitro Fertilization
              </h1>

              <p className="mt-6 max-w-2xl font-['Manrope'] text-base leading-7 text-white/85 sm:text-lg">
                A carefully planned fertility treatment that brings eggs and
                sperm together in the laboratory, followed by embryo culture
                and transfer into the uterus.
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
                  href="#ivf-process"
                  className="rounded-full border border-white/40 px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#3B2940]"
                >
                  Explore IVF
                </a>
              </div>
            </div>

            {/* <div className="lg:justify-self-end">
              <div className="overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85"
                  alt="Fertility specialist"
                  className="h-[300px] w-full rounded-[22px] object-cover sm:h-[390px] lg:w-[470px]"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85"
              alt="IVF laboratory"
              className="h-[350px] w-full object-cover sm:h-[460px]"
            />
          </div>

          <div>
            <p className="mb-4 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Understanding IVF
            </p>

            <h2 className="font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              A structured path toward parenthood
            </h2>

            <div className="mt-6 space-y-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              <p>
                In-vitro fertilisation (IVF) is a series of medical procedures
                used to assist with conception. Mature eggs are retrieved from
                the ovaries and fertilised with sperm in a laboratory.
              </p>

              <p>
                Following fertilisation, the developing embryos are carefully
                monitored before a selected embryo is transferred to the
                uterus with the aim of achieving pregnancy.
              </p>

              <p>
                IVF is a widely used assisted reproductive technology and may
                be considered for different fertility challenges depending on
                the individual or couple's medical circumstances.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#F8F4EE] p-5">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A15B]">
                  IVF
                </div>
                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Assisted reproduction
                </p>
              </div>

              <div className="rounded-2xl bg-[#F8F4EE] p-5">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A15B]">
                  Lab
                </div>
                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Fertilisation & culture
                </p>
              </div>

              <div className="col-span-2 rounded-2xl bg-[#f7f7f7] p-5 sm:col-span-1">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#3B2940]">
                  Care
                </div>
                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Personalised treatment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS IVF */}
      <section className="bg-[#F8F4EE] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              What Is IVF?
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              From egg retrieval to embryo transfer
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              IVF brings several carefully coordinated stages together. Each
              stage is monitored by the fertility team to support an
              individualised treatment plan.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Egg Retrieval",
                text: "Mature eggs are retrieved from the ovaries after ovarian stimulation and follicular monitoring.",
              },
              {
                title: "Laboratory Fertilisation",
                text: "Retrieved eggs are combined with selected sperm using conventional IVF or ICSI when indicated.",
              },
              {
                title: "Embryo Transfer",
                text: "A selected embryo is transferred into the uterus after appropriate laboratory culture.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-[#E8DFD2] bg-white p-7 shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F4EE] font-['Playfair_Display'] text-xl font-bold text-[#C6A15B]">
                  0{index + 1}
                </div>

                <h3 className="font-['Manrope'] text-lg font-bold text-[#3B2940]">
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

      {/* IVF PROCESS */}
      <section
        id="ivf-process"
        className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              IVF Treatment Process
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Step by step, with careful monitoring
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              The source page describes IVF as a sequence of evaluation,
              stimulation, monitoring, retrieval, fertilisation, embryo
              culture, transfer and pregnancy testing.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.no}
                className="group rounded-[24px] border border-[#E8DFD2] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-['Playfair_Display'] text-3xl font-bold text-[#C6A15B]/30">
                    {step.no}
                  </span>

                  <span className="rounded-full bg-[#F8F4EE] px-3 py-1 font-['Manrope'] text-[11px] font-bold uppercase tracking-wider text-[#C6A15B]">
                    IVF
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
              Is IVF Right For You?
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-white sm:text-[40px]">
              Who may consider IVF?
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-white/75">
              According to the source page, IVF may be considered for several
              fertility challenges. The appropriate treatment should always be
              determined after an individual assessment by a fertility
              specialist.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("openAppointment"))
                }
                className="inline-flex rounded-full bg-[#C6A15B] px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#B08B48]"
              >
                Talk To Our Specialist
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
              Advantages Of IVF
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              What makes IVF a treatment option?
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <div
                key={item.no}
                className="rounded-[24px] bg-[#F8F4EE] p-7"
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

      {/* IMAGE + ADVANCED CARE */}
      <section className="bg-[#F8F4EE] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Personalised Fertility Care
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Every IVF journey needs an individual treatment plan
            </h2>

            <p className="mt-6 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              IVF treatment can vary depending on age, reproductive history,
              ovarian response, sperm parameters and the underlying cause of
              infertility. A fertility specialist evaluates these factors to
              determine the most appropriate approach.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Detailed fertility evaluation",
                "Individualised stimulation and monitoring",
                "Laboratory-based fertilisation and embryo culture",
                "Embryo transfer planning",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C6A15B] text-white">
                    ✓
                  </span>

                  <span className="font-['Manrope'] text-sm font-semibold text-[#5F5660]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-[30px] lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
              alt="Fertility treatment consultation"
              className="h-[350px] w-full object-cover sm:h-[480px]"
            />
          </div>
        </div>
      </section>

      {/* RISKS */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
                Risks & Complications
              </p>

              <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
                Understanding the possible risks
              </h2>

              <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
                IVF is a medical treatment and, like other procedures, can
                involve risks. The source page highlights ovarian
                hyperstimulation, multiple pregnancy, procedural complications
                and emotional or financial stress.
              </p>

              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85"
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
              IVF Success Rate
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Outcomes depend on individual factors
            </h2>

            <p className="mt-6 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              The source page notes that IVF outcomes can vary according to
              factors such as the woman's age, the cause of infertility and
              clinic-related factors.
            </p>

            <div className="mt-7 rounded-[24px] border border-[#E8DFD2] bg-white p-6">
              <p className="font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                The original Conceive IVF page mentions success figures,
                including a clinic-specific figure and an age-related figure.
                These are source-stated claims and should not be interpreted as
                a guarantee of an individual's outcome.
              </p>
            </div>

            <p className="mt-5 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
              Your fertility specialist can discuss your individual
              circumstances, treatment options and expected outcomes after
              assessment.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=85"
              alt="IVF fertility care"
              className="h-[380px] w-full object-cover sm:h-[500px]"
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
              <p className="font-['Playfair_Display'] text-xl font-bold text-[#3B2940]">
                Personalised care matters
              </p>
              <p className="mt-1 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                Discuss your fertility history and treatment options with a
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
              Begin Your Journey
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-white sm:text-[42px]">
              Take the next step toward understanding your fertility options
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-['Manrope'] text-base leading-7 text-white/75">
              Connect with the Conceive IVF team to discuss your fertility
              concerns and understand whether IVF may be appropriate for you.
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