<<<<<<< HEAD
const item: Item =  {
  "name": "Plated Steelcaps",
  "id": 3047,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    },
    {
      "id": 1029,
      "name": "Cloth Armor",
      "gold": 300
    }
  ],
  "buildsInto": [
    {
      "id": 3174,
      "name": "Armored Advance",
      "gold": 1700
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3047_class_t2_ninjatabi.png",
  "simpleDescription": "Enhances Move Speed and reduces incoming basic attack damage",
  "nicknames": [
    "boots",
    "ninja tabi"
  ],
  "passives": [
    {
      "name": "Plating",
      "effects": "Reduces incoming damage from all basic attacks by 10% (<i>excluding turret attacks</i>).",
      "unique": true
    }
  ],
  "stats": {
    "armor": 25,
    "flatMovespeed": 45
  },
  "shop": {
    "prices": {
      "total": 1200,
      "combined": 600,
      "sell": 480
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
  id: 3047,
  name: 'Plated Steelcaps',
  nicknames: ['boots', 'ninja tabi'],
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300,
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300,
    },
  ],
  buildsInto: [
    {
      id: 3174,
      name: 'Armored Advance',
      gold: 1700,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3047_class_t2_ninjatabi.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Plating',
      effects:
        'Reduces incoming damage from all basic attacks by 10% (<i>excluding turret attacks</i>).',
      unique: true,
    },
  ],
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 600,
      sell: 480,
      total: 1200,
    },
  },
  simpleDescription:
    'Enhances Move Speed and reduces incoming basic attack damage',
  specialRecipe: 0,
  stats: {
    armor: 25,
    flatMovespeed: 45,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
