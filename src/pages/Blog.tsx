import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type Blog = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
};

const blogs: Blog[] = [
  { id: 1, category: "IVF", title: "Understanding the IVF Treatment Journey", excerpt: "A simple guide to the major stages of IVF, from fertility assessment and ovarian stimulation to embryo transfer.", date: "September 18, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85" },
  { id: 2, category: "Fertility", title: "When Should You See a Fertility Specialist?", excerpt: "Learn about common situations when a fertility consultation and personalised assessment may be helpful.", date: "September 12, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85" },
  { id: 3, category: "Egg Freezing", title: "Egg Freezing: What You Should Know", excerpt: "Explore the basic steps involved in egg freezing and the factors that may be considered before treatment.", date: "September 6, 2026", readTime: "7 min read", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=85" },
  { id: 4, category: "ICSI", title: "What Is ICSI and When Is It Used?", excerpt: "Understand how ICSI works and how this specialised fertilisation technique differs from conventional IVF fertilisation.", date: "August 29, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85" },
  { id: 5, category: "Embryology", title: "The Role of the Embryology Laboratory", excerpt: "Discover how the embryology team supports the laboratory stages of assisted reproductive treatment.", date: "August 21, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85" },
  { id: 6, category: "Male Fertility", title: "Understanding Male Fertility Assessment", excerpt: "Learn about semen analysis and other aspects that may be reviewed during a male fertility evaluation.", date: "August 15, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85" },
  { id: 7, category: "IUI", title: "A Simple Guide to IUI Treatment", excerpt: "Understand the basic process of intrauterine insemination and how it may form part of a fertility treatment plan.", date: "August 8, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1638202993928-7d113b8a1f4b?auto=format&fit=crop&w=1200&q=85" },
  { id: 8, category: "Fertility", title: "Questions to Ask at Your Fertility Consultation", excerpt: "Preparing questions before your consultation can help you understand your evaluation and treatment options.", date: "August 2, 2026", readTime: "4 min read", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=85" },
];

const categories = ["All", "Fertility", "IVF", "IUI", "ICSI", "Egg Freezing", "Embryology", "Male Fertility"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = useMemo(
    () =>
      activeCategory === "All"
        ? blogs
        : blogs.filter((blog) => blog.category === activeCategory),
    [activeCategory]
  );

  const featured = blogs[0];
  const secondary = blogs.slice(1, 4);

  return (
    <main className="bg-white text-[#3B2940]">
      <section className="relative overflow-hidden bg-[#3B2940]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=85" alt="Conceive IVF fertility care" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#3B2940]/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-[#C6A15B]/40 bg-white/5 px-4 py-2">
              <span className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.14em] text-[#E0C98A]">Conceive IVF Fertility Centre</span>
            </div>
            <h1 className="max-w-4xl font-['Playfair_Display'] text-[40px] font-bold leading-[1.1] text-white sm:text-5xl lg:text-[56px]">
              Knowledge for every
              <span className="block text-[#C6A15B]">step of your journey.</span>
            </h1>
            <p className="mt-7 max-w-2xl font-['Manrope'] text-sm leading-6 text-white/75 sm:text-base">Explore practical fertility guides, treatment explainers and educational resources from Conceive IVF.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button type="button" onClick={() => window.dispatchEvent(new Event("openAppointment"))} className="rounded-full bg-[#C6A15B] px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#B08B48]">Book Appointment</button>
              <a href="#latest-articles" className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#3B2940]">Browse Articles</a>
            </div>
          </div>
        </div>
      </section>
      <section id="latest-articles" className="bg-[#F8F4EE] px-5 py-14 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.16em] text-[#C6A15B]">Our Blog</p>
              <h2 className="mt-2 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[34px]">Latest Articles &amp; Insights</h2>
              <p className="mt-3 max-w-2xl font-['Manrope'] text-sm leading-6 text-[#5F5660]">Explore helpful fertility information, treatment guides and practical insights from Conceive IVF.</p>
            </div>
            <div className="hidden rounded-full border border-[#E8DFD2] bg-white px-5 py-2.5 font-['Manrope'] text-xs font-semibold text-[#5F5660] md:block">
              {filteredBlogs.length} Articles
            </div>
          </div>

          <div className="mb-10 overflow-x-auto">
            <div className="flex min-w-max gap-2.5">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-5 py-2.5 font-['Manrope'] text-sm font-semibold transition ${
                    activeCategory === category
                      ? "border-[#3B2940] bg-[#3B2940] text-white"
                      : "border-[#E8DFD2] bg-white text-[#5F5660] hover:border-[#C6A15B] hover:text-[#C6A15B]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
            <div className="space-y-6">
              {filteredBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.id}`}
                  className="group grid overflow-hidden rounded-[22px] border border-[#E8DFD2] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[270px_minmax(0,1fr)]"
                >
                  <div className="h-[235px] overflow-hidden sm:h-full sm:min-h-[245px]">
                    <img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#F8F4EE] px-3 py-1.5 font-['Manrope'] text-[10px] font-bold uppercase tracking-wider text-[#C6A15B]">{blog.category}</span>
                      <span className="font-['Manrope'] text-xs font-medium text-[#9A9098]">{blog.date}</span>
                    </div>
                    <h3 className="mt-4 font-['Playfair_Display'] text-[22px] font-bold leading-tight text-[#3B2940] transition group-hover:text-[#C6A15B] sm:text-[26px]">{blog.title}</h3>
                    <p className="mt-3 line-clamp-2 font-['Manrope'] text-sm leading-6 text-[#5F5660]">{blog.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-[#E8DFD2] pt-4">
                      <span className="font-['Manrope'] text-xs font-semibold text-[#9A9098]">{blog.readTime}</span>
                      <span className="font-['Manrope'] text-sm font-bold text-[#C6A15B]">Read More →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <aside className="h-fit space-y-6 lg:sticky lg:top-30">
              <div className="rounded-[22px] bg-[#3B2940] p-6">
                <p className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.14em] text-[#E0C98A]">Explore</p>
                <h3 className="mt-2 font-['Playfair_Display'] text-xl font-bold text-white">Find the right information</h3>
                <p className="mt-3 font-['Manrope'] text-sm leading-6 text-white/65">Browse our fertility topics and treatment resources.</p>
                <button type="button" onClick={() => window.dispatchEvent(new Event("openAppointment"))} className="mt-5 w-full rounded-full bg-[#C6A15B] px-5 py-3 font-['Manrope'] text-sm font-bold text-white transition hover:bg-[#B08B48]">Book Appointment</button>
              </div>

              <div className="rounded-[22px] border border-[#E8DFD2] bg-white p-6">
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#3B2940]">Categories</h3>
                <div className="mt-5 divide-y divide-[#E8DFD2]">
                  {categories.filter((category) => category !== "All").map((category) => {
                    const count = blogs.filter((blog) => blog.category === category).length;
                    return (
                      <button key={category} type="button" onClick={() => setActiveCategory(category)} className="flex w-full items-center justify-between py-3 text-left font-['Manrope'] text-sm font-semibold text-[#5F5660] transition hover:text-[#C6A15B]">
                        <span>{category}</span>
                        <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#F8F4EE] px-2 text-xs text-[#9A9098]">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[22px] border border-[#E8DFD2] bg-white p-6">
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#3B2940]">Popular Topics</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["IVF", "IUI", "ICSI", "Egg Freezing", "Male Fertility", "Embryology"].map((topic) => (
                    <button key={topic} type="button" onClick={() => setActiveCategory(categories.includes(topic) ? topic : "All")} className="rounded-full border border-[#E8DFD2] px-3.5 py-2 font-['Manrope'] text-xs font-semibold text-[#5F5660] transition hover:border-[#C6A15B] hover:text-[#C6A15B]">
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[28px] bg-[#3B2940] lg:grid-cols-[1fr_1.2fr]">
            <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]">
              <img src={blogs[0].image} alt={blogs[0].title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[#3B2940]/35" />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <span className="w-fit rounded-full bg-[#C6A15B] px-3 py-1.5 font-['Manrope'] text-[10px] font-bold uppercase tracking-wider text-white">Featured Article</span>
              <h2 className="mt-5 font-['Playfair_Display'] text-[28px] font-bold leading-tight text-white sm:text-[34px]">{blogs[0].title}</h2>
              <p className="mt-4 font-['Manrope'] text-sm leading-6 text-white/70 sm:text-base">{blogs[0].excerpt}</p>
              <Link to={`/blog/${blogs[0].id}`} className="mt-6 inline-flex w-fit rounded-full border border-[#C6A15B] px-6 py-3 font-['Manrope'] text-sm font-bold text-[#E0C98A] transition hover:bg-[#C6A15B] hover:text-white">Read Featured Article →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#3B2940] px-6 py-14 text-center sm:px-12">

          {/* CTA overlay shapes — same treatment as other pages */}
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
                to="/contact"
                className="inline-flex rounded-full border border-white/25 bg-white/5 px-8 py-4 font-['Manrope'] text-sm font-bold text-white transition hover:bg-white hover:text-[#3B2940]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>  );
}
