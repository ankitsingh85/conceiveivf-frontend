import React from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    no: "01",
    title: "Ovarian Stimulation",
    text: "Hormonal injections are used to stimulate the ovaries to produce multiple mature eggs. Regular blood tests and ultrasound scans help monitor the response.",
  },
  {
    no: "02",
    title: "Egg Retrieval",
    text: "Once the eggs are mature, they are retrieved from the ovaries through a minor procedure performed under ultrasound guidance, typically with mild sedation.",
  },
  {
    no: "03",
    title: "Sperm Selection",
    text: "A semen sample is collected and processed so that suitable, healthy and motile sperm can be selected for the injection procedure.",
  },
  {
    no: "04",
    title: "Sperm Injection",
    text: "Using specialised microscopic equipment, an embryologist injects a single selected sperm directly into the cytoplasm of a mature egg.",
  },
  {
    no: "05",
    title: "Embryo Cultivation",
    text: "After injection, the fertilised eggs are cultured in a controlled laboratory environment for several days while their development is carefully monitored.",
  },
  {
    no: "06",
    title: "Embryo Transfer",
    text: "A viable embryo is selected and transferred into the uterus. The procedure is planned carefully to support the possibility of implantation.",
  },
  {
    no: "07",
    title: "Cryopreservation",
    text: "Remaining suitable embryos may be cryopreserved for potential future use depending on the individual treatment plan.",
  },
  {
    no: "08",
    title: "Support & Monitoring",
    text: "Throughout treatment, the fertility team provides monitoring and personalised guidance to help couples understand each stage of their ICSI journey.",
  },
];

const suitableFor = [
  "Low sperm count",
  "Poor sperm motility",
  "Previous IVF fertilisation failure",
  "Severe male-factor infertility",
  "Use of cryopreserved sperm",
  "Donor sperm or eggs",
  "Selected unexplained infertility cases",
  "Cases where controlled fertilisation is recommended",
];

const advantages = [
  {
    no: "01",
    title: "Targeted Fertilisation",
    text: "A single sperm is directly injected into a mature egg, providing a highly controlled approach to fertilisation.",
  },
  {
    no: "02",
    title: "Male Factor Support",
    text: "ICSI can be particularly useful when sperm count, movement or other sperm-related factors make conventional fertilisation difficult.",
  },
  {
    no: "03",
    title: "Previous IVF Failure",
    text: "ICSI may be considered when conventional IVF has previously resulted in poor or failed fertilisation.",
  },
  {
    no: "04",
    title: "Cryopreserved Sperm",
    text: "The source page notes that ICSI can be used with cryopreserved sperm in appropriate treatment situations.",
  },
  {
    no: "05",
    title: "Donor Material",
    text: "ICSI can also be used in treatment cycles involving donor sperm or eggs when clinically appropriate.",
  },
  {
    no: "06",
    title: "Embryo Development",
    text: "Following fertilisation, embryos are cultured and monitored in the laboratory before transfer or cryopreservation.",
  },
];

const risks = [
  {
    title: "Ovarian Hyperstimulation Syndrome",
    text: "As with conventional IVF, ovarian stimulation can sometimes result in an excessive response to fertility medication.",
  },
  {
    title: "Multiple Pregnancy",
    text: "Multiple pregnancy can occur with assisted reproductive treatment and may carry additional pregnancy-related risks.",
  },
  {
    title: "Emotional & Financial Strain",
    text: "ICSI can involve significant emotional and financial considerations, particularly when more than one treatment cycle is required.",
  },
];

export default function ICSI() {
  return (
    <main className="bg-white text-[#183f45]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#075f68]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1800&q=85"
            alt="ICSI fertility treatment"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#075f68]/88" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-3xl">
              <p className="mb-5 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/80">
                Conceive IVF Fertility Centre
              </p>

              <h1 className="font-['Playfair_Display'] text-[34px] font-bold leading-[1.12] text-white sm:text-5xl lg:text-[58px]">
                Intracytoplasmic Sperm Injection
              </h1>

              <p className="mt-6 max-w-2xl font-['Manrope'] text-base leading-7 text-white/85 sm:text-lg">
                A specialised fertilisation technique in which a single sperm
                is directly injected into a mature egg to assist fertilisation
                during an IVF treatment cycle.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#dc3f73] px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#c93666]"
                >
                  Book Appointment
                </Link>

                <a
                  href="#icsi-process"
                  className="rounded-full border border-white/40 px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#075f68]"
                >
                  Explore ICSI
                </a>
              </div>
            </div>

            {/* <div className="lg:justify-self-end">
              <div className="overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1000&q=85"
                  alt="Embryology laboratory"
                  className="h-[300px] w-full rounded-[22px] object-cover sm:h-[390px] lg:w-[470px]"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85"
              alt="IVF laboratory and embryology care"
              className="h-[350px] w-full object-cover sm:h-[470px]"
            />
          </div>

          <div>
            <p className="mb-4 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#08727c]">
              Understanding ICSI
            </p>

            <h2 className="font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#183f45] sm:text-[40px]">
              A precise approach to fertilisation
            </h2>

            <div className="mt-6 space-y-5 font-['Manrope'] text-base leading-7 text-[#687477]">
              <p>
                Intracytoplasmic Sperm Injection, commonly known as ICSI, is an
                advanced laboratory technique used as part of an IVF treatment
                cycle.
              </p>

              <p>
                During ICSI, a single sperm is carefully selected and injected
                directly into the cytoplasm of a mature egg using specialised
                microscopic equipment.
              </p>

              <p>
                The source page particularly describes ICSI as useful for
                couples facing male-factor infertility, including low sperm
                count or motility problems, and for selected cases where
                previous IVF fertilisation has been unsuccessful.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#fff0f4] p-5">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#dc3f73]">
                  1
                </div>
                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#687477]">
                  Sperm selected
                </p>
              </div>

              <div className="rounded-2xl bg-[#f0fafb] p-5">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#08727c]">
                  1
                </div>
                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#687477]">
                  Mature egg
                </p>
              </div>

              <div className="col-span-2 rounded-2xl bg-[#f7f7f7] p-5 sm:col-span-1">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#183f45]">
                  Lab
                </div>
                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#687477]">
                  Controlled fertilisation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS ICSI */}
      <section className="bg-[#f8fbfb] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#08727c]">
                What Is ICSI?
              </p>

              <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#183f45] sm:text-[40px]">
                When conventional fertilisation may be challenging
              </h2>

              <p className="mt-6 font-['Manrope'] text-base leading-7 text-[#687477]">
                In conventional fertilisation, sperm must attach to and
                penetrate the egg. According to the source page, ICSI provides
                an alternative approach by allowing an embryologist to select
                one sperm and inject it directly into the egg.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Single sperm selection",
                  "Direct injection into mature egg",
                  "Laboratory-based fertilisation",
                  "Embryo culture after fertilisation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#08727c] text-sm font-bold text-white">
                      ✓
                    </span>

                    <span className="font-['Manrope'] text-sm font-semibold text-[#45575a]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
                alt="Fertility specialist and laboratory"
                className="h-[350px] w-full object-cover sm:h-[460px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="icsi-process"
        className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#08727c]">
              ICSI Treatment Process
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#183f45] sm:text-[40px]">
              Eight carefully coordinated stages
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#687477]">
              From ovarian stimulation and egg retrieval to sperm injection,
              embryo culture and transfer, each stage is coordinated by the
              fertility and embryology team.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.no}
                className="group rounded-[24px] border border-[#e7eeee] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-['Playfair_Display'] text-3xl font-bold text-[#dc3f73]/30">
                    {step.no}
                  </span>

                  <span className="rounded-full bg-[#f0fafb] px-3 py-1 font-['Manrope'] text-[10px] font-bold uppercase tracking-wider text-[#08727c]">
                    ICSI
                  </span>
                </div>

                <h3 className="mt-5 font-['Manrope'] text-[17px] font-bold text-[#183f45]">
                  {step.title}
                </h3>

                <p className="mt-3 font-['Manrope'] text-sm leading-6 text-[#687477]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO MAY BENEFIT */}
      <section className="bg-[#075f68] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/70">
              When ICSI May Be Considered
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-white sm:text-[40px]">
              Is ICSI suitable for your treatment plan?
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-white/75">
              ICSI is not automatically required for every IVF cycle. The
              source page identifies several situations where it may be useful,
              particularly where sperm-related factors or previous
              fertilisation difficulties are present.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-[#dc3f73] px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#c93666]"
              >
                Consult Our Specialist
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {suitableFor.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dc3f73] font-['Manrope'] text-xs font-bold text-white">
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
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#08727c]">
              Advantages Of ICSI
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#183f45] sm:text-[40px]">
              A targeted fertilisation technique
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#687477]">
              The source page highlights several potential advantages of using
              ICSI in appropriate treatment situations.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => (
              <div
                key={item.no}
                className="rounded-[24px] bg-[#fff8fa] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="font-['Playfair_Display'] text-4xl font-bold text-[#dc3f73]/25">
                  {item.no}
                </span>

                <h3 className="mt-6 font-['Manrope'] text-lg font-bold text-[#183f45]">
                  {item.title}
                </h3>

                <p className="mt-3 font-['Manrope'] text-sm leading-6 text-[#687477]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAB SECTION */}
      <section className="bg-[#f8fbfb] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85"
              alt="Embryology laboratory"
              className="h-[350px] w-full object-cover sm:h-[480px]"
            />
          </div>

          <div>
            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#08727c]">
              Embryology & Laboratory Care
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#183f45] sm:text-[40px]">
              Precision continues after fertilisation
            </h2>

            <p className="mt-6 font-['Manrope'] text-base leading-7 text-[#687477]">
              The ICSI procedure does not end with sperm injection. The
              resulting embryos are cultured in a controlled laboratory
              environment and their development is monitored before a suitable
              embryo is selected for transfer.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-['Manrope'] text-base font-bold text-[#183f45]">
                  Embryo Culture
                </h3>
                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#687477]">
                  Embryos are monitored during their early development.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-['Manrope'] text-base font-bold text-[#183f45]">
                  Embryo Selection
                </h3>
                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#687477]">
                  A viable embryo can be selected for transfer based on the
                  treatment plan.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-['Manrope'] text-base font-bold text-[#183f45]">
                  Cryopreservation
                </h3>
                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#687477]">
                  Suitable remaining embryos may be frozen for future use.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-['Manrope'] text-base font-bold text-[#183f45]">
                  Specialist Monitoring
                </h3>
                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#687477]">
                  The fertility and embryology team supports the process
                  throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RISKS */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#dc3f73]">
                Risks & Considerations
              </p>

              <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#183f45] sm:text-[40px]">
                Understanding the treatment considerations
              </h2>

              <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#687477]">
                The original Conceive IVF page identifies ovarian
                hyperstimulation syndrome, multiple pregnancy, and emotional
                and financial strain among the risks or considerations
                associated with ICSI treatment.
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
                  className="rounded-[22px] border border-[#e8eeee] bg-white p-6"
                >
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0f4] font-['Manrope'] text-sm font-bold text-[#dc3f73]">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="font-['Manrope'] text-[17px] font-bold text-[#183f45]">
                        {risk.title}
                      </h3>

                      <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#687477]">
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
      <section className="overflow-hidden bg-[#f8fbfb] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#08727c]">
              ICSI Success Rate
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#183f45] sm:text-[40px]">
              Outcomes vary from person to person
            </h2>

            <p className="mt-6 font-['Manrope'] text-base leading-7 text-[#687477]">
              The original page states that ICSI outcomes can vary depending
              on factors including the woman's age, the cause of infertility
              and the quality of the IVF clinic.
            </p>

            <div className="mt-7 rounded-[24px] border border-[#dce9e9] bg-white p-6">
              <p className="font-['Manrope'] text-sm leading-6 text-[#687477]">
                The source page mentions success figures of up to 70% at an
                advanced dedicated IVF clinic and around 30% per cycle for
                women over 40. These are source-stated general figures, not a
                prediction or guarantee for an individual patient.
              </p>
            </div>

            <p className="mt-5 font-['Manrope'] text-sm leading-6 text-[#687477]">
              A fertility specialist can assess your medical history,
              reproductive factors and treatment needs before discussing
              expected outcomes.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85"
              alt="Fertility care"
              className="h-[380px] w-full object-cover sm:h-[500px]"
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
              <p className="font-['Playfair_Display'] text-xl font-bold text-[#183f45]">
                Your treatment is individual
              </p>

              <p className="mt-1 font-['Manrope'] text-sm leading-6 text-[#687477]">
                Discuss your fertility history and treatment options with a
                qualified specialist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#075f68] px-6 py-14 text-center sm:px-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/5" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#dc3f73]/20" />

          <div className="relative mx-auto max-w-3xl">
            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/70">
              Begin Your Fertility Journey
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-white sm:text-[42px]">
              Understand whether ICSI may be right for you
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-['Manrope'] text-base leading-7 text-white/75">
              Speak with the Conceive IVF team about your fertility concerns,
              previous treatment history and available treatment options.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-[#dc3f73] px-8 py-4 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#c93666]"
              >
                Book Your Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}