'use client'

import { useState } from 'react'
import { ArrowRight, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Destination {
  id: number
  name: string
  period: string
  year: string
  description: string
  highlights: string[]
  basePrice: string
  icon: string
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Paris Belle Époque',
    period: 'La Belle Époque',
    year: '1889',
    description:
      'Experience the magic of Paris during the Exposition Universelle. Witness the inauguration of the Eiffel Tower and immerse yourself in the golden age of art, music, and joie de vivre.',
    highlights: ['Eiffel Tower Opening', 'Moulin Rouge', 'Café Society', 'Artistic Salons'],
    basePrice: '$92,000',
    icon: '🗼',
  },
  {
    id: 2,
    name: 'Prehistoric Cretaceous',
    period: 'The Dinosaur Era',
    year: '-65M',
    description:
      'Venture back 65 million years to witness the majesty of dinosaurs in their natural habitat. Experience untamed nature and creatures beyond imagination in the Cretaceous period.',
    highlights: ['T-Rex Encounters', 'Prehistoric Landscape', 'Flora Exploration', 'Scientific Documentation'],
    basePrice: '$150,000',
    icon: '🦕',
  },
  {
    id: 3,
    name: 'Renaissance Florence',
    period: 'Il Rinascimento',
    year: '1504',
    description:
      'Witness the unveiling of Michelangelo\'s David and experience the height of Renaissance creativity. Walk through Florence\'s galleries and meet the masters of art and innovation.',
    highlights: ['Michelangelo\'s David', 'Medici Palaces', 'Art Workshops', 'Renaissance Masters'],
    basePrice: '$88,000',
    icon: '🎨',
  },
]

export default function DestinationCards() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {destinations.map((dest) => (
        <div
          key={dest.id}
          className="group relative bg-card/40 backdrop-blur-sm border border-border/30 rounded-lg overflow-hidden transition-all duration-500 hover:border-accent/50 hover:bg-card/60"
          onMouseEnter={() => setHoveredId(dest.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Background gradient on hover */}
          {hoveredId === dest.id && (
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
          )}

          <div className="p-8 relative z-10">
            {/* Icon */}
            <div className="text-5xl mb-6">{dest.icon}</div>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-accent text-xs font-light tracking-widest uppercase mb-1">{dest.period}</p>
                  <h3 className="font-serif text-2xl font-light mb-1">{dest.name}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="w-4 h-4" />
                <span className="font-light">{dest.year}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">{dest.description}</p>

            {/* Highlights */}
            <div className="mb-8">
              <div className="grid grid-cols-2 gap-3">
                {dest.highlights.map((highlight, idx) => (
                  <div key={idx} className="text-xs font-light text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between pt-6 border-t border-border/20">
              <div>
                <p className="text-xs text-muted-foreground font-light mb-1">Starting from</p>
                <p className="font-serif text-lg font-light text-accent">{dest.basePrice}</p>
              </div>
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full p-2 h-auto"
                size="sm"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Hover accent line */}
          <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-transparent w-0 group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </div>
  )
}
