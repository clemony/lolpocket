export const summoner = {
  name: 'clem',
  tag: 'cats',
  region: 'americas',
  level: 143,
  icon: '/img/summoner-icons/space-yuumi.jpg',
  border: 'theme-21-border',

  peakRank: {
    peak: 'diamond',
    season: '8',
  },

  ranks: {
    soloDuo: {
      rank: 'diamond',
      tier: 4,
      games: 200,
      win: 100,
      loss: 100,
    },

    flex: {
      rank: 'platinum',
      tier: 4,
      games: 200,
      win: 150,
      loss: 0,
    },
  },
  champions: [
    {
      queue: 'all',
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
      queue: 'soloDuo',
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
      queue: 'flex',
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
  recentMatches: [
    // Bottom

    {
      name: 'clem',
      champion: 'sona',
      role: 'support',
      tag: 'cats',
      rank: 'platinum',
      kda: '1/3/26',
      kdaRatio: 9,
    },
    {
      name: 'vortex',
      champion: 'jinx',
      role: 'bottom',
      tag: 'fire',
      rank: 'gold',
      kda: '12/4/9',
      kdaRatio: 5.25, // (12+9)/4
    },
    {
      name: 'spookyblitz',
      champion: 'blitzcrank',
      role: 'support',
      tag: 'phant',
      rank: 'diamond',
      kda: '2/0/12',
      kdaRatio: 14, // (2+12)/1 (deaths treated as 1)
    },
    {
      name: 'jungleboss',
      champion: 'master yi',
      role: 'jungle',
      tag: 'beast',
      rank: 'silver',
      kda: '10/6/5',
      kdaRatio: 2.5, // (10+5)/6
    },
    {
      name: 'leafrunner',
      champion: 'ivern',
      role: 'jungle',
      tag: 'natre',
      rank: 'gold',
      kda: '3/3/12',
      kdaRatio: 5, // (3+12)/3
    },
    {
      name: 'dragonsoul',
      champion: 'aurelion sol',
      role: 'mid',
      tag: 'galxy',
      rank: 'platinum',
      kda: '8/4/7',
      kdaRatio: 3.75, // (8+7)/4
    },
    {
      name: 'shadowburst',
      champion: 'leblanc',
      role: 'mid',
      tag: 'shdow',
      rank: 'diamond',
      kda: '12/7/4',
      kdaRatio: 2.29, // (12+4)/7
    },
    {
      name: 'stonewall',
      champion: 'malphite',
      role: 'top',
      tag: 'earth',
      rank: 'silver',
      kda: '6/5/9',
      kdaRatio: 3, // (6+9)/5
    },
    {
      name: 'bladesurge',
      champion: 'fiora',
      role: 'top',
      tag: 'dulst',
      rank: 'gold',
      kda: '10/8/4',
      kdaRatio: 1.75, // (10+4)/8
    },
  ],
}
