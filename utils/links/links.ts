export const summonerLinks = [
  {
    name: `Base`,
    link: '/nexus',
    icon: 'mynaui:stop-diamond',
    iconClass: '!size-4.5 -ml-0.5',
  },
  {
    name: 'Research',
    link: '/summoner/research',
    icon: 'iconoir:round-flask',
    iconSolid: 'mdi:graph-box',
    iconClass: '',
    subLinks: [
      {
        name: 'Champions',
        link: '/research/champions',
      },
      {
        name: 'Items',
        link: '/research/items',
      },

    ],
  },
  {
    name: 'Match History',
    link: '/nexus/match_history',
    icon: 'ph:clock-counter-clockwise',
    tftIcon: 'i-time-icon',
    class: 'size-5',
  }, /*
  {
    name: 'Favorites',
    link: '/summoner/favorites',
    icon: 'ph:heart-straight',
    iconSolid: 'teenyicons:heart-solid',
    iconClass: '',
  }, */
]

export const settingLinks = [
  {
    name: 'Basic',
    link: '/settings',
    icon: 'ph:gear-six',
  },
  {
    name: 'Account',
    link: '/settings/account',
    icon: 'ri:user-settings-line',
  },
  {
    name: 'Theme',
    link: '/settings/themes',
    icon: 'teenyicons:paintbucket-outline',
  },
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

export const itemDataLinks = [
  {
    name: 'Items',
    link: '/items/all',
    text: 'Browse a visual grid and read item data.',
  },
  {
    name: 'Item Stats',
    link: '/items/stats',
    icon: 'teenyicons:table-outline',
    badge: 'table',
    class: '',
    text: 'An item stat spreadsheet for the data nerds :)',
  },
]

export const gameDataLinks = [
  {
    name: 'Champions',
    link: '/champions',
    icon: 'i-ui-champ',
    class: 'size-4.75 opacity-60  dst stroke-[1.5] -ml-0.25',
  },

  {
    name: 'Runes',
    link: '/runes',
    icon: 'i-ui-rune-icon',
    class: 'size-5.5 -ml-px',
  },
  {
    name: 'Spells',
    link: '/spells',
    icon: 'i-tft-attach',
    class: 'size-4.25 opacity-70 dst  ',
  },
  {
    name: 'Summoners',
    link: '/summoners',
    icon: 'i-ui-enemy',
    class: 'size-4.75  opacity-60 top-0.5 dst ',
    text: 'Look up your friends... or your foes.',
  },
]

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
