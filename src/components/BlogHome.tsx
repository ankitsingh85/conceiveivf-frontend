import { Link } from "react-router-dom";

const blogs = [
  {
    id: "understanding-ivf-treatment-journey",
    category: "IVF",
    title: "Understanding the IVF Treatment Journey",
    excerpt:
      "A simple guide to the key stages of IVF, from the first consultation through embryo transfer.",
    date: "September 12, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "when-should-you-see-fertility-specialist",
    category: "Fertility",
    title: "When Should You See a Fertility Specialist?",
    excerpt:
      "Learn about common situations when speaking with a fertility specialist may help you understand your options.",
    date: "September 8, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "egg-freezing-what-you-should-know",
    category: "Egg Freezing",
    title: "Egg Freezing: What You Should Know",
    excerpt:
      "Understand the basics of egg freezing, the process involved and some important questions to discuss.",
    date: "September 4, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "egg-freezing-what-you-should-know",
    category: "Egg Freezing",
    title: "Egg Freezing: What You Should Know",
    excerpt:
      "Understand the basics of egg freezing, the process involved and some important questions to discuss.",
    date: "September 4, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Blog() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.12em] text-[#C6A15B]">
              From Our Blog
            </p>

            <h2 className="mt-2 font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#3B2940] sm:text-[38px] lg:text-[42px]">
              Fertility insights for your journey
            </h2>

            <p className="mt-4 max-w-xl font-['Manrope'] text-sm leading-7 text-[#5F5660] sm:text-base">
              Explore helpful information about fertility, IVF treatments,
              reproductive health and the latest treatment options.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex w-fit items-center rounded-full border border-[#C6A15B] px-6 py-3 font-['Manrope'] text-sm font-bold text-[#3B2940] transition duration-300 hover:bg-[#C6A15B] hover:text-white"
          >
            View All Blogs
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Blog Cards - 3 In One Row */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden rounded-[26px] border border-[#E8DFD2] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(59,41,64,0.10)]"
            >
              <Link to={`/blog/${blog.id}`} className="block">

                {/* Blog Image */}
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B2940]/65 via-transparent to-transparent" />

                  {/* Category */}
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-[#C6A15B] px-4 py-2 font-['Manrope'] text-xs font-bold text-white shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">

                  {/* Meta */}
                  <div className="mb-3 flex flex-wrap items-center gap-3 font-['Manrope'] text-xs text-[#7B707A]">
                    <span>{blog.date}</span>

                    <span className="h-1 w-1 rounded-full bg-[#C6A15B]" />

                    <span>{blog.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Playfair_Display'] text-[22px] font-bold leading-[1.25] text-[#3B2940] transition-colors duration-300 group-hover:text-[#C6A15B]">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 line-clamp-3 font-['Manrope'] text-sm leading-6 text-[#5F5660]">
                    {blog.excerpt}
                  </p>

                  {/* Read More */}
                  <span className="mt-5 inline-flex items-center font-['Manrope'] text-sm font-bold text-[#3B2940]">
                    Read Article
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
