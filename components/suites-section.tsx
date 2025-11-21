"use client"

import { Sparkles } from "lucide-react"
import SuiteCard from "./suite-card"

const suites = [
  {
    id: 1,
    title: "Client-Ready Salon Suites",
    description: "Spacious stations for hair/makeup, client flow optimized",
    features: ["Client Amenities", "Marketing Guidance", "Flexible Terms"],
    status: "Available Now",
    image: "/luxury-salon-suite-station.jpg",
    cta: "Reserve This",
  },
  {
    id: 2,
    title: "Boutique Branding Booths",
    description: "Display + marketing setup support for pop-ups",
    features: ["Branding Support", "Display Setup", "Marketing Help"],
    status: "Several Open",
    image: "/boutique-retail-booth-setup.jpg",
    cta: "Reserve This",
  },
  {
    id: 3,
    title: "Event & Creative Rooms",
    description: "Flexible for workshops/client sessions, with promo help",
    features: ["Workshop Ready", "Client Sessions", "Promo Support"],
    status: "Book Today",
    image: "/event-creative-workshop-room.jpg",
    cta: "Reserve This",
  },
]

export default function SuitesSection() {
  return (
    <section
      id="suites"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-bg to-dark-accent"
    >
      <div className="absolute top-10 right-5 w-32 h-32 rounded-full bg-gold-primary/5 blur-3xl"></div>
      <div className="absolute bottom-10 left-5 w-40 h-40 rounded-full bg-gold-primary/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-gold-primary" />
            <span className="text-sm font-semibold text-gold-primary tracking-widest">AVAILABLE SUITES</span>
            <Sparkles className="w-5 h-5 text-gold-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-ivory-text mb-4">Choose Your Perfect Space</h2>
          <p className="text-lg text-ivory-text/70 max-w-2xl mx-auto">
            Premium studio suites designed for beauty professionals who cater to their clients with excellence
          </p>
        </div>

        {/* Suites Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {suites.map((suite) => (
            <SuiteCard key={suite.id} suite={suite} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-ivory-text/70 text-lg mb-6">
            All suites include professional setup, client amenities, and brand marketing support
          </p>
          <button className="luxury-button px-8 py-3 rounded-full transform hover:scale-105 transition-transform duration-300">
            Explore More Details
          </button>
        </div>
      </div>
    </section>
  )
}
