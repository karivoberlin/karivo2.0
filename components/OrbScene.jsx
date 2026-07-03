"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef } from "react";

function Orb() {
  const sphere = useRef();
  const ringA = useRef();
  const ringB = useRef();
  const ringC = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (sphere.current) {
      sphere.current.rotation.y = t * 0.16;
      sphere.current.rotation.x = Math.sin(t * 0.35) * 0.08;
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.11;
    if (ringB.current) ringB.current.rotation.x = -t * 0.08;
    if (ringC.current) ringC.current.rotation.y = t * 0.13;
  });

  return (
    <Float speed={1.05} floatIntensity={0.38} rotationIntensity={0.22}>
      <group>
        <mesh ref={sphere}>
          <sphereGeometry args={[3.55, 192, 192]} />
          <MeshDistortMaterial
            color="#050505"
            metalness={1}
            roughness={0.045}
            envMapIntensity={2.2}
            distort={0.1}
            speed={0.9}
          />
        </mesh>

        <mesh ref={ringA} rotation={[1.12, 0.22, 0.15]}>
          <torusGeometry args={[4.02, 0.014, 18, 320]} />
          <meshStandardMaterial color="#f2c283" emissive="#c8793e" emissiveIntensity={1.65} />
        </mesh>

        <mesh ref={ringB} rotation={[0.36, 1.28, 0.42]}>
          <torusGeometry args={[4.35, 0.007, 16, 320]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.24} />
        </mesh>

        <mesh ref={ringC} rotation={[2.04, 0.42, -0.25]}>
          <torusGeometry args={[3.05, 0.008, 16, 260]} />
          <meshStandardMaterial color="#d99156" emissive="#c8793e" emissiveIntensity={0.72} transparent opacity={0.82} />
        </mesh>
      </group>
    </Float>
  );
}

export default function OrbScene() {
  return (
    <div className="orbCanvas">
      <Canvas camera={{ position: [0, 0, 5.4], fov: 28 }} dpr={[1, 1.65]}>
        <fog attach="fog" args={["#040404", 6, 16]} />
        <ambientLight intensity={0.68} />
        <directionalLight intensity={3.2} position={[4, 5, 5]} color="#f2c283" />
        <pointLight intensity={4.8} position={[5, 4, 3]} color="#f2c283" />
        <pointLight intensity={2.6} position={[-5, -2, 2]} color="#ffffff" />
        <Sparkles count={115} scale={8.4} size={1.7} speed={0.18} opacity={0.32} color="#f2c283" />
        <Orb />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
