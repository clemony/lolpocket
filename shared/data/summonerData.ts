export const summoner = {
  ranks: {
    soloDuo: {
      name: 'Solo/Duo',
      rank: 'iron',
      tier: 4,
      games: 200,
      win: 100,
      loss: 100,
    },

    flex: {
      name: 'Flex',
      rank: 'challenger',
      tier: 4,
      games: 200,
      win: 150,
      loss: 0,
    },
  },
  champions: [
    {
      queue: `Season ${new Date().getUTCFullYear()}`,
      champions: [
        {
          champion: 'Yuumi',
          games: 20,
          wins: 16,
        },
        {
          champion: 'Rengar',
          games: 20,
          wins: 16,
        },
        {
          champion: 'Nami',
          games: 20,
          wins: 10,
        },
        {
          champion: 'Fizz',
          games: 25,
          wins: 13,
        },
        {
          champion: 'Yasuo',
          games: 20,
          wins: 1,
        },
      ],
    },
    {
      queue: 'Solo/Duo',
      champions: [
        {
          champion: 'Sona',
          games: 20,
          wins: 16,
        },
        {
          champion: 'Seraphine',
          games: 20,
          wins: 16,
        },
        {
          champion: 'Janna',
          games: 20,
          wins: 16,
        },
        {
          champion: 'Nami',
          games: 100,
          wins: 69,
        },
        {
          champion: 'Soraka',
          games: 20,
          wins: 16,
        },
      ],
    },
    {
      queue: 'Flex',
      champions: [
        {
          champion: 'Sona',
          games: 20,
          wins: 16,
        },
        {
          champion: 'Seraphine',
          games: 20,
          wins: 16,
        },
        {
          champion: 'Lulu',
          games: 20,
          wins: 16,
        },
        {
          champion: 'Nami',
          games: 20,
          wins: 16,
        },
        {
          champion: 'Soraka',
          games: 20,
          wins: 16,
        },
      ],
    },
  ],
  role: {
    support: {
      percent: 80,
    },
    bottom: {
      percent: 10,
    },
    mid: {
      percent: 10,
    },
    jungle: {
      percent: 0,
    },
    top: {
      percent: 0,
    },
  },
  recentChampions: [
    {
      name: 'Seraphine',
      games: 6,
      wins: 4,
    },
    { name: 'Sona', games: 4, wins: 3 },
    { name: 'Soraka', games: 3, wins: 2 },
  ],

}
