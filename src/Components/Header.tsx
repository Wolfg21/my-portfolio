import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between items-center px-8 py-6 w-full font-mono text-accent text-[min(3vw,15px)] font-medium">
      <p className="">Fullstack Web Developer</p>
      <nav>
        <span className="flex space-x-2">
          <p id="Skills" className="cursor-pointer">
            Skills
          </p>
          <p id="Projects" className="cursor-pointer">
            Projects
          </p>
          <p id="About" className="cursor-pointer">
            About
          </p>
          <p id="Contact" className="cursor-pointer">
            Contact
          </p>
        </span>
      </nav>
    </div>
  );
};

export default Header;
