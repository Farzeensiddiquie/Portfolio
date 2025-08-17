import React from "react";
import Hero from "@/components/Hero/Hero";
import About from "@/components/about/About";
import Navbar from "@/components/navbar/Navbar";
import Contact from "@/components/contact/Contact";
import Project from "@/components/project/Project";
import Footer from "@/components/footer/Footer";
import StatsSection from "@/components/StatsSection";

import FeatureCards from "@/components/FeatureCards";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import LogoShowcase from "@/components/LogoShowcase";
import SpinningGlobe from "@/components/SpinningGlob";

export default async function Home() {
  return (
    <div className="bg">
      <Navbar />
      <Hero />
      <StatsSection/>
      <LogoShowcase/>
      <Project />
      <FeatureCards />
      <About />
      <TechStack/>
      <Experience/>
      <SpinningGlobe/>
      <Contact />
      <Footer />
    </div>
  );
}
