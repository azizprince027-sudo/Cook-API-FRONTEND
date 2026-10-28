import type { ReactNode } from 'react'

// Une icône = un SVG. "currentColor" reprend la couleur du texte (text-blue-600, etc.).
function Icone({ className = 'size-5', children }: { className?: string; children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

type Props = { className?: string }

export const IconeChef = (p: Props) => (
  <Icone {...p}>
    <path d="M6 14a4 4 0 1 1 1.5-7.7A4.5 4.5 0 0 1 16.5 6.3 4 4 0 1 1 18 14" />
    <path d="M6 14v6h12v-6" />
    <path d="M6 17h12" />
  </Icone>
)
export const IconeAccueil = (p: Props) => (
  <Icone {...p}>
    <path d="m3 11 9-8 9 8" />
    <path d="M5 10v10h14V10" />
  </Icone>
)
export const IconeListe = (p: Props) => (
  <Icone {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18M9 4v16" />
  </Icone>
)
export const IconePlus = (p: Props) => (
  <Icone {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icone>
)
export const IconeSortie = (p: Props) => (
  <Icone {...p}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <path d="m16 17 5-5-5-5M21 12H9" />
  </Icone>
)
export const IconeCrayon = (p: Props) => (
  <Icone {...p}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </Icone>
)
export const IconePoubelle = (p: Props) => (
  <Icone {...p}>
    <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" />
  </Icone>
)
export const IconeRecherche = (p: Props) => (
  <Icone {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Icone>
)
export const IconeMail = (p: Props) => (
  <Icone {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icone>
)
export const IconeCadenas = (p: Props) => (
  <Icone {...p}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </Icone>
)
export const IconeUtilisateur = (p: Props) => (
  <Icone {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Icone>
)
export const IconeOeil = (p: Props) => (
  <Icone {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </Icone>
)
export const IconeOeilBarre = (p: Props) => (
  <Icone {...p}>
    <path d="M3 3l18 18" />
    <path d="M10.6 6.1A9.8 9.8 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3 3.6M6.6 6.7A16.5 16.5 0 0 0 2 12s3.5 6 10 6a9.7 9.7 0 0 0 4-.9" />
    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
  </Icone>
)
export const IconeCoche = (p: Props) => (
  <Icone {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12 3 3 5-6" />
  </Icone>
)
export const IconeHorloge = (p: Props) => (
  <Icone {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icone>
)
export const IconeAlerte = (p: Props) => (
  <Icone {...p}>
    <path d="M12 3 2 20h20Z" />
    <path d="M12 10v5M12 18h.01" />
  </Icone>
)
export const IconeTableau = (p: Props) => (
  <Icone {...p}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </Icone>
)
export const IconeBouclier = (p: Props) => (
  <Icone {...p}>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" />
    <path d="m9 12 2 2 4-4" />
  </Icone>
)
export const IconeEclair = (p: Props) => (
  <Icone {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7Z" />
  </Icone>
)
