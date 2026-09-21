// import { Instrument_Serif, Work_Sans } from "next/font/google";

// const display = Instrument_Serif({
//   subsets: ["latin"],
//   weight: ["400"],
//   style: ["normal", "italic"],
//   variable: "--font-display",
// });

// const body = Work_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   variable: "--font-body",
// });

// const menu = [
//   { name: "Charred aubergine, miso, chilli oil", price: "1,450" },
//   { name: "Smoked beetroot, whipped curd, dill", price: "1,200" },
//   { name: "Wood-fired flatbread, garlic butter", price: "950" },
//   { name: "Slow-roast lamb shoulder, cumin jus", price: "3,600" },
//   { name: "Grilled kingfish, coconut sambal", price: "2,900" },
//   { name: "Burnt honey parfait, sea salt", price: "1,100" },
// ];

// export default function RestaurantPage() {
//   return (
//     <div
//       className={`${display.variable} ${body.variable}`}
//       style={{ backgroundColor: "#1A1815", color: "#F1E9DC", fontFamily: "var(--font-body)" }}
//     >
//       {/* Nav */}
//       <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
//         <span className="text-xl" style={{ fontFamily: "var(--font-display)" }}>Ember &amp; Oak</span>
//         <nav className="hidden gap-8 text-sm md:flex" style={{ color: "#C7BBA5" }}>
//           <a href="#menu" className="hover:text-[#C1521F]">Menu</a>
//           <a href="#hours" className="hover:text-[#C1521F]">Hours</a>
//           <a href="#book" className="hover:text-[#C1521F]">Book</a>
//         </nav>
//         <a href="#book" className="border px-5 py-2 text-sm" style={{ borderColor: "#F1E9DC" }}>
//           Reserve a table
//         </a>
//       </header>

//       {/* Hero */}
//       <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
//         <p className="mb-4 text-sm" style={{ color: "#C1521F" }}>Open fire, Colombo 03</p>
//         <h1
//           className="max-w-6xl text-6xl text-center leading-[1.02] md:text-8xl"
//           style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
//         >
//           Everything touches the fire before it touches the plate.
//         </h1>
//         <p className="mt-8 max-w-6xl text-base text-center leading-relaxed" style={{ color: "#C7BBA5" }}>
//           A short, changing menu built around one wood-fired oven and
//           whatever came into the kitchen that morning.
//         </p>
//       </section>

//       {/* Menu, ticket style */}
//       <section id="menu" className="border-t px-6 py-20 md:px-10" style={{ borderColor: "#3A342C" }}>
//         <div className="mx-auto max-w-2xl">
//           <h2 className="mb-10 text-3xl" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
//             Tonight
//           </h2>
//           <ul className="divide-y" style={{ borderColor: "#3A342C" }}>
//             {menu.map((item) => (
//               <li key={item.name} className="flex items-baseline justify-between gap-4 py-4" style={{ borderColor: "#3A342C" }}>
//                 <span className="text-base">{item.name}</span>
//                 <span className="whitespace-nowrap text-sm" style={{ color: "#C1521F" }}>
//                   LKR {item.price}
//                 </span>
//               </li>
//             ))}
//           </ul>
//           <p className="mt-6 text-xs" style={{ color: "#7C7364" }}>
//             The kitchen changes three dishes most weeks depending on the market.
//           </p>
//         </div>
//       </section>

//       {/* Hours / location */}
//       <section id="hours" className="border-t px-6 py-20 md:px-10" style={{ borderColor: "#3A342C" }}>
//         <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
//           <div>
//             <h3 className="mb-3 text-sm" style={{ color: "#C1521F" }}>Service</h3>
//             <p className="text-sm leading-relaxed" style={{ color: "#C7BBA5" }}>
//               Dinner, Tue - Sun
//               <br />
//               18:00 until the fire dies down
//             </p>
//           </div>
//           <div>
//             <h3 className="mb-3 text-sm" style={{ color: "#C1521F" }}>Find us</h3>
//             <p className="text-sm leading-relaxed" style={{ color: "#C7BBA5" }}>
//               22 Dharmapala Mawatha
//               <br />
//               Colombo 00300
//             </p>
//           </div>
//           <div id="book">
//             <h3 className="mb-3 text-sm" style={{ color: "#C1521F" }}>Reserve</h3>
//             <p className="mb-4 text-sm leading-relaxed" style={{ color: "#C7BBA5" }}>
//               We hold a small number of walk-in seats at the counter each night.
//             </p>
//             <a href="tel:+94112223344" className="inline-block border px-5 py-2 text-sm" style={{ borderColor: "#F1E9DC" }}>
//               011 222 3344
//             </a>
//           </div>
//         </div>
//       </section>

//       <footer className="border-t px-6 py-8 text-xs md:px-10" style={{ borderColor: "#3A342C", color: "#7C7364" }}>
//         © {new Date().getFullYear()} Ember &amp; Oak - Sample page built for ProHub
//       </footer>
//     </div>
//   );
// }
import { Instrument_Serif, Work_Sans } from "next/font/google";
import Image from "next/image";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const menu = [
  {
    name: "Charred aubergine, miso, chilli oil",
    price: "1,450",
  },
  {
    name: "Smoked beetroot, whipped curd, dill",
    price: "1,200",
  },
  {
    name: "Wood-fired flatbread, garlic butter",
    price: "950",
  },
  {
    name: "Slow-roast lamb shoulder, cumin jus",
    price: "3,600",
  },
  {
    name: "Grilled kingfish, coconut sambal",
    price: "2,900",
  },
  {
    name: "Burnt honey parfait, sea salt",
    price: "1,100",
  },
];

const images = {
  hero:
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=90",

  food:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90",

  dish:
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=90",

  interior:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=90",
};

export const metadata = {
  title: {
    absolute: "Ember & Oak | Wood-Fired Dining in Colombo",
  },
  description:
    "Discover Ember & Oak, a wood-fired dining experience in Colombo 03. Seasonal ingredients, bold flavours, and unforgettable evenings.",
};

export default function RestaurantPage() {
  return (
    <main
      className={`${display.variable} ${body.variable} min-h-screen`}
      style={{
        backgroundColor: "#1A1815",
        color: "#F1E9DC",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* ================= NAVIGATION ================= */}

      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10">
          <a
            href="#top"
            className="text-2xl tracking-tight md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ember <span className="opacity-50">&amp;</span> Oak
          </a>

          <nav
            className="hidden items-center gap-9 text-sm md:flex"
            style={{ color: "#D2C5B2" }}
          >
            <a
              href="#menu"
              className="transition-colors hover:text-[#C1521F]"
            >
              Menu
            </a>

            <a
              href="#story"
              className="transition-colors hover:text-[#C1521F]"
            >
              Our Story
            </a>

            <a
              href="#hours"
              className="transition-colors hover:text-[#C1521F]"
            >
              Hours
            </a>
          </nav>

          <a
            href="#book"
            className="border px-4 py-2.5 text-xs uppercase tracking-[0.12em] transition-all duration-300 hover:bg-[#F1E9DC] hover:text-[#1A1815] md:px-6"
            style={{ borderColor: "#F1E9DC" }}
          >
            Reserve a table
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section
        id="top"
        className="relative flex min-h-195 items-end overflow-hidden md:min-h-212.5"
      >
        {/* Background image */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${images.hero}")`,
          }}
        />

        {/* Cinematic overlays */}

        <div className="absolute inset-0 bg-black/45" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(15,12,9,0.96) 0%, rgba(15,12,9,0.65) 42%, rgba(15,12,9,0.08) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, #1A1815 0%, transparent 35%)",
          }}
        />

        {/* Hero content */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-4">
              <span
                className="h-px w-12"
                style={{ backgroundColor: "#C1521F" }}
              />

              <p
                className="text-xs uppercase tracking-[0.25em]"
                style={{ color: "#D66A32" }}
              >
                Open fire, Colombo 03
              </p>
            </div>

            <h1
              className="text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
              }}
            >
              Everything touches
              <br />
              the fire before it
              <br />
              touches the plate.
            </h1>

            <p
              className="mt-9 max-w-md text-sm leading-7 md:text-base"
              style={{ color: "#D2C5B2" }}
            >
              A short, changing menu built around one wood-fired oven and
              whatever came into the kitchen that morning.
            </p>

            <a
              href="#menu"
              className="mt-9 inline-flex items-center gap-5 border-b pb-3 text-xs uppercase tracking-[0.2em] transition-colors hover:text-[#D66A32]"
              style={{ borderColor: "#C1521F" }}
            >
              Explore tonight&apos;s menu
              <span className="text-lg">↗</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] md:flex">
          <span style={{ color: "#B7A996" }}>Scroll to discover</span>
          <span style={{ color: "#C1521F" }}>↓</span>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}

      <section
        id="story"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36"
      >
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-24">
          <div>
            <p
              className="mb-6 text-xs uppercase tracking-[0.25em]"
              style={{ color: "#C1521F" }}
            >
              A little less, a lot better
            </p>

            <h2
              className="text-5xl leading-[1.05] md:text-7xl"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
              }}
            >
              Food with a
              <br />
              little soul.
            </h2>

            <p
              className="mt-8 max-w-md text-sm leading-7"
              style={{ color: "#C7BBA5" }}
            >
              We believe the best meals begin with good ingredients, a
              little patience, and a fire that has been burning all day.
              Our menu is guided by the seasons and inspired by the
              flavours of Sri Lanka.
            </p>

            <div
              className="mt-10 h-px w-20"
              style={{ backgroundColor: "#C1521F" }}
            />
          </div>

          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src={images.dish}
                alt="Beautifully plated gourmet dish"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div
              className="absolute -bottom-5 -left-5 hidden border px-5 py-4 md:block"
              style={{
                backgroundColor: "#1A1815",
                borderColor: "#3A342C",
              }}
            >
              <p
                className="text-xs uppercase tracking-[0.2em]"
                style={{ color: "#C7BBA5" }}
              >
                Made over fire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MENU ================= */}

      <section
        id="menu"
        className="border-t"
        style={{ borderColor: "#3A342C" }}
      >
        <div className="grid lg:grid-cols-2">
          {/* Food photography */}

          <div className="relative min-h-112.5 overflow-hidden lg:min-h-175">
            <Image
              src={images.food}
              alt="Freshly prepared restaurant dish"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-8 left-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                From our kitchen
              </p>
            </div>
          </div>

          {/* Menu list */}

          <div className="flex items-center px-6 py-20 md:px-16 md:py-28">
            <div className="w-full max-w-xl">
              <p
                className="mb-5 text-xs uppercase tracking-[0.25em]"
                style={{ color: "#C1521F" }}
              >
                Seasonal selection
              </p>

              <h2
                className="mb-12 text-6xl md:text-7xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                }}
              >
                Tonight
              </h2>

              <ul>
                {menu.map((item, index) => (
                  <li
                    key={item.name}
                    className="group flex items-baseline justify-between gap-4 border-b py-5"
                    style={{ borderColor: "#3A342C" }}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className="text-xs"
                        style={{ color: "#756B5D" }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm leading-6 transition-colors group-hover:text-[#D66A32] md:text-base">
                        {item.name}
                      </span>
                    </div>

                    <span
                      className="whitespace-nowrap text-xs"
                      style={{ color: "#C1521F" }}
                    >
                      LKR {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className="mt-7 text-xs italic leading-6"
                style={{
                  color: "#7C7364",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                }}
              >
                The kitchen changes three dishes most weeks depending on the
                market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESTAURANT ATMOSPHERE ================= */}

      <section className="relative overflow-hidden">
        <div className="relative h-137.5 md:h-175">
          <Image
            src={images.interior}
            alt="Warm and intimate restaurant interior"
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <p
                className="mb-6 text-xs uppercase tracking-[0.3em]"
                style={{ color: "#D66A32" }}
              >
                Stay a little longer
              </p>

              <h2
                className="max-w-3xl text-6xl leading-none md:text-8xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                }}
              >
                Good food.
                <br />
                Warm company.
              </h2>

              <p
                className="mx-auto mt-8 max-w-md text-sm leading-7"
                style={{ color: "#D2C5B2" }}
              >
                Come for dinner. Stay for the stories, the wine, and the
                last glow of the fire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOURS & LOCATION ================= */}

      <section
        id="hours"
        className="border-b px-6 py-20 md:px-10 md:py-28"
        style={{ borderColor: "#3A342C" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p
              className="mb-5 text-xs uppercase tracking-[0.25em]"
              style={{ color: "#C1521F" }}
            >
              Come find us
            </p>

            <h2
              className="text-5xl md:text-7xl"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
              }}
            >
              Your table awaits.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            <div>
              <p
                className="mb-5 text-xs uppercase tracking-[0.2em]"
                style={{ color: "#C1521F" }}
              >
                01 - Service
              </p>

              <p
                className="text-sm leading-7"
                style={{ color: "#C7BBA5" }}
              >
                Dinner, Tuesday - Sunday
                <br />
                18:00 until the fire dies down
              </p>
            </div>

            <div>
              <p
                className="mb-5 text-xs uppercase tracking-[0.2em]"
                style={{ color: "#C1521F" }}
              >
                02 - Find us
              </p>

              <p
                className="text-sm leading-7"
                style={{ color: "#C7BBA5" }}
              >
                22 Dharmapala Mawatha
                <br />
                Colombo 00300
                <br />
                Sri Lanka
              </p>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block border-b pb-1 text-xs uppercase tracking-[0.15em] transition-colors hover:text-[#D66A32]"
              >
                Get directions ↗
              </a>
            </div>

            <div id="book">
              <p
                className="mb-5 text-xs uppercase tracking-[0.2em]"
                style={{ color: "#C1521F" }}
              >
                03 - Reserve
              </p>

              <p
                className="mb-6 text-sm leading-7"
                style={{ color: "#C7BBA5" }}
              >
                We hold a small number of walk-in seats at the counter each
                night.
              </p>

              <a
                href="tel:+94112223344"
                className="inline-block border px-6 py-3 text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#F1E9DC] hover:text-[#1A1815]"
                style={{ borderColor: "#F1E9DC" }}
              >
                011 222 3344
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ember <span className="opacity-50">&amp;</span> Oak
            </p>

            <p
              className="mt-3 text-xs"
              style={{ color: "#7C7364" }}
            >
              Open fire. Honest food.
            </p>
          </div>

          <p className="text-xs" style={{ color: "#7C7364" }}>
            © {new Date().getFullYear()} Ember &amp; Oak - Sample page built
            for ProHub
          </p>
        </div>
      </footer>
    </main>
  );
}