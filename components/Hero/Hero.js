'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import HeroText from './HeroText';
import HeroImage from './HeroImage';

export default function Hero() {
  const [step, setStep] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 2000),
      setTimeout(() => setStep(2), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleTypeDone = () => {
    setTimeout(() => setShowButtons(true), 500);
  };

  return (
    <section id="hero" className="min-h-screen w-full text-white relative overflow-hidden">
      {/* STEP CONTENTS */}
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="hey"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Hey There!</h1>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <h1 className="text-2xl md:text-5xl">I am Farzeen Wasif</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL STEP: MAIN CONTENT */}
      {step === 2 && (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-margin flex flex-col-reverse md:flex-row items-center justify-around gap-10 px-6 md:px-16 py-15 md:h-[75vh]  mx-auto"
        >
          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="gap-10 w-full max-w-[480px]  md:items-start text-center md:text-left"
          >
            <HeroText handleTypeDone={handleTypeDone} showButtons={showButtons} />
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
      )}
    </section>
  );
}
