const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
];

const expertise = [
  {
    title: "Full-stack web development",
    detail:
      "End-to-end builds — frontend, backend, and the infrastructure between them.",
  },
  {
    title: "UI/UX design",
    detail: "Interfaces designed around how the product is actually used.",
  },
  {
    title: "Brand & digital strategy",
    detail: "Positioning, growth, and the decisions that sit behind the design.",
  },
];

const friendsCvs = [
  { name: "John Doe", role: "Product Designer", href: "/cv/john-doe" },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-28 pb-24 sm:px-10 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, var(--accent-2) 55%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl">
          <p className="font-display text-sm font-medium tracking-wide text-muted">
            Kalutara, Sri Lanka
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
            Dilshan Dilanka
          </h1>
          <p className="mt-4 text-lg text-muted">
            Full-stack developer · Founder, AxoviaLabs
          </p>
          <p className="mt-6 max-w-prose leading-relaxed text-foreground/90">
            I build digital products end to end and work closely with the
            businesses behind them. Over the past five years I&apos;ve shipped
            web and mobile products across travel, education, and e-commerce —
            from the first conversation through to launch and beyond.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href="mailto:dilanka@axovialabs.com"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 font-medium text-foreground transition hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/dilankaDI"
              target="_blank"
              rel="noreferrer"
              className="text-muted transition hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dilankad96/"
              target="_blank"
              rel="noreferrer"
              className="text-muted transition hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-t border-border px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-sm font-medium tracking-wide text-muted">
            Tools I work with
          </h2>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
            {stack.map((tool) => (
              <li
                key={tool}
                className="text-lg text-foreground/90 after:ml-4 after:text-border after:content-['/'] last:after:content-none"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What I do */}
      <section className="border-t border-border px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-sm font-medium tracking-wide text-muted">
            What I do
          </h2>
          <div className="mt-6 divide-y divide-border">
            {expertise.map((item) => (
              <div key={item.title} className="py-6 first:pt-0">
                <h3 className="font-display text-xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-prose leading-relaxed text-foreground/70">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Friends' CVs */}
      <section className="border-t border-border px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-sm font-medium tracking-wide text-muted">
            CVs hosted here
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-foreground/70">
            A few pages I host for friends, each hand-built at its own link.
          </p>
          <ul className="mt-6 divide-y divide-border">
            {friendsCvs.map((person) => (
              <li key={person.href}>
                <a
                  href={person.href}
                  className="flex items-center justify-between py-4 transition hover:text-accent"
                >
                  <span>
                    <span className="font-medium">{person.name}</span>
                    <span className="ml-3 text-sm text-muted">
                      {person.role}
                    </span>
                  </span>
                  <span aria-hidden className="text-muted">
                    {person.href}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-border px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Got something worth building?
          </h2>
          <p className="mt-4 max-w-prose text-foreground/70">
            I&apos;m usually reachable by email, or through AxoviaLabs directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="mailto:dilanka@axovialabs.com"
              className="text-accent transition hover:opacity-80"
            >
              dilanka@axovialabs.com
            </a>
            <a
              href="https://www.axovialabs.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted transition hover:text-foreground"
            >
              axovialabs.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted sm:px-10">
        © {new Date().getFullYear()} Dilshan Dilanka Perera
      </footer>
    </main>
  );
}
