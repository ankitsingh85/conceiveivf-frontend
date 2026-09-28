import { useState, type FormEvent } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#3B2940] to-[#2F2035] shadow-2xl shadow-[#3B2940]/20 lg:grid lg:grid-cols-5">

          {/* LEFT CONTENT */}
          <div className="p-10 text-white lg:col-span-2 lg:p-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#E0C98A]">
              Get in Touch
            </span>

            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Start your journey today
            </h2>

            <p className="mt-4 text-[#F8F4EE]/90">
              Book a free consultation with our fertility specialists.
              We're here to listen, guide and support you.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex gap-4">
                <span className="text-xl">📍</span>
                <span>
                  Conceive IVF Fertility Centre,
                  <br />
                  Opp Town Park, Dabwali Road Sirsa
                </span>
              </li>

              <li className="flex gap-4">
                <span className="text-xl">📞</span>
                <a
                  href="tel:+919255278000"
                  className="transition hover:text-[#E0C98A] hover:underline"
                >
                  +91 9255278000
                </a>
              </li>

              <li className="flex gap-4">
                <span className="text-xl">✉️</span>
                <a
                  href="mailto:conceiveivfsirsa@gmail.com"
                  className="transition hover:text-[#E0C98A] hover:underline"
                >
                  conceiveivfsirsa@gmail.com
                </a>
              </li>

              <li className="flex gap-4">
                <span className="text-xl">🕘</span>
                <span>
                  Mon – Sun: 10:00 AM – 6:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-10 lg:col-span-3 lg:p-14">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F4EE] text-4xl">
                  🎉
                </span>

                <h3 className="mt-6 font-display text-2xl font-bold text-[#3B2940]">
                  Thank you!
                </h3>

                <p className="mt-2 text-[#5F5660]">
                  Our care coordinator will call you within 24 hours to
                  schedule your consultation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="grid gap-5 sm:grid-cols-2"
              >
                {/* FULL NAME */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#3B2940]">
                    Full Name
                  </label>

                  <input
                    required
                    className="w-full rounded-xl border border-[#E8DFD2] px-4 py-3 outline-none transition focus:border-[#C6A15B] focus:ring-2 focus:ring-[#E0C98A]/40"
                    placeholder="Your name"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#3B2940]">
                    Phone
                  </label>

                  <input
                    required
                    type="tel"
                    className="w-full rounded-xl border border-[#E8DFD2] px-4 py-3 outline-none transition focus:border-[#C6A15B] focus:ring-2 focus:ring-[#E0C98A]/40"
                    placeholder="+91"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#3B2940]">
                    Email
                  </label>

                  <input
                    type="email"
                    className="w-full rounded-xl border border-[#E8DFD2] px-4 py-3 outline-none transition focus:border-[#C6A15B] focus:ring-2 focus:ring-[#E0C98A]/40"
                    placeholder="you@example.com"
                  />
                </div>

                {/* TREATMENT */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#3B2940]">
                    Treatment Interested In
                  </label>

                  <select
                    className="w-full rounded-xl border border-[#E8DFD2] bg-white px-4 py-3 outline-none transition focus:border-[#C6A15B] focus:ring-2 focus:ring-[#E0C98A]/40"
                  >
                    <option>Not sure yet</option>
                    <option>IVF</option>
                    <option>ICSI</option>
                    <option>IUI</option>
                    <option>Egg Freezing</option>
                    <option>Fertility Evaluation</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-[#3B2940]">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-[#E8DFD2] px-4 py-3 outline-none transition focus:border-[#C6A15B] focus:ring-2 focus:ring-[#E0C98A]/40"
                    placeholder="Tell us a little about your journey..."
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="rounded-full bg-[#C6A15B] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#C6A15B]/20 transition hover:bg-[#B08B48] sm:col-span-2 sm:justify-self-start"
                >
                  Request Free Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}