import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "./theme-provider"
import "./globals.css"

const _playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SBR Studio Suites | Premium Studio Rentals in Mesquite, TX",
  description:
    "Luxury studio rental suites for beauty professionals by Ronda Wallace. Available suites with brand and marketing support in Mesquite & DFW.",
  keywords: "studio suites, beauty suites, salon rental, Mesquite TX, studio rental",
  openGraph: {
    title: "SBR Studio Suites | Premium Studio Rentals",
    description:
      "Exclusive studio suites designed for beauty professionals seeking upscale rental spaces with marketing support.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Satoshi:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SBR Studio Suites",
              description: "Premium studio rental suites for beauty professionals",
              areaServed: {
                "@type": "City",
                name: "Mesquite, Texas",
              },
              founder: "Ronda Wallace",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mesquite",
                addressRegion: "TX",
              },
            }),
          }}
        />
      </head>
      <body className={`${_playfairDisplay.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
