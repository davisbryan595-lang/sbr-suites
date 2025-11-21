"use client"

import { Facebook } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-dark-accent to-dark-bg border-t-2 border-gold-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold-primary/50">
                <Image
                  src="/images/sbr-hero-removebg-preview.png"
                  alt="SBR Studio Suites"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-ivory-text text-sm">SBR STUDIO SUITES</p>
                <p className="text-xs text-ivory-text/70">By Ronda Wallace</p>
              </div>
            </div>
            <p className="text-ivory-text/70 text-sm leading-relaxed">
              Premium studio suites for beauty professionals who cater to their clients with excellence and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-ivory-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#suites" className="text-ivory-text/70 hover:text-gold-primary transition-colors text-sm">
                  Available Suites
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-ivory-text/70 hover:text-gold-primary transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-ivory-text/70 hover:text-gold-primary transition-colors text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-ivory-text/70 hover:text-gold-primary transition-colors text-sm">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#inquire" className="text-ivory-text/70 hover:text-gold-primary transition-colors text-sm">
                  Inquire
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-ivory-text mb-4">Location & Hours</h4>
            <p className="text-ivory-text/70 text-sm mb-4">
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
              <Facebook className="w-5 h-5" />
              <span className="text-sm font-semibold">Follow us on Facebook</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gold-primary/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ivory-text/60 text-sm">© 2025 SBR Studio Suites by Ronda Wallace. All rights reserved.</p>
          <p className="text-ivory-text/60 text-sm">Premium studio rental spaces for beauty professionals</p>
        </div>
      </div>
    </footer>
  )
}
