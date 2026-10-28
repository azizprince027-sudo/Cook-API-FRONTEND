import { IconeChef } from './Icones.tsx'

type Props = {
  // "clair" = texte blanc (sur fond marine), "fonce" = texte marine (sur fond blanc)
  theme?: 'clair' | 'fonce'
  grand?: boolean
}

export default function Logo({ theme = 'fonce', grand = false }: Props) {
  const couleur = theme === 'clair' ? 'text-white' : 'text-marine'
  return (
    <div className={`flex items-center gap-2 font-bold ${couleur}`}>
      <IconeChef className={grand ? 'size-10 text-sky-400' : 'size-6 text-blue-600'} />
      <span className={grand ? 'text-4xl' : 'text-lg'}>Cook API</span>
    </div>
  )
}
