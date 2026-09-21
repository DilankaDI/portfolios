'use client';

import React, { useState } from "react";
import Image from "next/image";
import {
  Layout,
  Smartphone,
  Globe,
  PenTool,
  Layers,
  Download,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaFigma,
  FaFacebook,
} from "react-icons/fa6";

export default function DarkOrangePortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const services = [
    {
      icon: Layout,
      title: "UI Design",
      description: "Crafting intuitive and modern user interfaces for web platforms.",
    },
    {
      icon: Smartphone,
      title: "App Design",
      description: "Designing seamless mobile experiences for iOS and Android.",
    },
    {
      icon: Globe,
      title: "Web Design",
      description: "Building responsive, modern, and high-converting website layouts.",
    },
    {
      icon: PenTool,
      title: "UX Design",
      description: "Conducting user research, wireframing, and interactive prototyping.",
    },
    {
      icon: Layers,
      title: "App Design",
      description: "Creating comprehensive design systems and component libraries.",
    },
    {
      icon: FaFigma,
      title: "App Design",
      description: "Delivering pixel-perfect Figma designs ready for development.",
    },
  ];

  const skills = [
    { name: "Figma", percentage: 100, icon: "100%" },
    { name: "Adobe XD", percentage: 100, icon: "100%" },
    { name: "Adobe Photoshop", percentage: 85, icon: "85%" },
    { name: "Adobe Illustrator", percentage: 60, icon: "60%" },
    { name: "Adobe Premiere Pro", percentage: 70, icon: "70%" },
  ];

  const categories = ["All", "UI Design", "UX/UI Design", "Web Design", "App Design"];

  const portfolioItems = [
    { title: "Dashboard UI", category: "UI Design", img: "/samples/portfolios/sample2.jpg" },
    { title: "Mobile Banking App", category: "App Design", img: "/samples/portfolios/sample2.jpg" },
    { title: "SaaS Landing Page", category: "Web Design", img: "/samples/portfolios/sample2.jpg" },
    { title: "E-Commerce App", category: "App Design", img: "/samples/portfolios/sample2.jpg" },
    { title: "Analytics Platform", category: "UX/UI Design", img: "/samples/portfolios/sample2.jpg" },
    { title: "Crypto Wallet UI", category: "UI Design", img: "/samples/portfolios/sample2.jpg" },
    { title: "Health & Fitness App", category: "App Design", img: "/samples/portfolios/sample2.jpg" },
    { title: "Agency Portfolio", category: "Web Design", img: "/samples/portfolios/sample2.jpg" },
    { title: "Social Media Platform", category: "UX/UI Design", img: "/samples/portfolios/sample2.jpg" },
  ];

  const filteredPortfolio =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#111111] text-zinc-300 font-sans selection:bg-[#ff5e00] selection:text-white">
      {/* ================= NAVBAR ================= */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#111111]/90 backdrop-blur-md border-b border-zinc-800/50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-xl font-bold tracking-tight text-[#ff5e00]">
            V.I.
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
            <a href="#top" className="transition hover:text-white">Home</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About me</a>
            <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
            <a href="#contact" className="transition hover:text-white">Contact me</a>
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-[#ff5e00] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#e05300]"
          >
            Hire Me
          </a>
        </nav>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section id="top" className="mx-auto max-w-7xl px-6 pt-36 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="text-sm font-medium text-zinc-400">Hi I am</span>
            <p className="mt-1 text-lg font-semibold text-[#ff5e00]">Vishmi Imalsha</p>

            <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              <span className="text-[#ff5e00]">UI/UX</span> designer
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition hover:bg-[#ff5e00] hover:text-white">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition hover:bg-[#ff5e00] hover:text-white">
                <FaXTwitter size={16} />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition hover:bg-[#ff5e00] hover:text-white">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition hover:bg-[#ff5e00] hover:text-white">
                <FaFacebook size={16} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-[#ff5e00] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5e00]/20 transition hover:bg-[#e05300]"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                <Download size={16} /> Download CV
              </a>
            </div>

            {/* HERO STATS */}
            <div className="mt-12 inline-grid grid-cols-3 gap-8 rounded-2xl border border-zinc-800 bg-[#161616] p-6">
              <div>
                <p className="text-2xl font-bold text-[#ff5e00]">3+</p>
                <p className="text-xs text-zinc-400 mt-1">Experiences</p>
              </div>
              <div className="border-x border-zinc-800 px-6">
                <p className="text-2xl font-bold text-[#ff5e00]">20+</p>
                <p className="text-xs text-zinc-400 mt-1">Project Done</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#ff5e00]">80+</p>
                <p className="text-xs text-zinc-400 mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full border-4 border-[#ff5e00]/20 bg-[#181818] shadow-2xl">
              <Image
                src="/samples/portfolios/sample2.jpg"
                alt="Vishmi Imalsha"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Services</h2>
          <p className="mx-auto mt-2 max-w-md text-xs text-zinc-400">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-zinc-800 bg-[#161616] p-6 transition duration-300 hover:border-[#ff5e00]/50 hover:bg-[#1c1c1c]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff5e00]/10 text-[#ff5e00] transition group-hover:bg-[#ff5e00] group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= ABOUT ME SECTION ================= */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* ABOUT IMAGE */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative aspect-3/4 w-full max-w-sm overflow-hidden rounded-3xl border border-zinc-800 bg-[#181818]">
              <Image
                src="/samples/portfolios/sample2.jpg"
                alt="About Me"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="mt-1 text-xs text-zinc-400">
              User experience and User interface Designer
            </p>

            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Eget mollis sit aliquam id facilisis sed. Condimentum vitae orci ultrices sodales mus quam dolor sem. Nisl morbi accumsan quam habitant elementum dolor sodales id. Elementum quis at nec aliquam id amet rhoncus eros.
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block rounded-lg bg-[#ff5e00] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#e05300]"
              >
                Hire Me
              </a>
            </div>

            {/* CIRCULAR SKILL GAUGES */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#ff5e00] bg-zinc-900">
                    <span className="text-sm font-bold text-white">{skill.icon}</span>
                  </div>
                  <span className="mt-3 text-xs font-medium text-zinc-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO SECTION ================= */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Portfolio</h2>
        </div>

        {/* FILTER CATEGORIES */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-lg px-5 py-2 text-xs font-medium transition ${
                activeFilter === cat
                  ? "bg-[#ff5e00] text-white"
                  : "bg-[#181818] text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PORTFOLIO GRID */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPortfolio.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#161616] p-3 transition hover:border-[#ff5e00]/50"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-zinc-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <span className="text-[10px] uppercase tracking-wider text-[#ff5e00]">
                  {item.category}
                </span>
                <h3 className="mt-1 font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
            <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
            <p className="mt-2 text-xs text-zinc-400">
                Have a project in mind or want to collaborate? Reach out directly.
            </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <a
                href="mailto:vishmixxxxxx@gmail.com"
                className="group flex flex-col items-center rounded-2xl border border-zinc-800 bg-[#161616] p-6 text-center transition hover:border-[#ff5e00]/50 hover:bg-[#1c1c1c]"
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff5e00]/10 text-[#ff5e00] transition group-hover:bg-[#ff5e00] group-hover:text-white">
                <Mail size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-white text-sm">Email Me</h3>
                <p className="mt-1 text-xs text-zinc-400">vishmixxxxxx@gmail.com</p>
            </a>

            <a
                href="tel:+94700000000"
                className="group flex flex-col items-center rounded-2xl border border-zinc-800 bg-[#161616] p-6 text-center transition hover:border-[#ff5e00]/50 hover:bg-[#1c1c1c]"
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff5e00]/10 text-[#ff5e00] transition group-hover:bg-[#ff5e00] group-hover:text-white">
                <Phone size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-white text-sm">Call Me</h3>
                <p className="mt-1 text-xs text-zinc-400">+94 7X XXX XXXX</p>
            </a>

            <div className="group flex flex-col items-center rounded-2xl border border-zinc-800 bg-[#161616] p-6 text-center transition hover:border-[#ff5e00]/50 hover:bg-[#1c1c1c]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff5e00]/10 text-[#ff5e00] transition group-hover:bg-[#ff5e00] group-hover:text-white">
                <MapPin size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-white text-sm">Location</h3>
                <p className="mt-1 text-xs text-zinc-400">Sri Lanka</p>
            </div>
            </div>
        </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-zinc-800/80 bg-[#0a0a0a] px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <a href="#top" className="text-xl font-bold tracking-tight text-[#ff5e00]">
            V.I.
          </a>

          <div className="mt-6 flex flex-wrap justify-center gap-8 text-xs font-medium text-zinc-400">
            <a href="#top" className="transition hover:text-white">Home</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About me</a>
            <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
            <a href="#contact" className="transition hover:text-white">Contact me</a>
          </div>

          <div className="mt-6 flex justify-center gap-4 text-zinc-400">
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 transition hover:text-[#ff5e00]">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 transition hover:text-[#ff5e00]">
              <FaXTwitter size={16} />
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 transition hover:text-[#ff5e00]">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 transition hover:text-[#ff5e00]">
              <FaFacebook size={16} />
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-xs text-zinc-500 sm:flex-row">
            <span className="flex items-center gap-1">
              <Mail size={12} className="text-[#ff5e00]" /> vishmixxxxxx@gmail.com
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Phone size={12} className="text-[#ff5e00]" /> +94 7X XXX XXXX
            </span>
          </div>

          <p className="mt-6 text-[10px] text-zinc-600">
            © {new Date().getFullYear()} V.I. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}