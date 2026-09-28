import React, { useState } from "react";
import { Link } from "react-router-dom";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

type FAQCategory = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  items: FAQItem[];
};

const faqCategories: FAQCategory[] = [
  {
    id: "common",
    title: "Most Common Questions",
    shortTitle: "Common Questions",
    description:
      "Answers to some of the most frequently asked questions about IVF treatment and the fertility journey.",
    items: [
      {
        question: "When is the right time to start IVF treatment?",
        answer: (
          <>
            The right time to start IVF treatment is decided after an initial
            consultation, examination and recommended investigations. Your
            fertility specialist will review your individual circumstances and
            advise when treatment should begin.
          </>
        ),
      },
      {
        question: "How many times can we try IVF?",
        answer: (
          <>
            The number of IVF attempts varies from couple to couple. Factors
            such as age, ovarian reserve, medical history, previous treatment
            outcomes and overall health are considered before deciding whether
            another cycle is appropriate.
          </>
        ),
      },
      {
        question:
          "Can we have our tests done at a nearby clinic as we live in a far rural area?",
        answer: (
          <>
            In many situations, relevant tests can be completed at a nearby
            clinic while remaining in close contact with your fertility
            specialist. Your reports and monitoring can then be reviewed as
            part of your treatment plan.
          </>
        ),
      },
      {
        question: "Is IVF safe?",
        answer: (
          <>
            IVF is an established assisted reproductive treatment. Like any
            medical treatment, it may involve potential risks or side effects.
            Your fertility specialist will explain the medicines, procedures
            and possible risks based on your individual circumstances.
          </>
        ),
      },
      {
        question: "Is IVF painful?",
        answer: (
          <>
            The experience varies between patients. Fertility injections may
            cause some discomfort. Egg collection is generally performed under
            appropriate sedation or anaesthesia, while embryo transfer is
            usually a short procedure. Your medical team will explain each
            stage before treatment.
          </>
        ),
      },
      {
        question:
          "We have heard egg collection process is painful. Is it true?",
        answer: (
          <>
            Egg collection is generally performed under appropriate sedation
            or anaesthesia to minimise discomfort. Some patients may experience
            mild cramping or discomfort after the procedure. Your fertility
            team will provide specific recovery instructions.
          </>
        ),
      },
      {
        question: "What is the success rate of IVF?",
        answer: (
          <>
            IVF success rates vary between individuals. Age, ovarian reserve,
            egg and sperm quality, embryo quality, medical history and the
            underlying cause of infertility can all affect treatment outcomes.
            Your fertility specialist can discuss the factors relevant to your
            individual situation.
          </>
        ),
      },
      {
        question: "When should I opt for IVF?",
        answer: (
          <>
            IVF may be considered when other fertility treatments have not
            produced the desired result or when your fertility specialist
            believes IVF is an appropriate option based on your fertility
            evaluation.
          </>
        ),
      },
      {
        question: "In which cases is IVF performed?",
        answer: (
          <>
            IVF may be considered for several fertility situations, including
            tubal factors, certain male-factor fertility problems,
            endometriosis, age-related fertility decline, ovulation problems
            and unexplained infertility. The appropriate treatment depends on
            the individual medical evaluation.
          </>
        ),
      },
      {
        question: "How does the IVF process work?",
        answer: (
          <>
            IVF generally involves fertility assessment, ovarian stimulation,
            follicular monitoring, egg retrieval, sperm collection and
            preparation, fertilisation in the laboratory, embryo development
            and embryo transfer. A pregnancy test is performed after the
            appropriate interval.
          </>
        ),
      },
      {
        question: "How much time does an IVF cycle take?",
        answer: (
          <>
            The duration of an IVF cycle depends on the treatment protocol and
            individual response. It generally involves preparation, ovarian
            stimulation and monitoring, egg retrieval, embryo development and
            embryo transfer. Your specialist will provide a schedule specific
            to your treatment.
          </>
        ),
      },
    ],
  },

  {
    id: "post-treatment",
    title: "Post Treatment Questions",
    shortTitle: "Post Treatment",
    description:
      "Important questions about recovery, exercise and routine activities after embryo transfer.",
    items: [
      {
        question:
          "How long do I need to rest after the embryo transfer procedure?",
        answer: (
          <>
            Your fertility team will provide personalised instructions after
            embryo transfer. Extended bed rest is generally not required for
            everyone, but strenuous exercise and heavy activity may be
            restricted according to your doctor's advice.
          </>
        ),
      },
      {
        question:
          "What is the gap period required between two unsuccessful cycles?",
        answer: (
          <>
            The appropriate interval between IVF cycles depends on the reason
            for the previous outcome, your physical recovery, investigations
            and the treatment plan recommended by your fertility specialist.
            There is no single interval that is suitable for every patient.
          </>
        ),
      },
      {
        question: "Can I exercise post the embryo transfer process?",
        answer: (
          <>
            Light daily activity and walking may be appropriate for many
            patients, while heavy lifting and strenuous exercise may need to
            be avoided. Follow the activity instructions provided by your
            fertility specialist.
          </>
        ),
      },
      {
        question: "What are the dos and don'ts after embryo transfer?",
        answer: (
          <>
            Follow the medicines prescribed by your fertility team, maintain a
            balanced diet and stay hydrated. Avoid strenuous exercise and
            heavy lifting according to your doctor's advice, and contact your
            medical team if you experience concerning symptoms.
          </>
        ),
      },
      {
        question:
          "Can I continue with my routine activities after embryo transfer?",
        answer: (
          <>
            Many patients can continue normal light daily activities after
            embryo transfer. Walking and routine movements do not normally
            cause an embryo to fall out of the uterus. Your doctor will advise
            you if any specific restrictions are required.
          </>
        ),
      },
    ],
  },

  {
    id: "cost",
    title: "Questions on Treatment Cost",
    shortTitle: "Treatment Cost",
    description:
      "General information about the factors that can influence fertility treatment costs.",
    items: [
      {
        question: "How much does IVF cost?",
        answer: (
          <>
            IVF treatment cost varies depending on the treatment protocol,
            investigations, medicines, procedures and individual fertility
            requirements. A personalised estimate can be discussed after your
            consultation and assessment.
          </>
        ),
      },
      {
        question: "What makes IVF an expensive treatment?",
        answer: (
          <>
            IVF involves specialist medical care, laboratory facilities,
            embryology services, medicines, monitoring, procedures and
            specialised equipment. The overall cost therefore varies according
            to the requirements of each patient.
          </>
        ),
      },
      {
        question: "What is the cost of the IUI Treatment?",
        answer: (
          <>
            IUI cost can vary depending on investigations, medicines,
            monitoring and the individual treatment plan. Please contact
            Conceive IVF for the current treatment cost and a personalised
            estimate.
          </>
        ),
      },
    ],
  },

  {
    id: "other",
    title: "Other Common Questions",
    shortTitle: "Other Questions",
    description:
      "More detailed questions covering IVF steps, IUI, ICSI, male fertility and cryopreservation.",
    items: [
      {
        question: "How does the IVF Process work?",
        answer: (
          <>
            IVF is a series of treatment stages:
            <ul className="mt-4 space-y-3 pl-5">
              <li className="list-disc">
                <strong>Initial Consultation:</strong> Your fertility history,
                concerns and treatment goals are reviewed.
              </li>
              <li className="list-disc">
                <strong>Testing and Ovarian Stimulation:</strong> Relevant
                investigations are performed and prescribed medication may be
                used to stimulate follicle development.
              </li>
              <li className="list-disc">
                <strong>Egg Retrieval:</strong> Mature eggs are collected from
                the ovaries using ultrasound guidance.
              </li>
              <li className="list-disc">
                <strong>Sperm Collection:</strong> Sperm is collected and
                prepared for fertilisation.
              </li>
              <li className="list-disc">
                <strong>Fertilisation:</strong> Eggs and sperm are combined in
                the laboratory or fertilisation may be performed using ICSI
                when appropriate.
              </li>
              <li className="list-disc">
                <strong>Embryo Development:</strong> Fertilised eggs are
                monitored as they develop into embryos.
              </li>
              <li className="list-disc">
                <strong>Embryo Transfer:</strong> A suitable embryo may be
                transferred into the uterus.
              </li>
              <li className="list-disc">
                <strong>Pregnancy Test:</strong> A blood test is performed
                after the appropriate interval following embryo transfer.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "What is Intrauterine Insemination (IUI)?",
        answer: (
          <>
            Intrauterine insemination, or IUI, is an assisted reproductive
            technique in which prepared sperm are placed directly into the
            uterus around the time of ovulation. It may be recommended for
            selected fertility situations.
          </>
        ),
      },
      {
        question: "How does the process of ICSI work?",
        answer: (
          <>
            ICSI, or Intracytoplasmic Sperm Injection, is a specialised
            fertilisation technique. During ICSI, a single selected sperm is
            injected directly into a mature egg using specialised laboratory
            equipment.
          </>
        ),
      },
      {
        question: "Which treatment is available for Low sperm count?",
        answer: (
          <>
            Treatment depends on the cause and severity of the low sperm count.
            Depending on the individual situation, options may include medical
            management, IUI, IVF or ICSI. A semen analysis and fertility
            evaluation help determine the appropriate approach.
          </>
        ),
      },
      {
        question: "Which treatment is available for nil sperm count?",
        answer: (
          <>
            When sperm are not found in the semen, further evaluation is
            required to determine the cause. In selected cases, sperm may be
            retrieved directly from testicular tissue using procedures such as
            TESA or TESE. If suitable sperm are obtained, ICSI may be used for
            fertilisation.
          </>
        ),
      },
      {
        question: "How long does the egg collection/pickup procedure take?",
        answer: (
          <>
            The duration of egg collection depends on the number and location
            of follicles being aspirated. The procedure is generally
            relatively short, but the exact duration varies between patients.
          </>
        ),
      },
      {
        question: "What is the cryopreservation technique?",
        answer: (
          <>
            Cryopreservation is a technique used to preserve reproductive
            material at very low temperatures for future use. Eggs, sperm and
            embryos can be frozen and stored depending on the treatment plan.
          </>
        ),
      },
      {
        question: "What is egg freezing?",
        answer: (
          <>
            Egg freezing, also called oocyte cryopreservation, involves
            retrieving suitable eggs and preserving them for potential future
            use. When required, frozen eggs can be thawed and used as part of
            assisted reproductive treatment.
          </>
        ),
      },
      {
        question: "What is sperm cryopreservation?",
        answer: (
          <>
            Sperm cryopreservation involves collecting and freezing sperm for
            potential future use. It may be considered for fertility
            preservation or before certain medical treatments that may affect
            fertility.
          </>
        ),
      },
      {
        question: "What is embryo cryopreservation?",
        answer: (
          <>
            Embryo cryopreservation involves freezing suitable embryos for
            potential future use. It can provide another treatment opportunity
            without necessarily repeating the complete ovarian stimulation and
            egg-retrieval process.
          </>
        ),
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("common");
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const selectedCategory =
    faqCategories.find((category) => category.id === activeCategory) ||
    faqCategories[0];

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenQuestion(0);
  };

  return (
    <main className="bg-white text-[#3B2940]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#3B2940]">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=85"
            alt="Conceive IVF fertility consultation"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#3B2940]/90" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

          <div className="max-w-3xl">

            <p className="mb-5 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/80">
              Conceive IVF Fertility Centre
            </p>

            <h1 className="font-['Playfair_Display'] text-[38px] font-bold leading-[1.12] text-white sm:text-5xl lg:text-[60px]">
              Frequently Asked Questions
            </h1>

            <p className="mt-6 max-w-2xl font-['Manrope'] text-base leading-7 text-white/85 sm:text-lg">
              We are here to help you through every hurdle you may face during
              your fertility journey. Find answers to common questions about
              IVF, IUI, ICSI and fertility treatment.
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
                href="#faq-section"
                className="rounded-full border border-white/40 px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#3B2940]"
              >
                Explore FAQs
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85"
              alt="Fertility consultation"
              className="h-[350px] w-full object-cover sm:h-[470px]"
            />

          </div>

          <div>

            <p className="mb-4 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              FAQs
            </p>

            <h2 className="font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              We are here to answer your questions
            </h2>

            <div className="mt-6 space-y-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">

              <p>
                We are here to help you through every hurdle you face. We have
                anticipated some of the most common questions patients may have
                during their fertility journey.
              </p>

              <p>
                Everything is organised into clear sections so that you can
                quickly find information about IVF, post-treatment care,
                treatment cost, IUI, ICSI, male fertility and
                cryopreservation.
              </p>

              <p>
                Every fertility journey is unique. For advice specific to your
                situation, speak with the Conceive IVF fertility team.
              </p>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-[#F8F4EE] p-5">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A15B]">
                  IVF
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Treatment
                </p>
              </div>

              <div className="rounded-2xl bg-[#F8F4EE] p-5">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A15B]">
                  ICSI
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Fertilisation
                </p>
              </div>

              <div className="col-span-2 rounded-2xl bg-[#F8F4EE] p-5 sm:col-span-1">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#3B2940]">
                  IUI
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Treatment
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FAQ MAIN
      ========================================================= */}
      <section
        id="faq-section"
        className="bg-[#F8F4EE] px-5 py-16 sm:px-8 lg:px-10 lg:py-10"
      >

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[42px]">
              Find Answers To Your Questions
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              Select a category to explore the questions and answers related
              to your fertility treatment.
            </p>

          </div>

          {/* FAQ Layout */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">

            {/* LEFT CATEGORY */}
            <div className="lg:sticky lg:top-24">

              <div className="rounded-[26px] border border-[#E8DFD2] bg-white p-3 shadow-sm">

                <p className="px-4 pb-3 pt-3 font-['Manrope'] text-xs font-bold uppercase tracking-[0.1em] text-[#C6A15B]">
                  FAQ Categories
                </p>

                <div className="space-y-1">

                  {faqCategories.map((category, index) => {

                    const active = category.id === activeCategory;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => handleCategoryChange(category.id)}
                        className={`flex w-full items-center justify-between rounded-[16px] px-4 py-3.5 text-left transition ${
                          active
                            ? "bg-[#3B2940] text-white"
                            : "text-[#5F5660] hover:bg-[#F8F4EE] hover:text-[#3B2940]"
                        }`}
                      >

                        <div className="flex items-center gap-3">

                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-['Manrope'] text-[10px] font-bold ${
                              active
                                ? "bg-white/15 text-white"
                                : "bg-[#F8F4EE] text-[#C6A15B]"
                            }`}
                          >
                            0{index + 1}
                          </span>

                          <span className="font-['Manrope'] text-sm font-bold">
                            {category.shortTitle}
                          </span>

                        </div>

                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={active ? "text-white" : "text-[#9A9098]"}
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>

                      </button>
                    );
                  })}

                </div>

              </div>

              {/* Small contact card */}
              <div className="mt-5 rounded-[24px] bg-[#3B2940] p-6 text-white">

                <p className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.1em] text-white/60">
                  Still Have Questions?
                </p>

                <h3 className="mt-3 font-['Playfair_Display'] text-2xl font-bold">
                  Ask Our Team
                </h3>

                <p className="mt-3 font-['Manrope'] text-sm leading-6 text-white/70">
                  Speak with the fertility team for guidance based on your
                  individual situation.
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex rounded-full bg-[#C6A15B] px-5 py-3 font-['Manrope'] text-xs font-bold text-white transition hover:bg-[#B08B48]"
                >
                  Contact Us →
                </Link>

              </div>

            </div>

            {/* RIGHT QUESTIONS */}
            <div>

              <div className="mb-7">

                <p className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.1em] text-[#C6A15B]">
                  {selectedCategory.shortTitle}
                </p>

                <h3 className="mt-2 font-['Playfair_Display'] text-[30px] font-bold text-[#3B2940]">
                  {selectedCategory.title}
                </h3>

                <p className="mt-3 max-w-2xl font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  {selectedCategory.description}
                </p>

              </div>

              <div className="space-y-3">

                {selectedCategory.items.map((item, index) => {

                  const isOpen = openQuestion === index;

                  return (
                    <div
                      key={item.question}
                      className={`overflow-hidden rounded-[22px] border bg-white transition-all duration-300 ${
                        isOpen
                          ? "border-[#C6A15B]/30 shadow-[0_15px_45px_rgba(7,95,104,0.08)]"
                          : "border-[#E8DFD2]"
                      }`}
                    >

                      <button
                        type="button"
                        onClick={() =>
                          setOpenQuestion(isOpen ? null : index)
                        }
                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                      >

                        <div className="flex min-w-0 items-start gap-4">

                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-['Manrope'] text-xs font-bold transition ${
                              isOpen
                                ? "bg-[#C6A15B] text-white"
                                : "bg-[#F8F4EE] text-[#C6A15B]"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="font-['Manrope'] text-sm font-bold leading-6 text-[#3B2940] sm:text-[15px]">
                            {item.question}
                          </span>

                        </div>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                            isOpen
                              ? "rotate-45 bg-[#C6A15B] text-white"
                              : "bg-[#F8F4EE] text-[#C6A15B]"
                          }`}
                        >

                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>

                        </span>

                      </button>

                      {isOpen && (

                        <div className="px-5 pb-6 sm:px-7 sm:pl-[76px]">

                          <div className="h-px bg-[#E8DFD2]" />

                          <div className="pt-5 font-['Manrope'] text-sm leading-7 text-[#5F5660]">
                            {item.answer}
                          </div>

                        </div>

                      )}

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          IVF PROCESS
      ========================================================= */}
      {/* <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              IVF Treatment
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[42px]">
              Understanding the IVF Journey
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              The IVF process involves several stages, from initial consultation
              and ovarian stimulation to embryo transfer and pregnancy testing.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                no: "01",
                title: "Initial Consultation",
                text: "Discuss fertility history, concerns, investigations and treatment goals.",
              },
              {
                no: "02",
                title: "Ovarian Stimulation",
                text: "Medication may be used to stimulate development of multiple follicles.",
              },
              {
                no: "03",
                title: "Egg Retrieval",
                text: "Mature eggs are collected using an ultrasound-guided procedure.",
              },
              {
                no: "04",
                title: "Embryo Transfer",
                text: "A suitable embryo may be transferred into the uterus.",
              },
            ].map((step) => (

              <div
                key={step.no}
                className="rounded-[24px] border border-[#E8DFD2] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(7,95,104,0.08)]"
              >

                <span className="font-['Playfair_Display'] text-4xl font-bold text-[#C6A15B]/25">
                  {step.no}
                </span>

                <h3 className="mt-5 font-['Manrope'] text-lg font-bold text-[#3B2940]">
                  {step.title}
                </h3>

                <p className="mt-3 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-10 text-center">

            <Link
              to="/in-vitro-fertilization/"
              className="inline-flex rounded-full bg-[#3B2940] px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#2F2035]"
            >
              Explore IVF Treatment →
            </Link>

          </div>

        </div>
      </section> */}

      {/* =========================================================
          TREATMENT SERVICES
      ========================================================= */}
      {/* <section className="bg-[#3B2940] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/70">
              Fertility Treatments
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-white sm:text-[42px]">
              Explore Our Fertility Treatments
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-white/75">
              Learn more about the fertility treatments and reproductive
              services available at Conceive IVF.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                no: "01",
                title: "IVF",
                text: "In-vitro fertilisation and embryo transfer.",
                link: "/in-vitro-fertilization/",
              },
              {
                no: "02",
                title: "IUI",
                text: "Intrauterine insemination as an assisted reproductive option.",
                link: "/iui/",
              },
              {
                no: "03",
                title: "ICSI",
                text: "Specialised fertilisation using direct sperm injection.",
                link: "/icsi/",
              },
              {
                no: "04",
                title: "Egg Freezing",
                text: "Fertility preservation through egg cryopreservation.",
                link: "/egg-freezing/",
              },
            ].map((item) => (

              <Link
                key={item.no}
                to={item.link}
                className="group rounded-[24px] border border-white/10 bg-white/10 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >

                <span className="font-['Playfair_Display'] text-4xl font-bold text-[#C6A15B]">
                  {item.no}
                </span>

                <h3 className="mt-6 font-['Manrope'] text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 font-['Manrope'] text-sm leading-6 text-white/70">
                  {item.text}
                </p>

                <span className="mt-5 inline-block font-['Manrope'] text-sm font-bold text-white transition group-hover:text-[#C6A15B]">
                  Explore Treatment →
                </span>

              </Link>

            ))}

          </div>

        </div>
      </section> */}

      {/* =========================================================
          STILL HAVE QUESTIONS
      ========================================================= */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[32px] bg-[#F8F4EE] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">

          <div>

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Still Have Questions?
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Ask Our Fertility Team
            </h2>

            <p className="mt-4 max-w-2xl font-['Manrope'] text-base leading-7 text-[#5F5660]">
              Every fertility journey is unique. If you cannot find the answer
              you are looking for, speak with the Conceive IVF team for
              personalised guidance.
            </p>

          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#C6A15B] px-7 py-4 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#B08B48]"
          >
            Contact Us →
          </Link>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-10">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#3B2940] px-6 py-14 text-center sm:px-12">

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/5" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#C6A15B]/20" />

          <div className="relative mx-auto max-w-3xl">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/70">
              Begin Your Fertility Journey
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-white sm:text-[42px]">
              Your questions deserve clear answers
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-['Manrope'] text-base leading-7 text-white/75">
              Take the next step with personalised fertility guidance and
              discuss your treatment options with the Conceive IVF team.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("openAppointment"))
                }
                className="inline-flex rounded-full bg-[#C6A15B] px-8 py-4 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#B08B48]"
              >
                Book Your Consultation
              </button>

              <Link
                to="/patient-review"
                className="inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#3B2940]"
              >
                Watch Patient Videos
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}