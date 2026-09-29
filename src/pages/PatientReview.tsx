import { Link } from "react-router-dom";

const reviewHighlights = [
  {
    no: "01",
    title: "Compassionate Care",
    text: "Patients appreciate a supportive and caring environment throughout their fertility journey.",
  },
  {
    no: "02",
    title: "Personalised Treatment",
    text: "Treatment plans are tailored according to individual fertility needs, medical history and goals.",
  },
  {
    no: "03",
    title: "Advanced Treatments",
    text: "Conceive IVF provides advanced fertility treatments including IVF, IUI, ICSI and other reproductive services.",
  },
  {
    no: "04",
    title: "Expert Team",
    text: "Experienced fertility specialists and embryology professionals support patients through their treatment.",
  },
  {
    no: "05",
    title: "Patient-First Approach",
    text: "The centre focuses on keeping patient needs and individual circumstances at the centre of care.",
  },
  {
    no: "06",
    title: "Supportive Environment",
    text: "Patients are guided throughout the fertility process with attention to both treatment and emotional wellbeing.",
  },
];

const treatmentServices = [
  {
    no: "01",
    title: "IVF",
    text: "In-vitro fertilisation with laboratory fertilisation and embryo transfer.",
    link: "/in-vitro-fertilization/",
  },
  {
    no: "02",
    title: "IUI",
    text: "Intrauterine insemination as an assisted reproductive treatment option.",
    link: "/iui-intrauterine-insemination",
  },
  {
    no: "03",
    title: "ICSI",
    text: "A specialised fertilisation technique involving direct sperm injection.",
    link: "/icsi/",
  },
  {
    no: "04",
    title: "Egg Freezing",
    text: "Fertility preservation through retrieval and cryopreservation of eggs.",
    link: "/egg-freezing/",
  },
];

const videoItems = [
  {
    no: "01",
    title: "Patient Journey",
    description:
      "Learn more about the fertility treatment journey and the patient-focused care at Conceive IVF.",
    videoId: "",
  },
  {
    no: "02",
    title: "Fertility Treatment",
    description:
      "Understand the fertility treatment process and the support provided throughout the journey.",
    videoId: "",
  },
  {
    no: "03",
    title: "Conceive IVF Experience",
    description:
      "Explore the patient-centred approach and fertility care provided by Conceive IVF.",
    videoId: "",
  },
  {
    no: "04",
    title: "Conceive IVF Experience",
    description:
      "Explore the patient-centred approach and fertility care provided by Conceive IVF.",
    videoId: "",
  },
];

export default function PatientReview() {
  return (
    <main className="bg-white text-[#3B2940]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#3B2940]">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1800&q=85"
            alt="Conceive IVF patient care"
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

              <h1 className="font-['Playfair_Display'] text-[38px] font-bold leading-[1.12] text-white sm:text-5xl lg:text-[60px]">
                Patient Reviews
              </h1>

              <p className="mt-6 max-w-2xl font-['Manrope'] text-base leading-7 text-white/85 sm:text-lg">
                Discover what makes the Conceive IVF experience focused on
                compassionate care, personalised treatment and support
                throughout the journey to parenthood.
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
                  href="#patient-experience"
                  className="rounded-full border border-white/40 px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#3B2940]"
                >
                  Patient Experience
                </a>

              </div>

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
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
              alt="Fertility consultation"
              className="h-[350px] w-full object-cover sm:h-[470px]"
            />

          </div>

          <div>

            <p className="mb-4 font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Patient Reviews For Conceive IVF
            </p>

            <h2 className="font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Care that puts your journey first
            </h2>

            <div className="mt-6 space-y-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">

              <p>
                At Conceive IVF Fertility Centre, patient care is built around
                personalised treatment, advanced fertility services and a
                supportive environment.
              </p>

              <p>
                Every fertility journey is different. The team focuses on
                understanding individual needs and providing guidance through
                the different stages of treatment.
              </p>

              <p>
                Patient feedback reflects the centre&apos;s focus on
                compassionate care, transparency and personalised fertility
                support.
              </p>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-[#F8F4EE] p-5">

                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A15B]">
                  Care
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Patient focused
                </p>

              </div>

              <div className="rounded-2xl bg-[#F8F4EE] p-5">

                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#C6A15B]">
                  Expert
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Fertility team
                </p>

              </div>

              <div className="col-span-2 rounded-2xl bg-[#F8F4EE] p-5 sm:col-span-1">

                <div className="font-['Playfair_Display'] text-2xl font-bold text-[#3B2940]">
                  Support
                </div>

                <p className="mt-1 font-['Manrope'] text-xs leading-5 text-[#5F5660]">
                  Every step
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          PATIENT EXPERIENCE
      ========================================================= */}
      <section
        id="patient-experience"
        className="bg-[#F8F4EE] px-5 py-16 sm:px-8 lg:px-10 lg:py-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Patient Experience
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[42px]">
              What patients value at Conceive IVF
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              Conceive IVF&apos;s patient-centric approach combines fertility
              expertise with personalised care and a supportive treatment
              environment.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {reviewHighlights.map((item) => (

              <div
                key={item.no}
                className="rounded-[24px] border border-[#E8DFD2] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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

      {/* =========================================================
          VIDEOS
      ========================================================= */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Patient Guide
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[42px]">
              Patient Review Videos
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              Watch helpful videos to understand the fertility journey,
              treatment process and patient-focused care at Conceive IVF.
            </p>

          </div>

          {/* Videos Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {videoItems.map((video) => (

              <div
                key={video.no}
                className="group overflow-hidden rounded-[24px] border border-[#E8DFD2] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Video Thumbnail */}
                <div className="relative h-[220px] overflow-hidden">

                  {video.videoId ? (
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                      alt={video.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3B2940] to-[#C6A15B]">

                      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[30px] border-white/10" />

                      <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full border-[32px] border-white/10" />

                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C6A15B] text-white shadow-lg transition duration-300 group-hover:scale-110">

                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>

                        </span>

                      </div>

                    </div>
                  )}

                  {video.videoId && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#3B2940]/20 transition group-hover:bg-[#3B2940]/40">

                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C6A15B] text-white shadow-lg transition duration-300 group-hover:scale-110">

                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>

                      </span>

                    </div>
                  )}

                </div>

                {/* Video Content */}
                <div className="p-6">

                  <span className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.1em] text-[#C6A15B]">
                    Video {video.no}
                  </span>

                  <h3 className="mt-3 font-['Playfair_Display'] text-[23px] font-bold text-[#3B2940]">
                    {video.title}
                  </h3>

                  <p className="mt-3 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                    {video.description}
                  </p>

                  <Link
                    to="/videos"
                    className="mt-5 inline-flex items-center gap-2 font-['Manrope'] text-sm font-bold text-[#C6A15B] transition hover:text-[#B08B48]"
                  >
                    Watch Video
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                </div>

              </div>

            ))}

          </div>

          {/* View All */}
          {/* <div className="mt-10 text-center">

            <Link
              to="/videos"
              className="inline-flex items-center justify-center rounded-full bg-[#3B2940] px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#2F2035]"
            >
              View All Videos →
            </Link>

          </div> */}

        </div>
      </section>

      {/* =========================================================
          PATIENT-CENTRIC CARE
      ========================================================= */}
      {/* <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              A Patient-Centric Approach
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              Personalised care throughout your fertility journey
            </h2>

            <p className="mt-6 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              Conceive IVF describes its approach as patient-centric, with
              personalised treatment plans and support designed around each
              individual&apos;s fertility needs.
            </p>

            <div className="mt-8 space-y-4">

              {patientValues.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C6A15B] text-sm font-bold text-white">
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
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85"
              alt="Patient care at fertility centre"
              className="h-[350px] w-full object-cover sm:h-[500px]"
            />

          </div>

        </div>
      </section> */}

      {/* =========================================================
          TREATMENTS
      ========================================================= */}
      <section className="bg-[#3B2940] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/70">
              Fertility Treatments
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-white sm:text-[40px]">
              Advanced treatment options under one roof
            </h2>

            <p className="mt-5 font-['Manrope'] text-base leading-7 text-white/75">
              Conceive IVF provides a range of fertility services designed to
              address different reproductive needs.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {treatmentServices.map((item) => (

              <Link
                key={item.title}
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
      </section>

      {/* =========================================================
          CARE JOURNEY
      ========================================================= */}
      {/* <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85"
              alt="Fertility specialist consultation"
              className="h-[350px] w-full object-cover sm:h-[480px]"
            />

          </div>

          <div>

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
              Your Fertility Journey
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[40px]">
              From consultation to personalised treatment
            </h2>

            <p className="mt-6 font-['Manrope'] text-base leading-7 text-[#5F5660]">
              Fertility treatment begins with understanding your individual
              medical and reproductive history. The fertility team can then
              discuss appropriate investigations and treatment options.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {journeySteps.map((item, index) => (

                <div
                  key={item.title}
                  className="rounded-2xl bg-[#F8F4EE] p-5"
                >

                  <div className="flex items-center gap-3">

                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F8F4EE] font-['Manrope'] text-xs font-bold text-[#C6A15B]">
                      0{index + 1}
                    </span>

                    <h3 className="font-['Manrope'] text-base font-bold text-[#3B2940]">
                      {item.title}
                    </h3>

                  </div>

                  <p className="mt-3 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section> */}

      {/* =========================================================
          REVIEW MESSAGE
      ========================================================= */}
      {/* <section className="bg-[#F8F4EE] px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-5xl">

          <div className="rounded-[32px] bg-white p-8 text-center shadow-sm sm:p-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F4EE]">

              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C6A15B"
                strokeWidth="1.8"
              >
                <path d="M7 8h10M7 12h7M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5l-3 3v-3H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
              </svg>

            </div>

            <p className="mt-7 font-['Playfair_Display'] text-[25px] font-bold leading-tight text-[#3B2940] sm:text-[34px]">
              Creating Little Miracles, One Family at a Time
            </p>

            <p className="mx-auto mt-5 max-w-2xl font-['Manrope'] text-base leading-7 text-[#5F5660]">
              Conceive IVF&apos;s patient-first approach focuses on combining
              fertility expertise, advanced treatment options and compassionate
              support throughout the journey to parenthood.
            </p>

            <div className="mt-7 flex justify-center">

              <div className="flex items-center gap-1">

                {[1, 2, 3, 4, 5].map((star) => (

                  <svg
                    key={star}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#C6A15B"
                  >
                    <path d="M12 2.5l2.94 5.95 6.56.95-4.75 4.63 1.12 6.54L12 17.48 6.13 20.57l1.12-6.54L2.5 9.4l6.56-.95L12 2.5Z" />
                  </svg>

                ))}

              </div>

            </div>

            <p className="mt-4 font-['Manrope'] text-xs text-[#5F5660]">
              Patient-centred fertility care
            </p>

          </div>

        </div>
      </section> */}

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-10">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#3B2940] px-6 py-14 text-center sm:px-12">

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/5" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#C6A15B]/20" />

          <div className="relative mx-auto max-w-3xl">

            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.1em] text-white/70">
              Begin Your Fertility Journey
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-white sm:text-[42px]">
              Your journey deserves personalised care
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-['Manrope'] text-base leading-7 text-white/75">
              Speak with the Conceive IVF team about your fertility concerns,
              treatment options and the support available throughout your
              journey.
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

              {/* <Link
                to="/videos"
                className="inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#3B2940]"
              >
                Watch Patient Videos
              </Link> */}

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}