"use client"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-start overflow-hidden pt-20"
      style={{
        backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F98a3bf12d3fd43d6afbc24b607fa1ca0%2Fc811e92df13c4915b254e12195168b82?format=webp&width=1920)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/80 via-dark-bg/70 to-transparent"></div>

      {/* Floating gold accents */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold-primary/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gold-primary/10 blur-3xl"></div>

      {/* Content aligned to the left */}
      <div className="relative z-10 text-left px-4 sm:px-6 lg:px-12 max-w-2xl">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ivory-text mb-6 tracking-tight">
          SBR STUDIO SUITES
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-ivory-text/90 mb-8 font-light">
          By Ronda Wallace – Premium Studio Suites for Beauty Professionals
        </p>

        <div className="mb-12 space-y-3">
          <p className="text-sm sm:text-base text-gold-primary font-semibold tracking-widest animate-pulse">
            ✦ Several Suites Ready Now
          </p>
          <p
            className="text-sm sm:text-base text-gold-light font-semibold tracking-widest animate-pulse"
            style={{ animationDelay: "0.5s" }}
          >
            ✦ Brand & Marketing Help Included
          </p>
          <p
            className="text-sm sm:text-base text-gold-primary font-semibold tracking-widest animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            ✦ Elevate Your Beauty Business Today
          </p>
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => {
              const element = document.getElementById("suites")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-4 bg-gold-primary text-black-dark font-bold rounded-full hover:bg-gold-light hover:shadow-2xl hover:shadow-gold-primary/50 transition-all duration-300 text-sm sm:text-base transform hover:scale-105"
          >
            View Available Suites
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("inquire")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-4 bg-transparent border-2 border-gold-primary text-gold-primary font-bold rounded-full hover:bg-gold-primary/10 transition-all duration-300 text-sm sm:text-base transform hover:scale-105"
          >
            Inquire Today
          </button>
        </div>
      </div>
    </section>
  )
}
