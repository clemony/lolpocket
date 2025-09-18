export interface AbilityResource {
  class?: string
  color?: string
  icon?: string
  img?: string
  name: string
}

export const abilityResources: AbilityResource[] = [
  {
    color: 'var(--color-energy)',
    icon: 'lucide:battery-charging',
    name: 'Charge',
  },
  {
    color: 'var(--color-hp)',
    icon: 'i-lol-health',
    name: 'Current health',
  },
  {
    color: 'var(--color-energy)',
    icon: 'icon-park-solid:lightning',
    name: 'Energy',
  },
  {
    color: 'var(--color-)',
    icon: 'i-lol-fury',
    name: 'Fury',
  },
  {
    color: 'var(--color-)',
    icon: '/img/icons/Graves_Quickdraw.png',
    name: 'Grit',
  },
  {
    color: 'var(--color-hp)',
    icon: 'i-lol-hp',
    name: 'Health',
  },
  {
    color: 'var(--color-platinum)',
    icon: 'i-lol-mana',
    name: 'Mana',
  },
  {
    color: 'var(--color-mana)',
    icon: 'i-lol-mana-regen',
    name: 'Mana / s',
  },
  {
    color: 'var(--color-hp)',
    icon: 'i-lol-hp',
    name: 'Maximum health',
  },
  {
    img: '/img/icons/Aatrox-Blood-Well.webp',
    name: 'Blood Well',
  },

]
