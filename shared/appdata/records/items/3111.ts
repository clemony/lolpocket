<<<<<<< HEAD
const item: Item =  {
  "name": "Mercury's Treads",
  "id": 3111,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    },
    {
      "id": 1033,
      "name": "Null-Magic Mantle",
      "gold": 400
    }
  ],
  "buildsInto": [
    {
      "id": 3173,
      "name": "Chainlaced Crushers",
      "gold": 1750
    }
  ],
  "specialRecipe": 0,
  "noEffects": true,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3111_class_t2_mercurystreads.png",
  "simpleDescription": "Increases Move Speed and reduces duration of disabling effects",
  "nicknames": [
    "boots",
    "mercs"
  ],
  "stats": {
    "magicResistance": 20,
    "flatMovespeed": 45,
    "tenacity": 30
  },
  "shop": {
    "prices": {
      "total": 1250,
      "combined": 550,
      "sell": 500
    }
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item
=======
const item: Item = {
  id: 3111,
  name: 'Mercury\'s Treads',
  nicknames: ['boots', 'mercs'],
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300,
    },
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400,
    },
  ],
  buildsInto: [
    {
      id: 3173,
      name: 'Chainlaced Crushers',
      gold: 1750,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3111_class_t2_mercurystreads.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 550,
      sell: 500,
      total: 1250,
    },
  },
  simpleDescription:
    'Increases Move Speed and reduces duration of disabling effects',
  specialRecipe: 0,
  stats: {
    flatMovespeed: 45,
    magicResistance: 20,
    tenacity: 30,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
