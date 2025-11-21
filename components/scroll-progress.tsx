"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      const scrollPercent = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0
      setScrollProgress(scrollPercent)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gold-primary z-40 transition-all duration-300"
      style={{ width: `${scrollProgress}%` }}
    ></div>
  )
}
