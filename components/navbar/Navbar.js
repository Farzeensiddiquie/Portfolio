"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <nav className="fixed w-full left-1/2 py-5 px-5 md:px-20 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out">
        <div
          className="
            flex justify-between items-center md:h-[70px] sm:h-[60px] px-5 
            md:px-15 md:min-w-[50vh] md:gap-[5vw]
            md:bg-white/5 md:backdrop-blur-sm md:rounded-3xl
          "
        >
          <Logo />
          <DesktopNav />
          <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </nav>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[30] transition-opacity duration-300 md:hidden"
        />
      )}
    </>
  );
}
