export const backpackLinks: LinkObject[] = [
  {
    name: 'Backpack',
    link: '/backpack',

    icon: {
      name: 'backpack',
      class: 'size-4.75',
    },
    blurb:
      '<p class="leading-5 text-pretty">Your main <i><b>pocket</b></i> storage tool. Magically keeps pockets safe and warm in list and grid form.</p>',
  },
  {
    name: 'Calculator',
    link: '/calculator',
    icon: {
      name: 'streamline:calculator-1',
      class: 'size-4.5',
    },
  },
  {
    name: 'Archive',
    link: '/backpack/archive',

    icon: {
      name: 'archive',
      class: 'size-4.5',
    },
    blurb: 'Outdated or unfinished.',
  },
  {
    name: 'Trash',
    link: '/backpack/trash',

    icon: {
      name: 'trash',
      class: '',
    },
    blurb: 'Self deletes after 30 days.',
  },
]

export const pinnedLink: LinkObject = {
  name: 'Pinned',
  link: '/pockets/pinned',

  icon: {
    name: 'teenyicons:attach-outline',
  },
}
