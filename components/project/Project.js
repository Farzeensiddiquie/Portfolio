"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    tag: "Featured Project",
    title: "BrewVista – Your Coffee, Your Way",
    description:
      "A sleek coffee ordering app that lets users discover cafés, customize brews, and order their favorite coffee with just a few taps.",
    image: "/project1.webp",
  },
  {
    tag: "Web App",
    title: "Library Management Platform",
    description:
      "An online platform to manage book inventory, member registrations, and borrowing history with advanced search and analytics features.",
    image: "/project2.png",
  },
  {
    tag: "Portfolio",
    title: "Alex Morgan’s Portfolio",
    description:
      "A personal portfolio website showcasing creative projects, work experience, and interactive UI animations built with Next.js and GSAP.",
    image: "/project3.png",
  },
];

const ProjectShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(".project-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full px-5 md:px-40 py-16 md:py-28"
    >
      <div className="flex bg-gray/5 backdrop-blur-lg border border-white/20 rounded-xl p-5 flex-col gap-28">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card gap-10 flex flex-col md:flex-row items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Left Side - Text */}
            <div
              className={`md:w-1/2 z-30 bg-white/15 backdrop-blur-3xl border border-white/20 p-4 rounded-lg
              ${index % 2 === 0 ? "xl:translate-x-24" : "xl:-translate-x-24"}`}
            >
              <p className="text-sm text-purple-400 font-semibold tracking-wide">
                {project.tag}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 text-white">
                {project.title}
              </h2>
              <p className="text-gray-300 mt-4 leading-relaxed text-[15px] md:text-base">
                {project.description}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
