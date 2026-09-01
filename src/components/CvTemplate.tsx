// "use client";

// import type { ReactNode } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// type Experience = {
//   role: string;
//   org: string;
//   period: string;
//   summary: string;
// };

// type Education = {
//   program: string;
//   school: string;
//   period: string;
// };

// type SkillGroup = {
//   title: string;
//   items: string[];
// };

// export type CvData = {
//   name: string;
//   title: string;
//   location: string;
//   summary: string;
//   photo?: string;
//   email?: string;
//   phone?: string;
//   links?: { label: string; url: string }[];
//   skills?: string[];
//   skillGroups?: SkillGroup[];
//   languages?: string[];
//   experience: Experience[];
//   education?: Education[];
// };

// function Section({
//   title,
//   children,
//   delay = 0,
// }: {
//   title: string;
//   children: ReactNode;
//   delay?: number;
// }) {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 16 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-60px" }}
//       transition={{ duration: 0.5, delay, ease: "easeOut" }}
//       className="border-t border-border py-10 first:border-t-0 first:pt-0"
//     >
//       <h2 className="font-display text-sm font-medium tracking-wide text-muted">
//         {title}
//       </h2>
//       <div className="mt-5">{children}</div>
//     </motion.section>
//   );
// }

// export default function CvTemplate({ data }: { data: CvData }) {
//   return (
//     <main className="min-h-screen bg-background px-6 py-16 text-foreground sm:px-10">
//       <div className="mx-auto max-w-2xl">
//         <motion.header
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
//         >
//           <div>
//             <h1 className="font-display text-4xl font-semibold sm:text-5xl">
//               {data.name}
//             </h1>
//             <p className="mt-2 text-lg text-muted">{data.title}</p>
//             <p className="mt-1 text-sm text-muted">{data.location}</p>

//             <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
//               {data.email && (
//                 <a
//                   href={`mailto:${data.email}`}
//                   className="text-accent transition hover:opacity-80"
//                 >
//                   {data.email}
//                 </a>
//               )}
//               {data.phone && <span className="text-muted">{data.phone}</span>}
//               {data.links?.map((link) => (
//                 <a
//                   key={link.url}
//                   href={link.url}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-accent transition hover:opacity-80"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {data.photo && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-1 ring-border sm:h-28 sm:w-28"
//             >
//               <Image
//                 src={data.photo}
//                 alt={data.name}
//                 fill
//                 sizes="112px"
//                 className="object-cover"
//                 priority
//               />
//             </motion.div>
//           )}
//         </motion.header>

//         <div className="mt-12">
//           <Section title="Profile">
//             <p className="max-w-prose leading-relaxed text-foreground/90">
//               {data.summary}
//             </p>
//           </Section>

//           <Section title="Experience" delay={0.05}>
//             <div className="space-y-8">
//               {data.experience.map((job) => (
//                 <div key={`${job.org}-${job.role}`}>
//                   <div className="flex flex-wrap items-baseline justify-between gap-x-4">
//                     <h3 className="font-medium">
//                       {job.role} · {job.org}
//                     </h3>
//                     <span className="text-sm text-muted">{job.period}</span>
//                   </div>
//                   <p className="mt-2 max-w-prose text-sm leading-relaxed text-foreground/80">
//                     {job.summary}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </Section>

//           {data.education && data.education.length > 0 && (
//             <Section title="Education" delay={0.05}>
//               <div className="space-y-4">
//                 {data.education.map((edu) => (
//                   <div
//                     key={`${edu.school}-${edu.program}`}
//                     className="flex flex-wrap items-baseline justify-between gap-x-4"
//                   >
//                     <h3 className="font-medium">{edu.program}</h3>
//                     <span className="text-sm text-muted">
//                       {edu.school} · {edu.period}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {data.skillGroups && data.skillGroups.length > 0 ? (
//             <Section title="Skills" delay={0.05}>
//               <div className="space-y-6">
//                 {data.skillGroups.map((group) => (
//                   <div key={group.title}>
//                     <h3 className="text-sm font-medium text-foreground/70">
//                       {group.title}
//                     </h3>
//                     <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-2 text-sm text-foreground/90">
//                       {group.items.map((skill, i) => (
//                         <li key={skill} className="flex items-center gap-3">
//                           {skill}
//                           {i < group.items.length - 1 && (
//                             <span className="text-border">/</span>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </Section>
//           ) : data.skills && data.skills.length > 0 ? (
//             <Section title="Skills" delay={0.05}>
//               <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-foreground/90">
//                 {data.skills.map((skill, i) => (
//                   <li key={skill} className="flex items-center gap-3">
//                     {skill}
//                     {i < data.skills!.length - 1 && (
//                       <span className="text-border">/</span>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </Section>
//           ) : null}

//           {data.languages && data.languages.length > 0 && (
//             <Section title="Languages" delay={0.05}>
//               <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-foreground/90">
//                 {data.languages.map((lang, i) => (
//                   <li key={lang} className="flex items-center gap-3">
//                     {lang}
//                     {i < data.languages!.length - 1 && (
//                       <span className="text-border">/</span>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </Section>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Experience = {
  role: string;
  org: string;
  period: string;
  summary?: string;
};

type Education = {
  program: string;
  school: string;
  period: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

export type CvData = {
  name: string;
  title: string;
  location: string;
  summary: string;
  photo?: string;
  email?: string;
  phone?: string;
  links?: { label: string; url: string }[];
  skills?: string[];
  skillGroups?: SkillGroup[];
  languages?: string[];
  experience: Experience[];
  education?: Education[];
  highlights?: string[];
};

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay,
        ease: "easeOut",
      }}
      className="cv-section border-t border-border py-8 sm:py-9"
    >
      <div className="grid gap-5 sm:grid-cols-[150px_1fr] sm:gap-8">
        <h2 className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          {title}
        </h2>

        <div>{children}</div>
      </div>
    </motion.section>
  );
}

function ContactLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
}

export default function CvTemplate({ data }: { data: CvData }) {
  return (
    <main className="min-h-screen bg-background px-4 py-6 text-foreground sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-5xl">
        {/* CV PAPER */}
        <div className="cv-paper overflow-hidden rounded-2xl border border-border bg-background shadow-sm print:rounded-none print:border-0 print:shadow-none">
          {/* HEADER */}
          <motion.header
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border-b border-border px-6 py-8 sm:px-10 sm:py-10 lg:px-12"
          >
            <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Curriculum Vitae
                </p>

                <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {data.name}
                </h1>

                <p className="mt-2 text-base font-medium text-muted sm:text-lg">
                  {data.title}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted sm:text-sm">
                  <span>{data.location}</span>

                  {data.email && (
                    <>
                      <span className="hidden text-border sm:inline">•</span>
                      <ContactLink href={`mailto:${data.email}`}>
                        {data.email}
                      </ContactLink>
                    </>
                  )}

                  {data.phone && (
                    <>
                      <span className="hidden text-border sm:inline">•</span>
                      <ContactLink
                        href={`tel:${data.phone.replace(/\s/g, "")}`}
                      >
                        {data.phone}
                      </ContactLink>
                    </>
                  )}

                  {data.links?.map((link) => (
                    <span key={link.url} className="contents">
                      <span className="hidden text-border sm:inline">•</span>

                      <ContactLink href={link.url}>
                        {link.label}
                      </ContactLink>
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="mt-6 flex flex-wrap gap-2.5 print:hidden">
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      window.print();
                    }}
                    className="inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-80"
                  >
                    Print / Save PDF
                  </a>
                </div>
              </div>

              {data.photo && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                  className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-muted/20 ring-1 ring-border sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                >
                  <Image
                    src={data.photo}
                    alt={`${data.name} professional portrait`}
                    fill
                    sizes="144px"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              )}
            </div>
          </motion.header>

          {/* CONTENT */}
          <div className="px-6 sm:px-10 lg:px-12">
            {/* PROFILE */}
            <Section title="Profile">
              <p className="max-w-3xl text-sm leading-7 text-foreground/85 sm:text-[15px]">
                {data.summary}
              </p>
            </Section>

            {/* HIGHLIGHTS */}
            {data.highlights && data.highlights.length > 0 && (
              <Section title="Highlights" delay={0.03}>
                <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {data.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="relative pl-5 text-sm leading-6 text-foreground/85"
                    >
                      <span className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* EXPERIENCE */}
            <Section title="Experience" delay={0.05}>
              <div className="space-y-8">
                {data.experience.map((job, index) => (
                  <article
                    key={`${job.org}-${job.role}-${index}`}
                    className="relative"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div>
                        <h3 className="text-sm font-semibold leading-6 sm:text-[15px]">
                          {job.role}
                        </h3>

                        <p className="text-sm text-muted">
                          {job.org}
                        </p>
                      </div>

                      <span className="shrink-0 text-xs font-medium text-muted sm:pt-1">
                        {job.period}
                      </span>
                    </div>

                    {job.summary && (
                      <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/75">
                        {job.summary}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </Section>

            {/* EDUCATION */}
            {data.education && data.education.length > 0 && (
              <Section title="Education" delay={0.05}>
                <div className="space-y-5">
                  {data.education.map((edu, index) => (
                    <article
                      key={`${edu.school}-${edu.program}-${index}`}
                      className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                    >
                      <div>
                        <h3 className="text-sm font-semibold leading-6 sm:text-[15px]">
                          {edu.program}
                        </h3>

                        <p className="text-sm text-muted">
                          {edu.school}
                        </p>
                      </div>

                      <span className="shrink-0 text-xs font-medium text-muted sm:pt-1">
                        {edu.period}
                      </span>
                    </article>
                  ))}
                </div>
              </Section>
            )}

            {/* SKILLS + LANGUAGES */}
            {(data.skillGroups?.length ||
              data.skills?.length ||
              data.languages?.length) && (
              <Section title="Expertise" delay={0.05}>
                <div className="grid gap-8 lg:grid-cols-[1fr_220px]">
                  <div>
                    {data.skillGroups &&
                      data.skillGroups.length > 0 ? (
                        <div className="space-y-7">
                          {data.skillGroups.map((group) => (
                            <div key={group.title}>
                              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                                {group.title}
                              </h3>

                              <div className="mt-3 flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                  <span
                                    key={skill}
                                    className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground/80"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {data.skills?.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground/80"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>

                  {data.languages && data.languages.length > 0 && (
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        Languages
                      </h3>

                      <div className="mt-3 space-y-2.5">
                        {data.languages.map((language) => (
                          <div
                            key={language}
                            className="text-sm text-foreground/85"
                          >
                            {language}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Section>
            )}

            {/* FOOTER */}
            <footer className="border-t border-border py-6 text-center text-[10px] uppercase tracking-[0.15em] text-muted">
              Professional CV · {data.name}
            </footer>
          </div>
        </div>
      </div>

      {/* PRINT STYLES */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }

          html,
          body {
            background: white !important;
          }

          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          main {
            min-height: auto !important;
            padding: 0 !important;
          }

          .cv-paper {
            width: 100% !important;
            max-width: none !important;
            overflow: visible !important;
          }

          .cv-section {
            break-inside: avoid;
          }

          a {
            color: inherit !important;
            text-decoration: none !important;
          }

          .cv-section,
          footer {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}