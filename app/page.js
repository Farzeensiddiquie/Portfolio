import React from "react";
import Hero from "@/components/Hero/Hero";
import About from "@/components/about/About";
import Navbar from "@/components/navbar/Navbar";
import Contact from "@/components/contact/Contact";
import Project from "@/components/project/Project";
import Footer from "@/components/footer/Footer";
import StatsSection from "@/components/StatsSection";

export default async function Home() {
  return (
    <div className="bg">
      <Navbar />
      <Hero />
      <StatsSection/>
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
