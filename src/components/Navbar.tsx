<<<<<<< HEAD
"use client";

import * as React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { NavbarMobileMenu } from "./NavbarMobileMenu";

export const navigationItems = [
  { name: "About", link: "/about" },
  { name: "Products", link: "/products" },
  { name: "Events", link: "/events" },
  { name: "Team", link: "/team" },
  { name: "Join", link: "/join" },
  {
    name: "Feedback",
    link: "https://airtable.com/appuVd3lWwTikuv40/shrLYVYcHUDQa8T3h",
  },
];

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width to toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // remove listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="gradient-shadow fixed w-full h-24 z-20"></div>
      <nav className="flex flex-row items-center justify-between bg-ycs-black text-white p-8 w-full fixed z-20">
        <Link href="/" className="font-extrabold pl-2 text-3xl">
          <div className="transition-transform duration-300 hover:translate-y-[0.075rem] hover:translate-x-[0.075rem] active:translate-y-[0.2rem] active:translate-x-[0.2rem] active:duration-100 absolute top-[1.95rem]">
            y/cs
          </div>
          <div className="font-black absolute left-[2.7rem] top-[2.15rem] -z-10 bg-gradient-to-r from-ycs-pink to-ycs-pink text-transparent bg-clip-text">
            y/cs
          </div>
        </Link>
        {isMobile ? (
          <NavbarMobileMenu />
        ) : (
          <ul className="flex gap-12 text-lg">
            {navigationItems.map((item, index) => (
              <Link
                href={item.link}
                className="nav-link transform duration-100 px-2 pb-2 top-[6px]"
                key={index}
                target={!item.link.startsWith("/") ? "_blank" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        )}
      </nav>
      <div className="h-24" />
    </>
=======
import * as React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-ycs-black text-white p-6 w-full fixed z-20 top-0">
      <div>
        <Link
          href="/"
          className="font-black pl-2 text-3xl hover:scale-110 transition-transform duration-300 inline-block"
        >
          y/cs
        </Link>
      </div>
      <ul className="flex gap-12 text-lg">
        <Link href="/about" className="nav-link transform duration-100">
          About
        </Link>
        <Link href="/products" className="nav-link transform duration-100">
          Products
        </Link>
        <Link href="/events" className="nav-link transform duration-100">
          Events
        </Link>
        <Link href="/team" className="nav-link transform duration-100">
          Team
        </Link>
        <Link
          href="https://airtable.com/appuVd3lWwTikuv40/shrLYVYcHUDQa8T3h"
          className="nav-link transform duration-100"
        >
          Feedback
        </Link>
      </ul>
    </nav>
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
  );
}

export default Navbar;
