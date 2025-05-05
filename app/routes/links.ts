export const navLinks = [
  {
    name: `Nexus`,
    link: '/nexus',
    section: 'nexus',
  },
  {
    name: `Summoner`,
    link: '/summoner',
    section: 'summoner',
  },
  {
    name: 'Backpack',
    link: '/backpack',
    section: 'backpack',
  },
  {
    name: 'Analytics',
    link: '/analytics/champions',
    section: 'analytics',
  },
]




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
  /*  {
    name: 'Favorites',
    link: '/summoner/favorites',
    icon: 'ph:heart-straight',
    iconSolid: 'teenyicons:heart-solid',
    iconClass: '',
  }, */
]

export function getPocketLinks(pocket: pocket) {
  const pocketPages = [
    {

      link: `/pocket/${pocket.key}`,
      name: 'Champions',
      icon: 'i-no-champ',
    },
    {
      link: `/pocket/${pocket.key}/items`,
      name: 'Items',
      icon: 'mdi:bow-arrow',
    },
    {

      link: `/pocket/${pocket.key}/runes`,
      name: 'Runes',
      icon: 'i-rune-icon',
    },

    {

      link: `/pocket/${pocket.key}/complete`,
      name: 'Complete',
      icon: 'stash:infinity-solid',
    },
  ]

  return pocketPages
}



export const pinnedLink = {
  name: 'Pinned',
  key: 'pinned',
  link: '/pockets/pinned',
  icon: 'teenyicons:attach-outline',
}

export function getFolderLinks() {
  const ps = usePocketStore()
  const folderLinks = [

    {
      name: 'Pockets',
      key: 'all',
      link: '/pockets',
      pockets: ps.pockets,
      icon: '',
      iconSolid: 'basil:envelope-open-outline',
      iconBold: 'ph:folder-bold',
    },
    {
      name: 'Trash',
      link: '/pockets/trash',
      pockets: ps.trashFolder,
      key: 'trash',
      icon: 'ph:trash',
      iconBold: 'ph:trash-bold',
    },
    {
      name: 'Archive',
      link: '/pockets/archive',
      pockets: ps.archiveFolder,
      key: 'archive',
      icon: 'ph:archive',
      iconSolid: 'teenyicons:archive-solid',
      iconBold: 'ph:archive-bold',
    },
  ]

  return folderLinks
}

export const externalLinks = [
  {
    name: 'Resources',
    icon: 'carbon:group-resource',
    open: false,
    submenu: [
      {
        name: 'Official',
        open: true,
        items: [
          {
            name: 'Dev Updates',
            url: 'https://www.leagueoflegends.com/en-us/news/dev/',
            icon: '/img/logos/fist.webp',
          },
          {
            name: 'Patch Notes',
            url: 'https://www.leagueoflegends.com/en-us/news/tags/patch-notes/',
            icon: '/img/logos/league2.webp',
          },
          {
            name: 'Wiki',
            url: 'https://wiki.leagueoflegends.com/en-us/',
            icon: '/img/logos/wiki.webp',
          },
        ],
      },
      {
        name: 'Statistics',
        open: true,
        items: [
          {
            name: 'Lolalytics',
            url: 'https://lolalytics.com',
            icon: '/img/logos/lolalytics.webp',
          },
          {
            name: 'op.gg',
            url: 'https://www.op.gg',
            icon: '/img/logos/opgg2.webp',
          },
          {
            name: 'u.gg',
            url: 'https://u.gg',
            icon: '/img/logos/ugg2.webp',
          },
          {
            name: 'League of Graphs',
            url: 'https://www.leagueofgraphs.com',
            icon: '/img/logos/LoG.webp',
          },
          {
            name: 'League of Items',
            url: 'https://leagueofitems.com',
            icon: '/img/logos/LoI.webp',
          },
        ],
      },
    ],
  },
]

export const infoLinks = [
  {
    name: 'Docs',
    url: '/Docs',
    type: 'i',
  },
  {
    name: 'About',
    url: '/About',
    icon: 'ph:cat',
    type: 'i',
  },
  {
    name: 'Github',
    url: 'https://github.com/clemony/lolpocket',
    type: 'ex',
  },
  {
    name: 'contact@lolpocket.win',
    icon: 'ph:envelope',
    url: '',
    type: 'ex',
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/Jzuu7bYTZY',
    type: 'ex',
  },
]
