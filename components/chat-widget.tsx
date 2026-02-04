'use client'

import React from "react"

import { useState, useRef, useEffect } from 'react'
import { Send, X, Maximize2, Minimize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

interface ChatWidgetProps {
  isExpanded: boolean
  onExpandChange: (expanded: boolean) => void
}

export default function ChatWidget({ isExpanded, onExpandChange }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Bienvenue chez Temporal Voyages ! Je suis votre consultant temporel. Comment puis-je vous aider à planifier votre voyage extraordinaire à travers le temps ?',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate API call to get AI response
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (response.ok) {
        const data = await response.json()
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.content,
        }
        setMessages((prev) => [...prev, assistantMessage])
      }
    } catch (error) {
      console.error('Chat error:', error)
      // Fallback response
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          'I apologize for the technical difficulty. Please try again or contact our temporal consultants at support@temporalvoyages.com',
      }
      setMessages((prev) => [...prev, fallbackMessage])
    } finally {
      setIsLoading(false)
    }
  }

  if (!isExpanded) {
    return (
      <button
        onClick={() => onExpandChange(true)}
        className="w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group relative"
        aria-label="Open chat"
      >
        <span className="absolute w-3 h-3 bg-accent rounded-full top-0 right-0 animate-pulse" />
        <span className="text-xl">💬</span>
      </button>
    )
  }

  return (
    <div className="fixed bottom-8 right-8 w-96 h-96 bg-card border border-border/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm z-50">
      {/* Header */}
      <div className="bg-card/80 border-b border-border/20 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="font-serif text-lg font-light">Temporal Advisor</p>
          <p className="text-xs text-muted-foreground font-light">Always ready to help</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onExpandChange(false)}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <Minimize2 className="w-4 h-4 text-muted-foreground" />
          </button>
          <button
            onClick={() => onExpandChange(false)}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs px-4 py-3 rounded-lg text-sm font-light ${
                message.role === 'user' ? 'bg-accent text-accent-foreground rounded-br-none' : 'bg-card/50 text-foreground rounded-bl-none'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-card/50 text-foreground px-4 py-3 rounded-lg rounded-bl-none">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce delay-100" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="border-t border-border/20 px-6 py-4 flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your journey..."
          disabled={isLoading}
          className="bg-card/50 border-border/30 text-foreground placeholder:text-muted-foreground focus:border-accent/50 flex-1"
        />
        <Button
          type="submit"
          disabled={isLoading || !input.trim()}
          size="sm"
          className="bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50 rounded-lg"
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  )
}
