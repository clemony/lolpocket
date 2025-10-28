<<<<<<< HEAD
const item: Item =  {
  "name": "Refillable Potion",
  "id": 2031,
  "rank": "Consumable",
  "buildsInto": [
    {
      "id": 2033,
      "name": "Corrupting Potion",
      "gold": 500
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2031_class_t1_refillablepotion.png",
  "simpleDescription": "Restores Health over time. Refills at shop.",
  "nicknames": [
    "Green Potion"
  ],
  "passives": [
    {
      "effects": "Holds charges that refill upon visiting the shop.",
      "unique": true
    }
  ],
  "stats": {},
  "shop": {
    "prices": {
      "total": 150,
      "combined": 150,
      "sell": 60
    },
    "tags": [
      "HEALTH_AND_REG"
    ]
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item
=======
const item: Item = {
  id: 2031,
  name: 'Refillable Potion',
  nicknames: ['Green Potion'],
  buildsInto: [
    {
      id: 2033,
      name: 'Corrupting Potion',
      gold: 500,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2031_class_t1_refillablepotion.png',
  maps: [11, 12, 21],
  noEffects: false,
  passives: [
    {
      effects: 'Holds charges that refill upon visiting the shop.',
      unique: true,
    },
  ],
  rank: 'Consumable',
  removed: false,
  shop: {
    prices: {
      combined: 150,
      sell: 60,
      total: 150,
    },
    tags: ['HEALTH_AND_REG'],
  },
  simpleDescription: 'Restores Health over time. Refills at shop.',
  specialRecipe: 0,
  stats: {},
}
export default item
>>>>>>> refs/remotes/origin/main
