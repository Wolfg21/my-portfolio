<<<<<<< HEAD
import ServicesCard from "./ServicesCard";

const Services = () => (
  <section
    id="Skills"
    className="relative py-24 text-cream md:py-32"
    aria-labelledby="services-heading"
  >
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-24 left-[-20vw] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(232,232,227,0.18)_0%,rgba(232,232,227,0)_70%)]" />
      <div className="absolute bottom-[-18rem] right-[-16vw] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(107,100,92,0.22)_0%,rgba(107,100,92,0)_70%)]" />
    </div>

    <div className="relative flex flex-col gap-16">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex w-fit rounded-full border border-cream/15 bg-cream/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.42em] text-accent/70">
            Services
          </span>
          <div className="space-y-6">
            <h2
              id="services-heading"
              className="font-mono text-[clamp(3rem,4vw+1.6rem,5.25rem)] uppercase tracking-[-0.08em] leading-none text-cream"
            >
              Crafted to keep your team calm and shipping.
            </h2>
            <p className="max-w-[48ch] font-mono text-[clamp(1.1rem,0.4vw+1.05rem,1.5rem)] leading-relaxed text-cream/80">
              Each engagement pairs product thinking with technical ownership.
              From mapping the opportunity to closing the loop on observability,
              I make sure what we launch is resilient, lightweight, and easy to
              grow.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-4 rounded-[28px] border border-cream/12 bg-gradient-to-br from-cream/12 via-cream/[0.04] to-transparent p-6">
            <p className="font-mono text-xs uppercase tracking-[0.36em] text-accent/65">
              Coverage
            </p>
            <ul className="space-y-3 font-mono text-sm uppercase tracking-[0.28em] text-cream/80">
              <li>Discovery Sprints</li>
              <li>Architecture Design</li>
              <li>Delivery Ops</li>
            </ul>
          </div>
          <div className="space-y-4 rounded-[28px] border border-cream/12 bg-gradient-to-br from-[#141210] via-[#1d1a18] to-[#100f0f] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.36em] text-accent/65">
              Working cadence
            </p>
            <ul className="space-y-3 font-mono text-sm uppercase tracking-[0.28em] text-cream/80">
              <li>Clear weekly goals</li>
              <li>Docs first handoff</li>
              <li>Boring releases</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <ServicesCard
          id="01"
          title="Full-Stack Development"
          summary="Production-grade products from schema design to polished interfaces. I prioritise observability, performance budgets, and DX so teams can ship confidently."
          capabilities={
            <>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  01
                </span>
                React
              </li>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  02
                </span>
                TypeScript
              </li>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  03
                </span>
                Node.js
              </li>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  04
                </span>
                Express.js
              </li>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  05
                </span>
                PostgreSQL
              </li>
            </>
          }
        />

        <ServicesCard
          id="02"
          title="UI/UX & Frontend"
          summary="Shaping systems that stay accessible and quick. From component libraries to data visualisation, every view is purposeful, legible, and tuned for the device in hand."
          capabilities={
            <>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  01
                </span>
                Next.js
              </li>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  02
                </span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  03
                </span>
                Framer Motion
              </li>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  04
                </span>
                Figma to Code
              </li>
            </>
          }
        />

        <ServicesCard
          id="03"
          title="Systems & Tooling"
          summary="Infrastructure and automation that scale calmly. I help set up delivery pipelines, incident response loops, and monitoring stacks that keep releases boring."
          capabilities={
            <>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  01
                </span>
                CI/CD
              </li>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  02
                </span>
                Docker
              </li>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  03
                </span>
                Playwright
              </li>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  04
                </span>
                Monitoring
              </li>
              <li className="flex items-center gap-3 rounded-[18px] border border-cream/14 bg-darker-accent/55 px-4 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cream/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-accent/55">
                  05
                </span>
                Cloud-native
              </li>
            </>
          }
        />
      </div>
    </div>
  </section>
);
=======
import React from "react";
import ServicesCard from "../ServicesCard";

const Services = () => {
  return (
    <section
      id="Skills"
      className="relative py-16 text-cream md:py-24"
      aria-labelledby="services-heading"
    >
      <div>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          <div className="space-y-4">
            <h2
              id="services-heading"
              className="font-mono text-5xl uppercase tracking-[-0.05em] text-cream md:text-7xl"
            >
              What I Do<span className="text-accent">/</span>
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent/70">
              Services
            </p>
          </div>

          <p className="max-w-[42ch] font-mono text-[clamp(1rem,0.4vw+1rem,1.35rem)] leading-relaxed text-accent/80 md:text-[1.25rem]">
            I partner with teams end-to-end: defining requirements, shaping
            architecture, and delivering experiences that feel cohesive and
            human. Each engagement blends engineering rigor with crafted design,
            elevating both the product and the process.
          </p>
        </div>

        <div className="mt-14 border-t border-accent/20">
          <ServicesCard
            id="01"
            title="Full-Stack Development"
            summary="From data models and backend APIs to the final pixel on screen, I ship production-ready products. I focus on maintainability, performance, and developer experience so teams can iterate with confidence."
            capabilities={[
              "React",
              "TypeScript",
              "Node.js",
              "Express.js",
              "PostgreSQL",
            ]}
          />
          <ServicesCard
            id="02"
            title="UI/UX & Frontend"
            summary="Design systems, fluid layouts, and micro-interactions that feel effortless. I translate complex briefs into responsive experiences that stay fast and accessible on every device."
            capabilities={[
              "Next.js",
              "Tailwind CSS",
              "Framer Motion",
              "Figma to Code",
            ]}
          />
          <ServicesCard
            id="03"
            title="Systems & Tooling"
            summary="Automations, pipelines, and infrastructure that scale as teams grow. CI/CD, testing, and monitoring baked in from day one to keep releases boring and reliable."
            capabilities={[
              "CI/CD",
              "Docker",
              "Playwright",
              "Monitoring",
              "Cloud-native",
            ]}
            isLast
          />
        </div>
      </div>
    </section>
  );
};
>>>>>>> cd0ce92db37b9ae13cb41a80b23671ba4d3ae374

export default Services;
