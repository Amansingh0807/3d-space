"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars,} from "@react-three/drei"
import * as THREE from "three"
import React, { useRef, useMemo, useState } from "react"

const GradientMaterial = () => {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null)
  const [time, setTime] = useState(0)

  useFrame((_, delta) => {
    setTime((prev) => prev + delta * 0.2)
    if (materialRef.current) {
      materialRef.current.color.setHSL((Math.sin(time) + 1) / 2, 0.8, 0.5)
    }
  })

  return <meshStandardMaterial ref={materialRef} />
}

// Main large sphere with a button below, now revolving
const BigSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01 // Revolve the sphere
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 1, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <GradientMaterial />
    </mesh>
  )
}

const SmallSpheres = () => {
  const spheres = useMemo(() => {
    const positions: [number, number, number][] = []
    for (let i = 0; i < 20; i++) {
      positions.push([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ])
    }
    return positions
  }, [])

  return (
    <>
      {spheres.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <GradientMaterial />
        </mesh>
      ))}
    </>
  )
}

export const HeroSection = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <section className="h-screen w-full relative">
      <Canvas
        className="absolute inset-0 z-0"
        onPointerMove={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 3]} />
        <Stars />
        <OrbitControls enableZoom={false} />
        <BigSphere />
        {hovered && <SmallSpheres />}
      </Canvas>
    </section>
  )
}