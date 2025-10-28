<<<<<<< HEAD
const item: Item =  {
  "name": "Guardian's Amulet",
  "id": 2049,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2049_guardiansamulet.png",
  "simpleDescription": "Increases Health and provides Stealth Wards over time",
  "passives": [
    {
      "name": "Recovery",
      "effects": "Restore 10 mana every 5 seconds. Manaless champions restore 3 health instead.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 20,
    "healAndShieldPower": 15,
    "abilityHaste": 20
  },
  "shop": {
    "prices": {
      "total": 500,
      "combined": 500,
      "sell": 200
    },
    "tags": [
      "SUPPORT"
    ]
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 2049,
  name: 'Guardian\'s Amulet',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2049_guardiansamulet.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Recovery',
      effects:
        'Restore 10 mana every 5 seconds. Manaless champions restore 3 health instead.',
      unique: true,
    },
  ],
  rank: 'Starter',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 200,
      total: 500,
    },
    tags: ['SUPPORT'],
  },
  simpleDescription: 'Increases Health and provides Stealth Wards over time',
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 20,
    healAndShieldPower: 15,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
