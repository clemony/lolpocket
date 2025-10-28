<<<<<<< HEAD
const item: Item =  {
  "name": "Sorcerer's Shoes",
  "id": 3020,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    }
  ],
  "buildsInto": [
    {
      "id": 3175,
      "name": "Spellslinger's Shoes",
      "gold": 1600
    }
  ],
  "specialRecipe": 0,
  "noEffects": true,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3020_class_t2_sorcerersshoes.png",
  "simpleDescription": "Enhances Move Speed and magic damage",
  "nicknames": [
    "boots",
    "sorcs"
  ],
  "stats": {
    "flatMagicPenetration": 12,
    "flatMovespeed": 45
  },
  "shop": {
    "prices": {
      "total": 1100,
      "combined": 800,
      "sell": 440
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
  id: 3020,
  name: 'Sorcerer\'s Shoes',
  nicknames: ['boots', 'sorcs'],
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300,
    },
  ],
  buildsInto: [
    {
      id: 3175,
      name: 'Spellslinger\'s Shoes',
      gold: 1600,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3020_class_t2_sorcerersshoes.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 800,
      sell: 440,
      total: 1100,
    },
  },
  simpleDescription: 'Enhances Move Speed and magic damage',
  specialRecipe: 0,
  stats: {
    flatMagicPenetration: 12,
    flatMovespeed: 45,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
