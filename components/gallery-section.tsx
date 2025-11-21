"use client"

import { useState } from "react"
import { X } from "lucide-react"
import GalleryItem from "./gallery-item"

const galleryItems = [
  { id: 1, type: "image", title: "Suite Ready for Your Clients", image: "/professional-salon-suite.jpg" },
  { id: 2, type: "image", title: "Client Session Space", image: "/beauty-client-space.jpg" },
  { id: 3, type: "image", title: "Branding & Marketing Setup", image: "/boutique-branding-display.jpg" },
  { id: 4, type: "image", title: "Event & Workshop Room", image: "/event-workshop-space.jpg" },
  { id: 5, type: "image", title: "Professional Amenities", image: "/luxury-studio-amenities.jpg" },
  { id: 6, type: "image", title: "Studio Interior Tour", image: "/interior-studio-design.jpg" },
]

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)

  return (
    <section
      id="gallery"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-accent to-dark-bg"
    >
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gold-primary/5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gold-primary/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-gold-primary tracking-widest">GALLERY</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-text mb-3 sm:mb-4 mt-2">See Our Suites in Action</h2>
          <p className="text-base sm:text-lg text-ivory-text/70 max-w-2xl mx-auto">
            Explore the luxury spaces available for beauty professionals in Mesquite & DFW
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} onClick={() => setSelectedItem(item)} className="cursor-pointer group">
              <GalleryItem item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black-dark/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 bg-gold-primary text-black-dark rounded-full hover:bg-gold-light transition-colors z-10 transform hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-dark-card rounded-lg overflow-hidden border-3 border-gold-primary">
              <img src={selectedItem.image || "/placeholder.svg"} alt={selectedItem.title} className="w-full h-auto" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-ivory-text mb-2">{selectedItem.title}</h3>
                <p className="text-ivory-text/70">Premium Suite in Mesquite, 2025</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
