export interface MapPosition {
  color: string
  name: string
  icon: string
  twColor: string
}
export const mapPositions = [
  {
    color: 'var(--color-black-25)',
    name: 'all',
    icon: 'role:all',
    twColor: 'black-25',
  },

  {
    color: 'var(--color-domination)',
    name: 'top',
    icon: 'role:top',
    twColor: 'domination',
  },

  {
    color: 'var(--color-resolve)',
    name: 'jungle',
    icon: 'role:jungle',
    twColor: 'resolve',
  },

  {
    color: 'var(--color-sorcery)',
    name: 'middle',
    icon: 'role:middle',
    twColor: 'sorcery',
  },

  {
    color: 'var(--color-precision)',
    name: 'bottom',
    icon: 'role:bottom',
    twColor: 'precision',
  },

  {
    color: 'var(--color-inspiration)',
    name: 'support',
    icon: 'role:support',
    twColor: 'inspiration',
  },
]
