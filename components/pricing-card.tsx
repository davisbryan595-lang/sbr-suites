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
        className={`relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 ${
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
        <div className="h-48 overflow-hidden bg-gradient-to-br from-cream-light to-cream-bg">
          <img
            src={plan.image || "/placeholder.svg"}
            alt={plan.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className={`p-8 ${plan.popular ? "bg-gradient-to-br from-white to-gold-primary/10" : "bg-white"}`}>
          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-dark-bg">${plan.price}</span>
              <span className="text-dark-bg/70 text-sm font-semibold">{plan.period}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-dark-bg mb-2">{plan.title}</h3>

          {/* Description */}
          <p className="text-dark-bg/80 text-sm mb-6 font-medium">{plan.description}</p>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-gold-primary font-bold mt-1">✦</span>
                <span className="text-sm text-dark-bg font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="luxury-button w-full py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg">
            Inquire Availability
          </button>
        </div>
      </div>
    </div>
  )
}
