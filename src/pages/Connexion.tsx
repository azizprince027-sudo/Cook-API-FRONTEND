import type { Page } from '../types/page.ts'
import Logo from '../components/Logo.tsx'
import Champ from '../components/Champ.tsx'
import { IconeBouclier, IconeEclair, IconeMail, IconeCadenas, IconeTableau } from '../components/Icones.tsx'

const avantages = [
  { icone: <IconeTableau className="size-5" />, titre: 'Organisez vos tâches', texte: 'Restez productif et efficace' },
  { icone: <IconeBouclier className="size-5" />, titre: 'Accès sécurisé', texte: 'Vos données sont protégées' },
  { icone: <IconeEclair className="size-5" />, titre: 'Simple et rapide', texte: 'Une interface moderne et intuitive' },
]

export default function Connexion({ aller }: { aller: (p: Page) => void }) {
  return (
    <div className="grid min-h-screen md:grid-cols-[2fr_3fr]">
      <section className="hidden flex-col justify-center gap-10 bg-marine p-10 text-white md:flex">
        <div>
          <Logo theme="clair" grand />
          <p className="mt-3 text-sm text-slate-300">Votre assistant de tâches au quotidien</p>
        </div>
        <ul className="space-y-5">
          {avantages.map((a) => (
            <li key={a.titre} className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-marine-clair text-sky-300">{a.icone}</span>
              <div>
                <p className="text-sm font-semibold">{a.titre}</p>
                <p className="text-xs text-slate-300">{a.texte}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-sm italic text-slate-300">« Les grandes réalisations commencent par de petites tâches. »</p>
      </section>

      <section className="flex items-center justify-center bg-white p-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex justify-center md:hidden">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold">Connexion</h1>
          <p className="mt-1 text-sm text-slate-500">Accédez à votre espace personnel</p>

          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <Champ label="Email" name="email" type="email" placeholder="exemple@domaine.com" icone={<IconeMail className="size-4" />} />
            <Champ label="Mot de passe" name="password" type="password" placeholder="Votre mot de passe" icone={<IconeCadenas className="size-4" />} />
            <button
              type="submit"
              onClick={() => aller('dashboard')}
              className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Se connecter
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Pas encore de compte ?{' '}
            <button onClick={() => aller('inscription')} className="font-semibold text-blue-600 hover:underline">
              S'inscrire
            </button>
          </p>
        </div>
      </section>
    </div>
  )
}
