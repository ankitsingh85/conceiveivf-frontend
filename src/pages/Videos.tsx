import { useState } from "react";

const videos = [
  {
    id: 1,
    category: "IVF",
    title: "Understanding IVF Treatment",
    description:
      "Learn about the IVF journey, from initial evaluation and ovarian stimulation to embryo transfer.",
    youtubeId: "VIDEO_ID_1",
  },
  {
    id: 2,
    category: "IVF",
    title: "Your IVF Journey Explained",
    description:
      "A simple overview of the important stages involved in an IVF treatment cycle.",
    youtubeId: "VIDEO_ID_2",
  },
  {
    id: 3,
    category: "ICSI",
    title: "What Is ICSI Treatment?",
    description:
      "Understand how a single sperm is injected directly into a mature egg during ICSI.",
    youtubeId: "VIDEO_ID_3",
  },
  {
    id: 4,
    category: "Embryology",
    title: "Inside an Embryology Laboratory",
    description:
      "Discover how eggs, sperm and embryos are handled and monitored inside an embryology facility.",
    youtubeId: "VIDEO_ID_4",
  },
  {
    id: 5,
    category: "Egg Freezing",
    title: "Understanding Egg Freezing",
    description:
      "Learn how eggs can be retrieved, frozen and preserved for potential future fertility treatment.",
    youtubeId: "VIDEO_ID_5",
  },
  {
    id: 6,
    category: "PGD / PGS",
    title: "What Are PGD & PGS?",
    description:
      "Learn how embryo genetic testing can provide additional information before embryo transfer.",
    youtubeId: "VIDEO_ID_6",
  },
  {
    id: 7,
    category: "Fertility",
    title: "Understanding Infertility",
    description:
      "Learn about common fertility challenges and why a personalised fertility assessment is important.",
    youtubeId: "VIDEO_ID_7",
  },
  {
    id: 8,
    category: "Fertility",
    title: "When Should You Consult a Fertility Specialist?",
    description:
      "Understand when professional fertility guidance and evaluation may be helpful.",
    youtubeId: "VIDEO_ID_8",
  },
  
];

const categories = [
  "All",
  "IVF",
  "ICSI",
  "Embryology",
  "Egg Freezing",
  "PGD / PGS",
  "Fertility",
  "Patient Journey",
];

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  return (
    <main className="bg-white text-[#3B2940]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#3B2940]">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1800&q=85"
            alt="Conceive IVF fertility care"
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
              Videos
            </h1>

            <p className="mt-6 max-w-2xl font-['Manrope'] text-base leading-7 text-white/85 sm:text-lg">
              Explore fertility treatment information, patient guidance and
              educational videos from Conceive IVF Fertility Centre.
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
                href="#video-library"
                className="rounded-full border border-white/40 px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#3B2940]"
              >
                Explore Videos
              </a>

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
              Learn About Fertility
            </p>

            <h2 className="font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Information that helps you understand your journey
            </h2>

            <div className="mt-6 space-y-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">

              <p>
                Fertility treatment involves several stages, and understanding
                each step can make the journey easier to navigate.
              </p>

              <p>
                Our video library brings together educational content covering
                IVF, ICSI, embryology, egg freezing, genetic testing and other
                fertility-related topics.
              </p>

              <p>
                Explore the videos below to learn more about fertility
                treatments and the technologies used during assisted
                reproductive care.
              </p>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-[#F8F4EE] p-5">

                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A15B]">
                  IVF
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Treatment information
                </p>

              </div>

              <div className="rounded-2xl bg-[#F8F4EE] p-5">

                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A15B]">
                  ICSI
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Fertilisation guidance
                </p>

              </div>

              <div className="col-span-2 rounded-2xl bg-[#F8F4EE] p-5 sm:col-span-1">

                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#3B2940]">
                  More
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Fertility education
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* VIDEO LIBRARY */}
      <section
        id="video-library"
        className="bg-[#F8F4EE] px-5 py-16 sm:px-8 lg:px-10 lg:py-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Video Library
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[42px]">
              Explore our fertility videos
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              Select a topic to explore educational videos related to fertility
              treatments and reproductive care.
            </p>

          </div>

          {/* FILTERS */}
          <div className="mt-10 flex gap-3 overflow-x-auto pb-3 lg:flex-wrap lg:justify-center">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 font-['Manrope'] text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#3B2940] text-white"
                    : "border border-[#E8DFD2] bg-white text-[#5F5660] hover:border-[#C6A15B] hover:text-[#C6A15B]"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

          {/* VIDEO GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {filteredVideos.map((video) => (

              <article
                key={video.id}
                className="group overflow-hidden rounded-[26px] border border-[#E8DFD2] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* VIDEO THUMBNAIL */}
                <button
                  type="button"
                  onClick={() => setSelectedVideo(video)}
                  className="relative block h-[220px] w-full overflow-hidden text-left"
                >

                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85";
                    }}
                  />

                  <div className="absolute inset-0 bg-[#3B2940]/25 transition group-hover:bg-[#3B2940]/40" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 font-['Manrope'] text-[10px] font-bold uppercase tracking-wider text-[#3B2940]">
                    {video.category}
                  </span>

                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C6A15B] text-white shadow-xl transition duration-300 group-hover:scale-110">

                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1"
                    >
                      <path d="M8 5.14v13.72c0 .76.83 1.24 1.5.82l10.2-6.86a.97.97 0 0 0 0-1.64L9.5 4.32C8.83 3.9 8 4.38 8 5.14Z" />
                    </svg>

                  </span>

                </button>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="font-['Manrope'] text-[18px] font-bold leading-7 text-[#3B2940]">
                    {video.title}
                  </h3>

                  <p className="mt-3 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                    {video.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedVideo(video)}
                    className="mt-5 inline-flex items-center gap-2 font-['Manrope'] text-sm font-bold text-[#C6A15B] transition hover:text-[#C6A15B]"
                  >
                    Watch Video

                    <span>
                      →
                    </span>

                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* TREATMENT TOPICS */}
      {/* <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Treatment Topics
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Learn more about our fertility services
            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "IVF",
                text: "Understand the different stages involved in an IVF treatment cycle.",
                link: "/in-vitro-fertilization/",
              },
              {
                title: "ICSI",
                text: "Learn how specialised sperm injection can assist fertilisation.",
                link: "/icsi/",
              },
              {
                title: "Egg Freezing",
                text: "Explore fertility preservation and the egg freezing process.",
                link: "/egg-freezing/",
              },
              {
                title: "Embryology",
                text: "Discover the laboratory science behind embryo development.",
                link: "/embryology/",
              },
            ].map((item, index) => (

              <Link
                key={item.title}
                to={item.link}
                className="group rounded-[24px] border border-[#E8DFD2] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <span className="font-['Playfair_Display'] text-4xl font-bold text-[#C6A15B]/25">
                  0{index + 1}
                </span>

                <h3 className="mt-6 font-['Manrope'] text-lg font-bold text-[#3B2940]">
                  {item.title}
                </h3>

                <p className="mt-3 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                  {item.text}
                </p>

                <span className="mt-5 inline-block font-['Manrope'] text-sm font-bold text-[#C6A15B] group-hover:text-[#C6A15B]">
                  Learn More →
                </span>

              </Link>

            ))}

          </div>

        </div>
      </section> */}

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
              Have questions about fertility treatment?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-['Manrope'] text-base leading-7 text-white/75">
              Explore our educational resources or speak with the Conceive IVF
              team about your fertility concerns and treatment options.
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

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-5"
          onClick={() => setSelectedVideo(null)}
        >

          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[24px] bg-black"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-[#3B2940]"
              aria-label="Close video"
            >
              ×
            </button>

            <div className="aspect-video w-full">

              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />

            </div>

          </div>

        </div>
      )}

    </main>
  );
}