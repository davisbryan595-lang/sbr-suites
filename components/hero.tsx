"use client"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-gradient-to-b from-dark-bg via-dark-bg to-dark-accent flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=luxury-dark-studio-suite-interior)",
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/70 to-dark-accent/80"></div>

      {/* Floating gold accents */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gold-primary/5 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ivory-text mb-6 tracking-tight text-balance">
          SBR STUDIO SUITES
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-ivory-text/70 mb-8 font-light">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        <div className="mt-16 flex justify-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden glow-ring">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/20 to-gold-primary/5"></div>
            <img
              src="/images/sbr-hero-removebg-preview.png"
              alt="SBR Studio Suites Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
