"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUp,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const careerHighlights = [
  {
    period: "MAR 2018 – SEP 2018",
    role: "Trainee Computer Operator",
    company: "Sri Lanka Telecom PLC",
    location: "Sri Lanka",
    highlight:
      "Completed a 6-month vocational training program as a Computer Operator.",
    details:
      "Handled daily office computing tasks, system operations, and administrative data entry.",
  },
];

const education = [
  {
    period: "2018 – 2026",
    title: "Bachelor of Commerce (General)",
    subtitle: "External Degree",
    institute: "University of Sri Jayewardenepura",
    details:
      "Focus: Commerce, Business Management, Accounting, and Economics.",
  },
  {
    period: "2023 – 2024",
    title: "Diploma in Psychology & Counseling",
    subtitle: "",
    institute: "Institute of Language Development & South Asian Campus",
    details: "",
  },
  {
    period: "APR 2017 – AUG 2017",
    title: "Short Course in Human Resource Management",
    subtitle: "",
    institute: "The Open University of Sri Lanka",
    details: "",
  },
  {
    period: "2016",
    title: "G.C.E. Advanced Level",
    subtitle: "",
    institute: "Gurugomi College - Kalutara",
    details:
      "Economics - C | Business Studies - C | Accounting - S",
  },
  {
    period: "2014 – 2016",
    title: "Examination of Bauddha Dharmacharya",
    subtitle: "",
    institute: "Department of Examinations, Sri Lanka",
    details: "",
  },
];

const certifications = [
  {
    title: "Certificate in Information Technology (Graphic Designing)",
    institute: "Sisu Nena Pradeepa Foundation / Future World IPS",
    date: "Completed July 2017",
  },
  {
    title: "Certificate in Information Technology (MS-Office)",
    institute: "Sisu Nena Pradeepa Foundation / Future World IPS",
    date: "Completed July 2017",
  },
  {
    title: "Certificate in Spoken English Comprehensive Course",
    institute: "Oxbridge College",
    date: "Sept 2016 – June 2017",
  },
];

const strengths = [
  {
    number: "01",
    title: "Commercial Knowledge",
    description:
      "Academic foundation in commerce, business management, accounting, economics, and financial concepts.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Administrative Support",
    description:
      "Experience with office computing, system operations, administrative tasks, and accurate data entry.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Office Technology",
    description:
      "Training in MS-Office, information technology, and graphic designing with practical computer experience.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Communication & Teamwork",
    description:
      "Strong interpersonal skills supported by spoken English training, teamwork, leadership, and public relations.",
    icon: Users,
  },
];

const skills = [
  "Public Relations",
  "Teamwork",
  "Time Management",
  "Leadership",
  "Effective Communication",
];

export default function EshaniPramoda() {
  return (
    <main className="min-h-screen bg-[#0a0b0d] text-[#e5e7eb] font-sans selection:bg-[#d4af37] selection:text-black">
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#d4af37]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-[#d4af37]/3 rounded-full blur-[150px]" />
      </div>

      {/* FIXED NAVIGATION BAR */}
      <header className="fixed top-0 inset-x-0 z-50 p-4 sm:p-6">
        <nav className="mx-auto max-w-7xl flex items-center justify-between rounded-2xl border border-white/10 bg-[#121418]/70 backdrop-blur-xl px-6 py-4 shadow-2xl">
          <a
            href="#hero"
            className="font-serif text-xl tracking-wider text-[#d4af37]"
          >
            ESHANI<span className="text-white">P.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            <a
              href="#about"
              className="hover:text-[#d4af37] transition-colors"
            >
              Profile
            </a>
            <a
              href="#strengths"
              className="hover:text-[#d4af37] transition-colors"
            >
              Strengths
            </a>
            <a
              href="#career"
              className="hover:text-[#d4af37] transition-colors"
            >
              Experience
            </a>
            <a
              href="#education"
              className="hover:text-[#d4af37] transition-colors"
            >
              Education
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-xl bg-[#d4af37] px-5 py-2.5 text-xs font-bold text-black uppercase tracking-wider hover:bg-[#b59328] transition-all transform hover:scale-105"
          >
            Direct Contact
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative z-10 pt-36 pb-24 px-6 sm:px-12 max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] text-xs font-medium tracking-widest uppercase mb-6"
            >
              <GraduationCap size={14} />
              Commerce Graduate
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-none tracking-tight text-white"
            >
              Eshani
              <br />
              <span className="italic font-light text-[#d4af37]">
                Pramoda
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed"
            >
              Commerce graduate from the University of Sri Jayewardenepura
              with a strong grounding in commercial principles, financial
              concepts, and business operations, complemented by practical IT
              training and office technology certifications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-white text-black px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#d4af37] transition-all"
              >
                <Mail size={16} />
                Get In Touch
              </a>

              <a
                href="#career"
                className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-all"
              >
                Explore Journey
                <ArrowDownRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* PORTRAIT DISPLAY */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-3/4 w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-white/15 p-3 bg-zinc-900/50 shadow-2xl"
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/eshani-pramoda/eshani-pramoda.png"
                  alt="Eshani Pramoda"
                  fill
                  priority
                  className="object-cover object-center grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#0a0b0d] via-transparent to-transparent opacity-90" />
              </div>

              <div className="absolute bottom-8 left-8 right-8 bg-[#121418]/90 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37]">
                  Professional Focus
                </p>

                <p className="font-serif text-lg text-white mt-1">
                  Commerce & Business Operations
                </p>

                <p className="text-xs text-zinc-400 mt-0.5">
                  Administrative & IT Skills
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PERSONAL INFORMATION / PROFILE */}
      <section
        id="about"
        className="relative z-10 border-y border-white/10 bg-[#121418]/50 py-12 px-6 sm:px-12"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <UserRound size={17} className="text-[#d4af37]" />
              <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase">
                Full Name
              </p>
            </div>

            <p className="text-sm text-white leading-relaxed">
              Hewa Meemana Wickramasinghe Eshani Pramoda
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <CalendarDays size={17} className="text-[#d4af37]" />
              <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase">
                Birthday
              </p>
            </div>

            <p className="text-sm text-white">24 / 03 / 1996</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Users size={17} className="text-[#d4af37]" />
              <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase">
                Marital Status
              </p>
            </div>

            <p className="text-sm text-white">Married</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={17} className="text-[#d4af37]" />
              <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase">
                Location
              </p>
            </div>

            <p className="text-sm text-white">Kalutara South, Sri Lanka</p>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="relative z-10 py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Profile
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl text-white mt-2">
              A Foundation in Commerce
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Driven Commerce graduate from the University of Sri
              Jayewardenepura with a strong grounding in commercial principles,
              financial concepts, and business operations. Complemented by
              practical IT training at Sri Lanka Telecom PLC and certifications
              in office software and communication.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mt-6">
              Seeking an opportunity to leverage analytical abilities, data
              accuracy, and administrative skills to contribute effectively to
              business operations and financial function teams.
            </p>
          </div>
        </div>
      </section>

      {/* CORE STRENGTHS */}
      <section
        id="strengths"
        className="relative z-10 py-28 px-6 sm:px-12 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Professional Strengths
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl text-white mt-2">
              Skills & Capabilities
            </h2>
          </div>

          <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
            Combining commerce education, practical computer training, and
            strong interpersonal skills to support modern business operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength) => {
            const Icon = strength.icon;

            return (
              <div
                key={strength.number}
                className="group relative rounded-2xl border border-white/10 bg-[#121418] p-8 hover:border-[#d4af37]/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-[#d4af37]">
                    {strength.number}
                  </span>

                  <Icon
                    className="text-zinc-500 group-hover:text-[#d4af37] transition-colors"
                    size={24}
                  />
                </div>

                <h3 className="font-serif text-xl text-white mt-8">
                  {strength.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CAREER */}
      <section
        id="career"
        className="relative z-10 py-28 px-6 sm:px-12 border-t border-white/10 bg-[#121418]/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Work & Training Experience
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl text-white mt-2">
              Professional Experience
            </h2>
          </div>

          <div className="grid gap-6">
            {careerHighlights.map((job, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-white/10 bg-[#121418] p-8 hover:bg-zinc-900/80 transition-all"
              >
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-3">
                    <span className="text-xs font-mono text-[#d4af37]">
                      {job.period}
                    </span>

                    <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
                      <MapPin size={12} />
                      {job.location}
                    </p>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl text-white group-hover:text-[#d4af37] transition-colors">
                      {job.role}
                    </h3>

                    <p className="text-sm text-zinc-400 mt-2">
                      {job.company}
                    </p>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {job.highlight}
                    </p>

                    <p className="text-xs text-zinc-500 leading-relaxed mt-4">
                      {job.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="relative z-10 py-28 px-6 sm:px-12 max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Academic Background
            </span>

            <h2 className="font-serif text-4xl text-white mt-2 mb-8">
              Education
            </h2>

            <div className="space-y-4">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-[#121418] p-6 hover:border-[#d4af37]/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-[#d4af37] font-bold sm:w-28 shrink-0">
                      {item.period}
                    </span>

                    <div>
                      <h4 className="font-serif text-lg text-white">
                        {item.title}
                      </h4>

                      {item.subtitle && (
                        <p className="text-xs text-zinc-300 mt-1">
                          {item.subtitle}
                        </p>
                      )}

                      <p className="text-xs italic text-zinc-400 mt-1">
                        {item.institute}
                      </p>

                      {item.details && (
                        <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
                          {item.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Professional Certifications
            </span>

            <h2 className="font-serif text-4xl text-white mt-2 mb-8">
              Certifications
            </h2>

            <div className="space-y-5">
              {certifications.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-[#121418] p-6"
                >
                  <div className="flex items-start gap-4">
                    <ShieldCheck
                      size={20}
                      className="text-[#d4af37] shrink-0 mt-1"
                    />

                    <div>
                      <h4 className="font-serif text-base text-white leading-relaxed">
                        {item.title}
                      </h4>

                      <p className="text-xs italic text-zinc-400 mt-2">
                        {item.institute}
                      </p>

                      <p className="text-xs text-zinc-500 mt-1">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER + SKILLS */}
      <section className="relative z-10 py-28 px-6 sm:px-12 border-t border-white/10 bg-[#121418]/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Community Involvement
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl text-white mt-2">
              Volunteer & Community Service
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121418] p-8 sm:p-10">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <span className="text-xs font-mono text-[#d4af37]">
                  SEPTEMBER 2017
                </span>
              </div>

              <div className="md:col-span-5">
                <h3 className="font-serif text-xl text-white">
                  Evaluation Panelist / Volunteer
                </h3>

                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  Department of Buddhist Affairs & Regional Sasana Arakshaka
                  Mandalaya
                </p>
              </div>

              <div className="md:col-span-4">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Evaluated regional Dhamma School student competitions.
                </p>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="grid lg:grid-cols-12 gap-12 mt-20">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Key Skills
              </span>

              <h2 className="font-serif text-4xl text-white mt-2 mb-8">
                Professional Skills
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#121418] p-5"
                  >
                    <CheckCircle2
                      size={17}
                      className="text-[#d4af37] shrink-0"
                    />

                    <span className="text-sm text-zinc-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* REFERENCE */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Professional Reference
              </span>

              <h2 className="font-serif text-4xl text-white mt-2 mb-8">
                Reference
              </h2>

              <div className="rounded-2xl border border-white/10 bg-[#121418] p-7">
                <p className="font-serif text-xl text-white">Dilshan Dilanka Perera</p>

                <p className="text-sm text-[#d4af37] mt-1">Full-Stack Developer, Founder - AxoviaLabs</p>

                <div className="mt-6 space-y-3 text-xs text-zinc-400">
                  <p className="flex items-center gap-3">
                    <Phone size={14} className="text-[#d4af37]" />
                    076 684 8419
                  </p>

                  <p className="flex items-center gap-3">
                    <Mail size={14} className="text-[#d4af37]" />
                    dilanka@axovialabs.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="relative z-10 border-t border-white/10 bg-[#070809] py-24 px-6 sm:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
            Contact
          </span>

          <h2 className="font-serif text-5xl sm:text-6xl text-white mt-4">
            Let&apos;s Connect
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 mt-6 leading-relaxed max-w-2xl mx-auto">
            Open to opportunities where commerce knowledge, administrative
            capabilities, computer skills, and effective communication can
            contribute to business operations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:eshaniwickramasinghe001@gmail.com"
              className="inline-flex items-center gap-2 bg-[#d4af37] text-black px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#b59328] transition-all"
            >
              <Mail size={16} />
              eshaniwickramasinghe001@gmail.com
            </a>

            <a
              href="tel:+94779034611"
              className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-all"
            >
              <Phone size={16} />
              077 903 4611
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-[#d4af37]" />
              No. 20/5, Mihikathawatta, Kithulawa, Kalutara South
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600">
            <p>© {new Date().getFullYear()} Eshani Pramoda.</p>

            <a
              href="#hero"
              className="mt-4 sm:mt-0 flex items-center gap-1 hover:text-[#d4af37] transition-colors"
            >
              Back to top
              <ArrowUp size={12} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}