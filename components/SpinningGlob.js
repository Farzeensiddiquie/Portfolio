"use client";

import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// ================== Logo Component ==================
function Logo({ position, texture, size }) {
  const meshRef = useRef();
  const { camera } = useThree();

  const aspect = texture.image
    ? texture.image.width / texture.image.height
    : 1;

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.lookAt(new THREE.Vector3(0, 0, 0));
    }
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      const logoWorldPos = new THREE.Vector3();
      meshRef.current.getWorldPosition(logoWorldPos);

      const logoDir = logoWorldPos.clone().normalize();
      const camDir = camera.position.clone().normalize();

      meshRef.current.visible = logoDir.dot(camDir) > 0;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[size * aspect, size]} />
      <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

// ================== Globe + Logos ==================
function GlobeWithLogos({ logos }) {
  const globeGroup = useRef();
  const { scene } = useGLTF("/models/scene.glb");
  const { size } = useThree();

  // Responsive globe scale
  let globeRadius, logoSize;
  if (size.width < 640) {
    globeRadius = 1.2;
    logoSize = 0.18;
  } else if (size.width < 1024) {
    globeRadius = 1.8;
    logoSize = 0.26;
  } else {
    globeRadius = 2.4;
    logoSize = 0.34;
  }

  // logos sit just 2% above globe surface
  const logoRadius = globeRadius * 0.7; // logos just inside the surface


  useFrame(() => {
    if (globeGroup.current) globeGroup.current.rotation.y += 0.002;
  });

  const logoTextures = useLoader(THREE.TextureLoader, logos);

  return (
    <group ref={globeGroup}>
      {/* Globe */}
      <primitive object={scene} scale={[globeRadius, globeRadius, globeRadius]} />

      {/* Logos */}
      {logoTextures.map((texture, i) => {
        const phi = Math.acos(-1 + (2 * i) / logoTextures.length);
        const theta = Math.sqrt(logos.length * Math.PI) * phi;

        const x = logoRadius * Math.cos(theta) * Math.sin(phi);
        const y = logoRadius * Math.sin(theta) * Math.sin(phi);
        const z = logoRadius * Math.cos(phi);

        return (
          <Logo key={i} position={[x, y, z]} texture={texture} size={logoSize} />
        );
      })}
    </group>
  );
}

// ================== Scene Wrapper ==================
function GlobeScene() {
  const logos = [
    "/images/logos/logo1.png",
    "/images/logos/logo2.png",
    "/images/logos/logo3.png",
    "/images/logos/logo4.png",
    "/images/logos/logo5.png",
    "/images/logos/logo6.png",
    "/images/logos/logo7.png",
    "/images/logos/logo8.png",
    "/images/logos/logo9.png",
    "/images/logos/logo11.png",
    "/images/logos/logo12.png",
    "/images/logos/logo13.png",
    "/images/logos/logo14.png",
    "/images/logos/logo15.png",
    "/images/logos/logo16.png",
    "/images/logos/logo17.png",
    "/images/logos/logo18.png",
  ];

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      style={{ width: "100%", height: "100vh" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} />
      <GlobeWithLogos logos={logos} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default dynamic(() => Promise.resolve(GlobeScene), { ssr: false });
