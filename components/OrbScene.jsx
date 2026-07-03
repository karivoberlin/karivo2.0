"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef } from "react";

function PremiumOrb() {
  const orb = useRef();
  const ringA = useRef();
  const ringB = useRef();
  const ringC = useRef();
  const ringD = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (orb.current) {
      orb.current.rotation.y = t * 0.18;
      orb.current.rotation.x = Math.sin(t * 0.35) * 0.13;
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.18;
    if (ringB.current) ringB.current.rotation.x = t * 0.14;
    if (ringC.current) ringC.current.rotation.y = t * 0.11;
    if (ringD.current) ringD.current.rotation.z = -t * 0.09;
  });

  return (
    <Float speed={1.05} rotationIntensity={0.35} floatIntensity={0.52}>
      <group>
        <mesh ref={orb}>
          <sphereGeometry args={[1.92, 128, 128]} />
          <MeshDistortMaterial
            color="#050505"
            roughness={0.09}
            metalness={0.94}
            distort={0.18}
            speed={1.12}
            envMapIntensity={1.65}
          />
        </mesh>

        <mesh ref={ringA} rotation={[1.24, 0.34, 0.16]}>
          <torusGeometry args={[2.25, 0.012, 16, 220]} />
          <meshStandardMaterial color="#f2c283" emissive="#c8793e" emissiveIntensity={1.45} />
        </mesh>
        <mesh ref={ringB} rotation={[0.44, 1.12, -0.52]}>
          <torusGeometry args={[2.58, 0.007, 16, 220]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} transparent opacity={0.42} />
        </mesh>
        <mesh ref={ringC} rotation={[1.82, .22, .75]}>
          <torusGeometry args={[1.58, 0.006, 16, 180]} />
          <meshStandardMaterial color="#d99658" emissive="#c8793e" emissiveIntensity={0.75} transparent opacity={0.62} />
        </mesh>
        <mesh ref={ringD} rotation={[0.9, -0.8, 0.2]}>
          <torusGeometry args={[2.9, 0.0045, 12, 220]} />
          <meshStandardMaterial color="#f7f3ec" transparent opacity={0.19} />
        </mesh>
      </group>
    </Float>
  );
}

export default function OrbScene() {
  return (
    <div className="orbCanvas">
      <Canvas camera={{ position: [0, 0, 6.35], fov: 42 }} dpr={[1, 1.75]}>
        <ambientLight intensity={0.72} />
        <directionalLight position={[3.2, 4.5, 4]} intensity={2.5} color="#f2c283" />
        <pointLight position={[-4, -2, 4]} intensity={2.1} color="#ffffff" />
        <pointLight position={[0, -4, 2]} intensity={1.3} color="#c8793e" />
        <Sparkles count={60} scale={6.1} size={1.1} speed={0.22} opacity={0.34} color="#f2c283" />
        <PremiumOrb />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
