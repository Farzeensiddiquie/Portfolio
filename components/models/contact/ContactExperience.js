"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Computer from "./Computer";

// ✅ Separate ground plane component
const Ground = () => (
  <mesh
    receiveShadow
    position={[0, -1.5, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
  >
    <planeGeometry args={[30, 30]} />
    <meshStandardMaterial color="#3C3C3C" />
  </mesh>
);

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 7], fov: 45 }}
      aria-label="3D Computer Model Scene"
    >
      {/* Background color */}
      <color attach="background" args={["#202025"]} />

      {/* Lighting setup */}
      <ambientLight intensity={0.5} color="#fff" />
      <hemisphereLight intensity={0.35} groundColor="black" />
      <directionalLight
        position={[5, 5, 3]}
        intensity={2.5}
        color="#fff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        makeDefault
      />

      {/* Scene content */}
      <Ground />

      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Suspense fallback={null}>
          <Computer />
        </Suspense>
      </group>
    </Canvas>
  );
};

export default ContactExperience;
