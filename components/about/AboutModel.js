'use client';

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function SkullModel() {
  const ref = useRef();
  const { scene, animations } = useGLTF('/skull_face.glb');
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (!ref.current) return;

    
    gsap.to(ref.current.rotation, {
      y: Math.PI * 2.3,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
console.log('ref',ref);

    // Play animation when in view
    ScrollTrigger.create({
      trigger: "#about",
      start: "top 80%",
      onEnter: () => {
        if (actions && Object.keys(actions).length > 0) {
          Object.values(actions).forEach(action => {
            action.reset().play();
            action.loop = true;
          });
        }
      },
      onLeave: () => {
        if (actions && Object.keys(actions).length > 0) {
          Object.values(actions).forEach(action => action.stop());
        }
      }
    });

  }, [actions]);

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.04}
      position={[0, -13, -10]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

useGLTF.preload('/skull_face.glb');

export default function AboutModel() {
  return (
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
  );
}
