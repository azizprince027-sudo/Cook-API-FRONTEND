import type { ReactNode } from 'react'
import type { Page } from '../types/page.ts'
import type { Tache } from '../types/tache.ts'
import { BadgePriorite, BadgeStatut } from '../components/Badge.tsx'
import { IconeAlerte, IconeCoche, IconeHorloge, IconeTableau } from '../components/Icones.tsx'

type Props = { taches: Tache[]; aller: (p: Page) => void }

function Statistique({ titre, valeur, icone, couleur }: { titre: string; valeur: number; icone: ReactNode; couleur: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <span className={`flex size-10 items-center justify-center rounded-lg ${couleur}`}>{icone}</span>
      <div>
        <p className="text-xs text-slate-500">{titre}</p>
        <p className="text-2xl font-bold">{valeur}</p>
      </div>
    </div>
  )
}

export default function Dashboard({ taches, aller }: Props) {
  // Ces chiffres sont calculés depuis la liste : l'API n'a pas de route de statistiques.
  const total = taches.length
  const terminees = taches.filter((t) => t.completed).length
  const aFaire = total - terminees
  const prioriteHaute = taches.filter((t) => t.priority === 'high' && !t.completed).length
  const recentes = taches.slice(0, 5)

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold">Bonjour 👋</h1>
      <p className="mt-1 text-sm text-slate-500">Voici un aperçu de votre activité.</p>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Statistique titre="Total des tâches" valeur={total} icone={<IconeTableau className="size-5" />} couleur="bg-blue-100 text-blue-600" />
        <Statistique titre="Terminées" valeur={terminees} icone={<IconeCoche className="size-5" />} couleur="bg-emerald-100 text-emerald-600" />
        <Statistique titre="À faire" valeur={aFaire} icone={<IconeHorloge className="size-5" />} couleur="bg-amber-100 text-amber-600" />
        <Statistique titre="Priorité haute" valeur={prioriteHaute} icone={<IconeAlerte className="size-5" />} couleur="bg-red-100 text-red-600" />
      </div>

      <section className="mt-8 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Tâches récentes</h2>
          <button onClick={() => aller('taches')} className="text-sm font-medium text-blue-600 hover:underline">
            Voir toutes →
          </button>
        </div>
        {recentes.length === 0 ? (
          <p className="py-8 text-center text-sm text-slate-500">Aucune tâche pour le moment.</p>
        ) : (
          <ul className="mt-4 divide-y divide-slate-100">
            {recentes.map((t) => (
              <li key={t.id} className="flex items-center justify-between gap-3 py-3">
                <span className={`text-sm font-medium ${t.completed ? 'text-slate-400 line-through' : ''}`}>{t.title}</span>
                <span className="flex shrink-0 gap-2">
                  <BadgePriorite priorite={t.priority} />
                  <BadgeStatut terminee={t.completed} />
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
