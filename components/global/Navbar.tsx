import { PropsWithChildren, useState, useEffect } from "react";
import Image from "next/image";

import { MagnifyingGlassIcon, MoonIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/studia_logo.svg";

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
      className={`sticky top-0 z-50 flex h-full items-center justify-between border-b-2 bg-white px-8 py-2 transition-shadow duration-200 ease-in-out 3xl:mx-[16%] ${
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
            <MagnifyingGlassIcon
              strokeWidth={1.75}
              className="h-6 w-6 stroke-slate-400"
            />
          </Button>

          <Button title={"Dark Mode"}>
            <MoonIcon
              strokeWidth={2.5}
              fill="none"
              className="h-6 w-6 stroke-slate-400"
            />
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
