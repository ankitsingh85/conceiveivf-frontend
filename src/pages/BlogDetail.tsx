import React from "react";
import { Link, useParams } from "react-router-dom";

type Blog = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
};

const blogs: Blog[] = [
  {
    id: 1,
    category: "IVF",
    title: "Understanding the IVF Treatment Journey",
    excerpt:
      "A simple guide to the major stages of IVF, from fertility assessment and ovarian stimulation to embryo transfer.",
    date: "September 18, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85",
    intro:
      "In vitro fertilisation, commonly known as IVF, involves a series of carefully planned stages. Understanding what happens at each stage can make the treatment journey easier to follow.",
    sections: [
      {
        heading: "What is IVF?",
        paragraphs: [
          "IVF is an assisted reproductive treatment in which eggs and sperm are brought together in a laboratory to support fertilisation. Embryos that develop may then be considered for transfer as part of the treatment plan.",
          "The exact approach can vary depending on the individual's assessment, medical history and treatment plan.",
        ],
      },
      {
        heading: "Fertility assessment",
        paragraphs: [
          "Treatment generally begins with an assessment designed to understand fertility factors and identify information that may be relevant to the treatment plan.",
          "Your fertility team may discuss your medical history, investigations and the treatment approach before the cycle begins.",
        ],
      },
      {
        heading: "Ovarian stimulation and monitoring",
        paragraphs: [
          "During an IVF cycle, medication may be used to stimulate the ovaries so that multiple follicles can develop. Monitoring helps the clinical team follow the response and plan the next stage.",
          "The timing and medication plan are individualised according to the treatment protocol.",
        ],
      },
      {
        heading: "Egg collection and fertilisation",
        paragraphs: [
          "When the follicles are ready, eggs are collected and taken to the embryology laboratory. Sperm is also prepared for fertilisation.",
          "Depending on the clinical plan, conventional IVF or a specialised fertilisation technique such as ICSI may be considered.",
        ],
      },
      {
        heading: "Embryo development and transfer",
        paragraphs: [
          "Following fertilisation, embryos are observed in the laboratory. The fertility team then discusses the appropriate next step based on the treatment plan.",
          "Embryo transfer is a carefully planned stage of treatment, followed by the recommended follow-up and pregnancy testing schedule.",
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Fertility",
    title: "When Should You See a Fertility Specialist?",
    excerpt:
      "Learn about common situations when a fertility consultation and personalised assessment may be helpful.",
    date: "September 12, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=85",
    intro:
      "A fertility consultation can help you understand your individual circumstances, possible investigations and available treatment options.",
    sections: [
      {
        heading: "Why consider a fertility consultation?",
        paragraphs: [
          "Fertility can be influenced by many factors. A consultation provides an opportunity to discuss your history, concerns and goals with a fertility team.",
          "The assessment and recommendations depend on the individual and the information available at the time of consultation.",
        ],
      },
      {
        heading: "Understanding your assessment",
        paragraphs: [
          "Your clinician may discuss relevant medical history and investigations as part of understanding fertility factors.",
          "The next steps can then be planned around the findings and your individual circumstances.",
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Egg Freezing",
    title: "Egg Freezing: What You Should Know",
    excerpt:
      "Explore the basic steps involved in egg freezing and the factors that may be considered before treatment.",
    date: "September 6, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=85",
    intro:
      "Egg freezing is a fertility preservation option that involves collecting and cryopreserving eggs for possible future use.",
    sections: [
      {
        heading: "What is egg freezing?",
        paragraphs: [
          "Egg freezing involves stimulating the ovaries, collecting eggs and preserving suitable eggs using a freezing process.",
          "The decision to consider egg freezing depends on individual circumstances and should be discussed with a fertility specialist.",
        ],
      },
      {
        heading: "The treatment process",
        paragraphs: [
          "The process generally includes ovarian stimulation, monitoring, egg collection and laboratory processing.",
          "Your clinical team can explain the medication schedule, monitoring plan and collection procedure before treatment begins.",
        ],
      },
    ],
  },
  {
    id: 4,
    category: "ICSI",
    title: "What Is ICSI and When Is It Used?",
    excerpt:
      "Understand how ICSI works and how this specialised fertilisation technique differs from conventional IVF fertilisation.",
    date: "August 29, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=85",
    intro:
      "Intracytoplasmic sperm injection, or ICSI, is a specialised laboratory fertilisation technique used as part of assisted reproductive treatment.",
    sections: [
      {
        heading: "What is ICSI?",
        paragraphs: [
          "ICSI involves the injection of a single sperm into an egg in the laboratory to assist fertilisation.",
          "It is different from conventional IVF fertilisation, where eggs and sperm are placed together in laboratory conditions.",
        ],
      },
      {
        heading: "When may ICSI be considered?",
        paragraphs: [
          "The fertility team may consider ICSI based on the clinical and fertility assessment, previous treatment history and laboratory factors.",
          "Your specialist can explain whether ICSI is appropriate for your individual treatment plan.",
        ],
      },
    ],
  },
  {
    id: 5,
    category: "Embryology",
    title: "The Role of the Embryology Laboratory",
    excerpt:
      "Discover how the embryology team supports the laboratory stages of assisted reproductive treatment.",
    date: "August 21, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=85",
    intro:
      "The embryology laboratory plays an important role in the laboratory stages of assisted reproductive treatment.",
    sections: [
      {
        heading: "What happens in the laboratory?",
        paragraphs: [
          "The embryology team works with eggs, sperm and embryos during the relevant laboratory stages of treatment.",
          "Laboratory procedures and monitoring are carried out according to the treatment plan and laboratory protocols.",
        ],
      },
      {
        heading: "Supporting the treatment journey",
        paragraphs: [
          "Embryology is closely connected with clinical care. The laboratory team communicates relevant information to the fertility team throughout treatment.",
        ],
      },
    ],
  },
  {
    id: 6,
    category: "Male Fertility",
    title: "Understanding Male Fertility Assessment",
    excerpt:
      "Learn about semen analysis and other aspects that may be reviewed during a male fertility evaluation.",
    date: "August 15, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1600&q=85",
    intro:
      "Male fertility assessment may include a review of medical history, reproductive factors and semen-related investigations.",
    sections: [
      {
        heading: "Why male fertility assessment matters",
        paragraphs: [
          "Fertility involves factors affecting both partners. A male fertility assessment can help identify information that may be relevant to treatment planning.",
        ],
      },
      {
        heading: "Semen analysis",
        paragraphs: [
          "Semen analysis can provide information about characteristics of a semen sample. Your clinician can explain the findings and whether additional assessment is appropriate.",
        ],
      },
    ],
  },
  {
    id: 7,
    category: "IUI",
    title: "A Simple Guide to IUI Treatment",
    excerpt:
      "Understand the basic process of intrauterine insemination and how it may form part of a fertility treatment plan.",
    date: "August 8, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1638202993928-7d113b8a1f4b?auto=format&fit=crop&w=1600&q=85",
    intro:
      "Intrauterine insemination, or IUI, is a fertility treatment in which prepared sperm is placed inside the uterus around the appropriate time in the cycle.",
    sections: [
      {
        heading: "What is IUI?",
        paragraphs: [
          "IUI is a relatively straightforward assisted reproductive procedure. The treatment plan can involve cycle monitoring and, where appropriate, medication.",
        ],
      },
      {
        heading: "Understanding the treatment process",
        paragraphs: [
          "The timing of insemination is planned around the individual's cycle and clinical assessment. Your fertility team will explain the monitoring and procedure before treatment.",
        ],
      },
    ],
  },
  {
    id: 8,
    category: "Fertility",
    title: "Questions to Ask at Your Fertility Consultation",
    excerpt:
      "Preparing questions before your consultation can help you understand your evaluation and treatment options.",
    date: "August 2, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=85",
    intro:
      "A fertility consultation is an opportunity to understand your assessment, possible treatment options and the next steps in your care.",
    sections: [
      {
        heading: "Questions about your assessment",
        paragraphs: [
          "You may want to ask what investigations are recommended, what they are intended to understand and when you can expect to discuss the results.",
        ],
      },
      {
        heading: "Questions about treatment",
        paragraphs: [
          "You can also ask about the treatment options relevant to your circumstances, the stages involved and what follow-up may be required.",
        ],
      },
    ],
  },
];

const categories = [
  "All",
  "Fertility",
  "IVF",
  "IUI",
  "ICSI",
  "Egg Freezing",
  "Embryology",
  "Male Fertility",
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === Number(id)) ?? blogs[0];

  const relatedBlogs = blogs
    .filter((item) => item.id !== blog.id)
    .filter((item) => item.category === blog.category)
    .slice(0, 3);

  const fallbackRelated =
    relatedBlogs.length > 0
      ? relatedBlogs
      : blogs.filter((item) => item.id !== blog.id).slice(0, 3);

  return (
    <main className="bg-white text-[#3B2940]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#3B2940]">
        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3B2940]/88" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <Link
              to="/blog"
              className="font-['Manrope'] text-sm font-semibold text-[#E0C98A] transition hover:text-white"
            >
              ← Back to Blog
            </Link>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#C6A15B] px-3.5 py-1.5 font-['Manrope'] text-[10px] font-bold uppercase tracking-wider text-white">
                {blog.category}
              </span>
              <span className="font-['Manrope'] text-xs font-medium text-white/65">
                {blog.date}
              </span>
              <span className="text-white/35">•</span>
              <span className="font-['Manrope'] text-xs font-medium text-white/65">
                {blog.readTime}
              </span>
            </div>

            <h1 className="mt-6 font-['Playfair_Display'] text-[38px] font-bold leading-[1.08] text-white sm:text-[52px] lg:text-[64px]">
              {blog.title}
            </h1>

            <p className="mt-6 max-w-3xl font-['Manrope'] text-base leading-7 text-white/75 sm:text-lg">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article>
            <div className="overflow-hidden rounded-[28px]">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[280px] w-full object-cover sm:h-[420px]"
              />
            </div>

            <div className="mt-9 max-w-4xl">
              <p className="font-['Manrope'] text-[16px] leading-8 text-[#5F5660]">
                {blog.intro}
              </p>

              <div className="mt-10 space-y-10">
                {blog.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-['Playfair_Display'] text-[28px] font-bold leading-tight text-[#3B2940] sm:text-[34px]">
                      {section.heading}
                    </h2>

                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph, index) => (
                        <p
                          key={index}
                          className="font-['Manrope'] text-[15px] leading-7 text-[#5F5660] sm:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-[24px] border border-[#E8DFD2] bg-[#F8F4EE] p-6 sm:p-8">
                <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.12em] text-[#C6A15B]">
                  Important
                </p>
                <p className="mt-3 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  Fertility treatment is individualised. The information in
                  this article is educational and should be discussed with your
                  fertility specialist in the context of your own circumstances.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="h-fit space-y-6 lg:sticky lg:top-30">
            <div className="rounded-[24px] bg-[#3B2940] p-7">
              <p className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.14em] text-[#E0C98A]">
                Need Guidance?
              </p>

              <h3 className="mt-3 font-['Playfair_Display'] text-[25px] font-bold leading-tight text-white">
                Speak with our fertility team
              </h3>

              <p className="mt-4 font-['Manrope'] text-sm leading-6 text-white/65">
                Discuss your questions and understand the next steps relevant
                to your fertility journey.
              </p>

              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("openAppointment"))
                }
                className="mt-6 w-full rounded-full bg-[#C6A15B] px-5 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#B08B48]"
              >
                Book Appointment
              </button>
            </div>

            <div className="rounded-[24px] border border-[#E8DFD2] bg-white p-6">
              <h3 className="font-['Playfair_Display'] text-[23px] font-bold text-[#3B2940]">
                Categories
              </h3>

              <div className="mt-4 divide-y divide-[#E8DFD2]">
                {categories
                  .filter((category) => category !== "All")
                  .map((category) => (
                    <Link
                      key={category}
                      to="/blog"
                      className="block py-3 font-['Manrope'] text-sm font-semibold text-[#5F5660] transition hover:text-[#C6A15B]"
                    >
                      {category}
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[#F8F4EE] px-5 py-14 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.14em] text-[#C6A15B]">
              Keep Reading
            </p>
            <h2 className="mt-2 font-['Playfair_Display'] text-[30px] font-bold text-[#3B2940] sm:text-[38px]">
              Related Articles
            </h2>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fallbackRelated.map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.id}`}
                className="group overflow-hidden rounded-[22px] border border-[#E8DFD2] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-[210px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-wider text-[#C6A15B]">
                    {item.category}
                  </span>

                  <h3 className="mt-3 font-['Playfair_Display'] text-[22px] font-bold leading-tight text-[#3B2940] transition group-hover:text-[#C6A15B]">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                    {item.excerpt}
                  </p>

                  <span className="mt-5 inline-block font-['Manrope'] text-sm font-bold text-[#C6A15B]">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — same style as other pages */}
      <section className="px-5 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-10 lg:pt-10">
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
                className="inline-flex justify-center rounded-full bg-[#C6A15B] px-8 py-4 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#B08B48]"
              >
                Book Your Consultation
              </button>

              <Link
                to="/contact"
                className="inline-flex justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#3B2940]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
