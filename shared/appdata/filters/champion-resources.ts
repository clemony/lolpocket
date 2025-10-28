export interface ChampionResource {
  name: string
  title?: string
  class?: string
  color?: string
  icon?: string
}

export const championResources: ChampionResource[] = [
// in champ filter
  {
    name: 'Mana',
    color: 'var(--color-platinum)',
    icon: 'i-lol-mana',
  },
  {
    name: 'Energy',
    color: 'var(--color-precision)',
    icon: 'icon-park-solid:lightning',
  },
  {
    name: 'None',
    title: 'Resourceless',
    color: 'transparent',
  },
  {
    name: 'Other',
    color: 'var(--color-neutral)',
  },
]