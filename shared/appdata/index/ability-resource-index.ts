export interface AbilityResource {
  name: string
<<<<<<< HEAD
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
=======
  class?: string
  color?: string
  icon?: string
  img?: string
}

export const abilityResources: AbilityResource[] = [
  {
    name: 'Charge',
>>>>>>> refs/remotes/origin/main
    color: 'var(--color-energy)',
    icon: 'lucide:battery-charging',
  },
  {
    name: 'Current health',
<<<<<<< HEAD
    title: 'Current HP',
    class: '!size-3.5',
    color: 'var(--color-resolve)',
    icon: 'i-lol-health'
  },
  {
    name: 'Fury',
    color: 'var(--color-fighter)',
=======
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
>>>>>>> refs/remotes/origin/main
    icon: 'i-lol-fury',
  },
  {
    name: 'Grit',
<<<<<<< HEAD
    class: 'rounded-sm !size-5',
    color: 'var(--color-bronze)',
=======
    color: 'var(--color-)',
>>>>>>> refs/remotes/origin/main
    icon: '/img/icons/Graves_Quickdraw.png',
  },
  {
    name: 'Health',
    color: 'var(--color-hp)',
    icon: 'i-lol-hp',
  },
  {
<<<<<<< HEAD
    name: 'Mana / s',
    color: 'var(--color-inspiration',
    icon: 'i-lol-mana-regen',
  },
  {
    name: 'Max health',
    title: 'Max HP',
=======
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
>>>>>>> refs/remotes/origin/main
    color: 'var(--color-hp)',
    icon: 'i-lol-hp',
  },
  {
<<<<<<< HEAD
    name: 'Blood well',
    title: 'Blood Well',
    class: 'rounded-sm !size-5',
    color: 'var(--color-vamp)',
    icon: '/img/icons/Aatrox-Blood-Well.webp'
=======
    name: 'Blood Well',
    img: '/img/icons/Aatrox-Blood-Well.webp',
>>>>>>> refs/remotes/origin/main
  },

]
