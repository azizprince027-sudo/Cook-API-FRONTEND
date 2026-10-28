import type { Page } from '../types/page.ts'
import Logo from '../components/Logo.tsx'
import Champ from '../components/Champ.tsx'
import { IconeCadenas, IconeMail, IconeUtilisateur } from '../components/Icones.tsx'

export default function Inscription({ aller }: { aller: (p: Page) => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <Logo />
        <h1 className="mt-6 text-2xl font-bold">Créer un compte</h1>
        <p className="mt-1 text-sm text-slate-500">Rejoignez Cook API et commencez à organiser vos tâches</p>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Champ label="Nom complet" name="name" placeholder="Votre nom complet" icone={<IconeUtilisateur className="size-4" />} />
          <Champ label="Email" name="email" type="email" placeholder="exemple@domaine.com" icone={<IconeMail className="size-4" />} />
          <Champ label="Mot de passe" name="password" type="password" placeholder="Minimum 8 caractères" icone={<IconeCadenas className="size-4" />} />
          {/* Ce champ n'existe que côté frontend : il ne sera PAS envoyé à l'API. */}
          <Champ label="Confirmer le mot de passe" name="confirmation" type="password" placeholder="Répétez votre mot de passe" icone={<IconeCadenas className="size-4" />} />
          <button
            type="submit"
            onClick={() => aller('connexion')}
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Créer mon compte
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Déjà un compte ?{' '}
          <button onClick={() => aller('connexion')} className="font-semibold text-blue-600 hover:underline">
            Se connecter
          </button>
        </p>
      </div>
    </div>
  )
}
