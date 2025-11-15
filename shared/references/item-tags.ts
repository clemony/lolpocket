export interface ItemTag {
  id: string
  name: string
  color: string
  icon: string
}
export const itemTags = [
  {
    id: 'Fighter',
    name: 'Fighter',
    color: 'var(--color-fighter)',
    icon: 'i-lol-fighter',
  },
  {
    id: 'Marksman',
    name: 'Marksman',
    color: 'var(--color-precision)',
    icon: 'i-lol-marksman',
  },
  {
    id: 'Assassin',
    name: 'assassin',
    color: 'var(--color-domination)',
    icon: 'i-lol-assassin',
  },
  {
    id: 'Mage',
    name: 'Mage',
    color: 'var(--color-sorcery)',
    icon: 'i-lol-mage',
  },
  {
    id: 'Tank',
    name: 'Tank',
    color: 'var(--color-resolve)',
    icon: 'i-lol-tank',
  },
  {
    id: 'Support',
    name: 'Support',
    color: 'var(--color-inspiration)',
    icon: 'i-lol-support',
  },
  {
    id: 'Onhit_effects',
    name: 'On-Hit Effects',
    color: 'var(--color-onhit)',
    icon: 'i-lol-on-hit',
  },
  {
    id: 'Movement',
    name: 'Movement',
    color: 'var(--color-b4)',
    icon: 'i-lol-ms',
  },
  {
    id: 'Lifesteal_vamp',
    name: 'Lifesteal & Omnivamp',
    color: 'var(--color-vamp)',
    icon: 'i-lol-vamp',
  },
]
