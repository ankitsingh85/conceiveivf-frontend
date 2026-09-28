import doctorImage from "../images/doctor.webp";

const points = [
  "State-of-the-art embryology lab & facilities",
  "Personalised, evidence-based treatment plans",
  "Holistic emotional & physical support",
  "Transparent pricing with no hidden costs",
];

export default function About() {
  return (
    <>
      <style>{`
        .about-font-display {
          font-family: "Playfair Display", Georgia, serif;
        }

        .about-font-body {
          font-family: "Manrope", Arial, sans-serif;
        }

        /* =========================================
           PURPLE + GOLD COLOR SYSTEM
        ========================================= */

        .about-purple {
          color: #3B2940;
        }

        .about-purple-bg {
          background-color: #3B2940;
        }

        .about-purple-hover:hover {
          background-color: #2F2035;
        }

        .about-gold {
          color: #C6A15B;
        }

        .about-gold-bg {
          background-color: #C6A15B;
        }

        .about-gold-hover:hover {
          background-color: #B08B48;
        }

        .about-cream-bg {
          background-color: #F8F4EE;
        }

        .about-border {
          border-color: #E8DFD2;
        }

        .about-body-text {
          color: #5F5660;
        }
      `}</style>

      <section
        id="about"
        className="py-10 about-font-body"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          {/* =========================================
              LEFT IMAGE
          ========================================= */}

          <div className="relative">

            <img
              src={doctorImage}
              alt="Advanced fertility lab"
              className="
                w-full
                rounded-[2rem]
                object-cover
                shadow-xl
              "
            />

            {/* Small Family Image */}

            <img
              src="https://images.pexels.com/photos/3995921/pexels-photo-3995921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
              alt="Happy family"
              className="
                absolute
                -right-6
                -bottom-10
                hidden
                h-48
                w-48
                rounded-3xl
                border-8
                border-white
                object-cover
                shadow-xl
                md:block
              "
            />

            {/* Experience Badge */}

            <div
              className="
                absolute
                -top-6
                -left-6
                hidden
                rounded-2xl
                about-purple-bg
                px-6
                py-4
                text-white
                shadow-xl
                md:block
              "
            >
              <p className="about-font-display text-3xl font-bold">
                15+
              </p>

              <p className="text-xs opacity-80">
                Years of trusted care
              </p>
            </div>

          </div>


          {/* =========================================
              RIGHT CONTENT
          ========================================= */}

          <div className="about-font-body">

            {/* Section Label */}

            <span
              className="
                about-gold
                text-sm
                font-semibold
                uppercase
                tracking-widest
              "
            >
              About Us
            </span>


            {/* Heading */}

            <h2
              className="
                about-font-display
                mt-3
                text-3xl
                font-bold
                text-[#3B2940]
                sm:text-4xl
              "
            >
              Welcome to Conceive IVF Fertility Centre
            </h2>


            {/* Paragraph 1 */}

            <p
              className="
                mt-6
                text-base
                leading-relaxed
                text-[#5F5660]
              "
            >
              At{" "}

              <strong
                className="
                  font-bold
                  text-[#3B2940]
                "
              >
                Conceive IVF Fertility Centre
              </strong>

              , we bring over 15 years of expertise in helping couples on their
              journey to parenthood. We believe every journey is unique and
              deserves personalized care.
            </p>


            {/* Paragraph 2 */}

            <p
              className="
                mt-4
                text-base
                leading-relaxed
                text-[#5F5660]
              "
            >
              As a trusted leader in fertility treatments, we combine advanced
              medical technology with compassionate support to help you achieve
              your dream of having a family.
            </p>


            {/* Paragraph 3 */}

            <p
              className="
                mt-4
                text-base
                leading-relaxed
                text-[#5F5660]
              "
            >
              Our expert team specializes in cutting-edge solutions like IVF,
              ICSI, and IUI, tailored to your specific needs. With a
              state-of-the-art facility and a patient-first approach, we are
              dedicated to turning hope into happiness.
            </p>


            {/* Paragraph 4 */}

            <p
              className="
                mt-4
                text-base
                leading-relaxed
                text-[#5F5660]
              "
            >
              With over 15 years of experience, Conceive IVF is where care,
              expertise, and success come together—because your miracle starts
              here.
            </p>


            {/* =========================================
                BUTTON
            ========================================= */}

            <a
              href="#contact"
              className="
                about-gold-bg
                about-gold-hover
                mt-10
                inline-block
                rounded-full
                px-8
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-[#C6A15B]/20
                transition
              "
            >
              Talk to a Specialist
            </a>

          </div>

        </div>
      </section>
    </>
  );
}