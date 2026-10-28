import type { Page } from '../types/page.ts'
import type { Tache } from '../types/tache.ts'

type Props = {
  // Si "tache" est fourni, on est en modification ; sinon, en création.
  tache?: Tache
  aller: (p: Page) => void
}

const champ =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20'

export default function FormulaireTache({ tache, aller }: Props) {
  const modification = tache !== undefined

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-2xl font-bold">{modification ? 'Modifier la tâche' : 'Créer une nouvelle tâche'}</h1>
      <p className="mt-1 text-sm text-slate-500">
        {modification ? 'Mettez à jour les informations de votre tâche.' : 'Remplissez les informations ci-dessous.'}
      </p>

      <form className="mt-6 space-y-5 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-slate-700">
            Titre de la tâche <span className="text-red-500">*</span>
          </label>
          <input id="title" name="title" defaultValue={tache?.title} placeholder="Ex : Développer l'interface utilisateur" className={champ} />
        </div>

        <div>
          <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-slate-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            defaultValue={tache?.description ?? ''}
            placeholder="Détails supplémentaires (optionnel)"
            className={champ}
          />
        </div>

        <div>
          <label htmlFor="priority" className="mb-1.5 block text-sm font-medium text-slate-700">
            Priorité
          </label>
          <select id="priority" name="priority" defaultValue={tache?.priority ?? 'medium'} className={champ}>
            <option value="low">Basse</option>
            <option value="medium">Moyenne</option>
            <option value="high">Haute</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={() => aller('taches')}
            className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Annuler
          </button>
          <button
            type="submit"
            onClick={() => aller('taches')}
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {modification ? 'Enregistrer' : 'Créer la tâche'}
          </button>
        </div>
      </form>
    </div>
  )
}
