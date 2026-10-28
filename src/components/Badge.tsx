import type { Priorite } from '../types/tache.ts'

const styles: Record<Priorite, { texte: string; classes: string }> = {
  high: { texte: 'Haute', classes: 'bg-red-100 text-red-600' },
  medium: { texte: 'Moyenne', classes: 'bg-amber-100 text-amber-700' },
  low: { texte: 'Basse', classes: 'bg-emerald-100 text-emerald-700' },
}

export function BadgePriorite({ priorite }: { priorite: Priorite }) {
  const { texte, classes } = styles[priorite]
  return <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${classes}`}>{texte}</span>
}

export function BadgeStatut({ terminee }: { terminee: boolean }) {
  return terminee ? (
    <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">Terminée</span>
  ) : (
    <span className="inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">À faire</span>
  )
}
