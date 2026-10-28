// Ces types décrivent ce que renvoie réellement ton API (schema.prisma).
export type Priorite = 'low' | 'medium' | 'high'

export interface Tache {
  id: number
  title: string
  description: string | null
  priority: Priorite
  completed: boolean
}
