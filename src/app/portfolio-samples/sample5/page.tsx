"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Clapperboard,
  Compass,
  Globe2,
  Menu,
  MoveDown,
  Play,
  Quote,
  Sparkles,
  X,
} from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Image from "next/image";


const projects = [
  {
    number: "01",
    location: "Sri Lanka",
    title: "Island of Endless Beauty",
    type: "Travel Film",
    image:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    location: "Nepal",
    title: "Chasing the Clouds",
    type: "Documentary",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    location: "Vietnam",
    title: "People & Culture",
    type: "Visual Story",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "04",
    location: "Maldives",
    title: "Below the Surface",
    type: "Underwater Film",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=85",
  },
];

const timeline = [
  {
    year: "2018",
    title: "The first frame",
    text: "Started documenting everyday journeys with a borrowed camera.",
  },
  {
    year: "2020",
    title: "First film",
    text: "Published my first travel film and discovered a new way to tell stories.",
  },
  {
    year: "2022",
    title: "Going freelance",
    text: "Turned a personal passion into a professional creative practice.",
  },
  {
    year: "2024",
    title: "Working with brands",
    text: "Created visual campaigns for travel, lifestyle and hospitality brands.",
  },
  {
    year: "2025",
    title: "Beyond borders",
    text: "Building a creative studio focused on stories worth remembering.",
  },
];

const skills = [
  {
    icon: Camera,
    title: "Photography",
    text: "People, places and fleeting moments.",
  },
  {
    icon: Clapperboard,
    title: "Filmmaking",
    text: "Cinematic films with emotional depth.",
  },
  {
    icon: Play,
    title: "Video Editing",
    text: "Turning raw footage into visual stories.",
  },
  {
    icon: Sparkles,
    title: "Color Grading",
    text: "Building atmosphere through color.",
  },
  {
    icon: Compass,
    title: "Creative Direction",
    text: "From first idea to final frame.",
  },
  {
    icon: Globe2,
    title: "Travel",
    text: "Always looking for the next story.",
  },
];

/* -------------------------------------------------------------------------- */
/* COMPONENTS                                                                 */
/* -------------------------------------------------------------------------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white/45">
      <span className="h-px w-8 bg-white/30" />
      {children}
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function Sample5Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080b0b] text-[#f5f3ec] selection:bg-[#d7a84d] selection:text-black">
      {/* ------------------------------------------------------------------ */}
      {/* PROGRESS BAR                                                       */}
      {/* ------------------------------------------------------------------ */}

      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-100 h-0.5 origin-left bg-[#d7a84d]"
      />

      {/* ------------------------------------------------------------------ */}
      {/* NAVIGATION                                                         */}
      {/* ------------------------------------------------------------------ */}

      <header className="fixed left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-375 items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="group relative z-60 flex items-center gap-2"
            aria-label="Go to home"
          >
            <span className="font-serif text-2xl italic tracking-[-0.08em]">
              DV
            </span>
            <span className="hidden text-[8px] uppercase tracking-[0.25em] text-white/50 sm:block">
              Visual Storyteller
            </span>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {[
              ["Home", "home"],
              ["About", "about"],
              ["Work", "work"],
              ["Journey", "journey"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="group relative text-[10px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
              >
                {label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#d7a84d] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Menu button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-60 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md transition hover:border-white/50 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X size={18} strokeWidth={1.5} />
            ) : (
              <Menu size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* MOBILE / FULLSCREEN MENU                                           */}
      {/* ------------------------------------------------------------------ */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#080b0b]/95 px-8 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-[-20%] top-[15%] h-87.5 w-87.5 rounded-full bg-[#b87532]/10 blur-[100px]" />
              <div className="absolute bottom-[-10%] right-[-10%] h-100 w-100 rounded-full bg-[#1e6872]/10 blur-[120px]" />
            </div>

            <nav className="relative flex w-full max-w-xl flex-col">
              {[
                ["01", "Home", "home"],
                ["02", "About", "about"],
                ["03", "Selected Work", "work"],
                ["04", "My Journey", "journey"],
                ["05", "Let's Talk", "contact"],
              ].map(([number, label, id], index) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  onClick={() => scrollToSection(id)}
                  className="group flex items-center gap-5 border-b border-white/10 py-5 text-left"
                >
                  <span className="font-mono text-[9px] text-[#d7a84d]">
                    {number}
                  </span>

                  <span className="font-serif text-4xl font-light tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-3 sm:text-6xl">
                    {label}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="ml-auto opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="home"
        className="relative flex min-h-svh items-end overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/10 to-[#080b0b]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,185,83,0.18),transparent_28%)]" />

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-[#080b0b] to-transparent" />

        {/* Vertical side text */}
        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
          <div className="h-20 w-px bg-white/20" />
          <span className="writing-mode-vertical text-[8px] uppercase tracking-[0.35em] text-white/45">
            Scroll to explore
          </span>
          <div className="h-20 w-px bg-white/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-375 px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-5xl">
            <Reveal>
              <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.4em] text-[#e0b65d] sm:text-[10px]">
                Travel Filmmaker · Visual Storyteller
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-serif text-[clamp(3.4rem,10vw,9rem)] font-light leading-[0.82] tracking-[-0.065em]">
                Stories
                <br />
                from the{" "}
                <span className="bg-linear-to-r from-[#e4a94e] via-[#d5c16b] to-[#6db5a5] bg-clip-text text-transparent">
                  Other Side
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-md text-sm leading-7 text-white/65 sm:text-[15px]">
                  I capture real moments, raw emotions and untold stories from
                  around the world. Turning places, people and cultures into
                  cinematic experiences.
                </p>

                <button
                  onClick={() => scrollToSection("work")}
                  className="group flex w-fit items-center gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-[#d7a84d] group-hover:bg-[#d7a84d] group-hover:text-black">
                    <Play size={14} fill="currentColor" />
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.25em]">
                    Explore my work
                  </span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-7 right-6 hidden items-center gap-3 text-[8px] uppercase tracking-[0.25em] text-white/40 sm:flex"
        >
          <MoveDown size={13} />
          Scroll
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ABOUT                                                              */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="about"
        className="relative overflow-hidden border-t border-white/6 bg-[#080b0b]"
      >
        <div className="absolute left-[-10%] top-[20%] h-100 w-100 rounded-full bg-[#27646b]/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-375 gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-40">
          {/* Image collage */}
          <Reveal className="relative min-h-112.5">
            <div className="absolute left-[8%] top-[7%] h-82.5 w-[68%] overflow-hidden sm:h-102.5">
              <Image
                fill
                priority  
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85"
                alt="Traveler exploring a landscape"
                className="h-full w-full object-cover grayscale-15"
              />
            </div>

            <motion.div
              whileHover={{ rotate: -1, scale: 1.02 }}
              className="absolute bottom-[3%] right-[4%] h-47.5 w-[48%] overflow-hidden border-8 border-[#080b0b] sm:h-57.5"
            >
              <Image
                fill
                priority
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=900&q=85"
                alt="Travel landscape"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <div className="absolute bottom-[16%] left-[0%] flex h-16 w-16 items-center justify-center rounded-full border border-[#d7a84d]/50 bg-[#080b0b] sm:h-20 sm:w-20">
              <Compass
                size={25}
                strokeWidth={1}
                className="text-[#d7a84d]"
              />
            </div>

            <div className="absolute left-[4%] top-[2%] rotate-[-8deg] font-serif text-sm italic text-white/60">
              Keep looking.
            </div>
          </Reveal>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <SectionLabel>About me</SectionLabel>

            <Reveal>
              <h2 className="max-w-2xl font-serif text-4xl font-light leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl">
                I&apos;m Dilshan,
                <br />
                a traveler who
                <br />
                <span className="text-[#d7a84d]">tells stories.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                I create cinematic travel films, photography and visual
                content that captures the beauty of our world and the people
                who make it special.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                I&apos;m interested in the moments between the obvious - the
                quiet streets before sunrise, a stranger&apos;s smile, the
                sound of waves against an empty shore.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-5">
                <div className="h-px w-12 bg-[#d7a84d]" />
                <span className="font-serif text-xl italic text-white/70">
                  Dilshan
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
                {[
                  ["50+", "Destinations"],
                  ["20+", "Films"],
                  ["5+", "Years"],
                  ["∞", "Stories"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-serif text-3xl font-light">
                      {value}
                    </p>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/35">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* WORK                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="work"
        className="relative overflow-hidden border-t border-white/6 bg-[#0b1010] py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-375 px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Selected work</SectionLabel>

              <Reveal>
                <h2 className="font-serif text-5xl font-light tracking-tighter sm:text-7xl">
                  Stories in{" "}
                  <span className="text-[#d7a84d]">Motion.</span>
                </h2>
              </Reveal>
            </div>

            <p className="max-w-xs text-xs leading-6 text-white/40">
              A collection of films, photographs and visual stories created
              across different corners of the world.
            </p>
          </div>

          {/* Desktop horizontal projects */}
          <div className="hidden gap-4 pb-8 lg:flex">
              {projects.map((project, index) => (
                <motion.button
                  key={project.number}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ y: -8 }}
                  className={`group relative h-135 basis-0 flex-1 overflow-hidden text-left transition-all duration-500 ${
                    activeProject === index ? "flex-[1.3]" : ""
                  }`}
                >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/15 to-black/10" />

                <div className="absolute left-6 top-6 flex items-center gap-3">
                  <span className="font-mono text-[9px] text-[#d7a84d]">
                    {project.number}
                  </span>
                  <span className="h-px w-8 bg-white/30" />
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="mb-2 text-[8px] uppercase tracking-[0.3em] text-[#d7a84d]">
                    {project.location}
                  </p>

                  <h3 className="font-serif text-3xl font-light leading-none tracking-[-0.04em]">
                    {project.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                      {project.type}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-[#d7a84d] group-hover:bg-[#d7a84d] group-hover:text-black">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Mobile projects */}
          <div className="grid gap-5 sm:grid-cols-2 lg:hidden">
            {projects.map((project, index) => (
              <motion.button
                key={project.number}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveProject(index)}
                className="group relative aspect-[0.82] overflow-hidden text-left"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute left-5 top-5 font-mono text-[9px] text-[#d7a84d]">
                  {project.number}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-[#d7a84d]">
                    {project.location}
                  </p>

                  <h3 className="mt-2 font-serif text-3xl font-light leading-none">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-white/45">
                    {project.type}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="font-mono text-[9px] text-white/30">
              {String(activeProject + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>

            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/60 hover:text-white"
            >
              Start a project
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition group-hover:border-[#d7a84d]">
                <ArrowRight size={13} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* JOURNEY                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="journey"
        className="relative overflow-hidden bg-[#eeeae0] py-24 text-[#101313] sm:py-32 lg:py-40"
      >
        {/* Decorative lines */}
        <div className="absolute left-0 top-0 h-full w-px bg-black/10 sm:left-8 lg:left-12" />
        <div className="absolute right-0 top-0 h-full w-px bg-black/10 sm:right-8 lg:right-12" />

        <div className="mx-auto max-w-375 px-5 sm:px-12 lg:px-24">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-black/45">
                <span className="h-px w-8 bg-black/30" />
                My journey
              </div>

              <Reveal>
                <h2 className="font-serif text-5xl font-light leading-[0.9] tracking-tighter sm:text-7xl">
                  Moments
                  <br />
                  that
                  <br />
                  <span className="italic">shaped me.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-8 max-w-sm text-sm leading-7 text-black/55">
                  Every project started with curiosity. Every destination left
                  something behind.
                </p>
              </Reveal>

              <div className="mt-12 hidden lg:block">
                <Quote
                  size={40}
                  strokeWidth={1}
                  className="text-[#c58f3b]"
                />

                <p className="mt-5 max-w-xs font-serif text-2xl italic leading-tight text-black/70">
                  &ldquo;Not every journey needs a destination. Some just need
                  a story.&rdquo;
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute bottom-0 left-1.25 top-0 w-px bg-black/15" />

              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <Reveal key={item.year} delay={index * 0.08}>
                    <div className="group relative grid grid-cols-[40px_75px_1fr] gap-4 border-b border-black/10 py-9 sm:grid-cols-[40px_100px_1fr] sm:gap-7">
                      <div className="relative z-10 flex items-start justify-center">
                        <span className="mt-1 h-3 w-3 rounded-full border-2 border-[#eeeae0] bg-[#c58f3b] ring-1 ring-[#c58f3b]" />
                      </div>

                      <span className="font-mono text-[10px] tracking-widest text-black/45">
                        {item.year}
                      </span>

                      <div>
                        <h3 className="font-serif text-2xl font-light tracking-[-0.03em] sm:text-3xl">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-lg text-xs leading-6 text-black/50 sm:text-sm">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Handwritten decoration */}
        <div className="absolute bottom-12 right-5 hidden rotate-[-8deg] font-serif text-xl italic text-black/30 lg:block">
          Still a lot
          <br />
          to explore →
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SKILLS                                                             */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative overflow-hidden border-t border-white/6 bg-[#080b0b] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-375 px-5 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
            <div>
              <SectionLabel>Skills & craft</SectionLabel>

              <Reveal>
                <h2 className="font-serif text-5xl font-light leading-[0.9] tracking-tighter sm:text-7xl">
                  Tools of
                  <br />
                  <span className="text-[#d7a84d]">my trade.</span>
                </h2>
              </Reveal>

              <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <Reveal key={skill.title} delay={index * 0.05}>
                      <div className="group h-full bg-[#080b0b] p-5 transition-colors duration-300 hover:bg-[#101716] sm:p-7">
                        <Icon
                          size={23}
                          strokeWidth={1}
                          className="text-[#d7a84d] transition-transform duration-300 group-hover:scale-110"
                        />

                        <h3 className="mt-8 font-serif text-lg">
                          {skill.title}
                        </h3>

                        <p className="mt-2 text-[10px] leading-5 text-white/35">
                          {skill.text}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Numbers */}
            <div className="lg:pt-16">
              <SectionLabel>By the numbers</SectionLabel>

              <div className="divide-y divide-white/10 border-y border-white/10">
                {[
                  ["50+", "Travel destinations"],
                  ["20+", "Video projects"],
                  ["15", "Brand collaborations"],
                  ["5+", "Years creating"],
                ].map(([number, label], index) => (
                  <Reveal key={label} delay={index * 0.08}>
                    <div className="flex items-end justify-between py-7 sm:py-9">
                      <span className="font-serif text-5xl font-light tracking-tighter sm:text-6xl">
                        {number}
                      </span>

                      <span className="max-w-30 text-right text-[9px] uppercase leading-4 tracking-[0.15em] text-white/35">
                        {label}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10 flex items-start gap-4">
                <Sparkles
                  size={18}
                  strokeWidth={1}
                  className="mt-1 shrink-0 text-[#d7a84d]"
                />

                <p className="font-serif text-xl italic leading-relaxed text-white/60">
                  Not just places.
                  <br />
                  People, cultures
                  <br />
                  and stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CONTACT                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="contact"
        className="relative min-h-[75svh] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-linear-to-t from-[#080b0b] via-black/20 to-[#080b0b]/50" />

        <div className="relative z-10 mx-auto flex min-h-[75svh] max-w-375 flex-col justify-end px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel>Let&apos;s connect</SectionLabel>

              <Reveal>
                <h2 className="max-w-4xl font-serif text-5xl font-light leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                  Have a story
                  <br />
                  <span className="text-[#d7a84d]">in mind?</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-7 max-w-lg text-sm leading-7 text-white/55">
                  I&apos;m always open to new opportunities, collaborations and
                  exciting travel stories. Let&apos;s create something
                  meaningful together.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <a
                  href="mailto:dilshan@example.com"
                  className="group mt-9 inline-flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-[#d7a84d] group-hover:bg-[#d7a84d] group-hover:text-black">
                    <ArrowUpRight size={16} />
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.25em]">
                    Start a conversation
                  </span>
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <div className="flex flex-col gap-5 lg:items-end">
                <div className="flex gap-3">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-[#d7a84d] hover:bg-[#d7a84d] hover:text-black"
                  >
                    <FaInstagram size={16} />
                  </a>

                  <a
                    href="#"
                    aria-label="YouTube"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-[#d7a84d] hover:bg-[#d7a84d] hover:text-black"
                  >
                    <FaYoutube size={16} />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-[#d7a84d] hover:bg-[#d7a84d] hover:text-black"
                  >
                    <FaLinkedinIn size={16} />
                  </a>
                </div>

                <span className="text-xs text-white/45">
                  dilshan@travelsite.com
                </span>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/15 pt-5 text-[8px] uppercase tracking-[0.2em] text-white/30 sm:flex-row">
            <span>© 2026 Dilshan. All rights reserved.</span>

            <span>Explore / Capture / Tell</span>
          </div>
        </div>
      </section>
    </main>
  );
}