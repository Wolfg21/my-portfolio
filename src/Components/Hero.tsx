import React from "react";

const Hero = () => {
  const firstName = "Wolfgang";
  const lastName = "Smolinsky";

  return (
    <section className="relative w-full">
      <div
        className="
          sticky top-0 flex flex-col lg:flex-row justify-center pt-20
          h-screen w-full z-0
          font-mono uppercase font-semibold leading-[0.8]
          text-[clamp(2.8rem,20vw,20rem)]
          tracking-[-0.04em] text-darker-accent/90
        "
      >
        {/* Wrap each line for mobile / stacked layout */}
        <div className="flex flex-row lg:gap-x-[0.1em] overflow-hidden wrap">
          {/* First name */}
          <div className="overflow-ellipsis flex">
            {firstName.split("").map((char, i) => (
              <span
                key={`first-${i}`}
                className="inline-block opacity-100 translate-y-0"
              >
                {char}
              </span>
            ))}
          </div>

          {/* Space between names on mobile */}
          <div className="hidden lg:block w-[0.25em]" />

          {/* Last name */}
          <div className="overflow-hidden flex">
            {lastName.split("").map((char, i) => (
              <span
                key={`last-${i}`}
                className="inline-block opacity-100 translate-y-0"
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">{/* next section */}</div>
    </section>
  );
};

export default Hero;
