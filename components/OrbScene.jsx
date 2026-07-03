"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef } from "react";

function ExperienceOrb() {
  const sphere = useRef();
  const ringA = useRef();
  const ringB = useRef();
  const ringC = useRef();
  const ringD = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (sphere.current) {
      sphere.current.rotation.y = t * 0.16;
      sphere.current.rotation.x = Math.sin(t * 0.36) * 0.08;
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.16;
    if (ringB.current) ringB.current.rotation.x = -t * 0.1;
    if (ringC.current) ringC.current.rotation.y = t * 0.12;
    if (ringD.current) ringD.current.rotation.z = -t * 0.08;
  });

  return (
    <Float speed={1.05} floatIntensity={0.38} rotationIntensity={0.2}>
      <group>
        <mesh ref={sphere}>
          <sphereGeometry args={[3.7, 256, 256]} />
          <MeshDistortMaterial
            color="#040404"
            metalness={1}
            roughness={0.035}
            envMapIntensity={2.35}
            distort={0.105}
            speed={0.85}
          />
        </mesh>

        <mesh ref={ringA} rotation={[1.1, 0.2, 0]}>
          <torusGeometry args={[4.22, 0.014, 18, 340]} />
          <meshStandardMaterial color="#f2c283" emissive="#c8793e" emissiveIntensity={1.85} />
        </mesh>

        <mesh ref={ringB} rotation={[0.32, 1.25, 0.38]}>
          <torusGeometry args={[4.65, 0.0065, 16, 340]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.24} />
        </mesh>

        <mesh ref={ringC} rotation={[2.05, 0.5, 0.1]}>
          <torusGeometry args={[3.15, 0.0075, 16, 260]} />
          <meshStandardMaterial color="#d99156" emissive="#c8793e" emissiveIntensity={0.78} transparent opacity={0.78} />
        </mesh>

        <mesh ref={ringD} rotation={[0.85, -0.72, 0.22]}>
          <torusGeometry args={[5.05, 0.0045, 12, 340]} />
          <meshStandardMaterial color="#fff8ee" transparent opacity={0.16} />
        </mesh>
      </group>
    </Float>
  );
}

export default function OrbScene() {
  return (
    <div className="orbCanvas">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 28 }} dpr={[1, 1.8]}>
        <fog attach="fog" args={["#040404", 6, 16]} />
        <ambientLight intensity={0.72} />
        <directionalLight position={[4.5, 5, 5]} intensity={3.2} color="#f2c283" />
        <pointLight position={[5, 4, 3]} intensity={5} color="#f2c283" />
        <pointLight position={[-5, -2, 2]} intensity={3} color="#ffffff" />
        <pointLight position={[0, -5, 4]} intensity={2.4} color="#c8793e" />
        <Sparkles count={125} scale={8.8} size={1.85} speed={0.18} opacity={0.32} color="#f2c283" />
        <ExperienceOrb />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
