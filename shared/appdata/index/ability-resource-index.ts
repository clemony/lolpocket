export interface AbilityResource {
  name: string
  icon?: string
  img?: string
  class?: string
  color?: string
}

export const abilityResources: AbilityResource[] = [
  {
    name: 'Charge',
    icon: 'lucide:battery-charging',
    color: 'var(--color-energy)',
  },
  {
    name: 'Current health',
    icon: 'i-lol-health',
    color: 'var(--color-hp)',
  },
  {
    name: 'Energy',
    icon: 'icon-park-solid:lightning',
    color: 'var(--color-energy)',
  },
  {
    name: 'Fury',
    icon: 'i-lol-fury',
    color: 'var(--color-)',
  },
  {
    name: 'Grit',
    icon: '/img/icons/Graves_Quickdraw.png',
    color: 'var(--color-)',
  },
  {
    name: 'Health',
    icon: 'i-lol-hp',
    color: 'var(--color-hp)',
  },
  {
    name: 'Mana',
    icon: 'i-lol-mana',
    color: 'var(--color-platinum)',
  },
  {
    name: 'Mana / s',
    icon: 'i-lol-mana-regen',
    color: 'var(--color-mana)',
  },
  {
    name: 'Maximum health',
    icon: 'i-lol-hp',
    color: 'var(--color-hp)',
  },
  {
    name: 'Blood Well',
    img: '/img/icons/Aatrox-Blood-Well.webp',
  },

]
