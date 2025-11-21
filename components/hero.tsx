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

      {/* Content aligned to the left with frosted glass container */}
      <div className="relative z-10 text-left px-4 sm:px-6 lg:px-12 max-w-2xl">
        <div className="backdrop-blur-md bg-white/15 border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-lg">
            SBR STUDIO SUITES
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 font-light drop-shadow-md">
            By Ronda Wallace – Premium Studio Suites for Beauty Professionals
          </p>

          <div className="mb-8 sm:mb-12 space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm md:text-base text-white font-semibold tracking-widest animate-pulse drop-shadow-md">
              ✦ Several Suites Ready Now
            </p>
            <p
              className="text-xs sm:text-sm md:text-base text-white font-semibold tracking-widest animate-pulse drop-shadow-md"
              style={{ animationDelay: "0.5s" }}
            >
              ✦ Brand & Marketing Help Included
            </p>
            <p
              className="text-xs sm:text-sm md:text-base text-white font-semibold tracking-widest animate-pulse drop-shadow-md"
              style={{ animationDelay: "1s" }}
            >
              ✦ Elevate Your Beauty Business Today
            </p>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => {
                const element = document.getElementById("suites")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className="luxury-button px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm md:text-base font-semibold transform hover:scale-105 transition-transform duration-300 min-h-11 sm:min-h-12"
            >
              View Available Suites
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("inquire")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className="luxury-button-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm md:text-base font-semibold transform hover:scale-105 transition-transform duration-300 min-h-11 sm:min-h-12"
            >
              Inquire Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
