import type { Metadata } from "next";

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Global Reach", value: "5+ Countries" },
  { label: "Experience", value: "5+ Years" },
  { label: "Based In", value: "Sri Lanka · Global" },
];

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Modern, fast, and scalable websites and web applications built for real-world performance, usability, and long-term growth.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Thoughtful digital interfaces that combine clean visual design, intuitive user experiences, and a strong focus on conversion.",
    tags: ["UI Design", "UX Strategy", "Prototyping"],
  },
  {
    num: "03",
    title: "E-Commerce Solutions",
    desc: "Premium online stores designed to showcase products, simplify purchasing, and create a seamless customer experience.",
    tags: ["E-Commerce", "Payments", "Product UX"],
  },
  {
    num: "04",
    title: "Digital Strategy",
    desc: "Practical digital direction that connects your brand, website, technology, and customer experience into one clear strategy.",
    tags: ["Strategy", "Digital Growth", "Brand Direction"],
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "PostgreSQL",
  "Supabase",
  "Vercel",
  "Docker",
];

const principles = [
  {
    title: "Everything Connected",
    desc: "Design, engineering, and strategy work together from day one instead of being treated as separate pieces.",
  },
  {
    title: "No Surprises",
    desc: "Clear communication, realistic timelines, and transparent progress throughout every project.",
  },
  {
    title: "Built Properly",
    desc: "We focus on performance, responsiveness, accessibility, and the details that matter before launch.",
  },
  {
    title: "Long-Term Thinking",
    desc: "Our relationship doesn't end at launch. We build with future improvements, maintenance, and growth in mind.",
  },
];

export const metadata: Metadata = {
  title: "AxoviaLabs | Digital Studio",
  description:
    "AxoviaLabs is a digital studio based in Sri Lanka, helping businesses worldwide design and build modern digital experiences.",
};

export default function AxoviaLabsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-indigo-500 selection:text-white scroll-smooth">
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-16">

        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-linear-to-tr from-indigo-600 to-violet-400 flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-indigo-500/20">
              A
            </div>

            <div>
              <span className="font-semibold text-lg tracking-tight block leading-none">
                AxoviaLabs
              </span>

              <span className="text-[10px] text-neutral-500 font-mono tracking-wide uppercase">
                Est. 2021 · Sri Lanka
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/94724817878?text=Hi%20AxoviaLabs%2C%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Start a Build
          </a>
        </header>

        {/* Hero */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-indigo-400 font-mono">
            Digital Studio
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Digital experiences built for ambitious businesses.
          </h1>

          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Based in Sri Lanka and working globally, AxoviaLabs combines
            strategy, design, and engineering to create modern digital
            experiences that help businesses move forward.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition"
            >
              Start a Project
            </a>

            <a
              href="https://www.axovialabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition backdrop-blur-sm"
            >
              View AxoviaLabs ↗
            </a>
          </div>
        </section>

        {/* Metrics */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-white/10 py-8">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                {stat.label}
              </p>

              <p className="text-base font-semibold text-neutral-200 mt-1">
                {stat.value}
              </p>
            </div>
          ))}
        </section>

        {/* Capabilities */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
              Capabilities
            </h2>

            <p className="text-xl font-bold text-white mt-1">
              Everything you need to build a stronger digital presence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-white/10 bg-white/2 space-y-3 hover:border-white/20 hover:bg-white/4 transition"
              >
                <div className="h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono text-sm">
                  {service.num}
                </div>

                <h3 className="font-semibold text-white text-lg">
                  {service.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
              Production Stack
            </h2>

            <p className="text-sm text-neutral-500 mt-1">
              Modern technologies selected for reliability, performance, and
              maintainability.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {stack.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/2 text-xs text-neutral-300 font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* How We Work */}
        <section className="border border-white/10 rounded-2xl p-8 bg-linear-to-b from-white/3 to-transparent space-y-6">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
              How We Work
            </h2>

            <p className="text-xl font-bold text-white mt-1">
              A straightforward approach from idea to launch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white text-base">
                  {principle.title}
                </h3>

                <p className="text-neutral-400 text-sm mt-1 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <footer id="contact" className="border-t border-white/10 pt-12 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
                Next Move
              </p>

              <h3 className="text-2xl font-bold text-white mt-1">
                Got a project in mind? Let’s talk.
              </h3>

              <p className="text-neutral-400 text-sm mt-1">
                Let’s discuss your idea and find the right way to build it.
              </p>
            </div>

            <a
              href="mailto:contact@axovialabs.com?subject=Project%20Inquiry"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 whitespace-nowrap"
            >
              Email Us
            </a>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 pt-6 border-t border-white/5 gap-4">
            <p>
              © 2026 AxoviaLabs. Sri Lanka · Serving Clients Globally.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/AxoviaLabs/61578624244200/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 transition"
              >
                Facebook
              </a>

              <a
                href="https://x.com/AxoviaLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 transition"
              >
                X
              </a>

              <a
                href="https://www.instagram.com/axovialabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 transition"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/94724817878"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}