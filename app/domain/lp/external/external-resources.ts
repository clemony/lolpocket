export const externalLinks = [
  {
    icon: 'carbon:group-resource',
    label: 'Resources',
    open: false,
    submenu: [
      {
        items: [
          {
            address: 'https://www.leagueoflegends.com/en-us/news/dev/',
            icon: '/img/logos/fist.webp',
            label: 'Dev Updates',
          },
          {
            address: 'https://www.leagueoflegends.com/en-us/news/tags/patch-notes/',
            icon: '/img/logos/league2.webp',
            label: 'Patch Notes',
          },
          {
            address: 'https://wiki.leagueoflegends.com/en-us/',
            icon: '/img/logos/wiki.webp',
            label: 'Wiki',
          },
        ],
        label: 'Official',
        open: true,
      },
      {
        items: [
          {
            address: 'https://lolalytics.com',
            icon: '/img/logos/lolalytics.webp',
            label: 'Lolalytics',
          },
          {
            address: 'https://www.op.gg',
            icon: '/img/logos/opgg2.webp',
            label: 'op.gg',
          },
          {
            address: 'https://u.gg',
            icon: '/img/logos/ugg2.webp',
            label: 'u.gg',
          },
          {
            address: 'https://www.leagueofgraphs.com',
            icon: '/img/logos/LoG.webp',
            label: 'League of Graphs',
          },
          {
            address: 'https://leagueofitems.com',
            icon: '/img/logos/LoI.webp',
            label: 'League of Items',
          },
        ],
        label: 'Statistics',
        open: true,
      },
    ],
  },
]
