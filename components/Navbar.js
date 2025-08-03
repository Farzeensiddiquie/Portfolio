'use client';

import NavLink from './NavLink';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {/* Top Nav Bar */}
      <div className="flex mt-5 fixed md:top-5 justify-between items-center w-full md:w-[45vw] md:rounded-xl md:left-[30%] h-[7vh] md:backdrop-blur-3xl  md:border-b md:border-l md:border-white/10 px-7  md:px-5 z-[90]">
        {/* Logo Left */}
        <div className="logo flex items-center shrink-0">
          <img
            className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
            src="/Logo.png"
            alt="logo"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center items-center h-[40px] gap-[5vw]">
          <NavLink className="transform transition duration-300 hover:scale-130" href="/">
            Home
          </NavLink>
          <NavLink className="transform transition duration-300 hover:scale-130" href="#about">
            About
          </NavLink>
          <NavLink className="transform transition duration-300 hover:scale-130" href="/project">
            Projects
          </NavLink>
          <NavLink className="transform transition duration-300 hover:scale-130" href="/contact">
            Contact
          </NavLink>
        </nav>

        {/* Hamburger / Cross Icon */}
        <button
          className="md:hidden text-white z-[90]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Slide-in Mobile Menu (from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-[70vw] max-w-[300px] bg-[rgba(34,34,34,0.65)] backdrop-blur-md shadow-xl z-[80] transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20 text-white">
          <NavLink onClick={() => setMenuOpen(false)} className="text-lg" href="/">
            Home
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="text-lg" href="#about">
            About
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="text-lg" href="/project">
            Projects
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="text-lg" href="/contact">
            Contact
          </NavLink>
        </div>
      </div>

      {/* Background Overlay (click to close) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300"
        />
      )}
    </>
  );
}
