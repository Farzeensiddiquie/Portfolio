'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';

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
      <nav className="fixed md:top-5 md:left-1/2 md:-translate-x-1/2 z-[50] w-full md:w-auto">
        <div
          className="
            flex justify-between items-center h-[50px] px-5 
            md:px-6 md:min-w-[50vh] md:gap-[5vw]
            bg-black/10 backdrop-blur-lg md:border md:border-white/10 md:rounded-3xl
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
