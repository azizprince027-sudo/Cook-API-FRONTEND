import type { Page } from '../types/page.ts'
import type { Tache } from '../types/tache.ts'
import { BadgePriorite, BadgeStatut } from '../components/Badge.tsx'
import { IconeCoche, IconeCrayon, IconePlus, IconePoubelle } from '../components/Icones.tsx'

type Props = { taches: Tache[]; aller: (p: Page) => void }

const selectStyle =
  'rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20'

export default function Taches({ taches, aller }: Props) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Mes tâches</h1>
          <p className="mt-1 text-sm text-slate-500">Gérez vos tâches et restez productif.</p>
        </div>
        <button
          onClick={() => aller('creer')}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <IconePlus className="size-4" />
          Créer une tâche
        </button>
      </div>

      {/* Ces filtres correspondent à ?priority= et ?completed= de l'API */}
      <div className="mt-6 flex flex-wrap gap-3">
        <select className={selectStyle} defaultValue="" aria-label="Filtrer par priorité">
          <option value="">Toutes les priorités</option>
          <option value="high">Haute</option>
          <option value="medium">Moyenne</option>
          <option value="low">Basse</option>
        </select>
        <select className={selectStyle} defaultValue="" aria-label="Filtrer par statut">
          <option value="">Tous les statuts</option>
          <option value="false">À faire</option>
          <option value="true">Terminées</option>
        </select>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
        {taches.length === 0 ? (
          <p className="py-12 text-center text-sm text-slate-500">Aucune tâche. Créez votre première tâche !</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">Tâche</th>
                <th className="px-4 py-3 font-medium">Priorité</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">Statut</th>
                <th className="px-4 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {taches.map((t) => (
                <tr key={t.id}>
                  <td className="px-4 py-3">
                    <p className={`font-medium ${t.completed ? 'text-slate-400 line-through' : ''}`}>{t.title}</p>
                    {t.description && <p className="text-xs text-slate-500">{t.description}</p>}
                  </td>
                  <td className="px-4 py-3">
                    <BadgePriorite priorite={t.priority} />
                  </td>
                  <td className="hidden px-4 py-3 sm:table-cell">
                    <BadgeStatut terminee={t.completed} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1">
                      {!t.completed && (
                        <button className="rounded-md p-1.5 text-emerald-600 hover:bg-emerald-50" aria-label="Terminer la tâche">
                          <IconeCoche className="size-4" />
                        </button>
                      )}
                      <button onClick={() => aller('modifier')} className="rounded-md p-1.5 text-blue-600 hover:bg-blue-50" aria-label="Modifier la tâche">
                        <IconeCrayon className="size-4" />
                      </button>
                      <button className="rounded-md p-1.5 text-red-600 hover:bg-red-50" aria-label="Supprimer la tâche">
                        <IconePoubelle className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
