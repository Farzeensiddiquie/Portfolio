import React from "react";
import AboutForeground from "./AboutForeground";
import AboutModelWrapper from "./AboutModelWrapper";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full h-screen  text-white overflow-hidden"
    >
     <AboutModelWrapper />
      <AboutForeground />
      
    </section>
  );
}
