"use client"

import { Canvas } from "@react-three/fiber"
import { ShaderPlane, EnergyRing } from "./ui/background-paper-shaders"

export default function DemoOne() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ShaderPlane position={[0, 0, 0]} />
        <EnergyRing position={[0, 0, 0]} />
      </Canvas>
    </div>
  )
}