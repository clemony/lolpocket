export interface AbilityResource {
  name: string
  title?: string
  class?: string
  color?: string
  icon?: string
}

export const abilityResources: AbilityResource[] = [
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
    color: 'var(--color-neutral)',
  },
  // ability only
  {
    name: 'Charge',
    class: '!size-4.5 **:stroke-[2.2]',
    color: 'var(--color-energy)',
    icon: 'lucide:battery-charging',
  },
  {
    name: 'Current health',
    title: 'Current HP',
    class: '!size-3.5',
    color: 'var(--color-resolve)',
    icon: 'i-lol-health'
  },
  {
    name: 'Fury',
    color: 'var(--color-fighter)',
    icon: 'i-lol-fury',
  },
  {
    name: 'Grit',
    class: 'rounded-sm !size-5',
    color: 'var(--color-bronze)',
    icon: '/img/icons/Graves_Quickdraw.png',
  },
  {
    name: 'Health',
    color: 'var(--color-hp)',
    icon: 'i-lol-hp',
  },
  {
    name: 'Mana / s',
    color: 'var(--color-inspiration',
    icon: 'i-lol-mana-regen',
  },
  {
    name: 'Max health',
    title: 'Max HP',
    color: 'var(--color-hp)',
    icon: 'i-lol-hp',
  },
  {
    name: 'Blood well',
    title: 'Blood Well',
    class: 'rounded-sm !size-5',
    color: 'var(--color-vamp)',
    icon: '/img/icons/Aatrox-Blood-Well.webp'
  },

]
