import React from "react";
import AboutForeground from "./AboutForeground";
import AboutModelWrapper from "./AboutModelWrapper";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black relative w-full h-screen  text-white overflow-hidden"
    >
     <AboutModelWrapper />
      <AboutForeground />
      <div className="absolute bottom-0 left-0 z-10">
        <img src="/bg.png" alt="" />
      </div>
    </section>
  );
}
