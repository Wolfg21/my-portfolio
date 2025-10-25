const About = () => (
  <section
    id="About"
    className="relative border-t border-cream/10 py-24 md:py-32"
    aria-labelledby="about-heading"
  >
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[-16vw] top-[20%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(232,232,227,0.18)_0%,rgba(232,232,227,0)_70%)]" />
      <div className="absolute bottom-[-18rem] right-[-14vw] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(107,100,92,0.2)_0%,rgba(107,100,92,0)_75%)]" />
    </div>

    <div className="relative grid gap-16 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]">
      <div className="space-y-10">
        <span className="inline-flex w-fit rounded-full border border-cream/15 bg-cream/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.42em] text-accent/70">
          About
        </span>
        <div className="space-y-6">
          <h2
            id="about-heading"
            className="font-mono text-[clamp(3rem,3.2vw+1.6rem,5rem)] uppercase tracking-[-0.08em] leading-tight text-cream"
          >
            Quiet leadership, deliberate craft.
          </h2>
          <p className="max-w-[50ch] font-mono text-[clamp(1.05rem,0.4vw+1.05rem,1.45rem)] leading-relaxed text-cream/78">
            I anchor collaborations around shared outcomes. We establish the
            win, de-risk the path together, and leave teams with systems,
            tooling, and clarity that outlive our engagement.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-4 rounded-[28px] border border-cream/12 bg-gradient-to-br from-cream/12 via-cream/[0.04] to-transparent p-6">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent/60">
              Years shipping
            </p>
            <p className="font-mono text-[clamp(2.4rem,1vw+2rem,3.2rem)] font-semibold uppercase tracking-[-0.06em] text-cream">
              8+
            </p>
            <p className="font-mono text-sm uppercase tracking-[0.26em] text-cream/70">
              Consumer &amp; B2B products
            </p>
          </div>
          <div className="space-y-4 rounded-[28px] border border-cream/12 bg-gradient-to-br from-[#151311] via-[#1f1b19] to-[#0d0c0b] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent/60">
              Teams supported
            </p>
            <p className="font-mono text-[clamp(2.4rem,1vw+2rem,3.2rem)] font-semibold uppercase tracking-[-0.06em] text-cream">
              25+
            </p>
            <p className="font-mono text-sm uppercase tracking-[0.26em] text-cream/70">
              Startups &amp; scale-ups
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-cream/12 bg-gradient-to-br from-cream/10 via-accent/15 to-transparent p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,232,227,0.18)_0%,rgba(232,232,227,0)_70%)]" />
          <div className="relative flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.34em] text-accent/55">
              Snapshot
            </span>
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-cream/80">
              Remote-first, Vienna based. Operating comfortably across EU &amp;
              US timezones.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <article className="relative overflow-hidden rounded-[32px] border border-cream/12 bg-gradient-to-br from-[#151311] via-[#231f1c] to-[#0f0d0c] p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,232,227,0.16)_0%,rgba(232,232,227,0)_70%)]" />
          <div className="relative space-y-6">
            <h3 className="font-mono text-[clamp(2rem,1.1vw+1.7rem,2.8rem)] font-semibold uppercase tracking-[-0.05em] text-cream">
              Engagement rhythm
            </h3>
            <p className="font-mono text-[1.05rem] leading-relaxed text-cream/78">
              A structured cadence keeps progress visible without overloading
              the roadmap.
            </p>
            <ul className="space-y-4 font-mono text-sm uppercase tracking-[0.26em] text-cream/70">
              <li className="rounded-[20px] border border-cream/12 bg-darker-accent/60 px-5 py-4">
                Week 0 &mdash; Discovery &amp; alignment audit
              </li>
              <li className="rounded-[20px] border border-cream/12 bg-darker-accent/60 px-5 py-4">
                Weeks 1-4 &mdash; Build loop &amp; pairing
              </li>
              <li className="rounded-[20px] border border-cream/12 bg-darker-accent/60 px-5 py-4">
                Week 5+ &mdash; Handoff, documentation, observability
              </li>
            </ul>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-[32px] border border-cream/12 bg-gradient-to-br from-[#151311] via-[#201c19] to-[#0b0a09] p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(107,100,92,0.2)_0%,rgba(107,100,92,0)_75%)]" />
          <div className="relative space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-mono text-[clamp(2rem,1vw+1.6rem,2.6rem)] font-semibold uppercase tracking-[-0.05em] text-cream">
                Core toolkit
              </h3>
              <span className="font-mono text-xs uppercase tracking-[0.34em] text-accent/55">
                Curated for momentum
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/60">
                  Frontend
                </p>
                <ul className="space-y-2 font-mono text-sm uppercase tracking-[0.24em] text-cream/75">
                  <li>React 19</li>
                  <li>Next.js App Router</li>
                  <li>Tailwind &amp; Radix</li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/60">
                  Backend &amp; ops
                </p>
                <ul className="space-y-2 font-mono text-sm uppercase tracking-[0.24em] text-cream/75">
                  <li>Node &amp; tRPC</li>
                  <li>Edge functions</li>
                  <li>Postgres + Prisma</li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/60">
                  Quality
                </p>
                <ul className="space-y-2 font-mono text-sm uppercase tracking-[0.24em] text-cream/75">
                  <li>Playwright</li>
                  <li>Vitest</li>
                  <li>OpenTelemetry</li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/60">
                  Collaboration
                </p>
                <ul className="space-y-2 font-mono text-sm uppercase tracking-[0.24em] text-cream/75">
                  <li>Figma to code</li>
                  <li>Linear</li>
                  <li>Notion &amp; Loom</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default About;
