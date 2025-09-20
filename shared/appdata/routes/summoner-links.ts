export const summonerLinks = [
  {
    name: `Nexus`,
    icon: {
      name: 'nexus',
      class: '!size-4.5 -ml-0.5',
    },
    link: '/nexus',
    section: 'nexus',
  },
  {
    name: 'Analytics',
    icon: {
      name: 'chart',
      class: '',
    },
    link: '/analytics/champions',
    subLinks: [
      {
        name: 'Champions',
        link: '/analytics/champions',
      },
      {
        name: 'Items',
        link: '/analytics/items',
      },
    ],
  },
  {
    name: 'Match History',
    icon: {
      name: 'clock',
      class: 'size-5',
    },
    link: '/match',
  },
]
