import { generateText } from 'ai'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    // Convert messages to the format expected by generateText
    const modelMessages = messages.map((msg: ChatMessage) => ({
      role: msg.role,
      content: msg.content,
    }))

    // Get the last user message
    const lastUserMessage = modelMessages.filter((m: { role: string }) => m.role === 'user').pop()

    if (!lastUserMessage) {
      return Response.json({ error: 'No user message found' }, { status: 400 })
    }

    // Generate response using AI
    const result = await generateText({
      model: 'openai/gpt-4-mini',
      system: `Tu es l'assistant virtuel de Temporal Voyages, une agence de voyage temporel de luxe. Ton rôle : conseiller les clients sur les meilleures destinations temporelles. 

Ton ton :
- Professionnel mais chaleureux
- Passionné d'histoire
- Toujours enthousiaste sans être trop familier
- Expertise en voyage temporel crédible et convaincante

Tu connais parfaitement nos trois destinations exclusives :
- Paris 1889 (Belle Époque, Tour Eiffel, Exposition Universelle, Moulin Rouge, Café Society)
- Crétacé -65M (dinosaures, nature préhistorique, faune et flore extraordinaires)
- Florence 1504 (Renaissance, art, Michel-Ange, Medici, maîtres de l'art)

Tu peux suggérer des destinations selon les intérêts du client. Sois enthousiaste mais garde une certaine élégance. Réponds toujours en français, avec sophistication et passion pour l'histoire. Garde tes réponses concises mais détaillées. Si on te demande sur les prix ou les réservations, suggère de contacter nos consultants temporels ou de visiter le site.`,
      messages: modelMessages,
      max_tokens: 300,
    })

    return Response.json({
      content: result.text,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json({ error: 'Failed to process chat message' }, { status: 500 })
  }
}
