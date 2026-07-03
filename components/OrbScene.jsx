"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";
import { useRef } from "react";

function BlackOrb() {
  const sphere = useRef(null);
  const ringA = useRef(null);
  const ringB = useRef(null);
  const ringC = useRef(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (sphere.current) {
      sphere.current.rotation.y = t * 0.16;
      sphere.current.rotation.x = Math.sin(t * 0.35) * 0.08;
    }

    if (ringA.current) ringA.current.rotation.z = t * 0.12;
    if (ringB.current) ringB.current.rotation.x = -t * 0.1;
    if (ringC.current) ringC.current.rotation.y = t * 0.14;
  });

  return (
    <Float speed={1.1} floatIntensity={0.42} rotationIntensity={0.22}>
      <group>
        <mesh ref={sphere}>
          <sphereGeometry args={[3.7, 256, 256]} />
          <MeshDistortMaterial
            color="#050505"
            metalness={1}
            roughness={0.035}
            distort={0.1}
            speed={0.8}
            envMapIntensity={2.2}
          />
        </mesh>

        <mesh ref={ringA} rotation={[1.1, 0.2, 0]}>
          <torusGeometry args={[4.25, 0.014, 18, 360]} />
          <meshStandardMaterial
            color="#f2c283"
            emissive="#c8793e"
            emissiveIntensity={1.7}
          />
        </mesh>

        <mesh ref={ringB} rotation={[0.25, 1.25, 0.45]}>
          <torusGeometry args={[4.75, 0.006, 16, 360]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.23} />
        </mesh>

        <mesh ref={ringC} rotation={[2.05, 0.35, -0.2]}>
          <torusGeometry args={[3.35, 0.007, 16, 280]} />
          <meshStandardMaterial
            color="#d99156"
            emissive="#c8793e"
            emissiveIntensity={0.75}
            transparent
            opacity={0.68}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function OrbScene() {
  return (
    <div className="orbCanvas">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 28 }} dpr={[1, 1.7]}>
        <fog attach="fog" args={["#040404", 6, 16]} />

        <ambientLight intensity={0.72} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={3.4}
          color="#f2c283"
        />

        <pointLight position={[5, 4, 3]} intensity={5} color="#f2c283" />
        <pointLight position={[-5, -2, 2]} intensity={3} color="#ffffff" />
        <pointLight position={[0, -4, 3]} intensity={1.8} color="#c8793e" />

        <Sparkles
          count={140}
          scale={10}
          size={1.7}
          speed={0.18}
          opacity={0.32}
          color="#f2c283"
        />

        <BlackOrb />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
