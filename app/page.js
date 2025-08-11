import React from "react";
import Hero from "@/components/Hero/Hero";
import About from "@/components/about/About";
import Navbar from "@/components/navbar/Navbar";
import Contact from "@/components/contact/Contact";
import Project from "@/components/project/Project";

export default async function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-img">
        <Hero />
      </div>
      {/* hero bottom line */}
      <div className="md:px-[4rem] sm:px-[2rem] px:px-[1rem] bg-gradient-to-r from-[#08101F] to-[#093341]  ">
        <div className="h-[2px] w-full bg-gradient-to-r from-[#1875A3] via-[#325565] to-[#049191] rounded-full shadow-[0_0_12px_#8f5cf7]/50"></div>
      </div>
      <About />
      <Project />
      <Contact />
    </>
  );
}
