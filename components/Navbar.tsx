import { PropsWithChildren, useState, useEffect } from "react";
import Image from "next/image";

import Logo from "../public/assets/studia_logo.svg";

type LinkData = {
  href: string;
  label: string;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const links: LinkData[] = [
    { href: "/", label: "Dashboard" },
    { href: "/library", label: "Library" },
    { href: "/discover", label: "Discover" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 flex h-full max-w-[2000px] items-center justify-between border-b-2 bg-white px-8 py-2 transition-shadow duration-200 ease-in-out 3xl:mx-[16%] ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <a href="/" className="flex items-center">
        <Image src={Logo} height={48} alt="Studia Logo" />
        <span className="text-4xl font-bold">Studia</span>
      </a>

      <div className="ml-28 flex gap-x-8">
        {links.map(({ href, label }) => (
          <NavLink key={href} href={href} label={label} />
        ))}
      </div>

      <div className="flex items-center gap-x-8">
        <div className="flex gap-x-3">
          <Button title={"Search"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              className="h-6 w-6 stroke-slate-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Button>

          <Button title={"Dark Mode"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              className="h-6 w-6 stroke-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </Button>

          <div className="flex items-center">
            <button className="rounded-md bg-secondary/80 px-6 py-3 font-semibold text-white transition-all ease-in-out hover:drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
              New
            </button>
          </div>
        </div>

        <img
          src="https://thispersondoesnotexist.com/image"
          className="h-16 rounded-full border-2"
          alt="Profile Picture"
        />
      </div>
    </nav>
  );
};

const NavLink = ({ href, label }: LinkData) => {
  return (
    <a
      href={href}
      className="hover-underline-animation p-2 text-lg font-medium hover:font-semibold hover:text-[#0A0911]"
    >
      {label}
    </a>
  );
};

const Button: React.FC<PropsWithChildren<any>> = ({ children, title }) => {
  return (
    <button
      title={title}
      className="hover:neumorphism h-full w-full rounded-full p-4 transition-all ease-in-out"
    >
      {children}
    </button>
  );
};

export default Navbar;
