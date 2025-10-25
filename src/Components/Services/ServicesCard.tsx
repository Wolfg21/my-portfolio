import type { ReactNode } from "react";

type CardProps = {
  id: string;
  title: string;
  summary: string;
  capabilities: ReactNode;
};

const ServicesCard = ({ id, title, summary, capabilities }: CardProps) => (
  <article className="relative overflow-hidden rounded-[32px] border border-cream/12 bg-gradient-to-br from-darker-accent via-[#1b1917] to-[#0d0c0b] p-10 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.8)] md:p-14">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,232,227,0.12)_0%,rgba(232,232,227,0)_65%)]" />
    <div className="pointer-events-none absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,100,92,0.18)_0%,rgba(107,100,92,0)_70%)]" />

    <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-3">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cream/25 bg-cream/10 font-mono text-lg font-semibold tracking-[0.32em] text-cream">
            {id}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.34em] text-accent/60">
            Strategy | Build | Support
          </span>
        </div>

        <div className="space-y-4">
          <h3 className="font-mono text-[clamp(2.1rem,1.8vw+1.6rem,3.1rem)] font-semibold uppercase tracking-[-0.05em] text-cream">
            {title}
          </h3>
          <p className="max-w-[52ch] font-mono text-[clamp(1.1rem,0.3vw+1rem,1.35rem)] leading-relaxed text-cream/85">
            {summary}
          </p>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-cream/12 bg-gradient-to-br from-cream/6 via-cream/[0.03] to-transparent p-6">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent/55">
            Tools &amp; Outcomes
          </p>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">{capabilities}</ul>
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] border border-cream/12 bg-gradient-to-br from-cream/10 via-accent/15 to-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,232,227,0.18)_0%,rgba(232,232,227,0)_70%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent/60">
              Visual placeholder
            </span>
          </div>
        </div>

        <p className="font-mono text-sm uppercase tracking-[0.26em] text-accent/65">
          Designed for teams that value clarity, craft, and a calm release
          cadence.
        </p>
      </div>
    </div>
  </article>
);

export default ServicesCard;
