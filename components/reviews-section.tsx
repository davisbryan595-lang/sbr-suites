"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maya Johnson",
    role: "Hair Stylist & Salon Owner",
    text: "SBR's suites catered perfectly to my clients – Ronda's marketing tips were gold! The support and professional space made all the difference.",
    rating: 5,
    avatar: "/female-avatar.jpg",
  },
  {
    id: 2,
    name: "Tasha Williams",
    role: "Beauty Entrepreneur",
    text: "Available immediately and the brand support was incredible. Every detail shows luxury and care for what you do. Highly recommended!",
    rating: 5,
    avatar: "/female-avatar.jpg",
  },
  {
    id: 3,
    name: "Crystal Davis",
    role: "Makeup Artist & Boutique Owner",
    text: "The suites are spacious, well-designed, and perfect for client sessions. Ronda goes above and beyond with marketing guidance.",
    rating: 5,
    avatar: "/female-avatar.jpg",
  },
  {
    id: 4,
    name: "Lauren Martin",
    role: "Beauty Coach",
    text: "Finally found a space that understands the beauty professional's needs. The flexibility and support are unmatched in the Mesquite area.",
    rating: 5,
    avatar: "/female-avatar.jpg",
  },
  {
    id: 5,
    name: "Nia Brown",
    role: "Event Planner & Host",
    text: "Perfect for workshops and client events. The atmosphere is premium and the brand marketing help transformed my business.",
    rating: 5,
    avatar: "/female-avatar.jpg",
  },
]

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section
      id="reviews"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-bg to-dark-accent"
    >
      <div className="absolute top-10 right-10 w-36 h-36 rounded-full bg-gold-primary/5 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-gold-primary/5 blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-gold-primary tracking-widest">CLIENT TESTIMONIALS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-text mb-3 sm:mb-4 mt-2">Hear From Our Clients</h2>
          <p className="text-base sm:text-lg text-ivory-text/70">
            Real stories from beauty professionals thriving in SBR Studio Suites
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-dark-card rounded-lg border-2 border-gold-primary/30 p-5 sm:p-8 md:p-12 shadow-2xl shadow-gold-primary/10 hover:border-gold-primary/50 transition-colors duration-300">
            <div className="flex gap-1 mb-4 sm:mb-6">
              {Array(testimonials[currentIndex].rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-gold-primary text-gold-primary" />
                ))}
            </div>

            <blockquote className="text-base sm:text-xl md:text-2xl text-ivory-text font-light mb-6 sm:mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-12 sm:w-16 h-12 sm:h-16 rounded-full border-2 border-gold-primary object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="font-bold text-ivory-text text-sm sm:text-base truncate">{testimonials[currentIndex].name}</p>
                <p className="text-xs sm:text-sm text-ivory-text/70 truncate">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 sm:mt-8 gap-3 sm:gap-4">
            <button
              onClick={goToPrevious}
              className="p-2 sm:p-3 rounded-full border-2 border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-black-dark transition-all duration-300 transform hover:scale-110 flex-shrink-0"
            >
              <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setAutoPlay(false)
                  }}
                  className={`h-2 sm:h-3 w-2 sm:w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-gold-primary w-6 sm:w-8" : "bg-gold-primary/30"
                  }`}
                ></button>
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 sm:p-3 rounded-full border-2 border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-black-dark transition-all duration-300 transform hover:scale-110 flex-shrink-0"
            >
              <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
