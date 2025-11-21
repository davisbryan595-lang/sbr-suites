"use client"

import { ZoomIn } from "lucide-react"

interface GalleryItemProps {
  item: {
    id: number
    type: string
    title: string
    image: string
  }
}

export default function GalleryItem({ item }: GalleryItemProps) {
  return (
    <div className="relative overflow-hidden rounded-lg group border-2 border-gold-primary/30 hover:border-gold-primary transition-colors duration-300">
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-cream-light to-cream-bg">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
        <ZoomIn className="w-6 sm:w-8 h-6 sm:h-8 text-gold-primary mb-2" />
        <p className="text-white text-center font-bold text-xs sm:text-sm px-3 sm:px-4">{item.title}</p>
      </div>
    </div>
  )
}
