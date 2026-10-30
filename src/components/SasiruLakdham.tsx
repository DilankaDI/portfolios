"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  Globe2,
  GraduationCap,
  FlaskConical,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const experience = [
  {
    year: "November 2025 - Present",
    role: "Quality Control Executive & Laboratory In-Charge",
    company: "Wilton Metal Box Pvt Ltd",
    description: "Food packaging industry",
    responsibilities: [
      "Ensure food hygiene and safety.",
      "Maintain product quality standards and conduct raw material testing.",
      "Test packaging materials and maintain laboratory records.",
      "Handle customer complaints and support CAPA implementation.",
      "Participate in internal audits and monitor production quality parameters.",
      "Coordinate the Quality Control team.",
    ],
    current: true,
  },
  {
    year: "July 2023 - October 2025",
    role: "Quality Assurance Executive",
    company: "Nelna Group of Company",
    description: "Food manufacturing",
    responsibilities: [
      "Ensure food hygiene and safety.",
      "Manage QA activities in line with HACCP, FSSC 22000 and ISO 22000.",
      "Conduct product inspections, quality control and reporting.",
      "Support audits and conduct staff training and hygiene monitoring.",
    ],
    current: false,
  },
];

const expertise = [
  {
    icon: Check,
    title: "Quality Assurance & QC",
    description: "Maintaining product quality, food hygiene and safety across manufacturing and packaging operations.",
  },
  {
    icon: Award,
    title: "Internal Auditing",
    description: "Supporting internal audits and quality activities aligned with HACCP, GMP, FSSC 22000 and ISO 22000.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Documentation & Compliance",
    description: "Maintaining laboratory records, quality documentation and reports to support compliance.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Testing",
    description: "Testing raw materials and packaging materials, with careful monitoring of production quality parameters.",
  },
  {
    icon: MessageCircle,
    title: "CAPA & Problem Solving",
    description: "Handling customer complaints and supporting corrective and preventive action implementation.",
  },
  {
    icon: Users,
    title: "Communication & Leadership",
    description: "Coordinating the Quality Control team and supporting staff training and hygiene monitoring.",
  },
];

const education = [
  {
    year: "2017 - 2022",
    title: "BSc (Hons) in Agriculture",
    institution: "Wayamba University of Sri Lanka",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    title: "Internal Auditor Training - FSSC 22000 (V6)",
    institution: "Bureau Veritas",
  },
  {
    title: "HACCP Implementation Training",
    institution: "Industrial Knowledge Academy",
  },
];

const languages = [
  { name: "Sinhala", level: "Native" },
  { name: "English", level: "Intermediate" },
];

const references = [
  {
    name: "Dr. Amani Wijesinghe",
    role: "Senior Lecturer, Wayamba University of Sri Lanka",
    phone: "+94 76 044 8374",
    href: "tel:+94760448374",
  },
  {
    name: "Dr. Harith Madhusanka",
    role: "Former Nelna Group Quality Manager",
    phone: "+94 71 645 8191",
    href: "tel:+94716458191",
  },
];

export default function SasiruLakdham() {
  const [portraitFailed, setPortraitFailed] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 70%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f0] text-[#1b1b19]">
      {/* =========================================================
          NAVIGATION
      ========================================================== */}

      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-5 pt-4 sm:px-8">
          <div className="flex items-center justify-between rounded-full border border-black/10 bg-[#f7f5f0]/85 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-6">
            <a
              href="#top"
              className="font-display text-sm font-semibold tracking-tight"
            >
              SL<span className="text-[#9a7650]">.</span>
            </a>

            <div className="hidden items-center gap-7 text-xs font-medium text-black/60 md:flex">
              <a
                href="#about"
                className="transition-colors hover:text-[#9a7650]"
              >
                About
              </a>
              <a
                href="#journey"
                className="transition-colors hover:text-[#9a7650]"
              >
                Journey
              </a>
              <a
                href="#expertise"
                className="transition-colors hover:text-[#9a7650]"
              >
                Expertise
              </a>
              <a
                href="#education"
                className="transition-colors hover:text-[#9a7650]"
              >
                Education
              </a>
              <a
                href="#contact"
                className="transition-colors hover:text-[#9a7650]"
              >
                Contact
              </a>
            </div>

            <a
              href="#contact"
              className="rounded-full bg-[#1b1b19] px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-[1.03]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </nav>

      {/* =========================================================
          HERO
      ========================================================== */}

      <section id="top" className="scroll-mt-28 relative px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#9a7650]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9a7650]">
                  Quality Assurance Professional
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 max-w-3xl font-display text-[clamp(3.3rem,8vw,7.2rem)] font-medium leading-[0.9] tracking-[-0.055em]"
              >
                Sasiru
                <br />
                <span className="text-[#9a7650]">Lakdham</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-7"
              >
                <p className="text-lg font-medium sm:text-xl">
                  Quality Assurance
                  <span className="mx-2 text-[#9a7650]">-</span>
                  Executive
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-black/60 sm:text-[15px]">
                  Supporting food safety and consistent product quality through
                  quality assurance, laboratory testing, internal auditing
                  and clear team communication.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#journey"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#1b1b19] px-5 py-3 text-xs font-medium text-white transition-transform hover:scale-[1.03]"
                >
                  Explore My Journey

                  <ArrowDown
                    size={14}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </a>

                <a
                  href="mailto:sladkham@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-xs font-medium transition-colors hover:border-[#9a7650] hover:text-[#9a7650]"
                >
                  <Mail size={14} />
                  Get in Touch
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="mt-10 flex items-center gap-2 text-xs text-black/45"
              >
                <MapPin size={13} />
                Kalutara South, Sri Lanka
              </motion.div>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-135 lg:ml-auto"
            >
              {/* Decorative shape */}
              {/* <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-[#9a7650]/30 sm:-right-8 sm:-top-8 sm:h-44 sm:w-44" /> */}

              <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-[#ded8ce] sm:rounded-[2.5rem]">
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <span className="font-display text-[clamp(6rem,18vw,12rem)] font-medium tracking-tight text-[#9a7650]/45">SL</span>
                </div>
                {!portraitFailed && (
                  <Image
                    src="/images/sasiru-lakdham/sasiru-lakdham.png"
                    alt="Sasiru Lakdham"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 540px"
                    className="object-cover object-center"
                    onError={() => setPortraitFailed(true)}
                  />
                )}

                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="rounded-2xl border border-white/20 bg-black/20 p-4 text-white backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                      Current Position
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Quality Assurance Executive
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-black/10 bg-[#f7f5f0] p-4 shadow-xl sm:block sm:-left-7"
              >
                <Award size={20} className="text-[#9a7650]" />

                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-black/40">
                  Experience
                </p>

                <p className="mt-0.5 text-sm font-semibold">
                  Quality Assurance
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / ABOUT
      ========================================================== */}

      <section
        id="about"
        className="scroll-mt-28 border-y border-black/10 bg-[#1b1b19] px-5 py-20 text-[#f7f5f0] sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b89469]">
                About Me
              </p>
            </div>

            <div>
              <p className="max-w-5xl font-display text-3xl font-medium leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl">
                Quality begins with attention to detail, supported by{" "}
                <span className="text-[#b89469]">food safety, compliance</span>{" "}
                and consistent standards.
              </p>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55">
                I am a quality assurance and quality control professional with over
                three years of experience across food manufacturing and food
                packaging. My experience covers HACCP, GMP, FSSC 22000, internal
                audits, laboratory testing and customer complaint handling. I hold
                a BSc (Hons) in Agriculture from Wayamba University of Sri Lanka.
              </p>

              <dl className="mt-8 grid gap-5 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs text-[#b89469]">Address</dt>
                  <dd className="mt-2 leading-6 text-white/60">No. 92, Second Step, Panvila Terrace, Kalutara South, Sri Lanka</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#b89469]">Marital Status</dt>
                  <dd className="mt-2 leading-6 text-white/60">Single</dd>
                </div>
              </dl>

              <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
                <div>
                  <p className="font-display text-3xl text-[#b89469]">
                    3+
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Years of QA / QC Experience
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl text-[#b89469]">
                    2
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Career Positions
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl text-[#b89469]">
                    2
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Languages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAREER JOURNEY
      ========================================================== */}

      <section
        id="journey"
        ref={timelineRef}
        className="scroll-mt-28 relative px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-6 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9a7650]">
                Career Journey
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                A career built through{" "}
                <span className="text-[#9a7650]">experience.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-black/55">
                Experience across food manufacturing and packaging, with a focus
                on quality assurance, laboratory operations, auditing and
                food safety standards.
              </p>
            </div>
          </div>

          <div className="relative ml-1 sm:ml-4">
            {/* Background line */}
            <div className="absolute bottom-0 left-1.75 top-0 w-px bg-black/10" />

            {/* Animated line */}
            <motion.div
              style={{ scaleY }}
              className="absolute left-1.75 top-0 h-full w-px origin-top bg-[#9a7650]"
            />

            <div className="space-y-12 sm:space-y-14">
              {experience.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.role}`}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.03,
                  }}
                  className="relative pl-9 sm:pl-14"
                >
                  <div
                    className={`absolute left-0 top-1.5 h-3.75 w-3.75 rounded-full border-4 border-[#f7f5f0] ${
                      item.current
                        ? "bg-[#9a7650] ring-4 ring-[#9a7650]/15"
                        : "bg-[#1b1b19]"
                    }`}
                  />

                  <div className="grid gap-3 lg:grid-cols-[170px_1fr] lg:gap-10">
                    <div>
                      <p className="flex items-center gap-2 text-xs font-semibold text-[#9a7650]">
                        <CalendarDays size={13} />
                        {item.year}
                      </p>

                      {item.current && (
                        <span className="mt-2 inline-flex rounded-full bg-[#9a7650]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#9a7650]">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-[#9a7650]">
                        {item.company}
                      </p>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55">
                        {item.description}
                      </p>
                      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-7 text-black/55">
                        {item.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERTISE
      ========================================================== */}

      <section
        id="expertise"
        className="scroll-mt-28 bg-[#e9e4db] px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9a7650]">
                What I Bring
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Professional strengths that support{" "}
                <span className="text-[#9a7650]">quality and safety.</span>
              </h2>

              <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
                {expertise.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.04,
                      }}
                      whileHover={{ y: -3 }}
                      className="group bg-[#f7f5f0] p-6 sm:p-7"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-colors group-hover:border-[#9a7650] group-hover:text-[#9a7650]">
                          <Icon size={18} strokeWidth={1.5} />
                        </div>

                        <ArrowUpRight
                          size={16}
                          className="text-black/20 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#9a7650]"
                        />
                      </div>

                      <h3 className="mt-8 font-display text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-black/50">
                        {item.description}
                      </p>
                      {/* <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-7 text-black/55">
                        {item.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul> */}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD SAFETY & CERTIFICATIONS */}
      <section className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-[#292824] p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Award size={28} strokeWidth={1.5} className="text-[#c19a6b]" />
              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c19a6b]">Food Safety & Quality</p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">Careful testing. Clear records. Consistent quality.</h2>
              <p className="mt-6 text-sm leading-7 text-white/60">Experience applying food safety and quality management practices across manufacturing and packaging operations.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["HACCP", "GMP", "FSSC 22000", "ISO 22000"].map((standard) => (
                  <span key={standard} className="rounded-full border border-white/20 px-4 py-2 text-xs text-[#c19a6b]">{standard}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl font-medium">Certifications</h3>
              <div className="mt-6 space-y-4">
                {certifications.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/15 p-6">
                    <h4 className="text-sm font-medium leading-6">{item.title}</h4>
                    <p className="mt-2 text-xs leading-6 text-white/60">{item.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDUCATION
      ========================================================== */}

      <section
        id="education"
        className="scroll-mt-28 border-t border-black/10 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9a7650]">
                Education & Training
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Always learning.
              </h2>

              <div className="mt-12 space-y-3">
                {education.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={`${item.title}-${item.year}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.04,
                      }}
                      className="group flex flex-col gap-5 rounded-2xl border border-black/10 bg-[#f7f5f0] p-5 transition-colors hover:border-[#9a7650]/40 sm:flex-row sm:items-center sm:p-6"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9e4db] text-[#9a7650]">
                        <Icon size={19} strokeWidth={1.5} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9a7650]">
                          {item.year}
                        </p>

                        <h3 className="mt-1 font-display text-base font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs text-black/45">
                          {item.institution}
                        </p>
                      </div>

                      <ChevronRight
                        size={18}
                        className="hidden text-black/20 transition-transform group-hover:translate-x-1 group-hover:text-[#9a7650] sm:block"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LANGUAGES
      ========================================================== */}

      <section className="scroll-mt-28 bg-[#1b1b19] px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <Globe2 size={17} className="text-[#b89469]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b89469]">
                  Languages
                </p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                >
                  <div className="flex items-end justify-between">
                    <p className="font-display text-xl font-medium">
                      {language.name}
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.12em] text-white/35">
                      {language.level}
                    </p>
                  </div>

                  <div className="mt-4 h-px bg-[#b89469]/50" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="references" className="scroll-mt-28 border-b border-black/10 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9a7650]">References</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {references.map((reference) => (
              <article key={reference.name} className="rounded-2xl border border-black/10 p-6">
                <h2 className="font-display text-xl font-semibold">{reference.name}</h2>
                <p className="mt-3 text-sm leading-6 text-black/55">{reference.role}</p>
                <a href={reference.href} className="mt-5 inline-flex items-center gap-2 text-sm text-[#9a7650] hover:underline">
                  <Phone size={14} />{reference.phone}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================== */}

      <section
        id="contact"
        className="scroll-mt-28 relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-[#9a7650]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9a7650]">
            Let&apos;s Connect
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Looking forward to the next{" "}
            <span className="text-[#9a7650]">opportunity.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/50">
            For quality assurance opportunities, professional connections or further
            information, feel free to get in touch.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:slakdham@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#1b1b19] px-6 py-3.5 text-xs font-medium text-white transition-transform hover:scale-[1.03]"
            >
              <Mail size={14} />
              Email Me
            </a>

            <a
              href="tel:+94740125895"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-xs font-medium transition-colors hover:border-[#9a7650] hover:text-[#9a7650]"
            >
              <Phone size={14} />
              +94 74 012 5895
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}

        <footer className="border-t border-black/10 bg-[#e9e4db] px-5 py-12 sm:px-8 sm:py-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                {/* Identity */}
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7650]">
                    Sasiru Lakdham
                    </p>

                    <h2 className="mt-3 max-w-xl font-display text-2xl font-medium tracking-tight sm:text-3xl">
                    Quality Assurance Executive
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-black/50">
                    Quality assurance professional focused on food safety, laboratory
                    testing, compliance and consistent product quality.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-black/60">
                    <a
                    href="#about"
                    className="transition-colors hover:text-[#9a7650]"
                    >
                    About
                    </a>

                    <a
                    href="#journey"
                    className="transition-colors hover:text-[#9a7650]"
                    >
                    Journey
                    </a>

                    <a
                    href="#expertise"
                    className="transition-colors hover:text-[#9a7650]"
                    >
                    Expertise
                    </a>

                    <a
                    href="#education"
                    className="transition-colors hover:text-[#9a7650]"
                    >
                    Education
                    </a>

                    <a
                    href="#contact"
                    className="transition-colors hover:text-[#9a7650]"
                    >
                    Contact
                    </a>
                </div>
                </div>

                {/* Bottom row */}
                <div className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1 text-sm text-black/45 sm:flex-row sm:items-center sm:gap-4">
                    <a
                    href="mailto:sladkham@gmail.com"
                    className="transition-colors hover:text-[#9a7650]"
                    >
                    sladkham@gmail.com
                    </a>

                    <span className="hidden text-black/20 sm:inline">•</span>

                    <a
                    href="tel:+94740125895"
                    className="transition-colors hover:text-[#9a7650]"
                    >
                    +94 74 012 5895
                    </a>
                </div>

                <a
                    href="#top"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-[#9a7650]"
                >
                    Back to top

                    <ArrowUp
                    size={15}
                    className="transition-transform group-hover:-translate-y-1"
                    />
                </a>
                </div>
            </div>
        </footer>
    </main>
  );
}