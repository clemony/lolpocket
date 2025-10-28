<<<<<<< HEAD
const item: Item =  {
  "name": "Crown of the Shattered Queen",
  "id": 444644,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4644_crown.png",
  "passives": [
    {
      "name": "Safeguard",
      "effects": "Become <i>Safeguarded</i> to reduce incoming champion damage by 40%, lingering for 3 seconds after taking damage from a champion (30 second cooldown, timer restarts upon taking damage from champions).",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 85,
    "health": 300,
    "mana": 600,
    "abilityHaste": 25
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    },
    "tags": [
      "MAGE"
    ]
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 444644,
  name: 'Crown of the Shattered Queen',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4644_crown.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Safeguard',
      effects:
        'Become <i>Safeguarded</i> to reduce incoming champion damage by 40%, lingering for 3 seconds after taking damage from a champion (30 second cooldown, timer restarts upon taking damage from champions).',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 25,
    abilityPower: 85,
    health: 300,
    mana: 600,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
