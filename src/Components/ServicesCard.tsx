import React from "react";

type CardProps = {
  id: string;
  title: string;
  summary: string;
  capabilities: string[];
  isLast?: boolean;
};

const ServicesCard = ({
  id,
  title,
  summary,
  capabilities,
  isLast = false,
}: CardProps) => (
  <article
    className={`border-b border-accent/20 py-12 md:py-20 ${
      isLast ? "border-b-0" : ""
    }`}
  >
    <div className="grid gap-10 md:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] md:items-start">
      <div className="space-y-6">
        <span className="font-mono text-3xl font-medium tracking-[0.24em] text-accent/70 md:text-4xl">
          ({id})
        </span>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="font-mono text-3xl font-semibold uppercase tracking-[-0.05em] md:text-[2.75rem]">
            {title}
          </h3>
          <p className="max-w-[58ch] font-mono text-[clamp(1rem,0.2vw+1rem,1.25rem)] leading-relaxed text-accent/75">
            {summary}
          </p>
        </div>

        <div className="space-y-2">
          <div className="h-px w-full bg-accent/20" />
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm uppercase tracking-[0.24em] text-accent/80">
            {capabilities.map((capability, index) => (
              <li key={`${id}-${capability}`}>
                <span className="text-accent/50">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>{" "}
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </article>
);

export default ServicesCard;
