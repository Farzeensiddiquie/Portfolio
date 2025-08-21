"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function HeroText({ showButtons }) {
  return (
    <div className="text-center md:text-left">
      {/* Intro & Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="leading-12"
      >
        <p className="text-xl pl-2 text-gray-400">Hi, I am</p>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold">
          Farzeen <span className="text-[#14827ec1]">Wasif</span>
        </h1>
        <h2 className="bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent text-[1.4rem] sm:text-[1.5rem] mt-2">
          I am here to
        </h2>
      </motion.div>

      {/* Typewriter as Role/Value Statement */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg sm:text-xl md:text-2xl pb-5 bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent font-medium mt-2"
      >
        <Typewriter
          words={[
            "Build your Full Stack Web Applications.",
            "Build your Mobile Apps.",
            "Build responsive and scalable apps.",
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          cursorColor="#fff"
          typeSpeed={40}
          deleteSpeed={25}
          delaySpeed={2000}
        />
      </motion.h2>

      {/* Sub Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-md text-gray-200 pb-15 sm:text-lg md:text-xl m-6"
      >
        I build applications that are visually appealing, highly functional,
        and user-friendly.
      </motion.p>

      {/* CTA Buttons */}
      <div className="min-h-[64px]">
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center md:justify-start text-lg gap-4"
          >
            {/* CV Button */}
            <a
              href="Farzeen_Wasif_Developer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Farzeen Wasif's CV (PDF)"
              className="px-6 py-3 text-center w-[150px] sm:w-[220px] bg-[linear-gradient(135deg,_#6DB5D6,_#2D7373,_#012D2D)] text-white font-semibold rounded-lg shadow-md hover:brightness-110 hover:scale-105 transition-transform duration-300"
            >
              View CV
            </a>

            {/* Contact Button */}
            <Link
              href="#contact"
              aria-label="Contact Farzeen Wasif"
              className="flex justify-around px-6 py-3 w-[150px] sm:w-[220px] border border-white/20 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#6DB5D6] hover:to-[#012D2D] hover:text-white hover:border-transparent"
            >
              <span>Contact Me</span>
              <span aria-hidden="true">↓</span>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
