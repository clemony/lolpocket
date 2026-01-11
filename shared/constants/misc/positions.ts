export interface ChampionPosition {
  name: string
  color: string
  twColor: string
}
export const championPositions = [
  {
    name: 'All',
    color: 'var(--color-black-25)',
    twColor: 'black-25',
  },
  {
    name: 'Bottom',
    color: 'var(--color-precision)',
    twColor: 'precision',
  },
  {
    name: 'Jungle',
    color: 'var(--color-resolve)',
    twColor: 'resolve',
  },
  {
    name: 'Middle',
    color: 'var(--color-sorcery)',
    twColor: 'sorcery',
  },
  {
    name: 'Support',
    color: 'var(--color-inspiration)',
    twColor: 'inspiration',
  },
  {
    name: 'Top',
    color: 'var(--color-domination)',
    twColor: 'domination',
  },
]
