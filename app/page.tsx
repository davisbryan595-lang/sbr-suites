"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SuitesSection from "@/components/suites-section"
import PricingSection from "@/components/pricing-section"
import GallerySection from "@/components/gallery-section"
import ReviewsSection from "@/components/reviews-section"
import InquireSection from "@/components/inquire-section"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"
import ScrollProgress from "@/components/scroll-progress"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for premium feel
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="w-full overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SuitesSection />
        <PricingSection />
        <GallerySection />
        <ReviewsSection />
        <InquireSection />
      </main>
      <Footer />
    </div>
  )
}
