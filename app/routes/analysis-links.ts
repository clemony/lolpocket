export const analyticsLinks: LinkObject[] = [
  {
    name: 'Champions',
    link: '/analysis/champions',
    icon: {
      name: 'i-lol-champ',
      modifier: {
        name: 'tabler:square-root',
        class: '!-top-1 !-left-1 **:stroke-[1.5] !size-6',
      },
      class: ['size-5.5 ', 'size-3.5 left-2'],
    },
  },
  {
    name: 'Items',
    link: '/analysis/items',
    icon: {
      name: 'i-lol-sword-graph',
      class: ['size-5.5 -ml-[1px]', 'ml-0'],
    },
  },
  {
    name: 'Allies',
    link: '/analysis/allies',
    icon: {
      name: 'tabler:heart-handshake',
      class: ['size-5.25', 'size-6 **:stroke-[1.4]'],
    },
  },
]
