    import { useState } from 'react'
    import type { Page } from './types/page.ts'
    import { tachesExemple } from './services/api.ts'
    import MiseEnPage from './components/MiseEnPage.tsx'
    import Connexion from './pages/Connexion.tsx'
    import Inscription from './pages/Inscription.tsx'
    import Dashboard from './pages/Dashboard.tsx'
    import Taches from './pages/Taches.tsx'
    import FormulaireTache from './pages/FormulaireTache.tsx'

    // Navigation PROVISOIRE : un simple état "page". On la remplacera par de vraies routes (react-router)
    // quand on branchera l'API.
    export default function App() {
    const [page, setPage] = useState<Page>('connexion')
    const taches = tachesExemple

    if (page === 'connexion') return <Connexion aller={setPage} />
    if (page === 'inscription') return <Inscription aller={setPage} />

    return (
        <MiseEnPage actuelle={page} aller={setPage}>
        {page === 'dashboard' && <Dashboard taches={taches} aller={setPage} />}
        {page === 'taches' && <Taches taches={taches} aller={setPage} />}
        {page === 'creer' && <FormulaireTache aller={setPage} />}
        {page === 'modifier' && <FormulaireTache tache={taches[0]} aller={setPage} />}
        </MiseEnPage>
    )
    }
