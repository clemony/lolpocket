export interface MapPosition {
  name: string
  color: string
  icon: string
  twColor: string
}
export const mapPositions = [
  {
    name: 'all',
    color: 'var(--color-black-25)',
    icon: 'role:all',
    twColor: 'black-25',
  },

  {
    name: 'top',
    color: 'var(--color-domination)',
    icon: 'role:top',
    twColor: 'domination',
  },

  {
    name: 'jungle',
    color: 'var(--color-resolve)',
    icon: 'role:jungle',
    twColor: 'resolve',
  },

  {
    name: 'middle',
    color: 'var(--color-sorcery)',
    icon: 'role:middle',
    twColor: 'sorcery',
  },

  {
    name: 'bottom',
    color: 'var(--color-precision)',
    icon: 'role:bottom',
    twColor: 'precision',
  },

  {
    name: 'support',
    color: 'var(--color-inspiration)',
    icon: 'role:support',
    twColor: 'inspiration',
  },
]
