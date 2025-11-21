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
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold-primary tracking-widest">CLIENT TESTIMONIALS</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ivory-text mb-4 mt-2">Hear From Our Clients</h2>
          <p className="text-lg text-ivory-text/70">
            Real stories from beauty professionals thriving in SBR Studio Suites
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-dark-card rounded-lg border-2 border-gold-primary/30 p-8 sm:p-12 shadow-2xl shadow-gold-primary/10 hover:border-gold-primary/50 transition-colors duration-300">
            <div className="flex gap-1 mb-6">
              {Array(testimonials[currentIndex].rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-primary text-gold-primary" />
                ))}
            </div>

            <blockquote className="text-xl sm:text-2xl text-ivory-text font-light mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full border-2 border-gold-primary object-cover"
              />
              <div>
                <p className="font-bold text-ivory-text">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-ivory-text/70">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full border-2 border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-black-dark transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setAutoPlay(false)
                  }}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-gold-primary w-8" : "bg-gold-primary/30"
                  }`}
                ></button>
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full border-2 border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-black-dark transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
