import type { Metadata } from "next";

const stats = [
  { label: "Founded", value: "2016" }, 
  { label: "Breeds", value: "Rottweiler · Labrador" },
  { label: "Partner Network", value: "2 Breeders" }, 
  { label: "Based In", value: "Moratuwa, Sri Lanka" },
];

const services = [
  {
    num: "01",
    title: "Breeding Partnerships",
    desc: "We connect verified dog owners and small breeders for Rottweiler and Labrador breeding partnerships — built on trust, not transactions.",
    tags: ["Rottweiler", "Labrador", "Matching"],
  },
  {
    num: "02",
    title: "Pedigree Verification",
    desc: "Every partnership is backed by documented lineage and pedigree records, so provenance is never in question.",
    tags: ["Pedigree", "Documentation", "Provenance"],
  },
  {
    num: "03",
    title: "Health & Standards",
    desc: "Health screening and breed standards are checked before any partnership is confirmed, protecting both dogs and owners.",
    tags: ["Health Checks", "Genetics", "Standards"],
  },
  {
    num: "04",
    title: "Ongoing Support",
    desc: "From first inquiry through whelping and beyond, our network stays involved — not just at the point of introduction.",
    tags: ["Support", "Community", "Guidance"],
  },
];

const focus = [
  "Rottweiler",
  "Labrador",
  "Health Tested",
  "Pedigree Verified",
  "Temperament Assessed",
  "Ethical Breeding",
  "Registered Lineage",
];

const principles = [
  {
    title: "Careful Matching",
    desc: "Partnerships are considered individually — breed line, health history, and temperament all factor into every match.",
  },
  {
    title: "Transparency First",
    desc: "Pedigree, health records, and breeding history are shared openly before any commitment is made.",
  },
  {
    title: "Health Above All",
    desc: "No partnership moves forward without the health and genetic screening our standards require.",
  },
  {
    title: "Long-Term Involvement",
    desc: "Our relationship with owners and breeders doesn't end at introduction — we stay part of the journey.",
  },
];

export const metadata: Metadata = {
  title: "Rottwell Kennels | Rottweiler & Labrador Breeding Network",
  description:
    "Rottwell Kennels connects verified dog owners and small breeders across Sri Lanka for trusted Rottweiler and Labrador breeding partnerships.",
};

export default function RottwellKennelsHome() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-amber-500 selection:text-neutral-950 scroll-smooth">
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-16">

        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rotate-45 rounded-md bg-linear-to-tr from-amber-600 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <span className="-rotate-45 font-serif font-bold text-neutral-950 text-lg">
                R
              </span>
            </div>

            <div>
              <span className="font-serif font-semibold text-lg tracking-tight block leading-none">
                Rottwell Kennels
              </span>

              <span className="text-[10px] text-neutral-500 font-mono tracking-wide uppercase">
                Est. 2016 · Moratuwa, Sri Lanka
              </span>
            </div>
          </div>

          <a

          
            href="https://wa.me/94000000000?text=Hi%20Rottwell%20Kennels%2C%20I%27d%20like%20to%20enquire%20about%20a%20breeding%20partnership." // placeholder number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium hover:bg-amber-500/20 transition"
          >
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            Enquire Now
          </a>
        </header>

        {/* Hero */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-amber-400 font-mono">
            Breeding Network
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Trusted breeding partnerships, built on pedigree and care.
          </h1>

          <p className="text-neutral-400 text-lg max-w-4xl leading-relaxed">
            Based in Moratuwa and working across Sri Lanka, Rottwell Kennels
            connects dog owners and small breeders for Rottweiler and
            Labrador breeding partnerships — grounded in health, standards,
            and verified lineage.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/submit-a-dog"
              className="px-6 py-3 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition"
            >
              Submit a Dog
            </a>

            <a

            
              href="/breeding-standards"
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition backdrop-blur-sm"
            >
              View Our Standards ↗
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
            <h2 className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold">
              What We Do
            </h2>

            <p className="font-serif text-xl font-bold text-white mt-1">
              Everything a breeding partnership needs, in one network.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-white/10 bg-white/2 space-y-3 hover:border-white/20 hover:bg-white/4 transition"
              >
                <div className="h-8 w-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-mono text-sm">
                  {service.num}
                </div>

                <h3 className="font-serif font-semibold text-white text-lg">
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

        {/* Breeding Focus */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold">
              Breeding Focus
            </h2>

            <p className="text-sm text-neutral-500 mt-1">
              Every partnership is evaluated against the same core standards.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {focus.map((item, index) => (
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
            <h2 className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold">
              How We Work
            </h2>

            <p className="font-serif text-xl font-bold text-white mt-1">
              A careful approach, from first enquiry to partnership.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index}>
                <h3 className="font-serif font-semibold text-white text-base">
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
              <p className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold">
                Next Step
              </p>

              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Have a dog or partnership in mind? Let&apos;s talk.
              </h3>

              <p className="text-neutral-400 text-sm mt-1">
                Reach out and we&apos;ll help find the right match.
              </p>
            </div>

            <a
              href="mailto:contact@rottwellkennels.com?subject=Breeding%20Inquiry" // placeholder email
              className="px-6 py-3 rounded-xl bg-amber-500 text-neutral-950 font-semibold text-sm hover:bg-amber-400 transition shadow-lg shadow-amber-500/20 whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 pt-6 border-t border-white/5 gap-4">
            <p>
              © 2026 Rottwell Kennels. Moratuwa, Sri Lanka.
            </p>

            <div className="flex gap-4">
              <a href="#" className="hover:text-neutral-300 transition"> {/* placeholder link */}
                Facebook
              </a>
              <a href="#" className="hover:text-neutral-300 transition"> {/* placeholder link */}
                Instagram
              </a>
              <a
                href="https://wa.me/94000000000" // placeholder number
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