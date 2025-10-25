<<<<<<< HEAD
=======
import React from "react";

>>>>>>> cd0ce92db37b9ae13cb41a80b23671ba4d3ae374
const Header = () => {
  const NAV_ITEMS = ["Skills", "Projects", "About", "Contact"];

  return (
    <header className="flex flex-col gap-6 py-6 font-mono text-accent md:flex-row md:items-start md:justify-between">
      <div className="flex flex-col gap-1 uppercase tracking-[0.32em] text-xs font-medium text-accent md:text-sm md:tracking-[0.38em]">
        <span>Fullstack Web Developer</span>
      </div>

      <nav aria-label="Main navigation">
        <ul className="flex flex-col items-start gap-3 text-sm uppercase tracking-[0.32em] md:flex-row md:items-center md:gap-5 md:text-[0.95rem] md:tracking-[0.34em]">
          {NAV_ITEMS.map((item) => (
            <li key={item} className="select-none">
              <a
                href={`#${item}`}
                className="group relative block overflow-hidden h-[1.2em] leading-[1.2em]"
              >
                <span
                  className="
                    block w-full
                    transition-transform duration-[0.4s]
                    ease-[cubic-bezier(.51,.92,.24,1.15)]
                    translate-y-0 group-hover:-translate-y-full
                  "
                >
                  {item}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    absolute top-full left-0 w-full
                    transition-transform duration-[0.4s]
                    ease-[cubic-bezier(.51,.92,.24,1.15)]
                    translate-y-0 group-hover:-translate-y-[100%]
                  "
                >
                  {item}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
