export interface AbilityResource {
  name: string
  class?: string
  color?: string
  icon?: string
  img?: string
}

export const abilityResources: AbilityResource[] = [
  {
    name: 'Charge',
    color: 'var(--color-energy)',
    icon: 'lucide:battery-charging',
  },
  {
    name: 'Current health',
    color: 'var(--color-hp)',
    icon: 'i-lol-health',
  },
  {
    name: 'Energy',
    color: 'var(--color-energy)',
    icon: 'icon-park-solid:lightning',
  },
  {
    name: 'Fury',
    color: 'var(--color-)',
    icon: 'i-lol-fury',
  },
  {
    name: 'Grit',
    color: 'var(--color-)',
    icon: '/img/icons/Graves_Quickdraw.png',
  },
  {
    name: 'Health',
    color: 'var(--color-hp)',
    icon: 'i-lol-hp',
  },
  {
    name: 'Mana',
    color: 'var(--color-platinum)',
    icon: 'i-lol-mana',
  },
  {
    name: 'Mana / s',
    color: 'var(--color-mana)',
    icon: 'i-lol-mana-regen',
  },
  {
    name: 'Maximum health',
    color: 'var(--color-hp)',
    icon: 'i-lol-hp',
  },
  {
    name: 'Blood Well',
    img: '/img/icons/Aatrox-Blood-Well.webp',
  },

]
