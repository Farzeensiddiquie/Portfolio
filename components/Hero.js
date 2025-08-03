'use client';
import React from 'react';
 import useRotatingAnimation from '../hooks/useRotationAnimation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import Navbar from './Navbar';

export default function Hero() {
  const ellipseRef = useRotatingAnimation()
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
    <section className=" bg-[radial-gradient(ellipse_at_top_center,_rgba(46,46,46,0.85)_0%,_rgba(28,28,28,0.75)_30%,_rgba(13,13,13,0.65)_100%)] min-h-screen w-full text-white relative overflow-hidden before:content-[''] before:absolute before:top-40 before:left-150 before:w-[500px] before:h-[500px] before:bg-[radial-gradient(circle,_#2e2e2e_0%,_transparent_100%)] before:opacity-40 before:blur-3xl before:pointer-events-none">
      
      <Navbar />

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
          className="hero-content flex  flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-10  md:h-[75vh]"
        >
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              <span className='text-sm pl-2 text-gray-400'>Hi, I am</span> <br />
              <span className='font'>Farzeen Wasif</span>
              <br />
              <span className='md:text-[#465d82] text-gray-500 text-[1.2rem] sm:text-[1.4rem] '>I am here to </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="min-h-[54px] sm:min-h-[64px] text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent font-medium"
            >
              <Typewriter
                words={[
                  'Build your Full Stack Web Applications.',
                  'Build your Mobile Apps.',
                  'Build responsive and scalable apps.',
                ]}
                loop={false}
                cursor
                cursorStyle='|'
                cursorColor='#ffffff'
                typeSpeed={40}
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
                  className="mt-4 flex flex-wrap justify-center md:justify-start text-lg gap-4"
                >
                  <Link
                    href="/projects"
                    className="px-6 py-3 w-[150px] sm:w-[160px] bg-[linear-gradient(135deg,_#6DB5D6,_#2D7373,_#012D2D)] text-white font-semibold rounded-lg shadow-md hover:brightness-110 hover:scale-105 transition-transform duration-300"
                  >
                    Download CV
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 w-[150px] sm:w-[160px] border-2 border-gray-500 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#6DB5D6] hover:to-[#012D2D] hover:text-white hover:border-transparent hover:boder-0"
                  >
                    Contact Me
                  </Link>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="   overflow-hidden mb-[20]"
          >
           
        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <img
              src="https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/Components/hero-placeholder.png?updatedAt=1739628240660"
              alt="John Doe - Full Stack Developer"
              className="absolute top-0 left-0 h-full w-full object-contain p-7"
            />
            {/* SVG Ellipse */}
            <div
              ref={ellipseRef}
              className="absolute top-0 left-0 h-full w-full will-change-transform"
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 412 413"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="206"
                  cy="206.401"
                  r="204.5"
                  stroke="#18F2E5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="18 36 54 72"
                />
              </svg>
            </div>
          </div>
        </div>
          </motion.div>
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
