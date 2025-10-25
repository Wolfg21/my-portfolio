const Contact = () => (
  <section
    id="Contact"
    className="relative border-t border-cream/10 py-24 md:py-32"
    aria-labelledby="contact-heading"
  >
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[-12vw] top-[-12rem] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(232,232,227,0.18)_0%,rgba(232,232,227,0)_70%)]" />
      <div className="absolute bottom-[-18rem] right-[-14vw] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(107,100,92,0.22)_0%,rgba(107,100,92,0)_75%)]" />
    </div>

    <div className="relative grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
      <div className="space-y-10">
        <span className="inline-flex w-fit rounded-full border border-cream/15 bg-cream/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.42em] text-accent/70">
          Contact
        </span>
        <div className="space-y-6">
          <h2
            id="contact-heading"
            className="font-mono text-[clamp(3.2rem,3vw+1.6rem,5rem)] uppercase tracking-[-0.08em] leading-tight text-cream"
          >
            Build something precise, together.
          </h2>
          <p className="max-w-[48ch] font-mono text-[clamp(1.05rem,0.4vw+1.05rem,1.45rem)] leading-relaxed text-cream/78">
            Share context, ambition, and constraints. I&apos;ll respond within a
            business day so we can map the first milestone and unblock the rest.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-4 rounded-[28px] border border-cream/12 bg-gradient-to-br from-cream/12 via-cream/[0.04] to-transparent p-6">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent/60">
              Preferred channel
            </p>
            <a
              href="mailto:wolfgang@smolinsky.dev"
              className="block font-mono text-[clamp(1.3rem,0.2vw+1.2rem,1.6rem)] uppercase tracking-[0.2em] text-cream"
            >
              wolfgang@smolinsky.dev
            </a>
            <p className="font-mono text-sm uppercase tracking-[0.26em] text-cream/70">
              Include timeline and success metrics if possible.
            </p>
          </div>
          <div className="space-y-4 rounded-[28px] border border-cream/12 bg-gradient-to-br from-[#151311] via-[#201c19] to-[#0d0c0b] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent/60">
              Availability
            </p>
            <p className="font-mono text-[clamp(1.3rem,0.2vw+1.2rem,1.6rem)] uppercase tracking-[0.2em] text-cream">
              Vienna, Austria (UTC+1)
            </p>
            <p className="font-mono text-sm uppercase tracking-[0.26em] text-cream/70">
              Flexible for EU &amp; US overlaps.
            </p>
          </div>
        </div>

        <div className="relative aspect-[5/3] overflow-hidden rounded-[32px] border border-cream/12 bg-gradient-to-br from-cream/10 via-accent/15 to-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,232,227,0.18)_0%,rgba(232,232,227,0)_70%)]" />
          <div className="relative flex h-full flex-col justify-end p-8">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent/55">
              Placeholder image
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[36px] border border-cream/12 bg-gradient-to-br from-[#151311] via-[#221e1b] to-[#0b0a09] p-10 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,232,227,0.16)_0%,rgba(232,232,227,0)_70%)]" />
        <div className="relative space-y-8">
          <div className="space-y-2">
            <h3 className="font-mono text-[clamp(2rem,1vw+1.6rem,2.6rem)] font-semibold uppercase tracking-[-0.05em] text-cream">
              Project starter
            </h3>
            <p className="font-mono text-sm uppercase tracking-[0.26em] text-cream/70">
              Drop the essentials&mdash;I&apos;ll handle scheduling next steps.
            </p>
          </div>
          <form className="space-y-6">
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent/60">
                Name
              </span>
              <input
                type="text"
                name="name"
                placeholder="How should I address you?"
                className="mt-3 w-full rounded-[16px] border border-cream/18 bg-darker-accent/50 px-4 py-3 font-mono text-sm uppercase tracking-[0.18em] text-cream placeholder:text-accent/50 focus:outline-none focus:ring-0"
              />
            </label>
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent/60">
                Email
              </span>
              <input
                type="email"
                name="email"
                placeholder="I&apos;ll reply here"
                className="mt-3 w-full rounded-[16px] border border-cream/18 bg-darker-accent/50 px-4 py-3 font-mono text-sm uppercase tracking-[0.18em] text-cream placeholder:text-accent/50 focus:outline-none focus:ring-0"
              />
            </label>
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent/60">
                Project notes
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="Share goals, timelines, or constraints."
                className="mt-3 w-full resize-none rounded-[16px] border border-cream/18 bg-darker-accent/50 px-4 py-3 font-mono text-sm uppercase tracking-[0.18em] text-cream placeholder:text-accent/50 focus:outline-none focus:ring-0"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full border border-cream/18 bg-gradient-to-r from-cream/15 to-transparent px-6 py-4 font-mono text-sm uppercase tracking-[0.3em] text-cream"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
