"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  FileText,
  Globe,
  MessageCircle,
  Search,
  // Sparkles,
  Store,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: FileText,
    title: "Professional Profiles",
    description:
      "Modern CVs, ATS-friendly resumes, and polished online profiles that help professionals present their experience with confidence.",
    tags: ["Modern CVs", "ATS-Friendly", "Online Profiles"],
  },
  {
    number: "02",
    icon: Store,
    title: "Business Presence",
    description:
      "A professional single-page web presence for businesses that want to be found online without the cost or complexity of a full website.",
    tags: ["Business Page", "Hosting", "SEO"],
  },
];

const works = [
    {
    title: "Hospitality CV",
    category: "Modern CV",
    image: "/samples/portfolios/portfolio-02.png",
    href: "/portfolio-samples/sample1",
  },
  {
    title: "Professional Profile",
    category: "Online Profile",
    image: "/samples/portfolios/portfolio-01.png",
    href: "/portfolio-samples/sample2",
  },
  {
    title: "Professional Resume",
    category: "ATS-Friendly CV",
    image: "/samples/portfolios/portfolio-03.png",
    href: "/portfolio-samples/sample4",
  },
];

const businessFeatures = [
  "Professional business identity",
  "Custom single-page design",
  "Hosted on ProHub",
  "Search-engine friendly structure",
  "Business information & services",
  "Google Maps location",
  "WhatsApp contact button",
  "Social media links",
  "Business hours",
  "Customer reviews",
  "FAQ section",
  "Ongoing technical support",
];

const steps = [
  {
    number: "01",
    title: "Share your details",
    description:
      "Send us your business information, logo, contact details, services, photos, social links, and anything else you want customers to know.",
  },
  {
    number: "02",
    title: "We build your presence",
    description:
      "We design and build a professional page around your business, making the important information easy for customers to find.",
  },
  {
    number: "03",
    title: "We optimize & publish",
    description:
      "We handle the hosting, technical setup, mobile responsiveness, and basic SEO before publishing your page.",
  },
  {
    number: "04",
    title: "Share your identity",
    description:
      "Your business gets a professional web address you can share on Google, WhatsApp, Facebook, Instagram, business cards, and more.",
  },
];

const professionalBenefits = [
  "Professional, modern designs",
  "Personalized to your career",
  "ATS-conscious CV formatting",
  "Easy-to-share online profiles",
  "Mobile-friendly profiles",
  "Clear professional presentation",
];

const businessBenefits = [
  "Works with or without an existing website",
  "Low-cost alternative to a full website",
  "Professional online identity",
  "Built with search visibility in mind",
  "Hosted and maintained by ProHub",
  "Easy to share with customers",
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://professionalhub.space/#organization",
        name: "ProHub",
        url: "https://professionalhub.space",
        logo: "https://professionalhub.space/prohub-logo.svg",
        description:
          "ProHub creates professional profiles, modern CVs, ATS-friendly resumes, and business pages for professionals and businesses.",
        email: "professionalhub.space@gmail.com",
      },
      {
        "@type": "WebSite",
        "@id": "https://professionalhub.space/#website",
        url: "https://professionalhub.space",
        name: "ProHub",
        publisher: {
          "@id": "https://professionalhub.space/#organization",
        },
        description:
          "Professional profiles and business identities, made simple.",
        inLanguage: "en",
      },
      {
        "@type": "Service",
        name: "Professional Profiles",
        provider: {
          "@id": "https://professionalhub.space/#organization",
        },
        description:
          "Modern CVs, ATS-friendly resumes, and professional online profiles designed to present experience and qualifications clearly.",
        serviceType: "Professional Profile Creation",
      },
      {
        "@type": "Service",
        name: "Business Presence",
        provider: {
          "@id": "https://professionalhub.space/#organization",
        },
        description:
          "Professional single-page business pages with hosting, search-friendly structure, contact information, services, social links, and more.",
        serviceType: "Business Web Presence",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />    
      
      <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-75 h-150 w-150 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-[10%] right-50 h-125 w-125 rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>

      {/* Navbar */}
      <nav className="border-b border-white/6">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold">
              PH
            </div>

            <span className="text-lg font-semibold tracking-tight">
              PROHUB
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-white/60 sm:flex">
            <a
              href="#services"
              className="transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#business"
              className="transition hover:text-white"
            >
              For Businesses
            </a>

            <a
              href="#work"
              className="transition hover:text-white"
            >
              Our Work
            </a>

            <a
              href="#process"
              className="transition hover:text-white"
            >
              How It Works
            </a>
          </div>

          <a
            href="https://wa.me/773312721"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <MessageCircle size={16} />
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative isolate overflow-hidden px-6 pb-32 pt-24 sm:px-10 sm:pb-40 sm:pt-32">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -z-10 h-162.5 w-225 -translate-x-1/2">
          <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(ellipse 70% 55% at 50% 20%, black 20%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 20%, black 20%, transparent 75%)" }} />
        <motion.div aria-hidden className="pointer-events-none absolute left-1/2 top-24 -z-10 h-105 w-105 -translate-x-1/2 rounded-full border border-blue-400/6" animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

        <div className="mx-auto max-w-6xl text-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/6 px-4 py-2 text-sm text-blue-300 backdrop-blur-sm">
              <motion.span className="h-1.5 w-1.5 rounded-full bg-blue-400" animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
              Built for professionals & businesses
            </div>

            <motion.h1 initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} className="mx-auto max-w-5xl text-6xl font-semibold tracking-[-0.065em] sm:text-8xl lg:text-[7rem]">
              PRO<span className="text-white/35">HUB</span>
            </motion.h1>

            <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }} className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Your professional identity.
              <span className="relative mt-2 block bg-linear-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">Built to be discovered.</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }} className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
              Professional digital identities for people and businesses - from polished CVs and online profiles to search-friendly business pages built for the web.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="https://wa.me/773312721" target="_blank" rel="noreferrer" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-medium shadow-[0_0_35px_rgba(37,99,235,0.18)] transition duration-300 hover:bg-blue-500 hover:shadow-[0_0_45px_rgba(37,99,235,0.28)] sm:w-auto">
                <MessageCircle size={17} />
                Talk to ProHub
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#services" className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/2 px-7 py-3.5 text-sm font-medium text-white/70 backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/4 hover:text-white sm:w-auto">
                Explore Services
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }} className="mt-10 flex items-center justify-center gap-3 text-xs text-white/25">
              <span className="h-px w-8 bg-white/10" />
              Designed · Hosted · Optimized by ProHub
              <span className="h-px w-8 bg-white/10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is ProHub? */}
      <section className="border-t border-white/6 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">What is ProHub?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">One place for your professional identity.</h2>
            <p className="mt-5 max-w-6xl leading-7 text-white/50">ProHub gives you a dedicated online presence without the complexity of building and managing a website yourself. We design it, host it, optimize it, and keep it ready to share.</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[["01", "You", "Your information, experience, services and brand."], ["02", "ProHub", "We turn it into a polished digital identity."], ["03", "The web", "One professional page you can share anywhere."]].map(([number, title, description], index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#0b0e14] p-7">
                <span className="text-xs font-medium tracking-widest text-blue-400">{number}</span>
                <h3 className="mt-8 text-2xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two services */}
      <section
        id="services"
        className="border-t border-white/6 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Two ways to build a stronger digital identity.
            </h2>

            <p className="mt-5 leading-7 text-white/50">
              Whether you&apos;re building your career or building a business,
              ProHub gives you a professional place on the web.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-white/8 bg-[#0b0e14] p-8 transition hover:border-blue-400/20 hover:bg-[#0d1119] sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-blue-400">
                      <Icon size={21} />
                    </div>

                    <span className="text-sm text-white/20">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-medium">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/45">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-xs text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your ProHub Page */}
      <section className="border-t border-white/6 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">Your ProHub page</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">A professional page that feels like yours.</h2>
            <p className="mt-5 max-w-xl leading-7 text-white/50">Your ProHub presence is designed around your identity - not a generic template. Keep the important information together and give people one place to learn about you.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Custom visual identity", "About & experience", "Services & information", "Contact & social links"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400"><Check size={13} /></div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-130">
            <div aria-hidden className="absolute -inset-10 rounded-full bg-blue-600/10 blur-[90px]" />
            <motion.div initial={{ opacity: 0, y: 25, rotate: 1 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#0b0e14] p-4 shadow-2xl sm:p-5">
              <div className="rounded-3xl border border-white/8 bg-[#080a0f] p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-white/8 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold">PH</div>
                    <div><p className="text-sm font-semibold">YOUR BUSINESS</p><p className="text-xs text-white/35">prohub.space/yourbusiness</p></div>
                  </div>
                  <Globe size={17} className="text-white/20" />
                </div>
                <div className="py-8">
                  <div className="h-2 w-20 rounded-full bg-blue-400/40" />
                  <div className="mt-4 h-7 w-4/5 rounded-lg bg-white/8" />
                  <div className="mt-3 h-3 w-full rounded-full bg-white/5" />
                  <div className="mt-2 h-3 w-11/12 rounded-full bg-white/5" />
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/8 bg-white/2.5 p-4"><div className="h-2 w-12 rounded-full bg-white/15" /><div className="mt-3 h-2 w-20 rounded-full bg-white/5" /></div>
                    <div className="rounded-xl border border-white/8 bg-white/2.5 p-4"><div className="h-2 w-12 rounded-full bg-white/15" /><div className="mt-3 h-2 w-16 rounded-full bg-white/5" /></div>
                  </div>
                </div>
                <div className="flex gap-2 border-t border-white/8 pt-5">
                  <div className="h-9 flex-1 rounded-full bg-blue-600/80" />
                  <div className="h-9 w-24 rounded-full border border-white/10 bg-white/3" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Presence */}
      <section
        id="business"
        className="border-t border-white/6 px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/6 px-4 py-2 text-sm text-blue-300">
                <Globe size={15} />
                For Businesses
              </div>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
                Your business deserves a place on the web.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
                You don&apos;t need an expensive website to look professional
                online. We create a dedicated business page, host it for you,
                and optimize it to help customers discover your business.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/773312721"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium transition hover:bg-blue-500"
                >
                  <MessageCircle size={17} />
                  Create My Business Page
                </a>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/50">
                  <Search size={16} />
                  Built with search visibility in mind
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/8 bg-[#0b0e14] p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-white/8 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-400">
                    Business Presence
                  </p>

                  <p className="mt-1 font-medium">
                    YourBusiness.prohub
                  </p>
                </div>

                <Globe
                  size={20}
                  className="text-white/20"
                />
              </div>

              <div className="space-y-3">
                {businessFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/60"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                      <Check size={12} />
                    </div>

                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business benefits */}
      <section className="border-t border-white/6 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
              Why ProHub for businesses
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              More than a website. A professional identity.
            </h2>

            <p className="mt-5 leading-7 text-white/50">
              Your ProHub business page gives customers a central place to
              understand who you are, what you offer, and how to reach you.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {businessBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-xl border border-white/7 bg-white/2 px-4 py-4 text-sm text-white/65"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <Check size={14} />
                </div>

                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section
        id="work"
        className="border-t border-white/6 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
              Our work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Designed to represent you well.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/50">
              A selection of professional CVs and digital profiles created by
              ProHub.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {works.map((work, index) => (
              <motion.a
                key={work.title}
                href={work.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/8 bg-[#0d1017]">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-5 pt-16">
                    <span className="text-xs uppercase tracking-wider text-blue-300">
                      {work.category}
                    </span>

                    <h3 className="mt-1 font-medium">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* One link. Everywhere. */}
      <section className="border-t border-white/6 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">One link. Everywhere.</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Your identity should be easy to share.</h2>
            <p className="mt-5 leading-7 text-white/50">Put your ProHub page where people already look for you. In messages, social profiles, email signatures, business cards, QR codes and more.</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {["Google", "WhatsApp", "Facebook", "Instagram", "LinkedIn", "Business Cards", "QR Codes", "Email"].map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className="rounded-full border border-white/8 bg-white/2.5 px-5 py-3 text-sm text-white/55">{item}</motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="border-t border-white/6 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
              How it works
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              You provide the information. We handle the rest.
            </h2>

            <p className="mt-5 leading-7 text-white/50">
              No complicated dashboards. No technical work for you. We design,
              build, host, optimize, and maintain your ProHub presence.
            </p>
          </div>

          <div className="mt-14 grid gap-10 border-t border-white/8 pt-10 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-sm font-medium text-blue-400">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-medium">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Profiles */}
      <section className="border-t border-white/6 px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
              For Professionals
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Your career deserves a better presentation.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/50">
              Turn your experience and qualifications into a polished CV and
              professional online identity that you can share anywhere.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {professionalBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-xl border border-white/7 bg-white/2 px-4 py-4 text-sm text-white/65"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <Check size={14} />
                </div>

                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/6 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Questions, answered.</h2>
            <p className="mt-5 max-w-md leading-7 text-white/50">Everything you need to know before getting your ProHub identity online.</p>
          </div>
          <div className="divide-y divide-white/8 rounded-2xl border border-white/8 bg-[#0b0e14] px-6">
            {[
              ["Do I need my own website?", "No. ProHub can provide your dedicated online presence without requiring you to build a separate website."],
              ["Can I use ProHub if I already have a website?", "Yes. Your ProHub page can complement your existing website and act as a focused professional identity or shareable profile."],
              ["Can businesses use ProHub?", "Yes. Businesses can use ProHub for a professional business page containing their information, services, contact details and other important links."],
              ["Do I have to manage the page myself?", "No. ProHub is designed to handle the technical side, including the setup and hosting, so you can focus on your work."],
              ["Can I share my ProHub page anywhere?", "Yes. Your page is built to be shared through social media, messaging apps, QR codes, business cards, email and other channels."],
            ].map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-white/80">
                  {question}
                  <span className="text-xl font-light text-white/30 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-2xl pr-8 text-sm leading-6 text-white/45">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-400/10 bg-linear-to-br from-blue-600/15 via-[#0b101a] to-indigo-600/10 px-6 py-16 text-center sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]"
          />

          <div className="relative">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
              Get started
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Your professional identity starts here.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/50">
              Whether you&apos;re building your career or growing your business, ProHub gives you a professional place to be found.
            </p>

            <a
              href="https://wa.me/773312721"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-medium transition hover:bg-blue-500"
            >
              <MessageCircle size={17} />
              Chat with ProHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/6 px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="font-semibold tracking-tight">PROHUB</div>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/35">Professional profiles and business identities, made simple.</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/30">For Professionals</p>
              <div className="mt-4 space-y-2 text-sm text-white/45"><a href="#services" className="block transition hover:text-white">Professional Profiles</a><a href="#work" className="block transition hover:text-white">CVs & Resumes</a></div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/30">For Businesses</p>
              <div className="mt-4 space-y-2 text-sm text-white/45"><a href="#business" className="block transition hover:text-white">Business Pages</a><a href="#process" className="block transition hover:text-white">How It Works</a></div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/6 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} ProHub. All rights reserved.</p>
            <p>Professional identity, made simple.</p>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}