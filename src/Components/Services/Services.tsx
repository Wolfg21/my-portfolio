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

export default Services;
