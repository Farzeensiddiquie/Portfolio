"use client";
import React, { memo, Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";

function ComputerModel(props) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  );

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

// ✅ Memoized for performance
const Computer = memo((props) => (
  <Suspense
    fallback={
      <Html center>
        <span className="text-white text-sm animate-pulse">Loading 3D Model...</span>
      </Html>
    }
  >
    <ComputerModel {...props} />
  </Suspense>
));

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
