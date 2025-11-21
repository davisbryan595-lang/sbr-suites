"use client"

import { useEffect, useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/app/theme-provider"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-2xl border-b border-border"
          : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/50 group-hover:ring-primary transition-all duration-300">
              <Image
                src="/images/sbr-hero-removebg-preview.png"
                alt="SBR Studio Suites"
                fill
                className="object-cover"
              />
            </div>
            <span className="hidden sm:block text-sm font-bold tracking-wider text-foreground/80 group-hover:text-primary transition-colors">
              SBR SUITES
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("suites")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Suites
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-primary" />
              ) : (
                <Moon className="w-4 h-4 text-foreground" />
              )}
            </button>
            <button
              onClick={() => scrollToSection("inquire")}
              className="luxury-button px-6 py-2 rounded-full transition-all duration-300"
            >
              Inquire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-primary" />
              ) : (
                <Moon className="w-4 h-4 text-foreground" />
              )}
            </button>
            <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 bg-secondary rounded-lg p-4 border border-primary/20">
            <button
              onClick={() => scrollToSection("suites")}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary"
            >
              Suites
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("inquire")}
              className="luxury-button w-full px-6 py-2 rounded-full transition-all duration-300"
            >
              Inquire
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
