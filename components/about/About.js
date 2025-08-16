"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutModelWrapper from "./AboutModelWrapper";

export default function About() {
  return (
    <section
      id="about"
      className="w-full  relative text-white flex items-center px-6 py-20"
    >
      <div className="flex flex-col md:flex-row md:justify-center md:gap-50 justify-center sm:items-center itmes-center md:items-center w-full gap-10">

        {/* Left - Text */}
        <motion.div
          className="flex flex-col cursor-pointer bg-gray/10 backdrop-blur-lg border border-white/20  p-4 rounded-2xl gap-5 text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-[#14827ec1]">Me</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Hi! I'm Farzeen — an application developer passionate about building beautiful, high-performance apps.
          </p>

          <p className="text-gray-400 text-base md:text-xl leading-relaxed mt-4">
            I specialize in crafting responsive user interfaces, performant frontends, and smooth animations that feel natural. I enjoy solving problems, exploring new technologies, and creating products that people love to use.
          </p>

          <p className="text-gray-400 text-base md:text-xl leading-relaxed mt-4">
            I build web applications that are visually appealing, highly functional, and user-friendly. I also develop mobile apps using React Native and Expo Go, and design interfaces using tools like Figma. Additionally, I can create beautiful and functional desktop applications with Electron.js.
          </p>
        </motion.div>

        {/* Right - Model */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[320px] sm:w-[380px] md:w-[420px] h-[360px] sm:h-[420px] md:h-[500px] rounded-2xl bg-[#0c0c0d]/60 shadow-2xl ring-1 ring-black/40 backdrop-blur-sm overflow-hidden">
            
            {/* Orbiting small badges */}
            <div>
              <div className="absolute -top-1 left-6 orbit-badge">React</div>
              <div className="absolute -top-5 right-6 orbit-badge small">Next.js</div>
              <div className="absolute -bottom-2 left-8 orbit-badge small">Three</div>
              <div className="absolute bottom-4 right-10 orbit-badge">Tailwind</div>
            </div>

            {/* Model */}
            <div className="w-full h-full">
              <AboutModelWrapper />
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .orbit-badge {
          background: rgba(20,20,22,0.9);
          border: 1px solid rgba(255,255,255,0.04);
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 13px;
          color: #e6eef8;
          box-shadow: 0 8px 24px rgba(2,6,23,0.6);
          transform-origin: center;
          animation: float 5s ease-in-out infinite;
        }
        .orbit-badge.small {
          font-size: 12px;
          padding: 5px 8px;
          animation-duration: 6.5s;
        }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          50% { transform: translateY(-8px) rotate(6deg); opacity: .95; }
          100% { transform: translateY(0) rotate(0deg); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
