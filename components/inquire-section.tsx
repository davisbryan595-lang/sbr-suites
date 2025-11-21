"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function InquireSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suiteType: "salon",
    dateNeeded: "",
    notes: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        suiteType: "salon",
        dateNeeded: "",
        notes: "",
      })
    }, 3000)
  }

  return (
    <section
      id="inquire"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-bg via-dark-accent to-dark-bg"
    >
      <div className="absolute top-20 right-5 w-40 h-40 rounded-full bg-gold-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-5 w-36 h-36 rounded-full bg-gold-primary/5 blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-text mb-3 sm:mb-4">
            LOOKING FOR A SUITE TO CATER TO YOUR CLIENTS?
          </h2>
          <p className="text-base sm:text-lg text-ivory-text/70">
            Several suites available – We'll help with your brand & marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Form */}
          <div className="bg-dark-card rounded-lg p-5 sm:p-6 md:p-8 border-2 border-gold-primary/30 shadow-2xl shadow-gold-primary/10 hover:border-gold-primary/50 transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-ivory-text mb-5 sm:mb-6">Get Started Today</h3>

            {submitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gold-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl sm:text-3xl">✓</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-ivory-text mb-2">Thank You!</p>
                <p className="text-sm sm:text-base text-ivory-text/70">
                  We'll be in touch soon with available suites and custom pricing options!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-ivory-text mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gold-primary/30 rounded-lg focus:outline-none focus:border-gold-primary bg-dark-accent text-ivory-text placeholder-ivory-text/50 text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-ivory-text mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gold-primary/30 rounded-lg focus:outline-none focus:border-gold-primary bg-dark-accent text-ivory-text placeholder-ivory-text/50 text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-ivory-text mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gold-primary/30 rounded-lg focus:outline-none focus:border-gold-primary bg-dark-accent text-ivory-text placeholder-ivory-text/50 text-sm"
                      placeholder="(XXX) XXX-XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-ivory-text mb-2">Suite Type *</label>
                  <select
                    value={formData.suiteType}
                    onChange={(e) => setFormData({ ...formData, suiteType: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gold-primary/30 rounded-lg focus:outline-none focus:border-gold-primary bg-dark-accent text-ivory-text text-sm"
                  >
                    <option value="salon">Client-Ready Salon Suites</option>
                    <option value="boutique">Boutique Branding Booths</option>
                    <option value="event">Event & Creative Rooms</option>
                    <option value="custom">Custom Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-ivory-text mb-2">Date Needed</label>
                  <input
                    type="date"
                    value={formData.dateNeeded}
                    onChange={(e) => setFormData({ ...formData, dateNeeded: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gold-primary/30 rounded-lg focus:outline-none focus:border-gold-primary bg-dark-accent text-ivory-text text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-ivory-text mb-2">Marketing Needs / Notes</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gold-primary/30 rounded-lg focus:outline-none focus:border-gold-primary bg-dark-accent text-ivory-text placeholder-ivory-text/50 resize-none h-24 sm:h-32 text-sm"
                    placeholder="Tell us about your business and needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="luxury-button w-full py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 mt-4 sm:mt-6 transform hover:scale-105 min-h-10 sm:min-h-11"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-ivory-text mb-5 sm:mb-6">Other Ways to Connect</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-lg bg-gold-primary/5 border border-gold-primary/20 hover:border-gold-primary/50 transition-colors duration-300">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-gold-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <p className="font-bold text-ivory-text text-sm sm:text-base">Location</p>
                    <p className="text-ivory-text/70 text-xs sm:text-sm">Mesquite, Texas & DFW Area</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-lg bg-gold-primary/5 border border-gold-primary/20 hover:border-gold-primary/50 transition-colors duration-300">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-gold-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <p className="font-bold text-ivory-text text-sm sm:text-base">Phone</p>
                    <p className="text-ivory-text/70 text-xs sm:text-sm">Available for calls during business hours</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-lg bg-gold-primary/5 border border-gold-primary/20 hover:border-gold-primary/50 transition-colors duration-300">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-gold-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <p className="font-bold text-ivory-text text-sm sm:text-base">Facebook</p>
                    <a
                      href="https://www.facebook.com/share/p/1BK3MAzQrS/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-primary hover:text-gold-light transition-colors text-xs sm:text-sm"
                    >
                      Visit our Facebook page
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gold-primary/10 border-2 border-gold-primary/30 rounded-lg p-4 sm:p-6 hover:border-gold-primary/50 transition-colors duration-300">
              <h4 className="font-bold text-ivory-text text-sm sm:text-base mb-2">Quick Response</h4>
              <p className="text-xs sm:text-sm text-ivory-text/70">
                Share your post on Facebook for quick response time! We're here to help you elevate your business.
              </p>
            </div>

            {/* Highlight */}
            <div className="bg-gradient-to-br from-gold-primary/20 to-gold-primary/5 border-2 border-gold-primary rounded-lg p-4 sm:p-6">
              <p className="text-center text-ivory-text font-bold text-sm sm:text-base">
                ✦ Several Suites Available ✦<br />
                <span className="text-xs sm:text-sm text-ivory-text/70 mt-2 block">
                  Custom pricing & brand marketing support tailored to your needs
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
