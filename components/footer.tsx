"use client"

import { Facebook } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-dark-accent to-dark-bg border-t-2 border-gold-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="flex sm:flex-row items-center justify-center sm:justify-start gap-2 mb-4">
              <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-full overflow-hidden ring-2 ring-gold-primary/50 flex-shrink-0">
                <Image
                  src="/images/sbr-hero-removebg-preview.png"
                  alt="SBR Studio Suites"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-ivory-text text-xs sm:text-sm">SBR STUDIO SUITES</p>
                <p className="text-xs text-ivory-text/70">By Ronda Wallace</p>
              </div>
            </div>
            <p className="text-ivory-text/70 text-xs sm:text-sm leading-relaxed">
              Premium studio suites for beauty professionals who cater to their clients with excellence and style.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-ivory-text text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#suites" className="text-ivory-text/70 hover:text-gold-primary transition-colors text-xs sm:text-sm">
                  Available Suites
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-ivory-text/70 hover:text-gold-primary transition-colors text-xs sm:text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-ivory-text/70 hover:text-gold-primary transition-colors text-xs sm:text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-ivory-text/70 hover:text-gold-primary transition-colors text-xs sm:text-sm">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#inquire" className="text-ivory-text/70 hover:text-gold-primary transition-colors text-xs sm:text-sm">
                  Inquire
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-ivory-text text-sm sm:text-base mb-3 sm:mb-4">Location & Hours</h4>
            <p className="text-ivory-text/70 text-xs sm:text-sm mb-4">
              <span className="font-semibold">Mesquite, Texas & DFW Area</span>
              <br />
              Helping you cater to clients with premium suites
            </p>
            <a
              href="https://www.facebook.com/share/p/1BK3MAzQrS/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-primary hover:text-gold-light transition-colors"
            >
              <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="text-xs sm:text-sm font-semibold">Follow us on Facebook</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gold-primary/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <p className="text-ivory-text/60 text-xs sm:text-sm">© 2025 SBR Studio Suites by Ronda Wallace. All rights reserved.</p>
          <p className="text-ivory-text/60 text-xs sm:text-sm">Premium studio rental spaces for beauty professionals</p>
        </div>
      </div>
    </footer>
  )
}
