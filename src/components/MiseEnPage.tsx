import type { ReactNode } from 'react'
import type { Page } from '../types/page.ts'
import Logo from './Logo.tsx'
import { IconeAccueil, IconeListe, IconePlus, IconeSortie } from './Icones.tsx'

type Props = {
  actuelle: Page
  aller: (p: Page) => void
  children: ReactNode
}

const liens: { page: Page; texte: string; icone: ReactNode }[] = [
  { page: 'dashboard', texte: 'Tableau de bord', icone: <IconeAccueil className="size-5" /> },
  { page: 'taches', texte: 'Mes tâches', icone: <IconeListe className="size-5" /> },
  { page: 'creer', texte: 'Créer une tâche', icone: <IconePlus className="size-5" /> },
]

// Mise en page des écrans connectés : barre latérale (ordinateur), barre du bas (mobile) et zone de contenu.
export default function MiseEnPage({ actuelle, aller, children }: Props) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-60 shrink-0 flex-col bg-marine p-4 md:flex">
        <div className="px-2 py-3">
          <Logo theme="clair" />
        </div>
        <nav className="mt-6 flex flex-col gap-1">
          {liens.map((l) => (
            <button
              key={l.page}
              onClick={() => aller(l.page)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
                actuelle === l.page ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-marine-clair hover:text-white'
              }`}
            >
              {l.icone}
              {l.texte}
            </button>
          ))}
        </nav>
        <button
          onClick={() => aller('connexion')}
          className="mt-auto flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-marine-clair hover:text-white"
        >
          <IconeSortie className="size-5" />
          Déconnexion
        </button>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col pb-16 md:pb-0">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:hidden">
          <Logo />
          <button onClick={() => aller('connexion')} className="text-sm font-medium text-slate-500" aria-label="Se déconnecter">
            <IconeSortie className="size-5" />
          </button>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 flex justify-around border-t border-slate-200 bg-white py-2 md:hidden">
        {liens.map((l) => (
          <button
            key={l.page}
            onClick={() => aller(l.page)}
            className={`flex flex-col items-center gap-0.5 px-3 text-xs font-medium ${actuelle === l.page ? 'text-blue-600' : 'text-slate-500'}`}
          >
            {l.icone}
            {l.texte}
          </button>
        ))}
      </nav>
    </div>
  )
}
