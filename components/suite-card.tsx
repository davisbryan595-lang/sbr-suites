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
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gold-primary/30 hover:border-gold-primary">
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
        <div className="p-8">
          {/* Title */}
          <h3 className="text-2xl font-bold text-black-dark mb-2">{suite.title}</h3>

          {/* Description */}
          <p className="text-black-dark/70 text-sm mb-6">{suite.description}</p>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {suite.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-primary flex-shrink-0" />
                <span className="text-sm text-black-dark">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="w-full py-3 bg-gold-primary text-black-dark font-bold rounded-lg hover:bg-gold-light transition-all duration-300 group-hover:shadow-lg">
            {suite.cta}
          </button>
        </div>
      </div>
    </div>
  )
}
