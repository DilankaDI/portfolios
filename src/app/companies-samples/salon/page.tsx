import { Cormorant_Garamond, Inter } from "next/font/google";
import Image from "next/image";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const services = [
  {
    category: "Hair",
    items: [
      { name: "Cut & finish", duration: "45 min", price: "6,500" },
      { name: "Colour, full head", duration: "2 hr 30 min", price: "18,000" },
      { name: "Balayage", duration: "3 hr", price: "24,500" },
      { name: "Blow dry & style", duration: "30 min", price: "4,000" },
    ],
  },
  {
    category: "Skin",
    items: [
      { name: "Signature facial", duration: "1 hr", price: "9,500" },
      { name: "Microdermabrasion", duration: "45 min", price: "11,000" },
      { name: "Express glow", duration: "25 min", price: "5,500" },
    ],
  },
  {
    category: "Nails",
    items: [
      { name: "Manicure", duration: "40 min", price: "3,800" },
      { name: "Gel overlay", duration: "1 hr", price: "6,200" },
      { name: "Pedicure, spa", duration: "1 hr 10 min", price: "7,000" },
    ],
  },
];

const stylists = [
  {
    name: "Amali Fernando",
    role: "Colour Director",
    years: "14 yrs",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Ishara Perera",
    role: "Senior Stylist",
    years: "9 yrs",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Nadeesha Silva",
    role: "Skin Therapist",
    years: "7 yrs",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
  },
];

export default function SalonPage() {
  return (
    <main
      className={`${display.variable} ${body.variable} min-h-screen overflow-hidden`}
      style={{
        backgroundColor: "#EAE4D8",
        color: "#241C18",
        fontFamily: "var(--font-body)",
      }}
    >
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: #7A1F3D;
          color: #EAE4D8;
        }

        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes revealImage {
          from {
            opacity: 0;
            transform: scale(1.06);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .reveal {
          animation: revealUp 900ms cubic-bezier(.16,1,.3,1) both;
        }

        .reveal-delay {
          animation: revealUp 900ms 180ms cubic-bezier(.16,1,.3,1) both;
        }

        .image-reveal {
          animation: revealImage 1200ms 120ms cubic-bezier(.16,1,.3,1) both;
        }

        .editorial-image {
          transition:
            transform 1000ms cubic-bezier(.16,1,.3,1),
            filter 600ms ease;
        }

        .image-container:hover .editorial-image {
          transform: scale(1.04);
          filter: saturate(1.05);
        }

        .service-row {
          transition:
            padding 350ms cubic-bezier(.16,1,.3,1),
            background-color 350ms ease;
        }

        .service-row:hover {
          padding-left: 20px;
          padding-right: 20px;
          background-color: rgba(122,31,61,.045);
        }

        .stylist-image {
          transition: transform 800ms cubic-bezier(.16,1,.3,1);
        }

        .stylist-container:hover .stylist-image {
          transform: scale(1.035);
        }

        @media (max-width: 768px) {
          .service-row:hover {
            padding-left: 0;
            padding-right: 0;
          }
        }
      `}</style>

      {/* NAVIGATION */}
      <header className="border-b border-[#241C18]/20">
        <div className="mx-auto flex max-w-345 items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="#"
            className="text-xl italic tracking-[-0.04em]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
            }}
          >
            Wren & Willow
          </a>

          <nav className="hidden items-center gap-9 text-[10px] uppercase tracking-[0.18em] text-[#665B52] md:flex">
            <a
              href="#services"
              className="transition-colors hover:text-[#7A1F3D]"
            >
              Services
            </a>

            <a
              href="#studio"
              className="transition-colors hover:text-[#7A1F3D]"
            >
              Studio
            </a>

            <a
              href="#team"
              className="transition-colors hover:text-[#7A1F3D]"
            >
              Artists
            </a>

            <a
              href="#visit"
              className="transition-colors hover:text-[#7A1F3D]"
            >
              Visit
            </a>
          </nav>

          <a
            href="#book"
            className="border border-[#241C18] px-4 py-2.5 text-[10px] uppercase tracking-[0.14em] transition-colors hover:bg-[#241C18] hover:text-[#EAE4D8]"
          >
            Reserve
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-345 px-5 pb-20 pt-10 sm:px-8 lg:px-12 lg:pb-28 lg:pt-16">
        <div className="grid items-end gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Typography */}
          <div className="relative z-10">
            <p className="reveal mb-7 text-[10px] uppercase tracking-[0.22em] text-[#7A1F3D]">
              A neighbourhood salon / Colombo 07
            </p>

            <h1
              className="reveal max-w-2xl text-[18vw] leading-[0.77] tracking-[-0.065em] sm:text-[8.8rem] lg:text-[10.2rem]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
              }}
            >
              Beauty,
              <br />
              <span className="ml-[12vw] italic text-[#7A1F3D] lg:ml-28">
                unhurried.
              </span>
            </h1>

            <div className="reveal-delay mt-10 max-w-md lg:ml-28">
              <p className="text-sm leading-[1.9] text-[#665B52]">
                Hair, skin and nails in a quiet room where appointments
                have space to breathe. One client at a time, without
                the rush.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <a
                  href="#book"
                  className="bg-[#7A1F3D] px-6 py-3 text-[10px] uppercase tracking-[0.15em] text-[#EAE4D8] transition-opacity hover:opacity-90"
                >
                  Reserve your appointment
                </a>

                <a
                  href="#services"
                  className="text-[10px] uppercase tracking-[0.15em] underline underline-offset-4"
                >
                  Explore the menu
                </a>
              </div>
            </div>
          </div>

          {/* Hero photography */}
          <div className="image-container relative">
            <div className="relative aspect-[0.78] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
                alt="Elegant salon interior"
                className="editorial-image image-reveal h-full w-full object-cover"
                width={1400}
                height={1092}
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#241C18]/45 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 text-[#EAE4D8] sm:bottom-8 sm:left-8">
                <p className="text-[9px] uppercase tracking-[0.2em] opacity-70">
                  The studio
                </p>

                <p
                  className="mt-2 text-2xl italic"
                  style={{
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Barnes Place
                </p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-5 hidden w-44 border border-[#241C18] bg-[#EAE4D8] p-5 md:block">
              <p
                className="text-xl italic"
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                Open today
              </p>

              <p className="mt-2 text-[10px] leading-[1.7] text-[#665B52]">
                09:00 - 19:00
                <br />
                Last appointment 18:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        id="studio"
        className="border-y border-[#241C18]/20"
      >
        <div className="mx-auto grid max-w-345 lg:grid-cols-[0.32fr_0.68fr]">
          <div className="border-b border-[#241C18]/20 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#7A1F3D]">
              01 / The studio
            </p>
          </div>

          <div className="p-7 sm:p-10 lg:p-16">
            <p
              className="max-w-4xl text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              We believe the best beauty appointments are the ones that
              don&apos;t feel like appointments at all.
            </p>

            <div className="mt-10 grid max-w-3xl gap-8 text-xs leading-[1.9] text-[#665B52] sm:grid-cols-2">
              <p>
                Wren & Willow is a small independent salon in the heart
                of Colombo 07. We work slowly, listen carefully and
                leave enough room for the details.
              </p>

              <p>
                Eight appointments a day. A familiar team. Good
                conversation when you want it, quiet when you don&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-345 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.22em] text-[#7A1F3D]">
              02 / Services
            </p>

            <h2
              className="text-5xl italic tracking-[-0.045em] sm:text-6xl"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              The menu
            </h2>
          </div>

          <p className="max-w-xs text-[10px] leading-[1.8] text-[#766B61]">
            Every service includes a consultation before we begin.
            Prices shown in LKR.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {services.map((group, groupIndex) => (
            <div key={group.category}>
              <div className="mb-5 flex items-center justify-between border-b border-[#241C18]/30 pb-3">
                <h3
                  className="text-2xl italic"
                  style={{
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {group.category}
                </h3>

                <span className="text-[9px] text-[#8A7D71]">
                  0{groupIndex + 1}
                </span>
              </div>

              <ul>
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="service-row border-b border-[#241C18]/10 py-4"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs">
                        {item.name}
                      </span>

                      <span className="flex-1 border-b border-dotted border-[#A99D8F]" />

                      <span className="text-[10px] text-[#665B52]">
                        LKR {item.price}
                      </span>
                    </div>

                    <p className="mt-1 text-[9px] text-[#95887A]">
                      {item.duration}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section className="border-y border-[#241C18]/20">
        <div className="image-container relative h-[58vh] min-h-107.5 max-h-180 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=85"
            alt="Hair styling inside Wren and Willow"
            className="editorial-image h-full w-full object-cover"
            width={1400}
            height={1092}
          />

          <div className="absolute inset-0 bg-[#241C18]/30" />

          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-345 px-5 pb-7 sm:px-8 lg:px-12 lg:pb-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/70">
                  Slow beauty
                </p>

                <p
                  className="mt-2 max-w-2xl text-4xl italic leading-[0.95] text-white sm:text-6xl lg:text-7xl"
                  style={{
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Take your time.
                </p>
              </div>

              <span className="hidden text-[9px] uppercase tracking-[0.15em] text-white/60 sm:block">
                W&W / 02
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTISTS */}
      <section
        id="team"
        className="mx-auto max-w-345 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.22em] text-[#7A1F3D]">
              03 / Artists
            </p>

            <h2
              className="max-w-xs text-5xl italic leading-[0.9] tracking-[-0.045em] sm:text-6xl"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              People behind the chair.
            </h2>

            <p className="mt-7 max-w-xs text-xs leading-[1.9] text-[#665B52]">
              A small team with different specialties and the same
              approach: thoughtful work, never rushed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:gap-7">
            {stylists.map((person, index) => (
              <div
                key={person.name}
                className={`stylist-container ${
                  index === 0
                    ? "col-span-2 sm:col-span-1"
                    : ""
                }`}
              >
                <div className="relative aspect-[0.78] overflow-hidden bg-[#D8CFBE]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    className="stylist-image h-full w-full object-cover"
                    width={1400}
                    height={1092}
                  />

                  <span className="absolute left-4 top-4 text-[9px] text-white/70">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p
                      className="text-xl italic"
                      style={{
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {person.name}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-[#766B61]">
                      {person.role}
                    </p>
                  </div>

                  <span className="pt-1 text-[9px] text-[#9A8E81]">
                    {person.years}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-y border-[#241C18]/20 bg-[#241C18]">
        <div className="mx-auto max-w-345 px-5 py-20 text-[#EAE4D8] sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-[#BDAFA1]">
                04 / A client note
              </p>
            </div>

            <div>
              <p
                className="max-w-4xl text-4xl italic leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-7xl"
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                “The first salon where I&apos;ve never once checked the
                clock.”
              </p>

              <div className="mt-8 flex items-center gap-4 text-[9px] uppercase tracking-[0.15em] text-[#9E9183]">
                <span className="h-px w-8 bg-[#7A1F3D]" />
                Priyanka W. / Client since 2022
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT / BOOK */}
      <section
        id="visit"
        className="mx-auto max-w-345 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[0.65fr_0.35fr]">
          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.22em] text-[#7A1F3D]">
              05 / Visit
            </p>

            <h2
              className="max-w-3xl text-6xl italic leading-[0.83] tracking-[-0.055em] sm:text-8xl lg:text-[9rem]"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Come as you are.
            </h2>
          </div>

          <div
            id="book"
            className="flex flex-col justify-end border-t border-[#241C18]/30 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
          >
            <p className="text-[9px] uppercase tracking-[0.18em] text-[#7A1F3D]">
              Find the studio
            </p>

            <p className="mt-5 text-sm leading-[1.9] text-[#665B52]">
              14 Barnes Place
              <br />
              Colombo 00700, Sri Lanka
              <br />
              <br />
              Tuesday - Sunday
              <br />
              09:00 - 19:00
              <br />
              Closed Mondays
            </p>

            <div className="mt-8">
              <a
                href="https://wa.me/94112345678"
                className="block bg-[#7A1F3D] px-6 py-4 text-center text-[10px] uppercase tracking-[0.16em] text-[#EAE4D8] transition-opacity hover:opacity-90"
              >
                WhatsApp to reserve
              </a>

              <a
                href="tel:+94112345678"
                className="mt-3 block border border-[#241C18] px-6 py-4 text-center text-[10px] uppercase tracking-[0.16em] transition-colors hover:bg-[#241C18] hover:text-[#EAE4D8]"
              >
                011 234 5678
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#241C18]/20">
        <div className="mx-auto flex max-w-345 flex-col justify-between gap-5 px-5 py-7 text-[9px] uppercase tracking-[0.15em] text-[#8A7D71] sm:flex-row sm:px-8 lg:px-12">
          <span>
            © {new Date().getFullYear()} Wren & Willow
          </span>

          <span>
            Colombo 07 / Sri Lanka
          </span>

          <a
            href="#"
            className="transition-colors hover:text-[#7A1F3D]"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}