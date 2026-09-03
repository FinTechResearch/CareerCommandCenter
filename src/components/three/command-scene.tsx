"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Grid,
  MeshDistortMaterial,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/** Mouse-parallax rig that gently rotates the whole scene. */
function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const targetX = state.pointer.y * 0.18;
    const targetY = state.pointer.x * 0.35;
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      targetX,
      2.5,
      delta
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetY,
      2.5,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
}

/** The pulsing "radar core": distorted icosahedron + wireframe shell. */
function RadarCore() {
  const inner = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (inner.current) inner.current.rotation.y += delta * 0.25;
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.15;
      shell.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.35, 4]} />
        <MeshDistortMaterial
          color="#10b981"
          emissive="#064e3b"
          emissiveIntensity={0.6}
          metalness={0.55}
          roughness={0.25}
          distort={0.32}
          speed={2.2}
        />
      </mesh>
      <mesh ref={shell} scale={1.45}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial color="#34d399" wireframe transparent opacity={0.22} />
      </mesh>
    </Float>
  );
}

/** Three orbiting rings + a fast radar sweep arm. */
function OrbitRings() {
  const g1 = useRef<THREE.Mesh>(null);
  const g2 = useRef<THREE.Mesh>(null);
  const g3 = useRef<THREE.Mesh>(null);
  const sweep = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (g1.current) g1.current.rotation.z += delta * 0.3;
    if (g2.current) g2.current.rotation.z -= delta * 0.2;
    if (g3.current) g3.current.rotation.z += delta * 0.12;
    if (sweep.current) sweep.current.rotation.y += delta * 1.4;
  });

  return (
    <group>
      <mesh ref={g1} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.6, 0.015, 16, 128]} />
        <meshBasicMaterial color="#34d399" transparent opacity={0.6} />
      </mesh>
      <mesh ref={g2} rotation={[Math.PI / 1.9, 0.4, 0]}>
        <torusGeometry args={[3.3, 0.012, 16, 128]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.4} />
      </mesh>
      <mesh ref={g3} rotation={[Math.PI / 3.2, -0.5, 0]}>
        <torusGeometry args={[4.1, 0.01, 16, 128]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.3} />
      </mesh>
      {/* radar sweep */}
      <group ref={sweep} position={[0, 2.6, 0]}>
        <mesh position={[1.3, 0, 0]}>
          <boxGeometry args={[2.6, 0.015, 0.05]} />
          <meshBasicMaterial color="#4ade80" transparent opacity={0.75} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshBasicMaterial color="#4ade80" />
        </mesh>
      </group>
    </group>
  );
}

export default function CommandScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.6, 9.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute !inset-0"
    >
      <fog attach="fog" args={["#050b08", 12, 30]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 6, 6]} intensity={40} color="#34d399" />
      <pointLight position={[-6, -3, 2]} intensity={26} color="#22d3ee" />

      <ParallaxRig>
        <RadarCore />
        <OrbitRings />
      </ParallaxRig>

      <Sparkles
        count={130}
        scale={[14, 9, 8]}
        size={2.4}
        speed={0.35}
        color="#34d399"
        opacity={0.7}
      />
      <Stars radius={60} depth={40} count={1600} factor={3.2} fade speed={0.6} />
      <Grid
        position={[0, -3.4, 0]}
        args={[40, 40]}
        cellSize={0.7}
        cellThickness={0.6}
        cellColor="#0d3b2a"
        sectionSize={3.5}
        sectionThickness={1.1}
        sectionColor="#134e3a"
        fadeDistance={26}
        fadeStrength={1.4}
        infiniteGrid
      />
    </Canvas>
  );
}