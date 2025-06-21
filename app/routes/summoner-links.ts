export const summonerLinks = [
  {
    name: `Nexus`,
    link: '/nexus',
    section: 'nexus',
    icon: 'nexus',
    iconClass: '!size-4.5 -ml-0.5',
  },
  {
    name: 'Analytics',
    link: '/analytics/champions',
    icon: 'chart',
    iconSolid: 'mdi:graph-box',
    iconClass: '',
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
    link: '/match',
    icon: 'clock',
    tftIcon: 'i-time-icon',
    class: 'size-5',
  },
]
