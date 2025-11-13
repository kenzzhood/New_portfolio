"use client"

import { useState } from "react"
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react"

export default function Hero() {
const [intensity, setIntensity] = useState(1.5)
const [speed, setSpeed] = useState(1.0)
const [isInteracting, setIsInteracting] = useState(false)
const [activeEffect, setActiveEffect] = useState("mesh")

return (
    <div className="relative w-full h-screen overflow-hidden">
        {activeEffect === "mesh" && (
            <MeshGradient
                className="w-full h-full absolute inset-0"
                colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
                speed={speed}
                backgroundColor="#000000"
            />
        )}

        {/* UI Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <section role="banner" className="text-center">
                <h1 className="text-6xl font-bold animate-blur-in">GOUTHAM SRINATH</h1>
                <p className="text-2xl mt-4">Full Stack Developer</p>
                <div className="mt-8 space-x-4">
                    <a href="#" className="bg-white text-black px-6 py-2 rounded-lg">View My Work</a>
                    <a href="#" className="bg-gray-800 px-6 py-2 rounded-lg">Contact Me</a>
                </div>
            </section>
        </div>
    </div>
)
}
