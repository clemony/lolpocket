<<<<<<< HEAD
const item: Item =  {
  "name": "Wit's End",
  "id": 3091,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1043,
      "name": "Recurve Bow",
      "gold": 700
    },
    {
      "id": 1057,
      "name": "Negatron Cloak",
      "gold": 850
    },
    {
      "id": 1043,
      "name": "Recurve Bow",
      "gold": 700
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3091_fighter_t3_witsend.png",
  "simpleDescription": "Resist magic damage and claw your way back to life.",
  "passives": [
    {
      "name": "Fray",
      "effects": "Basic attacks deal 45 <b>bonus</b> magic damage on-hit.",
      "unique": true
    }
  ],
  "stats": {
    "attackSpeed": 50,
    "magicResistance": 45,
    "tenacity": 20
  },
  "shop": {
    "prices": {
      "total": 2800,
      "combined": 550,
      "sell": 1120
    },
    "tags": [
      "FIGHTER",
      "MARKSMAN",
      "ONHIT_EFFECTS"
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
  id: 3091,
  name: 'Wit\'s End',
  buildsFrom: [
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700,
    },
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850,
    },
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3091_fighter_t3_witsend.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Fray',
      effects: 'Basic attacks deal 45 <b>bonus</b> magic damage on-hit.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 550,
      sell: 1120,
      total: 2800,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ONHIT_EFFECTS'],
  },
  simpleDescription: 'Resist magic damage and claw your way back to life.',
  specialRecipe: 0,
  stats: {
    attackSpeed: 50,
    magicResistance: 45,
    tenacity: 20,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
