"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function HeroText({ handleTypeDone, showButtons }) {
  return (
    <div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="leading-12"
      >
        <span className="text-xl pl-2 text-gray-400">Hi, I am</span> <br />
        <span className="text-3xl sm:text-4xl md:text-7xl font-bold">
          Farzeen <span className="text-[#14827ec1]">Wasif</span>
        </span>
        <br />
        <span className="bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent text-[1.4rem] sm:text-[1.5rem]">
          I am here to
        </span>
      </motion.div>

      {/* Typewriter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className=" text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent font-medium "
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
          onType={(count) => {
            if (count === 0) handleTypeDone();
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full overflow-hidden"
      >
        <p className="margin-p text-md text-gray-200 sm:text-lg md:text-xl m-6">
          I build applications that are visually appealing, highly
          functional, and user-friendly.
        </p>
      </motion.div>
      {/* Buttons */}
      <div className="min-h-[64px]">
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center md:justify-start text-lg gap-4"
          >
            <Link
              href="Farzeen_Wasif_Developer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-center w-[150px] sm:w-[220px] bg-[linear-gradient(135deg,_#6DB5D6,_#2D7373,_#012D2D)] text-white font-semibold rounded-lg shadow-md hover:brightness-110 hover:scale-105 transition-transform duration-300"
            >
              View CV
            </Link>
            <Link
              href="#contact"
              className="flex justify-around px-6 py-3 w-[150px] sm:w-[220px] border border-white/20 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#6DB5D6] hover:to-[#012D2D] hover:text-white hover:border-transparent"
            >
              <span>Contact Me</span>
              <span>↓</span>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
