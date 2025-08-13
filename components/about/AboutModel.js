'use client';

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SkullModel() {
  const ref = useRef();
  const { scene, animations } = useGLTF('/models/skull_face.glb');
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (!ref.current || !actions) return;

    const actionNames = Object.keys(actions);
    if (actionNames.length === 0) return;

    const action = actions[actionNames[0]];
    action.paused = true;
    action.play();

    let targetTime = 0;

    ScrollTrigger.create({
      trigger: "#about",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const duration = action.getClip().duration;
        targetTime = self.progress * duration;
      }
    });

    // Smoothly interpolate action.time towards targetTime
    gsap.ticker.add(() => {
      action.time += (targetTime - action.time) * 0.1; // 0.1 is smoothing factor
    });

  }, [actions]);

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.04}
      position={[0, -13, -10]}
      rotation={[0, Math.PI * 2, 0]}
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
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
