"use client"

import { CheckCircle2 } from "lucide-react"

interface SuiteCardProps {
  suite: {
    id: number
    title: string
    description: string
    features: string[]
    status: string
    image: string
    cta: string
  }
}

export default function SuiteCard({ suite }: SuiteCardProps) {
  return (
    <div className="group">
      {/* Card Container */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gold-primary/30 hover:border-gold-primary">
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cream-light to-cream-bg">
          <img
            src={suite.image || "/placeholder.svg"}
            alt={suite.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-gold-primary text-black-dark px-4 py-2 rounded-full text-xs font-bold">
            {suite.status}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 bg-gradient-to-b from-black/75 to-black/75 rounded-b-lg">
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-2">{suite.title}</h3>

          {/* Description */}
          <p className="text-white/80 text-sm mb-6 font-medium">{suite.description}</p>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {suite.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-primary flex-shrink-0" />
                <span className="text-sm text-white font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="luxury-button w-full py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg">
            {suite.cta}
          </button>
        </div>
      </div>
    </div>
  )
}
