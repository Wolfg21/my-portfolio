import React from "react";

const Header = () => {
  const NAV_ITEMS = ["Skills", "Projects", "About", "Contact"];

  return (
    <header className="flex md:flex-row justify-between items-start md:items-center px-[min(5vw,32px)] tracking-[-0.04em] py-6 w-full font-mono text-accent text-[min(3vw,18px)] font-medium">
      <h1 className="font-medium text-wrap w-32 md:text-nowrap">
        Fullstack Web Developer
      </h1>

      <nav aria-label="Main navigation" className="mt-0">
        <ul className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="group relative block overflow-hidden h-[1.2em] font-medium cursor-pointer select-none leading-[1em]"
              >
                <span
                  className="
                    block w-full leading-[1.2em]
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
                    absolute top-full left-0 w-full block leading-[1.2em]
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
