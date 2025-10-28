<<<<<<< HEAD
const item: Item =  {
  "name": "Abyssal Mask",
  "id": 8020,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 1057,
      "name": "Negatron Cloak",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/8020_tank_t3_abyssalmask.png",
  "passives": [
    {
      "name": "Unmake",
      "effects": "Enemy champions within 700 units of you become cursed, causing them to receive 12% increased magic damage from all sources.",
      "unique": true
    }
  ],
  "stats": {
    "health": 350,
    "magicResistance": 45,
    "abilityHaste": 15
  },
  "shop": {
    "prices": {
      "total": 2650,
      "combined": 1000,
      "sell": 1060
    },
    "tags": [
      "TANK",
      "SUPPORT"
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
  id: 8020,
  name: 'Abyssal Mask',
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800,
    },
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/8020_tank_t3_abyssalmask.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Unmake',
      effects:
        'Enemy champions within 700 units of you become cursed, causing them to receive 12% increased magic damage from all sources.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 1060,
      total: 2650,
    },
    tags: ['TANK', 'SUPPORT'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    health: 350,
    magicResistance: 45,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
