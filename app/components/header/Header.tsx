"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as NavMenu from "@radix-ui/react-navigation-menu";
import { MAIN_ID } from "@/app/lib/constants";

export default function Header() {
  const navPaths = [
    { label: "Accessibility Quiz", path: "/quiz" },
    { label: "Accessible Version", path: "/accessible" },
    { label: "Inaccessible Version", path: "/inaccessible" },
    { label: "Testing Tools", path: "/tools" },
  ];

  const handleSkipToContent = () => {
    document.getElementById(MAIN_ID)?.focus();
  };

  return (
    <header className="relative inline-flex justify-between bg-blue-600 text-white shadow-lg px-6 py-4">
      <a
        href={`#${MAIN_ID}`}
        onClick={handleSkipToContent}
        className="sr-only focus:not-sr-only absolute left-4 top-4 z-50 rounded bg-white px-4 py-2 font-semibold text-blue-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
      >
        Skip to main content
      </a>
      <div className="">
        <Link href="/" className="text-white hover:text-blue-200">
          <h1 className="text-3xl font-bold">Accessibility Demo Site</h1>
        </Link>
      </div>
      <NavMenu.Root className="">
        <div className="hidden lg:block">
          <NavigationList paths={navPaths} />
        </div>
        <div className="lg:hidden">
          <MobileNavigation paths={navPaths} />
        </div>
      </NavMenu.Root>
    </header>
  );
}

type NavigationProps = { paths: { path: string; label: string }[] };

const NavigationList = ({ paths }: NavigationProps) => {
  return (
    <NavMenu.List className={"flex flex-col space-x-4 px-4 py-2 lg:flex-row"}>
      {paths.map((pathObj) => (
        <NavMenu.Item key={pathObj.path}>
          <NavMenu.Link
            href={pathObj.path}
            className="text-blue-800 hover:text-blue-400 lg:text-white"
          >
            {pathObj.label}
          </NavMenu.Link>
        </NavMenu.Item>
      ))}
    </NavMenu.List>
  );
};

const MobileNavigation = ({ paths }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const navContainer = document.getElementById("mobile-nav-container");
      if (navContainer && !navContainer.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" id="mobile-nav-container">
      <button
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="font-bold cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:ring focus:outline-none focus:ring hover:ring-offset-2 focus:ring-offset-2 focus:ring-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        MENU
      </button>
      <section
        aria-label="Mobile navigation menu"
        id="mobile-navigation-menu"
        aria-hidden={!isOpen}
        className={
          "absolute w-64 right-0 bg-white shadow-lg px-1 py-2 border border-gray-300" +
          (isOpen ? " block" : " hidden")
        }
      >
        <NavigationList paths={paths} />
      </section>
    </div>
  );
};
