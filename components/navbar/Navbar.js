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
      <div className="flex fixed top-5 left-1/2 -translate-x-1/2 w-[90vw] md:min-w-[460px] md:w-[45vw] h-[7vh] items-center justify-between px-5 md:px-6 bg-black/10 backdrop-blur-lg border border-white/10 rounded-xl z-[50]">
        <Logo />
        <DesktopNav />
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

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
