export const summonerLinks = [
  {
    name: `Board`,
    link: '/summoner',
    icon: 'ph:chalkboard-simple', // gala:calendar
    iconSolid: 'clarity:calendar-solid',
    iconBold: 'ph:chalkboard-simple-bold',
  },
  {
    name: 'Build Analysis',
    link: '/summoner/analysis',
    icon: 'ph:atom',
    iconSolid: 'mdi:graph-box',
    iconBold: 'ph:atom-bold',
  },
  {
    name: 'Match History',
    link: '/summoner/match-history',
    icon: 'ph:clock-counter-clockwise',
    tftIcon: 'i-time-icon',
    iconBold: 'ph:clock-counter-clockwise-bold',
  },
  {
    name: 'Favorites',
    link: '/summoner/favorites',
    icon: 'ph:heart-straight',
    iconSolid: 'teenyicons:heart-solid',
    iconBold: 'ph:heart-straight-bold',
  },
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
      name: 'items',
      icon: 'mdi:bow-arrow',
    },
    {

      link: `/pocket/${pocket.key}/runes`,
      name: 'runes',
      icon: 'i-rune-icon',
    },
    {

      link: `/pocket/${pocket.key}/complete`,
      name: 'complete',
      icon: 'stash:infinity-solid',
    },
  ]

  return pocketPages
}

export const itemDataLinks = [
  {
    name: 'Items',
    link: '/items',
    text: 'Browse a visual grid and read item data.',
  },
  {
    name: 'Item Stats',
    link: '/item-stats',
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
    icon: 'i-no-champ',
    class: 'size-7.5 opacity-70 -mt-1.5 -ml-1.75',
  },

  {
    name: 'Runes',
    link: '/runes',
    icon: 'i-rune-icon',
    class: 'size-6 -mt-1 -ml-1',
  },
  {
    name: 'Spells',
    link: '/spells',
    icon: 'i-attach',
    class: 'size-5 -mt-1 -ml-1 opacity-70',
  },
  {
    name: 'Summoners',
    link: '/summoners',
    icon: 'i-summoner-tft',
    class: 'size-5.5 opacity-80 -mt-0.5 -ml-1',
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
      name: 'All',
      key: 'all',
      link: '/pockets',
      pockets: ps.pockets,
      icon: 'ph:folder',
      iconSolid: 'teenyicons:folders-solid',
      iconBold: 'ph:folder-bold',
    },
    {
      name: 'Trash',
      link: '/pockets/trash',
      pockets: ps.trashFolder,
      key: 'trash',
      icon: 'ph:trash',
      iconSolid: 'teenyicons:bin-solid',
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
    type: 'i',
  },
  {
    name: 'Github',
    url: 'https://github.com/clemony/lolpocket',
    type: 'ex',
  },
  {
    name: 'contact@lolpocket.win',
    url: '',
    type: 'ex',
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/Jzuu7bYTZY',
    type: 'ex',
  },
]
