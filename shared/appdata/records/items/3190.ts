<<<<<<< HEAD
const item: Item =  {
  "name": "Locket of the Iron Solari",
  "id": 3190,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 1029,
      "name": "Cloth Armor",
      "gold": 300
    },
    {
      "id": 1033,
      "name": "Null-Magic Mantle",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3190_enchanter_t4_locketofironsolari.png",
  "simpleDescription": "Activate to shield nearby allies from damage",
  "active": [
    {
      "name": "Devotion",
      "effects": "Grants you and allied champions within 850 units a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield for 200 – 360 (based on target's level) that decays over 2.5 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "armor": 25,
    "health": 200,
    "magicResistance": 25,
    "abilityHaste": 10
  },
  "shop": {
    "prices": {
      "total": 2200,
      "combined": 700,
      "sell": 880
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
  id: 3190,
  name: 'Locket of the Iron Solari',
  active: [
    {
      name: 'Devotion',
      effects:
        'Grants you and allied champions within 850 units a <img src="/img/icons/shield.webp" class="tip-icon" />shield for 200 – 360 (based on target\'s level) that decays over 2.5 seconds.',
      unique: true,
    },
  ],
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800,
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300,
    },
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3190_enchanter_t4_locketofironsolari.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 700,
      sell: 880,
      total: 2200,
    },
    tags: ['TANK', 'SUPPORT'],
  },
  simpleDescription: 'Activate to shield nearby allies from damage',
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    armor: 25,
    health: 200,
    magicResistance: 25,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
