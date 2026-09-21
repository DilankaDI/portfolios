// import type { Metadata } from "next";
// import { Cormorant, Inter } from "next/font/google";
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Season | Clothing Studio",
//   description:
//     "Season is a clothing studio in Colombo, Sri Lanka. Every piece is made to order and fitted once before it's finished, not after.",
// };

// const display = Cormorant({
//   subsets: ["latin"],
//   weight: ["300", "400", "500"],
//   style: ["normal", "italic"],
//   variable: "--font-display",
// });

// const body = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-body",
// });

// const pieces = [
//   {
//     name: "Raw silk wrap dress",
//     price: "4,500",
//     image: "/samples/companies/season/wrap-dress.jpg",
//   },
//   {
//     name: "Linen tailored trouser",
//     price: "5,800",
//     image: "/samples/companies/season/linen-trouser.jfif",
//   },
//   {
//     name: "Cotton poplin shirt",
//     price: "2,200",
//     image: "/samples/companies/season/cotton-shirt.jfif",
//   },
//   {
//     name: "Wool-blend overcoat",
//     price: "8,900",
//     image: "/samples/companies/season/wool-blend-overcoat.jfif",
//   },
// ];

// export default function BoutiquePage() {
//   return (
//     <div
//       className={`${display.variable} ${body.variable}`}
//       style={{ backgroundColor: "#F3F1EC", color: "#161412", fontFamily: "var(--font-body)" }}
//     >
//       {/* Nav */}
//       <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 md:px-10">
//         <span className="text-2xl" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
//           Season
//         </span>
//         <nav className="hidden gap-8 text-sm md:flex" style={{ color: "#6B665D" }}>
//           <a href="#collection" className="hover:text-[#161412]">Collection</a>
//           <a href="#fitting" className="hover:text-[#161412]">Fittings</a>
//           <a href="#visit" className="hover:text-[#161412]">Visit</a>
//         </nav>
//         <a href="#visit" className="text-sm underline underline-offset-4">Book a fitting</a>
//       </header>

//       {/* Hero */}
//       <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-20 pt-6 md:grid-cols-12 md:px-10 md:pb-28">
//         <div className="md:col-span-7">
//           <div className="relative aspect-16/10 w-full overflow-hidden">
//             <Image
//                 src="/samples/companies/season/season-hero.jpg"
//                 alt="Season clothing collection"
//                 fill
//                 priority
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 58vw"
//             />
//             </div>
//         </div>
//         <div className="flex flex-col justify-end md:col-span-5">
//           <p className="mb-3 text-sm" style={{ color: "#6B665D" }}>Autumn collection, in store now</p>
//           <h1
//             className="text-4xl leading-tight md:text-5xl"
//             style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400 }}
//           >
//             Clothes that don&apos;t ask to be noticed twice.
//           </h1>
//         </div>
//       </section>

//       {/* Collection */}
//       <section id="collection" className="border-t px-6 py-20 md:px-10" style={{ borderColor: "#D8D1C2" }}>
//         <div className="mx-auto max-w-6xl">
//           <h2 className="mb-12 text-2xl" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
//             This week&apos;s pieces
//           </h2>
//           <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
//             {pieces.map((piece) => (
//               <div key={piece.name}>
//               <div className="relative aspect-10/16 w-full overflow-hidden">
//                 <Image
//                     src={piece.image}
//                     alt={piece.name}
//                     fill
//                     priority
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 58vw"
//                 />
//                 </div>
//                 <p className="text-sm">{piece.name}</p>
//                 <p className="text-sm" style={{ color: "#6B665D" }}>LKR {piece.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Fittings */}
//       <section id="fitting" className="border-t px-6 py-20 md:px-10" style={{ borderColor: "#D8D1C2" }}>
//         <div className="mx-auto max-w-3xl">
//           <p
//             className="text-2xl leading-snug md:text-3xl"
//             style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
//           >
//             Every piece is made to order and fitted once before it&apos;s finished, not after.
//           </p>
//         </div>
//       </section>

//       {/* Visit */}
//       <section id="visit" className="border-t px-6 py-20 md:px-10" style={{ borderColor: "#D8D1C2" }}>
//         <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
//           <div>
//             <h3 className="mb-3 text-sm" style={{ color: "#6B665D" }}>Showroom</h3>
//             <p className="text-sm leading-relaxed">
//               9 Horton Place
//               <br />
//               Colombo 00700
//               <br />
//               <br />
//               Mon to Sat, 10:00 to 18:00, by appointment
//             </p>
//           </div>
//           <div>
//             <h3 className="mb-3 text-sm" style={{ color: "#6B665D" }}>Book a fitting</h3>
//             <a href="mailto:studio@season.lk" className="text-sm underline underline-offset-4">
//               studio@season.lk
//             </a>
//           </div>
//         </div>
//       </section>

//       <footer className="border-t px-6 py-8 text-xs md:px-10" style={{ borderColor: "#D8D1C2", color: "#8A8479" }}>
//         © {new Date().getFullYear()} Season - Sample page built for ProHub
//       </footer>
//     </div>
//   );
// }

import type { Metadata } from "next";
import BoutiqueClient from "./BoutiqueClient";

export const metadata: Metadata = {
  title: "Season | Clothing Studio",
  description:
    "Season is a clothing studio in Colombo, Sri Lanka. Every piece is made to order and fitted once before it's finished, not after.",
};

export default function BoutiquePage() {
  return <BoutiqueClient />;
}