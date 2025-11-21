"use client"

interface PricingCardProps {
  plan: {
    id: number
    title: string
    price: number
    period: string
    description: string
    features: string[]
    image: string
    popular?: boolean
  }
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className="group">
      <div
        className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 ${
          plan.popular
            ? "border-gold-primary scale-105 lg:scale-100 lg:hover:scale-105"
            : "border-gold-primary/30 hover:border-gold-primary"
        }`}
      >
        {/* Featured Badge */}
        {plan.popular && (
          <div className="absolute top-0 right-0 bg-gold-primary text-black-dark px-4 py-2 font-bold text-sm">
            POPULAR
          </div>
        )}

        {/* Image */}
        <div className="h-36 sm:h-40 md:h-48 overflow-hidden bg-gradient-to-br from-cream-light to-cream-bg">
          <img
            src={plan.image || "/placeholder.svg"}
            alt={plan.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className={`p-5 sm:p-6 md:p-8 bg-gradient-to-b from-black/80 to-black/80 rounded-b-lg`}>
          {/* Price */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-bold text-white">${plan.price}</span>
              <span className="text-white/70 text-xs sm:text-sm font-semibold">{plan.period}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{plan.title}</h3>

          {/* Description */}
          <p className="text-white/80 text-xs sm:text-sm mb-4 sm:mb-6 font-medium">{plan.description}</p>

          {/* Features */}
          <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3">
                <span className="text-gold-primary font-bold mt-0.5 sm:mt-1 flex-shrink-0">✦</span>
                <span className="text-xs sm:text-sm text-white font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="luxury-button w-full py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 group-hover:shadow-lg min-h-10 sm:min-h-11">
            Inquire Availability
          </button>
        </div>
      </div>
    </div>
  )
}
