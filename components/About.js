'use client';

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Skull model component
function SkullModel() {
  const { scene } = useGLTF('/skull_face.glb');
  const ref = useRef();

  // Animate rotation via scroll
  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current.rotation, {
      y: Math.PI * 2.3, // full rotation
      scrollTrigger: {
        trigger: "#about", // section ID
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(ref.current.position, {
    
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

  }, []);

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.04}                // your scale
      position={[0, -13, -10]}    // your position
      rotation={[0, Math.PI , 0]} // your rotation
    />
  );
}

useGLTF.preload('/skull_face.glb');

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full h-screen bg-black text-white overflow-hidden"
    >
      {/* 3D Model Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 5, 8], fov: 35 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <Suspense fallback={null}>
            <SkullModel />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold">About Me</h1>
      </div>
    </section>
  );
}
