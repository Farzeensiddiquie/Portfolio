'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import HeroText from './HeroText';
import HeroImage from './HeroImage';

export default function Hero() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // show buttons slightly after mount
    const timer = setTimeout(() => setShowButtons(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen w-full text-white relative overflow-hidden"
    >
      <motion.div
        key="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-margin flex flex-col-reverse md:flex-row items-center justify-around gap-10 py-15 md:h-[75vh] mx-auto"
      >
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gap-10 w-full max-w-[480px] md:items-start text-center md:text-left"
        >
          <HeroText showButtons={showButtons} />
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center"
        >
          <HeroImage />
        </motion.div>
      </motion.div>
    </section>
  );
}
