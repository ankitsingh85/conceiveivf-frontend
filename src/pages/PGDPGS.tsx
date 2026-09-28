import React from "react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    no: "01",
    title: "IVF Process",
    text: "Eggs and sperm are combined in the laboratory through an IVF treatment cycle to create embryos for genetic assessment.",
  },
  {
    no: "02",
    title: "Embryo Development",
    text: "The fertilized eggs are cultured in the laboratory and allowed to develop until they reach the blastocyst stage.",
  },
  {
    no: "03",
    title: "Embryo Biopsy",
    text: "A small sample of cells is collected from the embryo, usually at the blastocyst stage around Day 5 or Day 6.",
  },
  {
    no: "04",
    title: "Genetic Testing",
    text: "The biopsy sample is analysed for specific inherited genetic conditions in PGD or chromosomal abnormalities in PGS.",
  },
  {
    no: "05",
    title: "Laboratory Analysis",
    text: "Specialised genetic testing provides information that can help the fertility team understand the genetic or chromosomal status of embryos.",
  },
  {
    no: "06",
    title: "Embryo Selection",
    text: "Embryos without the genetic condition being tested for, or without identified chromosomal abnormalities, may be selected for transfer.",
  },
  {
    no: "07",
    title: "Embryo Transfer",
    text: "A suitable embryo is prepared and transferred into the uterus as part of the individual's fertility treatment plan.",
  },
  {
    no: "08",
    title: "Future Preservation",
    text: "Suitable embryos that are not transferred may be cryopreserved for potential future treatment where appropriate.",
  },
];

const suitableFor = [
  "Family history of genetic conditions",
  "Advanced maternal age",
  "Recurrent miscarriages",
  "Repeated IVF failures",
  "Known inherited genetic conditions",
  "Carriers of chromosomal rearrangements",
  "Known translocations",
  "Couples requiring additional embryo screening",
];

const advantages = [
  {
    no: "01",
    title: "Genetic Condition Screening",
    text: "PGD can be used to test embryos for specific genetic disorders or inherited diseases when a known genetic risk exists.",
  },
  {
    no: "02",
    title: "Chromosomal Screening",
    text: "PGS focuses on screening embryos for chromosomal abnormalities and assessing chromosome number.",
  },
  {
    no: "03",
    title: "Embryo Selection",
    text: "Genetic information can provide an additional factor when the fertility team selects embryos for transfer.",
  },
  {
    no: "04",
    title: "Family Planning Support",
    text: "PGD and PGS can provide additional information for couples making decisions about their fertility treatment.",
  },
  {
    no: "05",
    title: "Recurrent Pregnancy Loss",
    text: "Embryo screening may be considered in selected cases involving recurrent miscarriage.",
  },
  {
    no: "06",
    title: "Personalised Treatment",
    text: "The use of genetic testing can be tailored according to the patient's medical history and individual fertility needs.",
  },
];

const risks = [
  {
    title: "Not Every Embryo Can Be Tested",
    text: "Genetic testing requires suitable embryos and an appropriate biopsy sample, so testing may not be possible for every embryo.",
  },
  {
    title: "Testing Has Limitations",
    text: "PGD and PGS provide genetic or chromosomal information but cannot guarantee implantation, pregnancy or a healthy live birth.",
  },
  {
    title: "IVF Is Required",
    text: "PGD and PGS are performed as part of an IVF treatment process because embryos must first be created in the laboratory.",
  },
  {
    title: "Emotional & Financial Considerations",
    text: "Additional genetic testing can add complexity, time and financial considerations to an already demanding fertility journey.",
  },
];

export default function PGDPGS() {
  return (
    <main className="bg-white text-[#3B2940]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#3B2940]">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=85"
            alt="PGD PGS genetic testing laboratory"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#3B2940]/90" />

        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">

            <div className="max-w-3xl">

              <p className="mb-5 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/80">
                Conceive IVF Fertility Centre
              </p>

              <h1 className="font-['Playfair_Display'] text-[34px] font-bold leading-[1.12] text-white sm:text-5xl lg:text-[58px]">
                PGD & PGS
              </h1>

              <p className="mt-6 max-w-2xl font-['Manrope'] text-base leading-7 text-white/85 sm:text-lg">
                Advanced embryo genetic testing during IVF to help identify
                specific inherited genetic conditions and chromosomal
                abnormalities before embryo transfer.
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
                  href="#pgd-pgs-process"
                  className="rounded-full border border-white/40 px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#3B2940]"
                >
                  Explore PGD & PGS
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
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
              alt="Genetic testing laboratory"
              className="h-[350px] w-full object-cover sm:h-[470px]"
            />

          </div>

          <div>

            <p className="mb-4 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Understanding PGD & PGS
            </p>

            <h2 className="font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Genetic information for embryo selection
            </h2>

            <div className="mt-6 space-y-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">

              <p>
                PGD, or Preimplantation Genetic Diagnosis, is a specialised
                technique used during IVF to test embryos for specific genetic
                disorders or inherited diseases.
              </p>

              <p>
                PGS, also known as Preimplantation Genetic Screening, focuses
                on screening embryos for chromosomal abnormalities and
                assessing whether the expected number of chromosomes is
                present.
              </p>

              <p>
                Both techniques can provide additional information about
                embryos before transfer and may be considered according to
                individual medical circumstances.
              </p>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-[#F8F4EE] p-5">

                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A15B]">
                  PGD
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Specific genetic conditions
                </p>

              </div>

              <div className="rounded-2xl bg-[#F8F4EE] p-5">

                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A15B]">
                  PGS
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Chromosomal screening
                </p>

              </div>

              <div className="col-span-2 rounded-2xl bg-[#F8F4EE] p-5 sm:col-span-1">

                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#3B2940]">
                  IVF
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Embryo testing
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PGD VS PGS */}
      <section className="bg-[#F8F4EE] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              PGD & PGS Explained
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Two approaches to embryo genetic assessment
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              Although PGD and PGS are both performed during IVF, they focus
              on different types of genetic information.
            </p>

          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">

            {/* PGD */}
            <div className="rounded-[28px] bg-white p-8 shadow-sm">

              <div className="flex items-center justify-between">

                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F4EE] font-['Playfair_Display'] text-xl font-bold text-[#C6A15B]">
                  PGD
                </span>

                <span className="rounded-full bg-[#F8F4EE] px-4 py-2 font-['Manrope'] text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                  Diagnosis
                </span>

              </div>

              <h3 className="mt-7 font-['Playfair_Display'] text-2xl font-bold text-[#3B2940]">
                Preimplantation Genetic Diagnosis
              </h3>

              <p className="mt-4 font-['Manrope'] text-sm leading-7 text-[#5F5660]">
                PGD is used to test embryos for specific genetic disorders or
                inherited diseases. It may be particularly relevant for
                couples who are known carriers of a genetic condition.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Specific inherited conditions",
                  "Known genetic disease",
                  "Family history of genetic disorders",
                  "Targeted embryo testing",
                ].map((item) => (

                  <div key={item} className="flex items-center gap-3">

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C6A15B] text-xs font-bold text-white">
                      ✓
                    </span>

                    <span className="font-['Manrope'] text-sm font-semibold text-[#5F5660]">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* PGS */}
            <div className="rounded-[28px] bg-white p-8 shadow-sm">

              <div className="flex items-center justify-between">

                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F4EE] font-['Playfair_Display'] text-xl font-bold text-[#C6A15B]">
                  PGS
                </span>

                <span className="rounded-full bg-[#F8F4EE] px-4 py-2 font-['Manrope'] text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                  Screening
                </span>

              </div>

              <h3 className="mt-7 font-['Playfair_Display'] text-2xl font-bold text-[#3B2940]">
                Preimplantation Genetic Screening
              </h3>

              <p className="mt-4 font-['Manrope'] text-sm leading-7 text-[#5F5660]">
                PGS focuses on screening embryos for chromosomal abnormalities
                and assessing whether embryos have the expected number of
                chromosomes.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Chromosomal screening",
                  "Embryo chromosome assessment",
                  "Additional embryo information",
                  "Selection before transfer",
                ].map((item) => (

                  <div key={item} className="flex items-center gap-3">

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C6A15B] text-xs font-bold text-white">
                      ✓
                    </span>

                    <span className="font-['Manrope'] text-sm font-semibold text-[#5F5660]">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section
        id="pgd-pgs-process"
        className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              PGD & PGS Process
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Eight carefully coordinated stages
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              From creating embryos through IVF to biopsy, genetic analysis and
              embryo selection, every stage requires close coordination between
              the IVF and embryology teams.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {processSteps.map((step) => (

              <div
                key={step.no}
                className="group rounded-[24px] border border-[#E8DFD2] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex items-start justify-between gap-3">

                  <span className="font-['Playfair_Display'] text-3xl font-bold text-[#C6A15B]/30">
                    {step.no}
                  </span>

                  <span className="rounded-full bg-[#F8F4EE] px-3 py-1 font-['Manrope'] text-[10px] font-bold uppercase tracking-wider text-[#C6A15B]">
                    PGD / PGS
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
              Who Should Consider PGD & PGS?
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-white sm:text-[40px]">
              Is embryo genetic testing right for your treatment plan?
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-white/75">
              Genetic testing may be considered in specific fertility
              situations. Your fertility specialist can evaluate your medical
              history, reproductive factors and genetic risks before
              recommending an appropriate approach.
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

      {/* WHY IMPORTANT */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Why PGD & PGS Matter
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Additional information before embryo transfer
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              Genetic testing can provide additional information about embryos
              before transfer in selected IVF treatment situations.
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

      {/* GENETIC LAB */}
      <section className="bg-[#F8F4EE] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85"
              alt="Genetic testing laboratory"
              className="h-[350px] w-full object-cover sm:h-[480px]"
            />

          </div>

          <div>

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Advanced Genetic Testing
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Science and embryology working together
            </h2>

            <p className="mt-6 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              PGD and PGS combine IVF laboratory procedures with genetic
              analysis. Embryos are created through IVF, a small biopsy sample
              is collected and the sample is analysed before appropriate
              embryos are considered for transfer.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <h3 className="font-['Manrope'] text-base font-bold text-[#3B2940]">
                  Embryo Biopsy
                </h3>

                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  A small sample is taken from an embryo for genetic analysis.
                </p>

              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <h3 className="font-['Manrope'] text-base font-bold text-[#3B2940]">
                  Genetic Analysis
                </h3>

                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  Samples are analysed for the condition or chromosome
                  information being assessed.
                </p>

              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <h3 className="font-['Manrope'] text-base font-bold text-[#3B2940]">
                  Embryo Selection
                </h3>

                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  Results provide additional information when embryos are being
                  considered for transfer.
                </p>

              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <h3 className="font-['Manrope'] text-base font-bold text-[#3B2940]">
                  Future Preservation
                </h3>

                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  Suitable embryos may be preserved for potential future use.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS AT CONCEIVE IVF */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
                PGD & PGS At Conceive IVF
              </p>

              <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
                Technology combined with personalised care
              </h2>

              <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
                Conceive IVF describes its PGD and PGS service around advanced
                laboratory technology, experienced genetic and embryology
                teams and treatment plans tailored to individual fertility
                needs.
              </p>

              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85"
                alt="Fertility consultation"
                className="mt-8 h-[280px] w-full rounded-[26px] object-cover"
              />

            </div>

            <div className="space-y-4">

              {[
                {
                  title: "State-of-the-Art Facilities",
                  text: "Advanced laboratory and genetic testing technology supports the embryo assessment process.",
                },
                {
                  title: "Experienced Team",
                  text: "Genetic counsellors and embryologists support patients throughout the PGD and PGS process.",
                },
                {
                  title: "Personalised Treatment",
                  text: "The use of genetic testing can be tailored according to individual fertility needs.",
                },
                {
                  title: "Embryo Selection",
                  text: "Genetic information provides an additional factor when appropriate embryos are considered for transfer.",
                },
              ].map((item, index) => (

                <div
                  key={item.title}
                  className="rounded-[22px] border border-[#E8DFD2] bg-white p-6"
                >

                  <div className="flex gap-5">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F8F4EE] font-['Manrope'] text-sm font-bold text-[#C6A15B]">
                      0{index + 1}
                    </div>

                    <div>

                      <h3 className="font-['Manrope'] text-[17px] font-bold text-[#3B2940]">
                        {item.title}
                      </h3>

                      <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* RISKS */}
      <section className="bg-[#F8F4EE] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
                Risks & Considerations
              </p>

              <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
                Understanding genetic testing
              </h2>

              <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
                PGD and PGS can provide useful information during IVF, but
                genetic testing has limitations and does not guarantee
                pregnancy or a healthy live birth.
              </p>

              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85"
                alt="Fertility care"
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
              Explore PGD & PGS for your IVF journey
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-['Manrope'] text-base leading-7 text-white/75">
              Speak with the Conceive IVF team about your fertility history,
              genetic considerations and whether embryo genetic testing may be
              appropriate for your treatment plan.
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