"use client";

import type { Metadata } from "next";
import { Cormorant, Inter } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Season | Clothing Studio",
  description:
    "Season is a clothing studio in Colombo, Sri Lanka. Every piece is made to order and fitted once before it's finished, not after.",
};

const display = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const pieces = [
  {
    name: "Raw silk wrap dress",
    price: "4,500",
    image: "/samples/companies/season/wrap-dress.jpg",
  },
  {
    name: "Linen tailored trouser",
    price: "5,800",
    image: "/samples/companies/season/linen-trouser.jfif",
  },
  {
    name: "Cotton poplin shirt",
    price: "2,200",
    image: "/samples/companies/season/cotton-shirt.jfif",
  },
  {
    name: "Wool-blend overcoat",
    price: "8,900",
    image: "/samples/companies/season/wool-blend-overcoat.jfif",
  },
];

export default function BoutiquePage() {
  return (
    <div
      className={`${display.variable} ${body.variable}`}
      style={{
        backgroundColor: "#F3F1EC",
        color: "#161412",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
          }}
        >
          Season
        </motion.a>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden gap-8 text-sm md:flex"
          style={{ color: "#6B665D" }}
        >
          <a href="#collection" className="transition-colors hover:text-[#161412]">
            Collection
          </a>
          <a href="#fitting" className="transition-colors hover:text-[#161412]">
            Fittings
          </a>
          <a href="#visit" className="transition-colors hover:text-[#161412]">
            Visit
          </a>
        </motion.nav>

        <motion.a
          href="#visit"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          Book a fitting
        </motion.a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 md:pb-32">
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative aspect-4/5 w-full md:aspect-16/8"
          >
            <Image
              src="/samples/companies/season/hero.png"
              alt="Season clothing collection"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
            />

            <div className="absolute inset-0 bg-black/5" />
          </motion.div>

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 lg:p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white md:text-xs"
            >
              <span>Autumn / Winter 2026</span>
              <span>Colombo, Sri Lanka</span>
            </motion.div>

            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mb-4 text-xs uppercase tracking-[0.2em] text-white/80"
              >
                Made to order
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="max-w-3xl text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Clothes that don&apos;t ask to be noticed twice.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="mt-7 flex items-center gap-6"
              >
                <a
                  href="#collection"
                  className="border-b border-white pb-1 text-sm text-white transition-opacity hover:opacity-60"
                >
                  Explore the collection
                </a>

                <span className="text-xs text-white/60">
                  04 pieces
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em]"
          style={{ color: "#8A8479" }}
        >
          <span className="h-px w-10 bg-[#BDB5A8]" />
          Scroll to explore
        </motion.div>
      </section>

      {/* Collection */}
      <section
        id="collection"
        className="border-t px-6 py-24 md:px-10 md:py-32"
        style={{ borderColor: "#D8D1C2" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p
                className="mb-3 text-xs uppercase tracking-[0.2em]"
                style={{ color: "#8A8479" }}
              >
                The collection
              </p>

              <h2
                className="text-4xl md:text-5xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                This week&apos;s pieces
              </h2>
            </div>

            <span
              className="hidden text-xs md:block"
              style={{ color: "#8A8479" }}
            >
              01 - 04
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-4 md:gap-x-8">
            {pieces.map((piece, index) => (
              <motion.div
                key={piece.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
              >
                <div className="group relative mb-5 aspect-10/16 w-full overflow-hidden bg-[#D8CEC2]">
                  <Image
                    src={piece.image}
                    alt={piece.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />

                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/70 p-4 text-center text-xs text-white transition-transform duration-500 group-hover:translate-y-0">
                    View piece
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm leading-relaxed">{piece.name}</p>

                  <p
                    className="shrink-0 text-xs"
                    style={{ color: "#6B665D" }}
                  >
                    LKR {piece.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fittings */}
      <section
        id="fitting"
        className="border-t px-6 py-24 md:px-10 md:py-32"
        style={{ borderColor: "#D8D1C2" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <p
                className="text-xs uppercase tracking-[0.2em]"
                style={{ color: "#8A8479" }}
              >
                The Season approach
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <p
                className="text-4xl leading-[1.05] md:text-6xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Every piece is made to order and fitted once before it&apos;s
                finished, not after.
              </p>

              <div className="mt-12 grid gap-8 border-t pt-8 md:grid-cols-3" style={{ borderColor: "#D8D1C2" }}>
                <div>
                  <span className="mb-3 block text-xs" style={{ color: "#8A8479" }}>
                    01
                  </span>
                  <p className="text-sm">Made to order</p>
                </div>

                <div>
                  <span className="mb-3 block text-xs" style={{ color: "#8A8479" }}>
                    02
                  </span>
                  <p className="text-sm">Fitted before finished</p>
                </div>

                <div>
                  <span className="mb-3 block text-xs" style={{ color: "#8A8479" }}>
                    03
                  </span>
                  <p className="text-sm">Designed to last</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section
        id="visit"
        className="border-t px-6 py-24 md:px-10 md:py-32"
        style={{ borderColor: "#D8D1C2" }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p
              className="mb-3 text-xs uppercase tracking-[0.2em]"
              style={{ color: "#8A8479" }}
            >
              Showroom
            </p>

            <h3
              className="mb-8 text-4xl md:text-5xl"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Visit Season.
            </h3>

            <p className="text-sm leading-relaxed">
              9 Horton Place
              <br />
              Colombo 00700
              <br />
              <br />
              Mon to Sat, 10:00 to 18:00
              <br />
              By appointment
            </p>
          </div>

          <div className="flex flex-col justify-end">
            <p
              className="mb-3 text-xs uppercase tracking-[0.2em]"
              style={{ color: "#8A8479" }}
            >
              Book a fitting
            </p>

            <a
              href="mailto:studio@season.lk"
              className="w-fit text-2xl underline underline-offset-8 transition-opacity hover:opacity-60 md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              studio@season.lk
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t px-6 py-8 text-xs md:px-10"
        style={{
          borderColor: "#D8D1C2",
          color: "#8A8479",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span>© {new Date().getFullYear()} Season</span>
          <span>Sample page built for ProHub</span>
        </div>
      </footer>
    </div>
  );
}
