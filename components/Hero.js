'use client';


import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import Navbar from './Navbar';

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
    <section className="bg-[radial-gradient(ellipse_at_top_center,_#2e2e2e_0%,_#1c1c1c_40%,_#0d0d0d_100%)] h-[100vh] overflow-hidden w-full text-white relative">
     
      <Navbar/>
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
            key="farzeen"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold">I am Farzeen Wasif</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {step === 2 && (
        <motion.div
          key="final"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center overflow-hiden h-[75vh] px-6 md:px-16"
        >
          <div className="max-w-3xl text-left flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold"
            >
             <span className='text-sm text-gray-400 '>Hi,I am</span> <br/><span className='font'>Farzeen Wasif</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="min-h-[56px] md:min-h-[64px] text-lg md:text-2xl bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent font-medium"
            >
              <Typewriter
                words={[
                  'I am a Full Stack Web Developer.',
                  'I also build Mobile Apps.',
                  'I build responsive and scalable apps.',
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={45}
                deleteSpeed={30}
                delaySpeed={1500}
                onType={(count) => {
                  if (count === 0) handleTypeDone();
                }}
              />
            </motion.div>

          <div className="min-h-[64px]">
  {showButtons && (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-4 flex flex-wrap justify-center md:justify-start text-lg gap-5"
    >

                  <Link
                    href="/projects"
                    className="px-8 py-3 w-[160px] bg-gradient-to-r from-[#4b4b4b] to-[#2e2e2e] text-white font-semibold rounded-lg hover:brightness-110 hover:scale-105 transition-transform duration-300"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 w-[160px] py-3 border-2 border-gray-500 text-gray-300 font-semibold rounded-lg transition-all duration-300 
             hover:scale-105 hover:bg-gradient-to-r hover:from-[#4b4b4b] hover:to-[#2e2e2e] hover:text-white hover:border-transparent"
                  >
                    Contact Me
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: step === 2 ? 1 : 0 }}
        transition={{ delay: 6, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-white text-3xl">↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
