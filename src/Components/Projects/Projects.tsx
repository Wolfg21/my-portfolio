const Projects = () => (
  <section
    id="Projects"
    className="relative border-t border-cream/10 py-24 md:py-32"
    aria-labelledby="projects-heading"
  >
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[-18vw] top-[-10rem] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(107,100,92,0.22)_0%,rgba(107,100,92,0)_70%)]" />
      <div className="absolute bottom-[-14rem] right-[-12vw] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(232,232,227,0.16)_0%,rgba(232,232,227,0)_70%)]" />
    </div>

    <div className="relative flex flex-col gap-16">
      <div className="space-y-6">
        <span className="inline-flex w-fit rounded-full border border-cream/15 bg-cream/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.42em] text-accent/70">
          Selected Work
        </span>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            id="projects-heading"
            className="max-w-[18ch] font-mono text-[clamp(3rem,3.2vw+1.4rem,4.8rem)] uppercase tracking-[-0.08em] text-cream"
          >
            Quietly confident builds with measurable impact.
          </h2>
          <p className="max-w-[42ch] font-mono text-[clamp(1.05rem,0.3vw+1rem,1.3rem)] leading-relaxed text-cream/75">
            Each case study reflects a different collaboration style&mdash;from
            embedded development pods to short discovery bursts that unlocked
            stalled roadmaps.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <article className="relative overflow-hidden rounded-[36px] border border-cream/12 bg-gradient-to-br from-[#141311] via-[#1f1b19] to-[#0b0a09] p-10 md:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,232,227,0.18)_0%,rgba(232,232,227,0)_65%)]" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(107,100,92,0.2)_0%,rgba(107,100,92,0)_75%)]" />

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.75fr)]">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.34em] text-accent/65">
                <span>Finch &amp; Fable</span>
                <span className="h-1 w-1 rounded-full bg-accent/50" />
                <span>E-commerce 2024</span>
              </div>

              <h3 className="font-mono text-[clamp(2.4rem,1.8vw+1.8rem,3.6rem)] font-semibold uppercase tracking-[-0.06em] text-cream">
                Reimagined retail built for launches, not firefighting.
              </h3>

              <p className="max-w-[58ch] font-mono text-[clamp(1.1rem,0.3vw+1rem,1.35rem)] leading-relaxed text-cream/80">
                Modernised a luxury homeware platform with a composable stack,
                live inventory observability, and adaptive checkout flows that
                keep conversion steady during high-traffic drops.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[24px] border border-cream/12 bg-gradient-to-br from-cream/12 via-cream/[0.04] to-transparent p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/60">
                    Responsibilities
                  </p>
                  <ul className="mt-4 space-y-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/80">
                    <li>Composable architecture</li>
                    <li>Storefront build</li>
                    <li>Performance budget</li>
                  </ul>
                </div>
                <div className="rounded-[24px] border border-cream/12 bg-gradient-to-br from-[#151311] via-[#1f1b19] to-[#0f0d0c] p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/60">
                    Core stack
                  </p>
                  <ul className="mt-4 space-y-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/80">
                    <li>Next.js Edge runtime</li>
                    <li>Stripe billing layer</li>
                    <li>Sanity studio</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-cream/12 bg-gradient-to-br from-cream/15 via-accent/20 to-transparent">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,232,227,0.2)_0%,rgba(232,232,227,0)_70%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs uppercase tracking-[0.42em] text-accent/60">
                    Case study placeholder
                  </span>
                </div>
              </div>
              <div className="grid gap-4 font-mono text-sm uppercase tracking-[0.26em] text-cream/70">
                <div className="rounded-full border border-cream/12 bg-darker-accent/60 px-4 py-3">
                  +18% conversion across first three releases
                </div>
                <div className="rounded-full border border-cream/12 bg-darker-accent/60 px-4 py-3">
                  Launch to post-mortem: 6 weeks
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-10 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[32px] border border-cream/12 bg-gradient-to-br from-[#151311] via-[#1d1917] to-[#0c0b0a] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,232,227,0.16)_0%,rgba(232,232,227,0)_70%)]" />
            <div className="relative space-y-6">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.32em] text-accent/65">
                <span>Northwind Ops</span>
                <span className="h-1 w-1 rounded-full bg-accent/50" />
                <span>SaaS Platform</span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-cream/12 bg-gradient-to-br from-cream/12 via-accent/18 to-transparent">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,232,227,0.18)_0%,rgba(232,232,227,0)_70%)]" />
              </div>
              <h3 className="font-mono text-[clamp(1.8rem,1vw+1.4rem,2.4rem)] font-semibold uppercase tracking-[-0.05em] text-cream">
                Analytics suite with guardrails by design.
              </h3>
              <p className="font-mono text-[1rem] leading-relaxed text-cream/75">
                Multi-tenant controls, feature flagging, and automated reports
                stitched into a single React 19 experience that never blocks the
                roadmap.
              </p>
              <ul className="space-y-3 font-mono text-sm uppercase tracking-[0.26em] text-cream/70">
                <li>tRPC + Drizzle</li>
                <li>{"Playwright coverage >= 95%"}</li>
                <li>Shared component library</li>
              </ul>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[32px] border border-cream/12 bg-gradient-to-br from-[#151311] via-[#211d1a] to-[#0d0c0b] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(107,100,92,0.18)_0%,rgba(107,100,92,0)_75%)]" />
            <div className="relative space-y-6">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.32em] text-accent/65">
                <span>Open Transit Atlas</span>
                <span className="h-1 w-1 rounded-full bg-accent/50" />
                <span>Civic Tech</span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-cream/12 bg-gradient-to-br from-cream/12 via-accent/18 to-transparent">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,232,227,0.18)_0%,rgba(232,232,227,0)_70%)]" />
              </div>
              <h3 className="font-mono text-[clamp(1.8rem,1vw+1.4rem,2.4rem)] font-semibold uppercase tracking-[-0.05em] text-cream">
                Real-time ops tooling for city planners.
              </h3>
              <p className="font-mono text-[1rem] leading-relaxed text-cream/75">
                Live GTFS overlays, field-ready offline modes, and accessibility
                auditing surfaced inside a single calm dashboard.
              </p>
              <ul className="space-y-3 font-mono text-sm uppercase tracking-[0.26em] text-cream/70">
                <li>React + MapLibre</li>
                <li>Edge functions mesh</li>
                <li>PWA offline sync</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;

