import type { FormEvent } from "react";
import { useSiteContent } from "../hooks/useSiteContent";
import { useLeadForm } from "../hooks/useLeadForm";
import { withLineBreaks } from "../utils/text";
import { HOME_CONTACT_KEY, homeContactDefaults, type HomeContactContent } from "../content/homeSections";

export default function Contact() {
  const content = useSiteContent(HOME_CONTACT_KEY, homeContactDefaults);
  return <ContactView content={content} />;
}

// Pure markup — also used by the admin live preview. `content` is null while loading.
// In `preview` mode the form doesn't create a lead.
export function ContactView({ content, preview = false }: { content: HomeContactContent | null; preview?: boolean }) {
  const form = useLeadForm(
    "home-contact",
    { name: "", phone: "", email: "", treatment: "", message: "" },
    preview
  );

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // The select shows its first option until the visitor picks one
    form.submit({ ...form.values, treatment: form.values.treatment || content?.treatments[0] || "" });
  };

  if (!content) return <section id="contact" className="py-14" style={{ minHeight: 640 }} />;

  const tel = content.phone.replace(/[^\d+]/g, "");

  return (
    <section id="contact" className="py-14">
      <div className="mx-auto max-w-7xl px-6 animate-fade-in">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#3B2940] to-[#2F2035] shadow-2xl shadow-[#3B2940]/20 lg:grid lg:grid-cols-5">

          {/* LEFT CONTENT */}
          <div className="p-10 text-white lg:col-span-2 lg:p-14">
            {content.label && (
              <span className="text-sm font-semibold uppercase tracking-widest text-[#E0C98A]">
                {content.label}
              </span>
            )}

            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              {content.heading}
            </h2>

            {content.description && (
              <p className="mt-4 text-[#F8F4EE]/90">
                {content.description}
              </p>
            )}

            <ul className="mt-10 space-y-5 text-sm">
              {content.address && (
                <li className="flex gap-4">
                  <span className="text-xl">📍</span>
                  <span>
                    {withLineBreaks(content.address)}
                  </span>
                </li>
              )}

              {content.phone && (
                <li className="flex gap-4">
                  <span className="text-xl">📞</span>
                  <a
                    href={`tel:${tel}`}
                    className="transition hover:text-[#E0C98A] hover:underline"
                  >
                    {content.phone}
                  </a>
                </li>
              )}

              {content.email && (
                <li className="flex gap-4">
                  <span className="text-xl">✉️</span>
                  <a
                    href={`mailto:${content.email}`}
                    className="transition hover:text-[#E0C98A] hover:underline"
                  >
                    {content.email}
                  </a>
                </li>
              )}

              {content.hours && (
                <li className="flex gap-4">
                  <span className="text-xl">🕘</span>
                  <span>
                    {content.hours}
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-10 lg:col-span-3 lg:p-14">
            {form.status === "sent" ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F4EE] text-4xl">
                  🎉
                </span>

                <h3 className="mt-6 font-display text-2xl font-bold text-[#3B2940]">
                  {content.successTitle}
                </h3>

                {content.successText && (
                  <p className="mt-2 text-[#5F5660]">
                    {content.successText}
                  </p>
                )}
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="relative grid gap-5 sm:grid-cols-2"
              >
                {form.honeypot}

                {/* FULL NAME */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#3B2940]">
                    Full Name
                  </label>

                  <input
                    required
                    minLength={2}
                    maxLength={80}
                    value={form.values.name}
                    onChange={(e) => form.set("name", e.target.value)}
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
                    pattern="+?[0-9s-]{10,20}"
                    title="Please enter a valid phone number"
                    value={form.values.phone}
                    onChange={(e) => form.set("phone", e.target.value)}
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
                    maxLength={120}
                    value={form.values.email}
                    onChange={(e) => form.set("email", e.target.value)}
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
                    value={form.values.treatment || content.treatments[0]}
                    onChange={(e) => form.set("treatment", e.target.value)}
                    className="w-full rounded-xl border border-[#E8DFD2] bg-white px-4 py-3 outline-none transition focus:border-[#C6A15B] focus:ring-2 focus:ring-[#E0C98A]/40"
                  >
                    {content.treatments.map((treatment) => (
                      <option key={treatment}>{treatment}</option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-[#3B2940]">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    maxLength={2000}
                    value={form.values.message}
                    onChange={(e) => form.set("message", e.target.value)}
                    className="w-full rounded-xl border border-[#E8DFD2] px-4 py-3 outline-none transition focus:border-[#C6A15B] focus:ring-2 focus:ring-[#E0C98A]/40"
                    placeholder="Tell us a little about your journey..."
                  />
                </div>

                {/* BUTTON */}
                {form.error && (
                  <p role="alert" className="text-sm text-red-700 sm:col-span-2">
                    {form.error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={form.status === "sending"}
                  className="rounded-full bg-[#C6A15B] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#C6A15B]/20 transition hover:bg-[#B08B48] disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
                >
                  {form.status === "sending" ? "Sending..." : content.submitText}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
