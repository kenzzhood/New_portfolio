"use client"
import { useEffect, useRef, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { BlurIn } from "./blur-in";

export default function ShaderShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#ffffff", "#808080", "#a9a9a9", "#d3d3d3"]}
        speed={0.3}
        backgroundColor="#000000"
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60"
        colors={["#000000", "#ffffff", "#808080", "#a9a9a9"]}
        speed={0.2}
        wireframe="true"
        backgroundColor="transparent"
      />

      <header className="relative z-20 flex items-center justify-between p-6">
        <motion.div
          className="flex items-center group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="text-white text-2xl font-bold">GS</div>
        </motion.div>

        {/* Navigation */}
        <nav className="flex items-center space-x-2">
          <a
            href="#"
            className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Contact Me Button */}
        <div className="relative flex items-center group">
          <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
            Contact Me
          </button>
        </div>
      </header>

      <main className="absolute inset-0 flex items-center justify-center z-20 max-w-4xl mx-auto">
        <div className="text-center">
        <BlurIn
            word="GOUTHAM SRINATH"
            className="text-4xl md:text-6xl font-bold text-white"
          />
        <BlurIn
            word="I build beautiful and functional websites."
            className="text-lg font-light text-white/70 mt-4"
        />

          <motion.div
            className="flex items-center justify-center gap-6 flex-wrap mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.button
              className="px-10 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-gray-400/50 hover:text-gray-100 cursor-pointer backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              className="px-10 py-4 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold text-sm transition-all duration-300 hover:from-gray-400 hover:to-gray-600 cursor-pointer shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
