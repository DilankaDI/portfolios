import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATS-Friendly Resume Sample | Sri Lankan Intern Student",
  description:
    "A single-column, ATS-safe resume template for Sri Lankan undergraduates applying to internships.",
};

const projects = [
  {
    title: "Campus Marketplace | Full-stack web app",
    date: "2026",
    bullets: [
      "Built a peer-to-peer buy/sell platform for university students using Next.js, Node.js, and PostgreSQL",
      "Implemented JWT authentication and role-based access for 3 user types",
      "Deployed on Vercel with a CI pipeline via GitHub Actions, reducing release time from manual deploys to under 5 minutes",
    ],
  },
  {
    title: "Attendance Tracker API | Academic group project",
    date: "2025",
    bullets: [
      "Designed a REST API in Express.js with MySQL for a QR-code-based class attendance system used by 40 students",
      "Wrote unit tests with Jest, reaching 80% coverage on core endpoints",
    ],
  },
];

const experience = [
  {
    title: "Freelance Web Developer (Part-time)",
    sub: "Self-employed, Remote",
    date: "Jan 2025 - Present",
    bullets: [
      "Built and maintained WordPress and static React sites for 4 small local businesses",
      "Handled client communication, scoping, and delivery independently alongside coursework",
    ],
  },
  {
    title: "IT Support Volunteer",
    sub: "SLIIT Community Outreach Program",
    date: "Jun 2024 - Aug 2024",
    bullets: [
      "Set up basic computer literacy training materials for a rural school digitization initiative",
    ],
  },
];

// const whyPoints = [
//   {
//     label: "Single column",
//     text: "No side columns or tables - ATS parsers read top to bottom.",
//   },
//   {
//     label: "Standard fonts",
//     text: "Arial/Helvetica-class fonts avoid parsing errors.",
//   },
//   {
//     label: "No graphics",
//     text: "No photo, icons, or skill bars - just text the system can index.",
//   },
//   {
//     label: "Predictable headers",
//     text: '"Education," "Experience," "Skills" - not creative labels.',
//   },
// ];

export default function AtsInternResumeSamplePage() {
  return (
    <>
      <style>{`
        .ats-page {
          --page-bg: #0B0A08;
          --paper: #FDFCFA;
          --ink: #1A1A18;
          --ink-dim: #55524C;
          --rule: #DCD8CF;
          --accent: #1D3F52;
          --site-text: #E7E3D9;
          --site-dim: #8B877C;
          background: var(--page-bg);
          font-family: Arial, Helvetica, "Segoe UI", sans-serif;
          min-height: 100vh;
        }
        .ats-page .shell { max-width: 900px; margin: 0 auto; padding: 72px 24px 100px; }
        .ats-page .site-head { color: var(--site-text); margin-bottom: 12px; }
        .ats-page .site-head .kicker { color: var(--site-dim); font-size: 13px; margin: 0 0 10px; }
        .ats-page .site-head h1 { font-size: 26px; font-weight: 700; margin: 0 0 10px; letter-spacing: -0.01em; }
        .ats-page .site-head p { color: var(--site-dim); font-size: 14.5px; line-height: 1.6; max-width: 62ch; margin: 0; }
        .ats-page .why { display: flex; gap: 10px; flex-wrap: wrap; margin: 28px 0 44px; }
        .ats-page .why div { border: 1px solid #2C2A24; color: var(--site-dim); font-size: 12.5px; padding: 9px 13px; border-radius: 3px; flex: 1 1 200px; }
        .ats-page .why strong { color: var(--site-text); display: block; font-size: 12.5px; margin-bottom: 3px; font-weight: 600; }
        .ats-page .paper { background: var(--paper); color: var(--ink); max-width: 800px; margin: 0 auto; padding: 52px 56px; box-shadow: 0 30px 60px rgba(0,0,0,0.45); line-height: 1.5; }
        .ats-page .r-name { font-size: 24px; font-weight: 700; margin: 0; letter-spacing: 0.01em; }
        .ats-page .r-role { font-size: 14px; color: var(--accent); font-weight: 700; margin: 4px 0 10px; text-transform: uppercase; letter-spacing: 0.04em; }
        .ats-page .r-contact { font-size: 12.5px; color: var(--ink-dim); }
        .ats-page .r-contact span:not(:last-child)::after { content: " | "; color: var(--rule); }
        .ats-page .r-section { margin-top: 26px; }
        .ats-page .r-h2 { font-size: 12.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent); border-bottom: 1.5px solid var(--accent); padding-bottom: 4px; margin: 0 0 12px; }
        .ats-page .r-summary { font-size: 13px; color: var(--ink); margin: 0; }
        .ats-page .r-entry { margin-bottom: 14px; }
        .ats-page .r-entry:last-child { margin-bottom: 0; }
        .ats-page .r-entry-head { display: flex; justify-content: space-between; gap: 12px; font-size: 13px; }
        .ats-page .r-entry-title { font-weight: 700; }
        .ats-page .r-entry-sub { font-size: 12.5px; color: var(--ink-dim); margin-top: 1px; }
        .ats-page .r-entry-date { font-size: 12px; color: var(--ink-dim); white-space: nowrap; }
        .ats-page .r-entry ul { margin: 6px 0 0; padding-left: 18px; font-size: 12.5px; color: var(--ink); }
        .ats-page .r-entry li { margin-bottom: 3px; }
        .ats-page .r-plainlist { font-size: 12.5px; margin: 0; color: var(--ink); }
        .ats-page .r-plainlist div { margin-bottom: 5px; }
        .ats-page .r-plainlist b { font-weight: 700; }
        .ats-page .r-inline { font-size: 12.5px; color: var(--ink); }
        @media (max-width: 640px) {
          .ats-page .paper { padding: 34px 24px; }
          .ats-page .r-entry-head { flex-direction: column; }
          .ats-page .r-entry-date { white-space: normal; }
        }
      `}</style>

      <main className="ats-page">
        <div className="shell">
          {/* <div className="site-head">
            <p className="kicker">Resume templates / Sample</p>
            <h1>ATS-Friendly Resume - Sri Lankan Intern Student</h1>
            <p>
              A single-column, plain-text-safe format built for applicant tracking systems:
              standard section headers, no tables, icons, or photos, and a font that parses
              cleanly when exported to Word or PDF.
            </p>
          </div> */}

          {/* <div className="why">
            {whyPoints.map((w) => (
              <div key={w.label}>
                <strong>{w.label}</strong>
                {w.text}
              </div>
            ))}
          </div> */}

          <div className="paper">
            <p className="r-name">Tharindu Jayasinghe</p>
            <p className="r-role">Software Engineering Undergraduate</p>
            <p className="r-contact">
              <span>Malabe, Sri Lanka</span>
              <span>+94 71 234 5678</span>
              <span>tharindu.jayasinghe@email.com</span>
              <span>linkedin.com/in/tharindujayasinghe</span>
              <span>github.com/tjayasinghe</span>
            </p>

            <div className="r-section">
              <p className="r-h2">Summary</p>
              <p className="r-summary">
                Third-year Software Engineering undergraduate with hands-on experience building
                full-stack web applications in JavaScript, React, and Node.js. Completed academic
                projects covering REST API design, relational databases, and Agile teamwork.
                Seeking a Software Developer Internship to apply coursework in a production
                environment.
              </p>
            </div>

            <div className="r-section">
              <p className="r-h2">Education</p>
              <div className="r-entry">
                <div className="r-entry-head">
                  <div>
                    <div className="r-entry-title">BSc (Hons) in Software Engineering</div>
                    <div className="r-entry-sub">
                      Sri Lanka Institute of Information Technology (SLIIT), Malabe
                    </div>
                  </div>
                  <div className="r-entry-date">Expected Jun 2027</div>
                </div>
                <div className="r-entry-sub" style={{ marginTop: 6 }}>
                  Current GPA: 3.62 / 4.00
                </div>
              </div>
              <div className="r-entry">
                <div className="r-entry-head">
                  <div>
                    <div className="r-entry-title">
                      G.C.E. Advanced Level | Physical Science Stream
                    </div>
                    <div className="r-entry-sub">Ananda College, Colombo</div>
                  </div>
                  <div className="r-entry-date">2021</div>
                </div>
              </div>
            </div>

            <div className="r-section">
              <p className="r-h2">Technical Skills</p>
              <div className="r-plainlist">
                <div>
                  <b>Languages:</b> JavaScript, TypeScript, Java, Python, SQL
                </div>
                <div>
                  <b>Frameworks &amp; Libraries:</b> React, Next.js, Node.js, Express, Tailwind CSS
                </div>
                <div>
                  <b>Tools &amp; Platforms:</b> Git, GitHub, Docker, Postman, Figma, Vercel
                </div>
                <div>
                  <b>Databases:</b> MySQL, PostgreSQL, MongoDB
                </div>
              </div>
            </div>

            <div className="r-section">
              <p className="r-h2">Projects</p>
              {projects.map((p) => (
                <div className="r-entry" key={p.title}>
                  <div className="r-entry-head">
                    <div className="r-entry-title">{p.title}</div>
                    <div className="r-entry-date">{p.date}</div>
                  </div>
                  <ul>
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="r-section">
              <p className="r-h2">Experience</p>
              {experience.map((e) => (
                <div className="r-entry" key={e.title}>
                  <div className="r-entry-head">
                    <div>
                      <div className="r-entry-title">{e.title}</div>
                      <div className="r-entry-sub">{e.sub}</div>
                    </div>
                    <div className="r-entry-date">{e.date}</div>
                  </div>
                  <ul>
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="r-section">
              <p className="r-h2">Certifications</p>
              <div className="r-plainlist">
                <div>Google IT Support Professional Certificate - Coursera, 2025</div>
                <div>Introduction to Cybersecurity - Cisco Networking Academy, 2024</div>
              </div>
            </div>

            <div className="r-section">
              <p className="r-h2">Extracurricular Activities</p>
              <p className="r-inline">
                Member, IEEE Student Branch, SLIIT (2024 - Present) &nbsp;|&nbsp; Volunteer,
                SLIIT Coding Club workshops (2024 - Present)
              </p>
            </div>

            <div className="r-section">
              <p className="r-h2">Languages</p>
              <p className="r-inline">
                Sinhala (Native) &nbsp;|&nbsp; English (Fluent) &nbsp;|&nbsp; Tamil (Basic)
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}