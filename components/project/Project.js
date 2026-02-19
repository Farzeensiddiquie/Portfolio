"use client";
import { useRef } from "react";
import Image from "next/image";
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
    image: "/project1.png",
    link: "https://klikly-v1.vercel.app",
  },
  {
    tag: "Web App",
    title: "Library Management Platform",
    description:
      "An online platform to manage book inventory, member registrations, and borrowing history with advanced search and analytics features.",
    image: "/projectv2.png",
    link: "https://richardhanrickportfolio.vercel.app",
  },
  {
    tag: "Portfolio",
    title: "Alex Morgan’s Portfolio",
    description:
      "A personal portfolio website showcasing creative projects, work experience, and interactive UI animations built with Next.js and GSAP.",
    image: "/projectv3.png",    link: "https://example.com/portfolio",  },
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
      id="project"
      aria-labelledby="projects-heading"
      className="w-full px-5 md:px-40 py-16 md:py-28"
    >
      {/* Section Heading */}
      <h2
        id="projects-heading"
        className="relative  text-3xl md:text-4xl font-bold text-white mb-16 pb-10 text-center"
      >
        Featured Projects
      </h2>

      <div className="flex bg-gray/5 backdrop-blur-lg border border-white/20 rounded-xl p-5 flex-col gap-28">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`project-card gap-10 flex flex-col md:flex-row items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            aria-label={project.title}
          >
            {/* Left Side - Text */}
            <div
              className={`md:w-1/2 z-30 bg-white/15 backdrop-blur-3xl border border-white/20 p-6 rounded-lg
              ${index % 2 === 0 ? "xl:translate-x-24" : "xl:-translate-x-24"}`}
            >
              <p className="text-sm text-[#14827ec1] font-semibold tracking-wide">
                {project.tag}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-4 leading-relaxed text-[15px] md:text-base">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-2  hover:text-[#14827ec1] text-[#c9c9c9] text-semibold rounded-lg transition-colors duration-300"
              >
                View Project &#8599;
              </a>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105 focus:scale-105"
                priority={index === 0} // only first project is priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
