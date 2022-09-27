import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Tooltip from "./Tooltip";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  MoonIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Logo from "@/assets/studia_logo.svg";

type LinkData = {
  href: string;
  label: string;
  classes?: string;
};

const Navbar = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY && scrollY > 0 ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  const links: LinkData[] = [
    { href: "/", label: "Dashboard" },
    { href: "/library", label: "Library" },
    { href: "/discover", label: "Discover" },
  ];

  return (
    <>
      <nav
        className={`transition-translate sticky top-0 z-50 mb-10 flex h-full items-center justify-between border-b-2 bg-white px-2 py-2 pr-5 duration-[600ms] ease-in-out sm:px-8  3xl:mx-[16%] ${
          scrollDir === "down" ? "-translate-y-full" : ""
        }`}
      >
        <a href="/" className="flex items-center">
          <Image src={Logo} height={48} alt="Studia Logo" />
          <span className="hidden text-4xl font-bold md:block">Studiia</span>
        </a>
        <div className=" hidden items-center gap-x-8 sm:flex lg:ml-28">
          {links.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} />
          ))}
        </div>
        <div className="hidden items-center gap-x-8 lg:flex">
          <div className="flex gap-x-3">
            <NavButton title={"Search"}>
              <MagnifyingGlassIcon
                strokeWidth={1.75}
                className="h-6 w-6 stroke-slate-400"
              />
            </NavButton>

            <NavButton title={"Dark Mode"}>
              <MoonIcon
                strokeWidth={2.5}
                fill="none"
                className="h-6 w-6 stroke-slate-400"
              />
            </NavButton>

            <NavButton title="New">
              <PlusIcon
                strokeWidth={2}
                strokeLinecap="round"
                fill="none"
                className="h-6 w-6 rounded-lg stroke-secondary"
              />
            </NavButton>
          </div>

          <img
            src={"https://thispersondoesnotexist.com/image"}
            className="h-16 w-16 rounded-full border-2"
            alt="Profile Picture"
          />
        </div>
        <span className="block text-4xl font-bold sm:hidden">Studiia</span>
        <div className={`flex lg:hidden`}>
          <NavButton title="Menu" disableTooltip={true}>
            <AnimatePresence mode="popLayout">
              {mobileMenuOpen ? (
                <motion.div
                  key={"x"}
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                >
                  <XMarkIcon
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    strokeWidth={2}
                    fill="none"
                    className="block h-6 w-6 stroke-slate-400"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={"bars"}
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                >
                  <Bars3Icon
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    strokeWidth={1.5}
                    fill="none"
                    className="block h-6 w-6 stroke-slate-400"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </NavButton>
        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`${
          !mobileMenuOpen ? "hidden" : "flex"
        }  w-full  flex-col items-center justify-between border-b-2 border-b-slate-300 px-4 pb-8 sm:flex-row md:mb-10 md:justify-around lg:hidden`}
      >
        <div className="flex items-center gap-x-4">
          <img
            src={"https://thispersondoesnotexist.com/image"}
            className="h-16 w-16 rounded-full border-2"
            alt="Profile Picture"
          />
          <div className="flex flex-col">
            <div className="text-lg font-semibold">robinjr26</div>
            <a
              href="/"
              className="text-sm hover:font-medium hover:text-secondary"
            >
              View Profile
            </a>
          </div>
        </div>

        <div className="flex gap-x-2">
          <div>
            <NavButton title={"Search"}>
              <MagnifyingGlassIcon
                strokeWidth={1.75}
                className="h-6 w-6 stroke-slate-400"
              />
            </NavButton>
          </div>

          <div>
            <NavButton title={"Dark Mode"}>
              <MoonIcon
                strokeWidth={2.5}
                fill="none"
                className="h-6 w-6 stroke-slate-400"
              />
            </NavButton>
          </div>

          <div>
            <NavButton title="New">
              <PlusIcon
                strokeWidth={2}
                strokeLinecap="round"
                fill="none"
                className="h-6 w-6 rounded-lg stroke-secondary"
              />
            </NavButton>
          </div>
        </div>
      </div>

      <div
        className={`${
          !mobileMenuOpen ? "hidden" : "flex"
        } h-screen w-full flex-col pt-10 md:hidden`}
      >
        <div className="mt-8 flex flex-col text-center sm:hidden">
          {links.map(({ href, label }, index) => (
            <a
              className="border-b-2 border-slate-300 py-8 text-3xl font-semibold last:border-b-0"
              href={href}
              key={index}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const NavLink = ({ href, label, classes }: LinkData) => {
  return (
    <a
      href={href}
      className={`hover-underline-animation p-2 text-lg font-medium hover:font-semibold hover:text-[#0A0911] ${classes}`}
    >
      {label}
    </a>
  );
};

const NavButton = ({
  children,
  title,
  disableTooltip = false,
}: {
  children: React.ReactNode;
  title: string;
  disableTooltip?: boolean;
}) => {
  return (
    <Tooltip disable={disableTooltip} text={title} marginTop={20}>
      <button
        type="button"
        className="hover:neumorphism h-full w-full rounded-full p-4 transition-all ease-in-out"
      >
        {children}
      </button>
    </Tooltip>
  );
};

export default Navbar;
