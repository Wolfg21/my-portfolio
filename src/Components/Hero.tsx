import React from "react";

const Hero = () => {
  const firstName = "Wolfgang";
  const lastName = "Smolinsky";

  return (
    <section className="relative w-full h-screen overflow-x-hidden">
      <div
        className="
          sticky top-0 pt-20 flex flex-col justify-start
          h-full px-[min(5vw,2rem)]
        "
      >
        {/* Names grid */}
        <div
          className="inline-grid auto-rows-auto overflow-hidden 
          font-mono font-semibold uppercase leading-[0.8]
          text-[clamp(2.8rem,14vw,16rem)] tracking-[-0.04em]
          text-darker-accent/90 select-none"
        >
          {/* First name */}
          <div className="grid grid-flow-col auto-cols-[1ch]">
            {firstName.split("").map((char, i) => (
              <span key={`first-${i}`} className="inline-block">
                {char}
              </span>
            ))}
          </div>

          {/* Last name, indented by one grid cell */}
          <div className="grid grid-flow-col mt-2 auto-cols-[1ch] translate-x-[1ch]">
            {lastName.split("").map((char, i) => (
              <span key={`last-${i}`} className="inline-block">
                {char}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 text-[min(20px, 10rem)] font-mono">
          Open to opportunities worldwide. I build reliable, scalable systems
          that power intuitive and effortless digital experiences.
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
