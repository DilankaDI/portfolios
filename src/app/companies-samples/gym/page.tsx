import { Archivo, Space_Mono } from "next/font/google";
import Image from "next/image";

const display = Archivo({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-display",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const schedule = [
  { time: "06:00", session: "Strength", spots: "04" },
  { time: "07:00", session: "Conditioning", spots: "02" },
  { time: "12:00", session: "Open floor", spots: "OPEN" },
  { time: "17:30", session: "Strength", spots: "06" },
  { time: "18:30", session: "Conditioning", spots: "03" },
  { time: "19:30", session: "Mobility", spots: "OPEN" },
];

const stats = [
  { number: "230", label: "members training weekly" },
  { number: "12", label: "coached sessions daily" },
  { number: "06", label: "years in Rajagiriya" },
];

const programs = [
  {
    number: "01",
    title: "Strength",
    description:
      "Progressive training built around movement quality, strength and measurable performance.",
  },
  {
    number: "02",
    title: "Conditioning",
    description:
      "Engine-building sessions designed to make you stronger when fatigue starts to matter.",
  },
  {
    number: "03",
    title: "Mobility",
    description:
      "Move better, recover better and build the range of motion your training demands.",
  },
];

export const metadata = {
  title: {
    absolute: "Iron Yard | Gym",
  },
  description: "A modern fitness center in Rajagiriya.",
};

export default function GymPage() {
  return (
    <main
      className={`${display.variable} ${mono.variable} min-h-screen overflow-hidden`}
      style={{
        backgroundColor: "#0B0B0A",
        color: "#E9E6DE",
        fontFamily: "var(--font-mono)",
      }}
    >
      {/* Global styles */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: #E4B93D;
          color: #0B0B0A;
        }

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes imageReveal {
          from {
            opacity: 0;
            transform: scale(1.06);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes lineGrow {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        .hero-reveal {
          animation: heroReveal 900ms cubic-bezier(.16,1,.3,1) both;
        }

        .hero-reveal-delay {
          animation: heroReveal 900ms 180ms cubic-bezier(.16,1,.3,1) both;
        }

        .hero-image {
          animation: imageReveal 1200ms 100ms cubic-bezier(.16,1,.3,1) both;
        }

        .line-grow {
          animation: lineGrow 1000ms 500ms cubic-bezier(.16,1,.3,1) both;
        }

        .image-hover {
          transition:
            transform 900ms cubic-bezier(.16,1,.3,1),
            filter 500ms ease;
        }

        .image-wrap:hover .image-hover {
          transform: scale(1.045);
          filter: saturate(1.08);
        }

        .program-row {
          transition:
            padding 400ms cubic-bezier(.16,1,.3,1),
            background-color 400ms ease;
        }

        .program-row:hover {
          padding-left: 28px;
          padding-right: 28px;
          background-color: #121210;
        }

        .schedule-row {
          transition:
            background-color 250ms ease,
            padding 250ms ease;
        }

        .schedule-row:hover {
          background-color: #121210;
        }

        @media (max-width: 768px) {
          .program-row:hover {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>

      {/* ───────────────── NAV ───────────────── */}
      <header className="relative z-50 border-b border-[#292925]">
        <div className="mx-auto flex max-w-350 items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="#"
            className="flex items-center gap-3"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
            }}
          >
            <span className="flex h-8 w-8 items-center justify-center bg-[#E4B93D] text-[11px] text-[#0B0B0A]">
              IY
            </span>

            <span className="text-sm tracking-[0.12em]">
              IRON YARD
            </span>
          </a>

          <nav
            className="hidden items-center gap-9 text-[10px] uppercase tracking-[0.18em] md:flex"
            style={{ color: "#817E77" }}
          >
            <a href="#training" className="transition-colors hover:text-[#E4B93D]">
              Training
            </a>
            <a href="#schedule" className="transition-colors hover:text-[#E4B93D]">
              Schedule
            </a>
            <a href="#numbers" className="transition-colors hover:text-[#E4B93D]">
              Numbers
            </a>
            <a href="#join" className="transition-colors hover:text-[#E4B93D]">
              Visit
            </a>
          </nav>

          <a
            href="#join"
            className="bg-[#E4B93D] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0B0B0A] transition-transform hover:-translate-y-0.5 sm:px-5"
          >
            Book a trial
          </a>
        </div>
      </header>

      {/* ───────────────── HERO ───────────────── */}
      <section className="relative mx-auto max-w-350 px-5 pb-16 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pb-24 lg:pt-16">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.92fr]">
          {/* Left */}
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-[#77746D] hero-reveal">
              <span className="h-px w-10 bg-[#E4B93D]" />
              Rajagiriya / Colombo
            </div>

            <h1
              className="hero-reveal text-[18vw] font-black uppercase leading-[0.76] tracking-[-0.075em] sm:text-[15vw] lg:text-[11.5rem]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
              }}
            >
              <span className="block">Train</span>

              <span
                className="ml-[8vw] block text-[#E4B93D] lg:ml-28"
              >
                Hard.
              </span>

              <span className="block">Move.</span>

              <span className="ml-[14vw] block lg:ml-48">
                Better.
              </span>
            </h1>

            <div className="mt-10 flex max-w-xl items-start gap-5 hero-reveal-delay sm:ml-[8vw] lg:ml-28">
              <span className="mt-2 text-[10px] text-[#E4B93D]">01</span>

              <p className="max-w-sm text-xs leading-[1.9] text-[#8A8780]">
                A coached training floor for people who want more from
                their time under the bar. Small groups. Serious coaching.
                No spectators.
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="relative lg:pb-2">
            <div className="image-wrap relative h-110 overflow-hidden sm:h-140 lg:h-170">
              <Image
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85"
                alt="Athlete training inside a dark strength gym"
                className="hero-image image-hover h-full w-full object-cover"
                fill
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0A]/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#A8A49B]">
                    The floor
                  </p>
                  <p
                    className="text-xl uppercase"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                    }}
                  >
                    Built for work.
                  </p>
                </div>

                <span className="text-[9px] text-[#A8A49B]">
                  06°54&apos;N / 79°53&apos;E
                </span>
              </div>
            </div>

            {/* Side label */}
            <div className="absolute -right-3 top-16 hidden [writing-mode:vertical-rl] text-[9px] uppercase tracking-[0.25em] text-[#5F5C56] lg:block">
              Strength / Conditioning / Mobility
            </div>
          </div>
        </div>

        <div className="line-grow mt-12 h-px bg-[#292925]" />
      </section>

      {/* ───────────────── NUMBERS ───────────────── */}
      <section
        id="numbers"
        className="border-b border-[#292925]"
      >
        <div className="mx-auto grid max-w-350 grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-10 sm:px-8 lg:px-12 lg:py-14 ${
                index !== 0 ? "border-t border-[#292925] sm:border-l sm:border-t-0" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="text-[9px] text-[#5F5C56]">
                  0{index + 1}
                </span>

                <span
                  className="text-6xl tracking-[-0.06em] sm:text-5xl lg:text-7xl"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    color: "#E4B93D",
                  }}
                >
                  {stat.number}
                </span>
              </div>

              <p className="mt-8 max-w-42.5 text-[10px] uppercase leading-[1.7] tracking-[0.12em] text-[#77746D]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── TRAINING ───────────────── */}
      <section
        id="training"
        className="mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="grid gap-14 lg:grid-cols-[0.38fr_1fr]">
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.25em] text-[#E4B93D]">
              What we do
            </p>

            <h2
              className="max-w-xs text-4xl uppercase leading-[0.9] tracking-[-0.045em] sm:text-5xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
              }}
            >
              Training without the noise.
            </h2>
          </div>

          <div>
            {programs.map((program) => (
              <div
                key={program.number}
                className="program-row border-t border-[#292925] py-7 last:border-b"
              >
                <div className="grid gap-5 sm:grid-cols-[70px_0.7fr_1fr] sm:items-start">
                  <span className="text-[10px] text-[#E4B93D]">
                    {program.number}
                  </span>

                  <h3
                    className="text-3xl uppercase tracking-[-0.04em]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                    }}
                  >
                    {program.title}
                  </h3>

                  <p className="max-w-md text-xs leading-[1.8] text-[#77746D]">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── IMAGE STRIP ───────────────── */}
      <section className="border-y border-[#292925]">
        <div className="grid min-h-105 grid-cols-1 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="relative min-h-90 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85"
              alt="Strength training equipment"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              fill
            />

            <div className="absolute inset-0 bg-[#0B0B0A]/20" />

            <span className="absolute bottom-6 left-6 text-[9px] uppercase tracking-[0.2em] text-white/60">
              Equipment / 01
            </span>
          </div>

          <div className="relative flex min-h-90 flex-col justify-between bg-[#151513] p-7 sm:p-10 lg:p-14">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#5F5C56]">
              The Iron Yard philosophy
            </span>

            <div>
              <p
                className="max-w-2xl text-4xl uppercase leading-[0.92] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                }}
              >
                The goal isn&apos;t to look like you train.
                <span className="text-[#E4B93D]"> The goal is to train.</span>
              </p>
            </div>

            <div className="flex justify-between border-t border-[#292925] pt-5 text-[9px] uppercase tracking-[0.16em] text-[#66635D]">
              <span>Est. 2018</span>
              <span>Rajagiriya, Colombo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── SCHEDULE ───────────────── */}
      <section
        id="schedule"
        className="mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.25em] text-[#E4B93D]">
              Today / Monday
            </p>

            <h2
              className="text-5xl uppercase tracking-[-0.055em] sm:text-6xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
              }}
            >
              The floor.
            </h2>
          </div>

          <p className="max-w-xs text-[10px] leading-[1.8] text-[#6F6C65]">
            Classes are deliberately capped. Less crowd. More coaching.
            More attention to how you move.
          </p>
        </div>

        <div className="border-t border-[#292925]">
          {schedule.map((row, index) => (
            <div
              key={row.time}
              className="schedule-row grid grid-cols-[70px_1fr_auto] items-center border-b border-[#292925] px-0 py-5 sm:grid-cols-[100px_1fr_150px] sm:px-4"
            >
              <span
                className="text-sm"
                style={{ color: "#E4B93D" }}
              >
                {row.time}
              </span>

              <div>
                <span
                  className="text-lg uppercase tracking-[-0.02em] sm:text-xl"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                  }}
                >
                  {row.session}
                </span>

                {index === 0 && (
                  <span className="ml-3 hidden text-[8px] uppercase tracking-[0.15em] text-[#E4B93D] sm:inline">
                    Next
                  </span>
                )}
              </div>

              <span
                className={`text-right text-[9px] uppercase tracking-[0.15em] ${
                  row.spots === "OPEN"
                    ? "text-[#77746D]"
                    : "text-[#A7A39A]"
                }`}
              >
                {row.spots === "OPEN"
                  ? "Open"
                  : `${row.spots} spots`}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── JOIN ───────────────── */}
      <section
        id="join"
        className="relative border-t border-[#292925] bg-[#E4B93D] text-[#0B0B0A]"
      >
        <div className="mx-auto grid max-w-350 lg:grid-cols-[1fr_0.42fr]">
          <div className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <p className="mb-7 text-[9px] uppercase tracking-[0.25em] opacity-60">
              First session
            </p>

            <h2
              className="max-w-4xl text-[15vw] uppercase leading-[0.78] tracking-[-0.07em] sm:text-8xl lg:text-[9rem]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
              }}
            >
              Come
              <br />
              train.
            </h2>

            <p className="mt-10 max-w-md text-xs leading-[1.8] opacity-70">
              Your first session is on us. Come as you are.
              We&apos;ll take care of the rest.
            </p>
          </div>

          <div className="flex flex-col justify-between border-t border-[#B99830] p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-12">
            <div className="text-[9px] uppercase tracking-[0.18em] opacity-60">
              Start here
            </div>

            <div className="my-12">
              <a
                href="tel:+94117789900"
                className="block border-b border-[#0B0B0A]/30 pb-4 text-2xl tracking-[-0.03em] transition-opacity hover:opacity-60"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                }}
              >
                011 778 9900
              </a>

              <a
                href="https://wa.me/94117789900"
                className="mt-5 block border border-[#0B0B0A] px-5 py-4 text-center text-[10px] font-bold uppercase tracking-[0.16em] transition-all hover:bg-[#0B0B0A] hover:text-[#E4B93D]"
              >
                WhatsApp the gym
              </a>
            </div>

            <div className="border-t border-[#B99830] pt-5 text-[9px] leading-[1.8] opacity-60">
              123 Rajagiriya Road
              <br />
              Rajagiriya, Colombo
              <br />
              Sri Lanka
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── FOOTER ───────────────── */}
      <footer className="border-t border-[#292925]">
        <div className="mx-auto flex max-w-350 flex-col justify-between gap-5 px-5 py-7 text-[9px] uppercase tracking-[0.14em] text-[#5F5C56] sm:flex-row sm:px-8 lg:px-12">
          <span>
            © {new Date().getFullYear()} Iron Yard
          </span>

          <span>
            Sample page / Built for ProHub
          </span>

          <a
            href="#"
            className="transition-colors hover:text-[#E4B93D]"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}