import React from "react";
import AboutModel from "./AboutModel";
import AboutForeground from "./AboutForeground";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full h-screen  text-white overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mov"
        autoPlay
        loop
        muted
        playsInline
      />

      <AboutModel />
      <AboutForeground />
    </section>
  );
}
