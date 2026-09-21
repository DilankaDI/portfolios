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
  Headphones,
  Languages,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experience = [
  {
    year: "2024 - Present",
    role: "Assistant Manager - Guest Relations",
    company: "The Green Water Hotel & Spa, Colombo 03",
    description:
      "Overseeing guest services operations across reception, reservations, and concierge services while supporting guest satisfaction, team coordination, complaint resolution, and staff development.",
    current: true,
  },
  {
    year: "2023 - 2024",
    role: "Senior Guest Relations Executive",
    company: "The Green Water Hotel & Spa, Colombo 03",
    description:
      "Led reception operations, handled guest inquiries and complaints, and coordinated with housekeeping and maintenance teams to maintain smooth arrivals and consistently high service standards.",
  },
  {
    year: "2023",
    role: "Guest Relations Executive",
    company: "The Green Water Hotel & Spa, Colombo 03",
    description:
      "Managed guest interactions, responded to service concerns, monitored guest feedback, supported promotional activities, and assisted with recruitment and training of front-desk staff.",
  },
  {
    year: "2022 - 2023",
    role: "Guest Relations Officer",
    company: "The Green Water Hotel & Spa, Colombo 03",
    description:
      "Supported day-to-day guest relations and front-office operations while ensuring guests received professional and attentive service.",
  },
  {
    year: "2020",
    role: "Reservations Agent",
    company: "Ceylon Bey, Wattala",
    description:
      "Handled reservation-related activities and supported the hotel's booking and guest service operations.",
  },
  {
    year: "2016 - 2021",
    role: "Guest Service Agent - Receptionist cum Cashier",
    company: "Ceylon Bey, Wattala",
    description:
      "Built a strong foundation in front-office operations, guest service, reception procedures, cashier responsibilities, and direct guest interaction.",
  },
];

const expertise = [
  {
    icon: Users,
    title: "Guest Experience",
    description:
      "Creating welcoming, attentive and memorable experiences for every guest.",
  },
  {
    icon: Headphones,
    title: "Guest Relations",
    description:
      "Handling guest concerns professionally while maintaining service quality.",
  },
  {
    icon: Sparkles,
    title: "Service Standards",
    description:
      "Supporting consistent hospitality standards across front-office operations.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Team Coordination",
    description:
      "Working closely with teams and supporting staff training and development.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description:
      "Clear and professional communication with guests, colleagues and departments.",
  },
  {
    icon: Check,
    title: "Problem Solving",
    description:
      "Approaching guest issues calmly and finding practical solutions quickly.",
  },
];

const education = [
  {
    year: "2025",
    title: "German - Level A2",
    institution: "Goethe-Institut, Colombo",
    icon: Languages,
  },
  {
    year: "2025",
    title: "Computer Applications Assistant - NVQ Level 2",
    institution: "National Vocational Training Center",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "German - Level A1",
    institution: "Goethe-Institut, Colombo",
    icon: Languages,
  },
  {
    year: "2010",
    title: "GCE Advanced Level",
    institution: "D.S. Senanayake College, Colombo 07",
    icon: GraduationCap,
  },
  {
    year: "2007",
    title: "GCE Ordinary Level",
    institution: "D.S. Senanayake College, Colombo 07",
    icon: GraduationCap,
  },
];

const languages = [
      {
    name: "Sinhala",
    level: "Native",
    width: "100%",
  },
  {
    name: "English",
    level: "Professional",
    width: "90%",
  },
  {
    name: "German",
    level: "A2",
    width: "55%",
  },
];

export default function SampleOne() {
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
              LM<span className="text-[#9a7650]">.</span>
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

      <section id="top" className="relative px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-40">
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
                  Hospitality Professional
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 max-w-3xl font-display text-[clamp(3.3rem,8vw,7.2rem)] font-medium leading-[0.9] tracking-[-0.055em]"
              >
                Shehan
                <br />
                <span className="text-[#9a7650]">Perera</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-7"
              >
                <p className="text-lg font-medium sm:text-xl">
                  Assistant Manager
                  <span className="mx-2 text-[#9a7650]">-</span>
                  Guest Relations
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-black/60 sm:text-[15px]">
                  Creating thoughtful guest experiences through professional
                  service, communication, team coordination and a genuine
                  passion for hospitality.
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
                  href="mailto:sample1@gmail.com"
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
                Colombo, Sri Lanka
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
                <Image
                  src="/samples/portfolios/sample1.jpg"
                  alt="Shehan Perera"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 540px"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="rounded-2xl border border-white/20 bg-black/20 p-4 text-white backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                      Current Position
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Assistant Manager - Guest Relations
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
                  Hospitality
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
        className="border-y border-black/10 bg-[#1b1b19] px-5 py-20 text-[#f7f5f0] sm:px-8 sm:py-28"
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
                Hospitality is more than providing a service. It is about
                creating an experience that makes people feel{" "}
                <span className="text-[#b89469]">welcomed, understood</span>{" "}
                and valued.
              </p>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55">
                With progressive experience across guest relations, reception,
                reservations and front-office operations, I have developed a
                strong understanding of what makes a guest experience truly
                memorable. My approach combines professional communication,
                attention to detail, calm problem-solving and genuine care for
                people.
              </p>

              <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
                <div>
                  <p className="font-display text-3xl text-[#b89469]">
                    10+
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Years in Hospitality
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl text-[#b89469]">
                    6
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Career Positions
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl text-[#b89469]">
                    3
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Languages / Levels
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
        className="relative px-5 py-20 sm:px-8 sm:py-28"
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
                From front-office operations to assistant management, every
                role has added another layer of experience in understanding
                guests, teams and hospitality operations.
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
        className="bg-[#e9e4db] px-5 py-20 sm:px-8 sm:py-28"
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
                Professional strengths that shape the{" "}
                <span className="text-[#9a7650]">guest experience.</span>
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
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOTEL EXPERIENCE VISUAL
      ========================================================== */}

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-4xl bg-[#292824] sm:rounded-[2.5rem]">
            <div className="grid min-h-125 lg:grid-cols-[1fr_0.9fr]">
              <div className="relative min-h-87.5 lg:min-h-full">
                <Image
                  src="/samples/portfolios/hospitality.jpg"
                  alt="Luxury hospitality environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="flex items-center p-8 text-white sm:p-12 lg:p-16">
                <div className="max-w-xl">
                  <Star
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#c19a6b]"
                  />

                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c19a6b]">
                    The Guest Experience
                  </p>

                  <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">
                    Every interaction is an opportunity to create a positive
                    memory.
                  </h2>

                  <p className="mt-6 text-sm leading-7 text-white/50">
                    My hospitality experience has taught me that exceptional
                    service comes from attention to the small details,
                    understanding individual needs, and creating an environment
                    where guests feel genuinely cared for.
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-xs text-white/50">
                    <span className="h-px w-8 bg-[#c19a6b]" />
                    Service with purpose
                  </div>
                </div>
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
        className="border-t border-black/10 px-5 py-20 sm:px-8 sm:py-28"
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

      <section className="bg-[#1b1b19] px-5 py-20 text-white sm:px-8 sm:py-24">
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

            <div className="grid gap-8 sm:grid-cols-3">
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

                  <div className="mt-4 h-px bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: language.width }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-px bg-[#b89469]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
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
            For hospitality opportunities, professional connections or further
            information, feel free to get in touch.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:sample1@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#1b1b19] px-6 py-3.5 text-xs font-medium text-white transition-transform hover:scale-[1.03]"
            >
              <Mail size={14} />
              Email Me
            </a>

            <a
              href="tel:+94771234567"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-xs font-medium transition-colors hover:border-[#9a7650] hover:text-[#9a7650]"
            >
              <Phone size={14} />
              +94 77 123 4567
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
                    Shehan Perera
                    </p>

                    <h2 className="mt-3 max-w-xl font-display text-2xl font-medium tracking-tight sm:text-3xl">
                    Assistant Manager - Guest Relations
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-black/50">
                    Hospitality professional focused on creating memorable guest
                    experiences through thoughtful service, communication and leadership.
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
                    href="mailto:sample1@gmail.com"
                    className="transition-colors hover:text-[#9a7650]"
                    >
                    sample1@gmail.com
                    </a>

                    <span className="hidden text-black/20 sm:inline">•</span>

                    <a
                    href="tel:+94771234567"
                    className="transition-colors hover:text-[#9a7650]"
                    >
                    +94 77 123 4567
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