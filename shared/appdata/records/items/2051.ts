<<<<<<< HEAD
const item: Item =  {
  "name": "Guardian's Horn",
  "id": 2051,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2051_aram_t1_guardianshorn.png",
  "simpleDescription": "Good starting item for tanks",
  "nicknames": [
    "Golden Arm of Kobe",
    "Golden Bicep of Kobe",
    "Horn",
    "Horn of the ManWolf",
    "ManWolf"
  ],
  "passives": [
    {
      "name": "Undaunted",
      "effects": "Reduces all sources of incoming champion damage by 15 <i>(3.75 against damage over time abilities)</i>.",
      "unique": true
    }
  ],
  "stats": {
    "health": 150,
    "healthRegen": 20
  },
  "shop": {
    "prices": {
      "total": 950,
      "combined": 950,
      "sell": 380
    },
    "tags": [
      "FIGHTER",
      "TANK",
      "SUPPORT"
    ]
  },
  "maps": [
    12,
    35
  ]
}
export default item
=======
const item: Item = {
  id: 2051,
  name: 'Guardian\'s Horn',
  nicknames: [
    'Golden Arm of Kobe',
    'Golden Bicep of Kobe',
    'Horn',
    'Horn of the ManWolf',
    'ManWolf',
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2051_aram_t1_guardianshorn.png',
  maps: [12, 35],
  noEffects: false,
  passives: [
    {
      name: 'Undaunted',
      effects:
        'Reduces all sources of incoming champion damage by 15 <i>(3.75 against damage over time abilities)</i>.',
      unique: true,
    },
  ],
  rank: 'Starter',
  removed: false,
  shop: {
    prices: {
      combined: 950,
      sell: 380,
      total: 950,
    },
    tags: ['FIGHTER', 'TANK', 'SUPPORT'],
  },
  simpleDescription: 'Good starting item for tanks',
  specialRecipe: 0,
  stats: {
    health: 150,
    healthRegen: 20,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
