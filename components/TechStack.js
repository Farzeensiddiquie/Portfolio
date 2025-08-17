"use client";

import { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";

// Tech models data
const techStackModels = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// Tech images fallback
const techStackImgs = [
  { name: "React Developer", imgPath: "/images/logos/react.png" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Interactive Developer", imgPath: "/images/logos/three.png" },
  { name: "Project Manager", imgPath: "/images/logos/git.svg" },
];

// Individual model component
const Model = ({ model }) => {
  const { scene } = useGLTF(model.modelPath);

  // Optional material override
  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material.color.set("white");
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <primitive object={scene} scale={model.scale} rotation={model.rotation} />
    </Float>
  );
};

const TechStack = () => {
  // GSAP animation on scroll
  useEffect(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <div id="skills" className="flex justify-center items-center px-5 md:px-10 md:mt-40 mt-20">
      <div className="relative w-full h-full md:px-10  px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="grid xl:grid-cols-4 xl:px-25 md:grid-cols-2 grid-cols-1 xl:gap-16 md:gap-10 gap-5 md:mt-16" style={{marginTop: "4rem"}}>
          {techStackModels.map((tech, index) => (
            <div
              key={tech.name}
              className="border border-white/20 bg-white/5 text-white backdrop-blur-md tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="absolute left-0 bottom-[-100%] w-full h-full bg-[#2D3240] group-hover:bottom-0 transition-all duration-700" />
              <div className="flex flex-col md:justify-center items-center xl:gap-5 xl:h-[50vh] overflow-hidden relative z-10 group-hover:cursor-grab">
                <div className="flex justify-center items-center w-52 h-60 relative">
                  <Suspense fallback={<img src={techStackImgs[index].imgPath} alt={tech.name} />}>
                    <Canvas>
                      <ambientLight intensity={0.3} />
                      <directionalLight position={[5, 5, 5]} intensity={1} />
                      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
                      <Environment preset="city" />
                      <OrbitControls enableZoom={false} />
                      <Model model={tech} />
                    </Canvas>
                  </Suspense>
                </div>
                <div className="padding-x w-full text-center mt-2">
                  <p>{tech.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
