import type { Tache } from '../types/tache.ts'

// DONNÉES D'EXEMPLE : à remplacer par les vraies tâches de l'API (GET /tasks).
export const tachesExemple: Tache[] = [
  { id: 1, title: 'Apprendre React', description: 'Suivre le cours de A à Z', priority: 'high', completed: false },
  { id: 2, title: "Développer l'API", description: null, priority: 'medium', completed: false },
  { id: 3, title: 'Lire le Coran', description: null, priority: 'low', completed: true },
  { id: 4, title: 'Faire du sport', description: 'Séance de 45 minutes', priority: 'medium', completed: false },
  { id: 5, title: 'Étudier TypeScript', description: null, priority: 'high', completed: false },
  { id: 6, title: 'Créer un projet perso', description: null, priority: 'low', completed: false },
]
