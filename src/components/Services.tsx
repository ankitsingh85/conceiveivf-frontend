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
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        .about-font-display {
          font-family: "Playfair Display", Georgia, serif;
        }

        .about-font-body {
          font-family: "Manrope", Arial, sans-serif;
        }

        /* =========================================
           PURPLE + GOLD COLOR COMBINATION
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

        .about-body-text {
          color: #5F5660;
        }
      `}</style>

      <section
        id="about"
        className="py-14 about-font-body"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          {/* =========================================
              LEFT IMAGE
          ========================================= */}

          <div className="relative">

            <img
              src="https://images.pexels.com/photos/8442033/pexels-photo-8442033.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900"
              alt="Advanced fertility lab"
              className="
                rounded-[2rem]
                object-cover
                shadow-xl
              "
            />

            {/* Happy Family Image - Hidden */}

            {/*
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
            */}

            {/* Experience Badge - Hidden */}

            {/*
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
            */}

          </div>


          {/* =========================================
              RIGHT CONTENT
          ========================================= */}

          <div className="about-font-body">

            {/* SAME AS WHY US LABEL - HIDDEN */}

            {/*
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
            */}


            {/* =========================================
                HEADING
            ========================================= */}

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
              Welcome a little bundle of joy into your life!
            </h2>


            {/* =========================================
                BODY TEXT
            ========================================= */}

            <p
              className="
                mt-4
                text-base
                leading-relaxed
                text-[#5F5660]
              "
            >
              At Conceive IVF Fertility Centre, we’re dedicated to turning your
              dreams of parenthood into reality. Our success rates speak for
              themselves—your chances of taking home a baby after just one
              transfer are over 44.83% higher¹ than the average US IVF clinic.
              Whether you’re just starting to explore parenthood or have been
              facing challenges in conceiving, our compassionate fertility
              experts are here to guide and support you every step of the way.
            </p>


            {/* =========================================
                POINTS - HIDDEN
            ========================================= */}

            {/*
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">

              {points.map((p) => (

                <li
                  key={p}
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    font-normal
                    leading-relaxed
                    text-[#5F5660]
                  "
                >

                  <span
                    className="
                      about-cream-bg
                      about-gold
                      mt-0.5
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                    "
                  >

                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>

                  </span>

                  {p}

                </li>

              ))}

            </ul>
            */}


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
              Book Your Consultation
            </a>

          </div>

        </div>
      </section>
    </>
  );
}