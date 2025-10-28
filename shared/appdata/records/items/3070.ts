<<<<<<< HEAD
const item: Item =  {
  "name": "Tear of the Goddess",
  "id": 3070,
  "rank": "Starter",
  "buildsInto": [
    {
      "id": 3003,
      "name": "Archangel's Staff",
      "gold": 2900
    },
    {
      "id": 3004,
      "name": "Manamune",
      "gold": 2900
    },
    {
      "id": 3119,
      "name": "Winter's Approach",
      "gold": 2400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3070_all_t1_tearofthegoddess.png",
  "simpleDescription": "Increases maximum Mana as Mana is spent",
  "passives": [
    {
      "name": "Manaflow",
      "effects": "Grants a charge every 8 seconds, up to 4 charges. Affecting an enemy or ally with an ability consumes a charge to grant 3 <b>bonus</b> mana, increased to 6 mana if they are a champion, up to <b>maximum</b> of 360 <b>bonus</b> mana.",
      "unique": true
    },
    {
      "name": "Helping Hand",
      "effects": "Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions.",
      "unique": true
    }
  ],
  "stats": {
    "mana": 240
  },
  "shop": {
    "prices": {
      "total": 400,
      "combined": 400,
      "sell": 160
    },
    "tags": [
      "MARKSMAN",
      "MAGE"
    ]
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
  id: 3070,
  name: 'Tear of the Goddess',
  buildsInto: [
    {
      id: 3003,
      name: 'Archangel\'s Staff',
      gold: 2900,
    },
    {
      id: 3004,
      name: 'Manamune',
      gold: 2900,
    },
    {
      id: 3119,
      name: 'Winter\'s Approach',
      gold: 2400,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3070_all_t1_tearofthegoddess.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Manaflow',
      effects:
        'Grants a charge every 8 seconds, up to 4 charges. Affecting an enemy or ally with an ability consumes a charge to grant 3 <b>bonus</b> mana, increased to 6 mana if they are a champion, up to <b>maximum</b> of 360 <b>bonus</b> mana.',
      unique: true,
    },
    {
      name: 'Helping Hand',
      effects:
        'Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions.',
      unique: true,
    },
  ],
  rank: 'Starter',
  removed: false,
  shop: {
    prices: {
      combined: 400,
      sell: 160,
      total: 400,
    },
    tags: ['MARKSMAN', 'MAGE'],
  },
  simpleDescription: 'Increases maximum Mana as Mana is spent',
  specialRecipe: 0,
  stats: {
    mana: 240,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
