"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUp,
  Award,
  Briefcase,
  CheckCircle2,
  Compass,
  Globe,
  GraduationCap,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experience = [
  {
    year: "Dec 2024 - Jun 2025",
    role: "Industrial Training",
    company: "Manchurian Club - Wokhaus (Pvt) Ltd",
    description:
      "Completed a 6-month industry attachment as part of practical hospitality training. Gained hands-on exposure to restaurant operations, guest service awareness, teamwork, and operational communication.",
    current: false,
  },
  {
    year: "6 Months",
    role: "Internship",
    company: "K2 Guesthouse, Singapore",
    description:
      "Completed a 6-month internship program in a guesthouse environment. Gained practical exposure to hospitality operations, guest services, customer communication, and professional workplace practices.",
  },
  {
    year: "Feb 2022 - Feb 2024",
    role: "Stores Executive",
    company: "Sevon Holdings",
    description:
      "Managed inventory and stock control. Enforced FIFO/FEFO procedures to ensure proper stock rotation and minimize product damage/expiry. Coordinated daily stock issues and dispatches for delivery routes.",
  },
];

const expertise = [
  {
    icon: Users,
    title: "Public Relations",
    description:
      "Building positive guest relationships, handling inquiries, and maintaining professional brand representation.",
  },
  {
    icon: Briefcase,
    title: "Teamwork & Collaboration",
    description:
      "Working seamlessly with cross-functional teams and operational departments to ensure smooth day-to-day workflow.",
  },
  {
    icon: Clock,
    title: "Time Management",
    description:
      "Prioritizing key tasks efficiently under pressure during peak hospitality and inventory service hours.",
  },
  {
    icon: Sparkles,
    title: "Leadership",
    description:
      "Proven track record of school prefectship leadership and guiding workplace operational tasks effectively.",
  },
  {
    icon: MessageSquare,
    title: "Effective Communication",
    description:
      "Clear, professional, and empathetic interaction with guests, supervisors, and external partners.",
  },
  {
    icon: CheckCircle2,
    title: "Hospitality Operations",
    description:
      "Hands-on experience across restaurant, front-of-house, guesthouse, and stock management operations.",
  },
];

const education = [
  {
    year: "2024 - 2025",
    title: "Diploma in Hospitality Management",
    institution: "STEi Institute - Singapore",
    icon: GraduationCap,
  },
  {
    year: "2019 - 2020",
    title: "Diploma in English",
    institution:
      "Ministry of Information Technology in collaboration with Lakshman Yapa Abeywardena Foundation, Kalutara",
    icon: GraduationCap,
  },
  {
    year: "2022",
    title: "G.C.E. Advanced Level Examination",
    institution: "Kalutara Balika National School",
    icon: GraduationCap,
  },
  {
    year: "2016",
    title: "G.C.E. Ordinary Level Examination",
    institution: "Kalutara Balika National School",
    icon: GraduationCap,
  },
  {
    year: "2016",
    title: "Daham Pasal Final Examination",
    institution: "Kalutara",
    icon: GraduationCap,
  },
];

const languages = [
  { name: "Sinhala", level: "Native / C Grade", value: 100 },
  { name: "English", level: "Professional Diploma", value: 85 },
];

export default function SamadhiPortfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <main className="min-h-screen bg-[#0d0f12] text-[#e1e7ec] selection:bg-[#c5a059] selection:text-black">
      {/* =========================================================
          NAVBAR
      ========================================================== */}
      <header className="fixed inset-x-0 top-0 z-50 p-4 sm:p-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#12161b]/80 px-6 py-3.5 backdrop-blur-md shadow-2xl">
          <a
            href="#top"
            className="font-serif text-lg tracking-widest text-[#c5a059]"
          >
            SR<span className="text-white">.</span>
          </a>

          <div className="hidden items-center gap-8 text-xs uppercase tracking-widest text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-[#c5a059]">
              About
            </a>
            <a href="#experience" className="transition hover:text-[#c5a059]">
              Experience
            </a>
            <a href="#expertise" className="transition hover:text-[#c5a059]">
              Expertise
            </a>
            <a href="#education" className="transition hover:text-[#c5a059]">
              Education
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-xl border border-[#c5a059]/30 bg-[#c5a059]/10 px-5 py-2 text-xs uppercase tracking-wider text-[#c5a059] transition hover:border-[#c5a059] hover:bg-[#c5a059] hover:text-black"
          >
            Connect
          </a>
        </nav>
      </header>

      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section
        id="top"
        ref={targetRef}
        className="relative flex min-h-screen items-center px-6 pt-28 pb-16 sm:px-10 lg:px-16"
      >
        <motion.div style={{ y: heroY }} className="mx-auto max-w-7xl w-full">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
              >
                <Compass size={14} className="text-[#c5a059]" />
                <span className="text-xs uppercase tracking-widest text-zinc-300">
                  Hospitality & Public Relations
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 font-serif text-5xl leading-tight sm:text-7xl lg:text-8xl"
              >
                Samadhi <br />
                <span className="italic text-[#c5a059]">Raveesha</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 max-w-xl text-base text-zinc-400 sm:text-lg"
              >
                A dedicated and organized professional eager to leverage strong
                communication, public relations, and leadership skills to drive
                value and support organizational goals across hospitality and
                guest operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#c5a059] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-[#d4b06a]"
                >
                  <Mail size={16} /> Contact Me
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  View Experience <ArrowDown size={14} />
                </a>
              </motion.div>

              <div className="mt-12 flex items-center gap-6 border-t border-white/10 pt-6 text-xs text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#c5a059]" /> Payagala North,
                  Kalutara
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={14} className="text-[#c5a059]" /> Diploma in
                  Hospitality
                </span>
              </div>
            </div>

            {/* HERO IMAGE CONTAINER */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto aspect-3/4 max-w-md overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-2 shadow-2xl">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/samadhi-raveesha/samadhi-raveesha.png"
                    alt="Samadhi Raveesha"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0d0f12] via-transparent to-transparent opacity-80" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-[#12161b]/90 p-4 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-widest text-[#c5a059]">
                    Full Name
                  </p>
                  <p className="font-serif text-sm text-white">
                    Karunathilaka Kalavila Vithanage Samadhi Raveesha
                  </p>
                  <p className="text-xs text-zinc-400">
                    STEi Institute Alumni (Singapore)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          BENTO GRID / STATS & ABOUT
      ========================================================== */}
      <section id="about" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {/* Main Statement */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#12161b] p-8 md:col-span-2 lg:col-span-2">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059]">
                  Profile
                </span>
                <h2 className="mt-4 font-serif text-2xl leading-relaxed text-white sm:text-3xl">
                  &ldquo;Eager to leverage strong communication, public
                  relations, and leadership skills to drive value and support
                  organizational goals.&rdquo;
                </h2>
              </div>
              <p className="mt-8 text-sm text-zinc-400">
                A structured and service-oriented background spanning international
                hospitality attachments in Singapore, inventory operations, and leadership roles.
              </p>
            </div>

            {/* Stat Card 1 */}
            <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#12161b] p-8 text-center">
              <span className="font-serif text-5xl font-light text-[#c5a059]">
                2+
              </span>
              <span className="mt-2 text-xs uppercase tracking-widest text-zinc-400">
                Diplomas
              </span>
            </div>

            {/* Stat Card 2 */}
            <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#12161b] p-8 text-center">
              <span className="font-serif text-5xl font-light text-[#c5a059]">
                Prefect
              </span>
              <span className="mt-2 text-xs uppercase tracking-widest text-zinc-400">
                Leadership Union
              </span>
            </div>

            {/* Visual Accent Box */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 md:col-span-3 lg:col-span-4">
              <div className="grid gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start gap-4">
                  <Star className="shrink-0 text-[#c5a059]" size={20} />
                  <div>
                    <h3 className="font-serif text-lg text-white">
                      Hospitality Exposure
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">
                      Trained through STEi Institute, Singapore & Manchurian Club.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="shrink-0 text-[#c5a059]" size={20} />
                  <div>
                    <h3 className="font-serif text-lg text-white">
                      Public Relations
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">
                      Strong foundation in interpersonal engagement and guest experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="shrink-0 text-[#c5a059]" size={20} />
                  <div>
                    <h3 className="font-serif text-lg text-white">
                      International Perspective
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">
                      Guesthouse and restaurant internship experience in Singapore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAREER TIMELINE
      ========================================================== */}
      <section id="experience" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a059]">
                Career Path
              </span>
              <h2 className="mt-2 font-serif text-4xl text-white">
                Work Experience
              </h2>
            </div>
            <p className="max-w-md text-xs text-zinc-400">
              Practical workplace development moving across industrial hospitality attachments, guest relations, and inventory coordination.
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-white/5 bg-[#12161b]/50 p-6 sm:p-8 transition hover:border-[#c5a059]/30 hover:bg-[#12161b]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#c5a059]">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-xl font-medium text-white transition group-hover:text-[#c5a059]">
                      {item.role}
                    </h3>
                    <p className="text-xs text-zinc-400">{item.company}</p>
                  </div>

                  <p className="max-w-xl text-xs leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERTISE
      ========================================================== */}
      <section id="expertise" className="bg-[#12161b] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 border-b border-white/10 pb-8">
            <span className="text-xs uppercase tracking-widest text-[#c5a059]">
              Competencies
            </span>
            <h2 className="mt-2 font-serif text-4xl text-white">
              Areas of Expertise
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/5 bg-[#0d0f12] p-6 transition hover:border-[#c5a059]/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#c5a059]/20 bg-[#c5a059]/10 text-[#c5a059]">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 font-serif text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          EDUCATION & LANGUAGES
      ========================================================== */}
      <section id="education" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Education */}
            <div>
              <div className="mb-8 border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-widest text-[#c5a059]">
                  Qualifications
                </span>
                <h2 className="mt-2 font-serif text-3xl text-white">
                  Education & Training
                </h2>
              </div>

              <div className="space-y-4">
                {education.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#12161b] p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-[#c5a059]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#c5a059]">
                          {item.year}
                        </span>
                        <h4 className="font-serif text-sm text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-500">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Languages & Leadership */}
            <div>
              <div className="mb-8 border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-widest text-[#c5a059]">
                  Certificates & Skills
                </span>
                <h2 className="mt-2 font-serif text-3xl text-white">
                  Leadership & Languages
                </h2>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl border border-white/5 bg-[#12161b] p-6">
                  <h3 className="font-serif text-base text-white">
                    School Leadership & Certificates
                  </h3>
                  <ul className="mt-4 space-y-2 text-xs text-zinc-400">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
                      Senior Prefect (2018 – 2019)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
                      Prefect Union Member / Prefect (2014 – 2017)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
                      Junior Prefect (2014)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
                      Leadership Workshop Participant (2015)
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  {languages.map((lang, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/5 bg-[#12161b] p-6"
                    >
                      <div className="flex justify-between">
                        <span className="font-serif text-base text-white">
                          {lang.name}
                        </span>
                        <span className="text-xs uppercase text-[#c5a059]">
                          {lang.level}
                        </span>
                      </div>
                      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                        <div
                          className="h-full rounded-full bg-[#c5a059]"
                          style={{ width: `${lang.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT / FOOTER
      ========================================================== */}
      <footer
        id="contact"
        className="border-t border-white/10 bg-[#07080a] px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-xs uppercase tracking-widest text-[#c5a059]">
            Get In Touch
          </span>
          <h2 className="mt-4 font-serif text-4xl text-white sm:text-6xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mt-4 max-w-md text-xs text-zinc-400">
            Open to professional hospitality, public relations, and guest operations opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:samadhiraveesha21@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-[#c5a059] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-[#d4b06a]"
            >
              <Mail size={16} /> samadhiraveesha21@gmail.com
            </a>
            <a
              href="tel:+94785222176"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <Phone size={16} /> +94 78 522 2176
            </a>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between border-t border-white/5 pt-8 text-xs text-zinc-600 sm:flex-row">
            <p>© {new Date().getFullYear()} Samadhi Raveesha. All rights reserved.</p>
            <a
              href="#top"
              className="mt-4 flex items-center gap-1 transition hover:text-[#c5a059] sm:mt-0"
            >
              Back to top <ArrowUp size={12} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}