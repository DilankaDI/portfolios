'use client';

const projects = [
  {
    number: '01',
    type: 'Brand system · Digital product',
    title: 'Orbit / Financial clarity for a new generation',
    description:
      'A sharper identity and calmer product experience for a fintech helping people make sense of their everyday money.',
    tone: 'acid',
    tags: ['Strategy', 'Identity', 'UI/UX'],
    visual: 'Orbit',
  },
  {
    number: '02',
    type: 'Campaign · Art direction',
    title: 'Afterlight / Make room for the good stuff',
    description:
      'A warm, optimistic launch campaign turning an ordinary home ritual into a small daily celebration.',
    tone: 'blue',
    tags: ['Creative direction', 'Campaign', 'Motion'],
    visual: 'Afterlight',
  },
  {
    number: '03',
    type: 'Editorial · Web experience',
    title: 'Field Notes / A living archive of craft',
    description:
      'An editorial platform for slow stories, considered objects, and the people who make them with intention.',
    tone: 'coral',
    tags: ['Editorial', 'Web design', 'Development'],
    visual: 'Field Notes',
  },
];

function Arrow() {
  return <span className="ml-1 inline-block text-[18px] leading-none transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.08em]">
      <span className="h-2 w-2 rounded-full bg-[#50bc62] shadow-[0_0_0_5px_rgba(80,188,98,0.14)]" />
      {children}
    </p>
  );
}

function ProjectVisual({ tone, visual }: { tone: string; visual: string }) {
  const palette = {
    acid: {
      background: '#e4ff58',
      main: '#2045e8',
      secondary: '#fa8067',
      text: '#121314',
    },
    blue: {
      background: '#b8c6ff',
      main: '#121314',
      secondary: '#e4ff58',
      text: '#f4f1ea',
    },
    coral: {
      background: '#f1b8b0',
      main: '#f4f1ea',
      secondary: '#2045e8',
      text: '#2045e8',
    },
  }[tone as 'acid' | 'blue' | 'coral'];

  return (
    <div className="group relative aspect-[1.35/1] overflow-hidden" style={{ backgroundColor: palette.background }}>
      <div className="absolute left-5 top-5 z-10 font-mono text-[9px] uppercase tracking-wider">Northstar / {tone === 'acid' ? '01' : tone === 'blue' ? '02' : '03'}</div>
      <div
        className={`absolute transition-transform duration-500 ease-out group-hover:rotate-6 ${tone === 'blue' ? 'left-[29%] top-[-22%] h-[138%] w-[25%] rotate-28 rounded-none' : tone === 'coral' ? 'left-[10%] top-[13%] h-[78%] w-[78%]' : 'left-[9%] top-[20%] h-[78%] w-[55%]'} rounded-full`}
        style={{ backgroundColor: palette.main }}
      />
      <div
        className={`absolute transition-transform duration-500 ease-out group-hover:-rotate-6 ${tone === 'blue' ? 'bottom-[-14%] right-[11%] h-[52%] w-[52%]' : tone === 'coral' ? 'right-[7%] top-[12%] h-[31%] w-[31%]' : 'right-[-3%] top-[-11%] h-[55%] w-[45%]'} rounded-full`}
        style={{ backgroundColor: palette.secondary }}
      />
      <div className="absolute bottom-[12%] left-[9%] z-10 font-serif text-[clamp(38px,5vw,76px)] leading-[0.8] tracking-[-0.08em]" style={{ color: palette.text, fontStyle: tone === 'blue' ? 'italic' : 'normal', left: tone === 'blue' ? 'auto' : undefined, right: tone === 'blue' ? '9%' : undefined, top: tone === 'blue' ? '43%' : undefined }}>
        {visual}
      </div>
      <span className="absolute bottom-5 right-5 z-10 font-mono text-[9px] uppercase">Case study <Arrow /></span>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1ea] text-[#121314] selection:bg-[#e4ff58] selection:text-[#121314]">
      <header className="flex h-19 items-center justify-between border-b border-black/15 px-[5.5vw]">
        <a href="#top" className="flex items-center gap-2 text-[17px] font-bold tracking-[-0.045em]">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#121314] font-serif text-[18px] italic text-[#e4ff58]">N</span>
          <span>Northstar<span className="text-[#2045e8]">.</span></span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[15px] uppercase tracking-[0.08em] md:flex">
          <a href="#work" className="transition-colors hover:text-[#2045e8]">Work</a>
          <a href="#about" className="transition-colors hover:text-[#2045e8]">About</a>
          <a href="#process" className="transition-colors hover:text-[#2045e8]">Process</a>
        </nav>
        <a href="mailto:hello@northstar.studio" className="group font-mono text-[12px] uppercase tracking-[0.04em] transition-colors hover:text-[#2045e8]">Let&apos;s talk <Arrow /></a>
      </header>

      <section id="top" className="relative flex min-h-0 flex-col px-[6vw] py-[19vw] md:grid md:min-h-162.5 md:grid-cols-[1.05fr_0.95fr] md:px-[5.5vw] md:py-[9vw]">
        <div className="self-center md:pb-[5vw]">
          <Eyebrow>Independent creative studio · Est. 2016</Eyebrow>
          <h1 className="max-w-200 text-[clamp(64px,17vw,105px)] font-medium leading-[0.86] tracking-[-0.088em] md:text-[clamp(64px,9.2vw,148px)]">Good work<br /><em className="font-serif font-medium">moves</em><br />people.</h1>
          <p className="mt-8 max-w-77.5 text-[15px] leading-[1.6] text-[#62645f] md:mt-10">Northstar is the small, senior-led studio for brands with something meaningful to say.</p>
          <a href="#work" className="group mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.04em]">See selected work <Arrow /></a>
        </div>

        <div className="relative mx-auto my-[16vw] h-[90vw] w-[90vw] max-w-140 rotate-3 overflow-hidden bg-[#2045e8] md:my-0 md:ml-auto md:mr-0 md:h-[min(45vw,560px)] md:w-full">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle,rgba(255,255,255,.3)_0_1px,transparent_1.5px)] bg-size-[9px_9px]" />
          <div className="absolute left-[-13%] top-[11%] h-[64%] w-[64%] rounded-full bg-[#e4ff58]" />
          <div className="absolute right-[-12%] top-[-8%] h-[42%] w-[42%] rounded-full bg-[#fa8067]" />
          <div className="absolute bottom-[-15%] right-[9%] h-[61%] w-[61%] rounded-full bg-[#f4f1ea]" />
          <div className="absolute left-[-13%] top-[12%] h-[95%] w-[125%] rotate-[-34deg] rounded-[50%] border border-[#121314]" />
          <div className="absolute left-[4%] top-[30%] h-[63%] w-[125%] rotate-45 rounded-[50%] border border-[#121314]/65" />
          <div className="absolute bottom-[18%] left-[9%] font-serif text-[clamp(19px,2.4vw,32px)] tracking-[-0.06em]">Ideas with a pulse<span className="ml-2 font-sans text-[#2045e8]">✦</span></div>
          <div className="absolute bottom-[5%] right-[8%] font-mono text-[12px]">01 / 04</div>
        </div>

        <div className="absolute bottom-[8vw] left-[6vw] flex w-[88%] justify-center font-mono text-[12px] uppercase tracking-wider md:bottom-[4vw] md:left-[5.5vw] md:w-[89%] md:justify-between">
          <p className="hidden leading-[1.55] md:block">Currently available for select<br />projects in Q4 2026.</p>
          <p className="text-[#62645f]">Scroll to explore <span className="ml-2 text-[15px] text-[#121314]">↓</span></p>
          <p className="hidden text-right leading-[1.55] md:flex md:flex-col"><span className="text-[#62645f]">Based in</span>Brooklyn, NY</p>
        </div>
      </section>

      <section className="flex flex-col gap-5 bg-[#121314] px-[6vw] py-8 text-[#f4f1ea] md:min-h-28 md:flex-row md:items-center md:gap-[7vw] md:px-[5.5vw] md:py-0">
        <span className="font-mono text-[9px] uppercase tracking-[0.07em] text-white/50">Trusted by teams at</span>
        <div className="flex w-full flex-1 items-center justify-between gap-4">
          <b className="text-[12px] tracking-[-0.06em] md:text-[16px]">morrow</b>
          <b className="font-serif text-[17px] italic font-medium md:text-[22px]">KIN</b>
          <b className="text-[12px] tracking-[-0.06em] md:text-[16px]">fieldwork</b>
          <b className="hidden font-mono text-[12px] font-normal tracking-[0.06em] md:block">MOTION / CO</b>
          <b className="font-serif text-[17px] italic font-medium md:text-[22px]">Aster</b>
        </div>
      </section>

      <section id="work" className="px-[6vw] py-[23vw] md:px-[5.5vw] md:py-[12vw]">
        <div className="mb-[15vw] flex justify-between md:mb-[7vw]">
          <Eyebrow>Selected work <span className="ml-1 inline-block h-px w-12 bg-[#121314] align-middle" /></Eyebrow>
          <p className="text-right font-serif text-[16px] leading-[1.13] text-[#62645f] md:text-[20px]">A few things we&apos;ve made<br />with good people.</p>
        </div>
        <div className="flex flex-col gap-[25vw] md:gap-[11vw]">
          {projects.map((project, index) => (
            <article key={project.number} className={`flex flex-col gap-[10vw] md:grid md:gap-[6vw] ${index % 2 === 1 ? 'md:grid-cols-[0.65fr_1.35fr]' : 'md:grid-cols-[1.35fr_0.65fr]'}`}>
              <div className={index % 2 === 1 ? 'md:col-start-2 md:row-start-1' : ''}><ProjectVisual tone={project.tone} visual={project.visual} /></div>
              <div className={`self-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="mb-5 flex justify-between font-mono text-[9px] uppercase tracking-[0.04em] text-[#62645f]"><span className="text-[#2045e8]">{project.number}</span><span>{project.type}</span></div>
                <h2 className="mb-5 max-w-102.5 text-[38px] font-medium leading-[0.96] tracking-[-0.07em] md:text-[clamp(29px,3.25vw,49px)]">{project.title}</h2>
                <p className="max-w-75 text-[14px] leading-[1.55] text-[#62645f]">{project.description}</p>
                <div className="mt-9 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-black/15 px-2.5 py-1.5 font-mono text-[9px] uppercase">{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="grid gap-[17vw] bg-[#2045e8] px-[9vw] py-[22vw] text-[#f4f1ea] md:grid-cols-[0.7fr_1.3fr] md:gap-[5vw] md:px-[10vw] md:py-[12vw]">
        <div className="flex items-start gap-3 font-mono text-[9px] uppercase tracking-[0.06em]"><span className="font-sans text-[27px] leading-[0.65] text-[#e4ff58]">✦</span><span>Our point of view</span></div>
        <div>
          <h2 className="mb-11 text-[60px] font-medium leading-[0.86] tracking-[-0.09em] md:mb-13.75 md:text-[clamp(52px,7.7vw,120px)]">We make brands<br />feel <em className="font-serif font-medium text-[#e4ff58]">like something.</em></h2>
          <p className="max-w-112.5 text-[15px] leading-[1.55] text-white/75 md:text-[17px]">Not louder. Not shinier. More <strong className="font-medium text-[#e4ff58]">alive.</strong> We combine clear thinking with a little bit of magic to create identities, experiences, and campaigns people want to keep close.</p>
          <a href="mailto:hello@northstar.studio" className="group mt-5 inline-block font-mono text-[12px] uppercase tracking-[0.04em] text-[#e4ff58]">More about Northstar <Arrow /></a>
        </div>
      </section>

      <section id="process" className="px-[6vw] py-[23vw] md:px-[5.5vw] md:py-[12vw]">
        <div className="mb-[15vw] flex justify-between md:mb-[7vw]"><Eyebrow>How we work <span className="ml-1 inline-block h-px w-12 bg-[#121314] align-middle" /></Eyebrow><p className="text-right font-serif text-[16px] leading-[1.13] text-[#62645f] md:text-[20px]">Small team. Big care.<br />No mystery meat.</p></div>
        <div className="grid border-t border-black/15 md:grid-cols-3">
          {['Find the signal', 'Make it matter', 'Make it real'].map((title, index) => (
            <div key={title} className="border-b border-black/15 py-7 md:min-h-63.5 md:border-b-0 md:border-r md:py-6 md:pr-[4vw] md:last:border-r-0 md:[&+div]:pl-[4vw]">
              <span className="font-mono text-[12px] text-[#2045e8]">0{index + 1}</span>
              <h3 className="mt-7 font-serif text-[28px] italic font-medium tracking-tighter">{title}</h3>
              <p className="mt-4 max-w-61.25 text-[13px] leading-[1.55] text-[#62645f]">{['We ask better questions, listen closely, and find the thing worth making unmistakable.', 'We explore widely, edit honestly, and build a visual world with a clear point of view.', 'We bring the idea to life across every detail, so it works beautifully out in the world.'][index]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#e4ff58] px-[6vw] pb-7 pt-[16vw] md:px-[5.5vw] md:pb-8 md:pt-[8vw]">
        <div className="mb-[23vw] flex justify-between font-mono text-[9px] uppercase tracking-wider md:mb-[9vw]"><span>Have a good one?</span><span>Let&apos;s make it better.</span></div>
        <h2 className="mb-[17vw] text-[22vw] font-medium leading-[0.79] tracking-widest md:mb-[7vw] md:text-[clamp(70px,13.7vw,210px)]">Start a<br /><em className="font-serif text-[.89em]">conversation.</em></h2>
        <a href="mailto:hello@northstar.studio" className="group inline-block border-b border-[#121314] pb-2 font-mono text-[12px] uppercase">hello@northstar.studio <Arrow /></a>
        <div className="mt-[28vw] flex flex-col gap-2 border-t border-black/25 pt-4 font-mono text-[9px] uppercase tracking-wider md:mt-[13vw] md:flex-row md:justify-between"><span>© 2026 Northstar Studio</span><span>Instagram / Are.na / LinkedIn</span><span>Built with intention.</span></div>
      </section>
    </main>
  );
}
