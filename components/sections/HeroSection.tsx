"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, Html } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import * as THREE from "three"
import React, { useRef, useMemo, useState } from "react"
import Link from "next/link"


const GradientMaterial = () => {
  const materialRef = useRef<any>(null)
  const [time, setTime] = useState(0)

  useFrame((_, delta) => {
    setTime((prev) => prev + delta * 0.2) // Slow down the time progression
    if (materialRef.current) {
      materialRef.current.color.setHSL((Math.sin(time) + 1) / 2, 0.8, 0.5)
    }
  })

  return <meshStandardMaterial ref={materialRef} />
}
// Main large sphere with a button below
const BigSphere = () => (
  <mesh position={[0, 1, 0]}>
    <sphereGeometry args={[1.5, 64, 64]} />
    <GradientMaterial />
<Html position={[0, -2.2, 0]} center>
  <Link href="/main"> {/* Replace '/main' with your desired route */}
    <button className="px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_5px_rgba(255,105,180,0.8)] no-cursor">
     Let's Gooo
    </button>
  </Link>
</Html>
  </mesh>
)

// Small spheres generator
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
