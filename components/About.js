'use client';

import React from 'react';
import SpotLightEffect from './SpotLightEffect';

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center h-screen text-4xl font-bold  bg-[radial-gradient(ellipse_at_top_center,_rgba(46,46,46,0.85)_0%,_rgba(28,28,28,0.75)_30%,_rgba(13,13,13,0.65)_100%)] min-h-screen w-full text-white relative overflow-hidden before:content-[''] before:absolute before:top-40 before:left-150 before:w-[500px] before:h-[500px] before:bg-[radial-gradient(circle,_#2e2e2e_0%,_transparent_100%)] before:opacity-40 before:blur-3xl before:pointer-events-none"
    >
      <SpotLightEffect />

      {/* Content */}
      <div className="relative z-10 ">
        About
      </div>
    </section>
  );
}
