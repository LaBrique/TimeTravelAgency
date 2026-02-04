'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Send, Maximize2, Minimize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import HeroSection from '@/components/hero'
import DestinationCards from '@/components/destination-cards'
import ChatWidget from '@/components/chat-widget'

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isExpanded && chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isExpanded])

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden dark">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-border/20 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-serif text-lg font-bold">
              ⏳
            </div>
            <span className="font-serif text-xl font-light tracking-wide">Temporal Voyages</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#destinations" className="text-sm font-light hover:text-accent transition-colors">
              Destinations
            </a>
            <a href="#contact" className="text-sm font-light hover:text-accent transition-colors">
              Contact
            </a>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6">
              Book Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Scroll Indicator */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-40 animate-bounce">
        <ChevronDown className="w-6 h-6 text-accent/60" />
      </div>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-light tracking-widest mb-4 uppercase">EXCLUSIVE EXPERIENCES</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Curated Time Journeys</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light">
              Step into pivotal moments across centuries. Each expedition is meticulously crafted for the discerning traveler seeking the extraordinary.
            </p>
          </div>

          <DestinationCards />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-serif text-xl mb-3 font-light">Premium Safety</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                State-of-the-art temporal shielding and expert guides ensuring your journey through time is seamless.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-serif text-xl mb-3 font-light">Global Access</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Experience the most significant historical moments from across the globe in absolute luxury.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👔</span>
              </div>
              <h3 className="font-serif text-xl mb-3 font-light">Concierge Service</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Dedicated temporal consultants available 24/7 for all your journey requirements and questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div ref={chatRef} className="fixed bottom-8 right-8 z-40">
        <ChatWidget isExpanded={isExpanded} onExpandChange={setIsExpanded} />
      </div>
    </div>
  )
}
