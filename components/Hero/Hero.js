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
    <section id='hero' className="bg-img min-h-screen w-full text-white relative overflow-hidden ">
         <div className="absolute top-0 left-0 z-10">
        <img src="/bg.png" alt="" />
      </div>
     

      {/* === STEP CONTENTS === */}
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
            <h1 className="text-4xl md:text-5xl font-bold shrink-0">Hey There!</h1>
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
            <h1 className="text-2xl md:text-5xl sm:shrink-0">I am Farzeen Wasif</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === FINAL STEP: MAIN CONTENT === */}
      {step === 2 && (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-content flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-10 md:h-[75vh]"
        >
          <div className='sm:hidden flex flex-col justify-center items-center mt-5'>
        <div className='hidden sm:block w-5 h-5 rounded-full bg-[#1875A3]' />
<div className='hidden sm:block w-1 h-40 bg-gradient-to-b from-[#1875A3] via-[#049191] to-[#03141c]' />

          </div>
          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full px-10 md:w-1/2"
            >
            
            <HeroText handleTypeDone={handleTypeDone} showButtons={showButtons} />
          </motion.div>

          {/* RIGHT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full md:w-1/2"
            transition={{ duration: 0.8, delay: 0.4 }}
            >
            <HeroImage />
          </motion.div>
        </motion.div>
      )}
   <div className="absolute bottom-0 right-0 z-10">
        <img src="/bg.png" alt="" />
      </div>
    
    </section>
  );
}
