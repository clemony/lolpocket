<<<<<<< HEAD
const item: Item =  {
  "name": "Guardian's Blade",
  "id": 3177,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": true,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3177_aram_t1_guardiansblade.png",
  "simpleDescription": "Good starting item for attackers",
  "stats": {
    "attackDamage": 30,
    "health": 150,
    "abilityHaste": 15
  },
  "shop": {
    "prices": {
      "total": 950,
      "combined": 950,
      "sell": 380
    },
    "tags": [
      "FIGHTER",
      "MARKSMAN",
      "ASSASSIN",
      "TANK"
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
  id: 3177,
  name: 'Guardian\'s Blade',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3177_aram_t1_guardiansblade.png',
  maps: [12, 35],
  noEffects: true,
  rank: 'Starter',
  removed: false,
  shop: {
    prices: {
      combined: 950,
      sell: 380,
      total: 950,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ASSASSIN', 'TANK'],
  },
  simpleDescription: 'Good starting item for attackers',
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    attackDamage: 30,
    health: 150,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
