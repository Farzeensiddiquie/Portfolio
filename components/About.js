'use client';

import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className=" relative flex items-center justify-center h-screen text-4xl font-bold text-white overflow-hidden bg-[radial-gradient(ellipse_at_top_center,_rgba(46,46,46,0.85)_0%,_rgba(28,28,28,0.75)_30%,_rgba(13,13,13,0.65)_100%)] min-h-screen w-full text-white relative overflow-hidden before:content-[''] before:absolute before:top-40 before:left-150 before:w-[500px] before:h-[500px] before:bg-[radial-gradient(circle,_#2e2e2e_0%,_transparent_100%)] before:opacity-40 before:blur-3xl before:pointer-events-none"
    >
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[conic-gradient(from_180deg_at_50%_-4%,rgba(255,255,255,0.15)_0deg,transparent_70deg,transparent_290deg,rgba(255,255,255,0.15)_360deg)] pointer-events-none z-0 " />

      {/* Content */}
      <div className="relative z-10 ">
        About
      </div>
    </section>
  );
}
