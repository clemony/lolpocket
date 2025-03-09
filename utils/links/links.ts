export const summonerLinks = [
  {
    name: `board`,
    link: '/summoner',
    icon: 'gala:calendar',
  },
  {
    name: 'Build Analysis',
    link: '/summoner/analysis',
    icon: 'octicon:graph-24',
  },
  {
    name: 'Match History',
    link: '/summoner/match-history',
    icon: 'iconoir:archery-match',
  },
  {
    name: 'Favorites',
    link: '/summoner/favorites',
    icon: 'teenyicons:heart-outline',
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
    icon: '',
    text: 'Browse a visual grid and read item data.',
  },
  {
    name: 'Item Stats',
    link: '/item-stats',
    icon: 'teenyicons:table-outline',
    badge: 'table',
    text: 'An item stat spreadsheet for the data nerds :)',
  },
]

export const gameDataLinks = [
  {
    name: 'Champions',
    link: '/champions',
    icon: '',
  },

  {
    name: 'Runes',
    link: '/runes',
    icon: '',
  },
  {
    name: 'Spells',
    link: '/spells',
    icon: '',
  },
  {
    name: 'Summoners',
    link: '/summoners',
    icon: '',
    text: 'Look up your friends... or your foes.',
  },
]

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
