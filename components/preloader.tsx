"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Preloader() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0)
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="fixed inset-0 bg-dark-bg z-50 flex flex-col items-center justify-center transition-opacity duration-1000"
      style={{ opacity }}
    >
      <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden glow-ring">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/20 to-gold-primary/5"></div>
        <Image src="/images/sbr-hero-removebg-preview.png" alt="SBR Studio Suites" fill className="object-cover" />
      </div>

      {/* Loading Text */}
      <p className="text-center text-ivory-text font-light tracking-wider animate-fade-in">
        Your Premium Studio Awaits...
      </p>

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        .animate-fade-in {
          animation: fade-in 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
