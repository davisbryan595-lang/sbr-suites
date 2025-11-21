"use client"

import { DollarSign } from "lucide-react"
import PricingCard from "./pricing-card"

const pricingPlans = [
  {
    id: 1,
    title: "Immediate Access Hourly",
    price: 75,
    period: "/hour",
    description: "Perfect for flexible, on-demand studio needs",
    features: ["Salon stations available now", "Hourly flexibility", "Client amenities", "Professional setup"],
    image: "/hourly-studio-rental-salon.jpg",
  },
  {
    id: 2,
    title: "Daily Client Catering",
    price: 450,
    period: "/day",
    description: "Full booth dedicated to your clients",
    features: ["Full booth access", "Entire day availability", "Marketing guidance", "Several ready now"],
    image: "/daily-boutique-booth-rental.jpg",
    popular: true,
  },
  {
    id: 3,
    title: "Monthly Brand Boost",
    price: 1800,
    period: "/month",
    description: "Dedicated space with brand marketing consult",
    features: ["Dedicated studio space", "Brand consultation included", "Marketing support", "Flexible customization"],
    image: "/premium-monthly-studio-rental.jpg",
  },
]

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-accent via-dark-bg to-dark-accent"
    >
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gold-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gold-primary/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <DollarSign className="w-4 sm:w-5 h-4 sm:h-5 text-gold-primary" />
            <span className="text-xs sm:text-sm font-semibold text-gold-primary tracking-widest">PRICING PLANS</span>
            <DollarSign className="w-4 sm:w-5 h-4 sm:h-5 text-gold-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-text mb-3 sm:mb-4">Investment That Elevates</h2>
          <p className="text-base sm:text-lg text-ivory-text/70 max-w-2xl mx-auto">
            Flexible pricing options to suit your business needs. Several suites open with custom support.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Info Banner */}
        <div className="bg-dark-card border-2 border-gold-primary/30 rounded-lg p-8 text-center backdrop-blur-sm hover:border-gold-primary/50 transition-colors duration-300">
          <p className="text-ivory-text text-lg">
            <span className="font-bold">Several Suites Open in Mesquite</span> – Custom pricing and support available
            for your unique brand
          </p>
        </div>
      </div>
    </section>
  )
}
