export const links: any = {
  pocketLinks: [
    {
      name: 'table',
      url: '/pocket/PocketTables',
      icon: '',
    },
    {
      name: 'cards',
      url: '/pocket/PocketCards',
      icon: '',
    },
    {
      name: 'calculator',
      url: '/Calculator',
      icon: '',
    },
  ],

  links: [
    {
      name: 'Database',
      icon: 'qlementine-icons:drive-16',
      open: true,
      submenu: [
        {
          name: 'Champions',
          url: '/Champions',
          icon: '',
        },
        {
          name: 'Items',
          url: '/Items',
          icon: '',
        },
        {
          name: 'Runes',
          url: '/Runes',
          icon: '',
        },
        {
          name: 'Spells',
          url: '/Spells',
          icon: '',
        },
      ],
    },
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
  ],

  settingLinks: [
    {
      name: 'General',
      url: 'general',
      icon: '',
    },
    {
      name: 'appearance',
      url: 'appearance',
      icon: '',
    },
    {
      name: 'account',
      url: 'account',
      icon: '',
    },
    {
      name: 'hotkeys',
      url: 'hotkeys',
      icon: '',
    },
  ],

  infoLinks: [
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
  ],

  browseLinks: [
    {
      name: 'Database',
      icon: 'qlementine-icons:drive-16',
      open: true,
      links: [
        {
          name: 'Champions',
          link: '/Champions',
          icon: '',
        },
        {
          name: 'Items',
          link: '/Items',
          icon: '',
        },
        {
          name: 'Runes',
          link: '/Runes',
          icon: '',
        },
        {
          name: 'Spells',
          link: '/Spells',
          icon: '',
        },
      ],
    },
  ],
};
