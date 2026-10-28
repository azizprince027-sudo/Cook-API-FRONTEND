import { useState } from 'react'
import type { ChangeEvent, ReactNode } from 'react'
import { IconeOeil, IconeOeilBarre } from './Icones.tsx'

type Props = {
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  icone?: ReactNode
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

// Un champ de formulaire avec label, icône à gauche et, pour les mots de passe, un bouton "afficher".
export default function Champ({ label, name, type = 'text', placeholder, icone, value, onChange, required }: Props) {
  const [visible, setVisible] = useState(false)
  const estMotDePasse = type === 'password'

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        {icone && <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">{icone}</span>}
        <input
          id={name}
          name={name}
          type={estMotDePasse && visible ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full rounded-lg border border-slate-300 bg-white py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 ${icone ? 'pl-10' : 'pl-3'} ${estMotDePasse ? 'pr-10' : 'pr-3'}`}
        />
        {estMotDePasse && (
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            aria-label={visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
            className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600"
          >
            {visible ? <IconeOeilBarre className="size-4" /> : <IconeOeil className="size-4" />}
          </button>
        )}
      </div>
    </div>
  )
}
