import React from "react";

const Hero = () => {
  const nameLines = ["Wolfgang", "Smolinsky"];
  const description =
    "Open to opportunities worldwide. I build reliable, scalable systems that power intuitive and effortless digital experiences.";

  return (
    <section className="relative flex min-h-screen flex-col justify-between pt-10 pb-16 md:pt-12 md:pb-20">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-14 md:items-end">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            {nameLines.map((line, idx) => {
              const charCount = line.length;
              return (
                <div
                  key={`name-line-${idx}`}
                  className="grid grid-flow-col auto-cols-[1ch] place-items-center md:place-items-start font-mono font-semibold uppercase leading-none text-darker-accent/90 select-none text-[calc((100vw-2*var(--mx))/var(--char-count,1))] md:text-[min(16vw,12rem)] md:leading-[0.85]"
                  style={
                    { "--char-count": `${charCount}` } as React.CSSProperties
                  }
                >
                  {line.split("").map((char, i) => (
                    <span key={`name-${idx}-${i}`}>{char}</span>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="max-w-[38ch] text-pretty font-mono text-[clamp(1.05rem,calc(0.9rem+1.2vw),2.4rem)] leading-snug text-darker-accent/80 md:max-w-[32ch] md:text-[clamp(1.15rem,calc(1rem+1vw),1.9rem)]">
            {description}
          </div>

          <div className="mt-2">
            <a
              href="#Contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-darker-accent/40 bg-darker-accent/90 px-7 py-5 text-base font-mono font-semibold uppercase tracking-[0.24em] text-cream transition-colors hover:bg-darker-accent md:px-8 md:py-6 md:text-lg"
            >
              Contact
              <span
                aria-hidden="true"
                className="flex h-5 w-5 items-center justify-center text-cream md:h-6 md:w-6"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 19.5 19.5 4.5" />
                  <path d="M9.5 4.5h10v10" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-10 md:items-end md:gap-14">
          <div className="flex items-center gap-3 text-accent md:gap-4">
            <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center text-accent/70 md:h-8 md:w-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 19.5 19.5 4.5" />
                <path d="M9.5 4.5h10v10" />
              </svg>
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] md:text-sm">
              Available for work
            </span>
          </div>

          <div className="w-full max-w-xs overflow-hidden rounded-3xl bg-darker-accent/10 shadow-[0_30px_60px_-40px_rgba(8,8,7,0.35)] md:max-w-sm">
            <div className="aspect-[3/4] w-full bg-gradient-to-br from-darker-accent/40 via-darker-accent/10 to-transparent"></div>
          </div>

          <div className="ml-auto flex flex-col items-end font-mono uppercase tracking-[0.3em] text-darker-accent/70 md:tracking-[0.4em]">
            <span className="text-xs md:text-sm">Based in</span>
            <span className="text-2xl font-semibold text-darker-accent md:text-5xl">
              Vienna
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
