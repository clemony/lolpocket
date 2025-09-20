export const backpackLinks: LinkObject[] = [
  {
    name: 'Backpack',
    blurb:
      '<p class="leading-5 text-pretty">Your main <i><b>pocket</b></i> storage tool. Magically keeps pockets safe and warm in list and grid form.</p>',
    icon: {
      name: 'backpack',
      class: 'size-4.75',
    },
    link: '/backpack',
  },
  {
    name: 'Calculator',
    icon: {
      name: 'streamline:calculator-1',
      class: 'size-4.5',
    },
    link: '/calculator',
  },
  {
    name: 'Archive',
    blurb: 'Outdated or unfinished.',
    icon: {
      name: 'archive',
      class: 'size-4.5',
    },
    link: '/backpack/archive',
  },
  {
    name: 'Trash',
    blurb: 'Self deletes after 30 days.',
    icon: {
      name: 'trash',
      class: '',
    },
    link: '/backpack/trash',
  },
]

export const pinnedLink: LinkObject = {
  name: 'Pinned',
  icon: {
    name: 'teenyicons:attach-outline',
  },
  link: '/pockets/pinned',
}
