'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const videoRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = videoRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create animated gradient background
    let animationId: number

    const animate = () => {
      const time = Date.now() * 0.0001

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `hsl(${200 + Math.sin(time) * 30}, 80%, ${8 + Math.sin(time * 0.5) * 2}%)`)
      gradient.addColorStop(0.5, `hsl(${260 + Math.sin(time + 2) * 30}, 60%, ${12 + Math.cos(time * 0.5) * 2}%)`)
      gradient.addColorStop(1, `hsl(${320 + Math.cos(time) * 30}, 70%, ${10 + Math.sin(time * 0.7) * 2}%)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw floating particles
      ctx.fillStyle = 'rgba(200, 170, 255, 0.03)'
      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(time * 0.3 + i) * canvas.width) / 2 + canvas.width / 2
        const y = (Math.cos(time * 0.2 + i) * canvas.height) / 2 + canvas.height / 2
        ctx.beginPath()
        ctx.arc(x, y, 100 + Math.sin(time + i) * 30, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={videoRef} className="absolute inset-0 w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
        <div className="mb-6">
          <p className="text-accent text-sm font-light tracking-widest uppercase mb-4">
            Journey Beyond Time
          </p>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 text-balance leading-tight">
          Witness History,
          <span className="block text-accent">Rewrite Tomorrow</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Experience the most pivotal moments across millennia. Luxury temporal expeditions for the world's most discerning explorers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 font-light">
            Begin Your Journey
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent/40 text-foreground hover:border-accent hover:bg-accent/5 rounded-full px-10 font-light bg-transparent"
          >
            View Destinations
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-xs text-muted-foreground tracking-widest uppercase font-light">Scroll</p>
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  )
}
