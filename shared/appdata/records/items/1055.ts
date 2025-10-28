<<<<<<< HEAD
const item: Item =  {
  "name": "Doran's Blade",
  "id": 1055,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": true,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1055_marksman_t1_doransblade.png",
  "simpleDescription": "Good starting item for attackers",
  "nicknames": [
    "dblade"
  ],
  "stats": {
    "attackDamage": 10,
    "health": 80,
    "lifesteal": 3
  },
  "shop": {
    "prices": {
      "total": 450,
      "combined": 450,
      "sell": 180
    },
    "tags": [
      "FIGHTER",
      "MARKSMAN",
      "ASSASSIN",
      "LIFESTEAL_VAMP"
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
  id: 1055,
  name: 'Doran\'s Blade',
  nicknames: ['dblade'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1055_marksman_t1_doransblade.png',
  maps: [11, 12, 21],
  noEffects: true,
  rank: 'Starter',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 180,
      total: 450,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ASSASSIN', 'LIFESTEAL_VAMP'],
  },
  simpleDescription: 'Good starting item for attackers',
  specialRecipe: 0,
  stats: {
    attackDamage: 10,
    health: 80,
    lifesteal: 3,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
