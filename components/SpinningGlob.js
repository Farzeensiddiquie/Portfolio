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

  // keep aspect ratio of the texture
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

      // Vector from globe center to logo
      const logoDir = logoWorldPos.clone().normalize();

      // Vector from globe center to camera
      const camDir = camera.position.clone().normalize();

      // Dot product → if > 0, logo is in front
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

  // responsive scaling
  let radius = 2.2;
  let logoSize = 0.35;
  if (size.width < 768) {
    radius = 1.3;
    logoSize = 0.2;
  } else if (size.width < 1200) {
    radius = 1.8;
    logoSize = 0.28;
  }

  // rotate whole group (globe + logos)
  useFrame(() => {
    if (globeGroup.current) globeGroup.current.rotation.y += 0.002;
  });

  const logoTextures = useLoader(THREE.TextureLoader, logos);

  return (
    <group ref={globeGroup}>
      {/* Globe */}
      <primitive object={scene} scale={[radius, radius, radius]} />

      {/* Logos attached to rotating group */}
      {logoTextures.map((texture, i) => {
        const phi = Math.acos(-1 + (2 * i) / logoTextures.length);
        const theta = Math.sqrt(logos.length * Math.PI) * phi;

        const x = (radius + 0.3) * Math.cos(theta) * Math.sin(phi);
        const y = (radius + 0.3) * Math.sin(theta) * Math.sin(phi);
        const z = (radius + 0.3) * Math.cos(phi);

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
    "/images/logos/company-logo-1.png",
    "/images/logos/company-logo-2.png",
    "/images/logos/company-logo-3.png",
    "/images/logos/company-logo-4.png",
    "/images/logos/company-logo-5.png",
    "/images/logos/company-logo-6.png",
    "/images/logos/company-logo-7.png",
    "/images/logos/company-logo-8.png",
    "/images/logos/company-logo-8.png",
    "/images/logos/company-logo-8.png",
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
