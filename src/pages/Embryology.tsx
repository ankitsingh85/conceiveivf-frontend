import React from "react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    no: "01",
    title: "Ovarian Stimulation",
    text: "Hormonal medications are used to stimulate the ovaries to produce multiple eggs that can be retrieved for fertility treatment.",
  },
  {
    no: "02",
    title: "Egg Retrieval",
    text: "Mature eggs are collected through a minor procedure, generally performed under sedation and ultrasound guidance.",
  },
  {
    no: "03",
    title: "Sperm Collection & Processing",
    text: "Sperm is collected and processed in the laboratory so suitable sperm can be selected for fertilisation.",
  },
  {
    no: "04",
    title: "Fertilization",
    text: "Eggs and sperm are combined in the laboratory using conventional IVF or, when appropriate, ICSI.",
  },
  {
    no: "05",
    title: "Embryo Culture",
    text: "Fertilized eggs are cultured in a controlled laboratory environment for around 3 to 5 days while their development is closely monitored.",
  },
  {
    no: "06",
    title: "Genetic Testing",
    text: "When clinically indicated, embryos may undergo preimplantation genetic testing before an embryo is selected for transfer.",
  },
  {
    no: "07",
    title: "Embryo Transfer",
    text: "A selected embryo is prepared for transfer into the uterus as part of the fertility treatment plan.",
  },
  {
    no: "08",
    title: "Cryopreservation",
    text: "Suitable remaining embryos can be frozen using vitrification techniques for possible future treatment.",
  },
];

const facilityServices = [
  {
    no: "01",
    title: "Gamete Handling",
    text: "Sperm and eggs are collected, processed and prepared in a controlled laboratory environment.",
  },
  {
    no: "02",
    title: "Fertilization",
    text: "Fertilization can be performed using conventional IVF or ICSI depending on the treatment plan.",
  },
  {
    no: "03",
    title: "Embryo Culture",
    text: "Fertilized eggs are cultured and monitored as they develop into embryos.",
  },
  {
    no: "04",
    title: "Cryopreservation",
    text: "Eggs, sperm or embryos can be preserved using vitrification techniques for potential future use.",
  },
  {
    no: "05",
    title: "Embryo Transfer",
    text: "Viable embryos can be prepared for transfer to the uterus as part of assisted reproductive treatment.",
  },
  {
    no: "06",
    title: "Genetic Testing",
    text: "Preimplantation genetic testing may be used to screen embryos for selected chromosomal or inherited conditions.",
  },
];

const suitableFor = [
  "Couples experiencing infertility",
  "Advanced maternal age",
  "Recurrent pregnancy loss",
  "Severe male-factor infertility",
  "Individuals preserving fertility",
  "Delayed parenthood planning",
  "Couples requiring assisted reproduction",
  "Patients requiring advanced embryo assessment",
];

const advantages = [
  {
    no: "01",
    title: "Controlled Environment",
    text: "Advanced laboratory conditions are designed to support careful handling and development of eggs, sperm and embryos.",
  },
  {
    no: "02",
    title: "Specialist Expertise",
    text: "Skilled embryologists manage the laboratory stages of assisted reproductive treatment.",
  },
  {
    no: "03",
    title: "Advanced Testing",
    text: "Genetic testing may provide additional information about embryos when it is clinically appropriate.",
  },
  {
    no: "04",
    title: "Personalised Treatment",
    text: "Embryology procedures can be incorporated into an individual fertility treatment plan.",
  },
  {
    no: "05",
    title: "Fertility Preservation",
    text: "Eggs, sperm and embryos can potentially be preserved for future fertility treatment.",
  },
  {
    no: "06",
    title: "Complete Laboratory Support",
    text: "The embryology laboratory supports important stages from fertilization through embryo culture and preservation.",
  },
];

const risks = [
  {
    title: "Ovarian Hyperstimulation Syndrome",
    text: "OHSS can occur as a response to medications used during ovarian stimulation and egg retrieval.",
  },
  {
    title: "Multiple Pregnancy",
    text: "Transferring multiple embryos can increase the possibility of a multiple pregnancy and its associated risks.",
  },
  {
    title: "Embryo Damage",
    text: "In rare situations, embryos may not survive freezing or thawing procedures.",
  },
  {
    title: "Psychological Stress",
    text: "Fertility treatment can be emotionally and mentally demanding, particularly when treatment involves multiple stages.",
  },
  {
    title: "No Guarantee of Success",
    text: "Even with advanced embryology techniques, fertility treatment cannot guarantee pregnancy or a live birth.",
  },
];

export default function Embryology() {
  return (
    <main className="bg-white text-[#183f45]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#075f68]">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=85"
            alt="Embryology laboratory"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#075f68]/90" />

        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">

            <div className="max-w-3xl">

              <p className="mb-5 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/80">
                Conceive IVF Fertility Centre
              </p>

              <h1 className="font-['Playfair_Display'] text-[34px] font-bold leading-[1.12] text-white sm:text-5xl lg:text-[58px]">
                Embryology Facility
              </h1>

              <p className="mt-6 max-w-2xl font-['Manrope'] text-base leading-7 text-white/85 sm:text-lg">
                Advanced laboratory care where eggs and sperm are handled,
                fertilized and cultured to support the development and
                preservation of embryos during assisted reproductive treatment.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  to="/contact"
                  className="rounded-full bg-[#dc3f73] px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#c93666]"
                >
                  Book Appointment
                </Link>

                <a
                  href="#embryology-process"
                  className="rounded-full border border-white/40 px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#075f68]"
                >
                  Explore Embryology
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
              alt="Embryology laboratory"
              className="h-[350px] w-full object-cover sm:h-[470px]"
            />

          </div>

          <div>

            <p className="mb-4 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#08727c]">
              Understanding Embryology
            </p>

            <h2 className="font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#183f45] sm:text-[40px]">
              Where science supports your fertility journey
            </h2>

            <div className="mt-6 space-y-5 font-['Manrope'] text-base leading-7 text-[#687477]">

              <p>
                An embryology facility is a specialised laboratory where
                gametes, including eggs and sperm, are handled, fertilized and
                cultured to develop into embryos.
              </p>

              <p>
                It serves as an important part of assisted reproductive
                treatment, supporting procedures such as fertilization, embryo
                culture, cryopreservation and embryo transfer.
              </p>

              <p>
                Advanced laboratory techniques allow embryologists to carefully
                monitor embryo development and support the fertility treatment
                plan.
              </p>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-[#fff0f4] p-5">

                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#dc3f73]">
                  Eggs
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#687477]">
                  Gamete handling
                </p>

              </div>

              <div className="rounded-2xl bg-[#f0fafb] p-5">

                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#08727c]">
                  Embryos
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#687477]">
                  Culture & monitoring
                </p>

              </div>

              <div className="col-span-2 rounded-2xl bg-[#f7f7f7] p-5 sm:col-span-1">

                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#183f45]">
                  Lab
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#687477]">
                  Controlled environment
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FACILITY SERVICES */}
      <section className="bg-[#f8fbfb] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#08727c]">
              Embryology Services
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#183f45] sm:text-[40px]">
              What happens inside an embryology facility?
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#687477]">
              The embryology laboratory supports several important stages of
              assisted reproductive treatment, from gamete handling and
              fertilization to embryo culture, testing and preservation.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {facilityServices.map((item) => (

              <div
                key={item.no}
                className="rounded-[24px] border border-[#e7eeee] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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

      {/* PROCESS */}
      <section
        id="embryology-process"
        className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#08727c]">
              Embryology Process
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#183f45] sm:text-[40px]">
              Eight carefully coordinated stages
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#687477]">
              From ovarian stimulation and egg retrieval to fertilization,
              embryo culture, transfer and cryopreservation, the embryology
              team supports the laboratory stages of treatment.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {processSteps.map((step) => (

              <div
                key={step.no}
                className="group rounded-[24px] border border-[#e7eeee] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex items-start justify-between gap-3">

                  <span className="font-['Playfair_Display'] text-3xl font-bold text-[#dc3f73]/30">
                    {step.no}
                  </span>

                  <span className="rounded-full bg-[#f0fafb] px-3 py-1 font-['Manrope'] text-[10px] font-bold uppercase tracking-wider text-[#08727c]">
                    Embryology
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

      {/* WHO NEEDS */}
      <section className="bg-[#075f68] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">

          <div>

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/70">
              When Is Embryology Support Needed?
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-white sm:text-[40px]">
              Laboratory expertise for different fertility needs
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-white/75">
              Embryology services form an important part of assisted
              reproductive treatment for couples and individuals facing
              different fertility challenges.
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
              Advantages Of Embryology Facility
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#183f45] sm:text-[40px]">
              Precision at every laboratory stage
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#687477]">
              A specialised embryology laboratory provides controlled
              conditions, skilled expertise and advanced techniques to support
              different stages of assisted reproductive treatment.
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

      {/* LABORATORY SECTION */}
      <section className="bg-[#f8fbfb] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1581093458791-9d42e3c6c1fc?auto=format&fit=crop&w=1200&q=85"
              alt="Advanced embryology laboratory"
              className="h-[350px] w-full object-cover sm:h-[480px]"
            />

          </div>

          <div>

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#08727c]">
              Advanced Laboratory Care
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#183f45] sm:text-[40px]">
              Supporting embryo development with precision
            </h2>

            <p className="mt-6 font-['Manrope'] text-base leading-7 text-[#687477]">
              Embryos require carefully controlled laboratory conditions during
              their early development. The embryology team monitors their
              progress and supports the laboratory stages leading to embryo
              selection, transfer or cryopreservation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <h3 className="font-['Manrope'] text-base font-bold text-[#183f45]">
                  Controlled Environment
                </h3>

                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#687477]">
                  Laboratory conditions are carefully maintained during embryo
                  development.
                </p>

              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <h3 className="font-['Manrope'] text-base font-bold text-[#183f45]">
                  Embryo Monitoring
                </h3>

                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#687477]">
                  Embryos are observed during their early developmental stages.
                </p>

              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <h3 className="font-['Manrope'] text-base font-bold text-[#183f45]">
                  Genetic Testing
                </h3>

                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#687477]">
                  Testing may be considered when clinically appropriate.
                </p>

              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <h3 className="font-['Manrope'] text-base font-bold text-[#183f45]">
                  Cryopreservation
                </h3>

                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-[#687477]">
                  Suitable embryos may be preserved for possible future use.
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
                Embryology procedures are an important part of assisted
                reproductive treatment, but patients should understand that
                treatment can involve medical, emotional and financial
                considerations.
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
              Advanced embryology care for your fertility journey
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-['Manrope'] text-base leading-7 text-white/75">
              Speak with the Conceive IVF team about your fertility concerns,
              treatment options and the role of advanced embryology in your
              fertility journey.
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