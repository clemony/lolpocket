<<<<<<< HEAD
const item: Item =  {
  "name": "Cosmic Drive",
  "id": 4629,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 3113,
      "name": "Aether Wisp",
      "gold": 900
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4629_mage_t3_cosmicdrive.png",
  "simpleDescription": "Massive amounts of Cooldown Reduction",
  "nicknames": [
    "hat"
  ],
  "passives": [
    {
      "name": "Spelldance",
      "effects": "Dealing magic damage or true damage damage to an enemy champion grants you 20 <b>bonus</b> movement speed ms for 4 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 70,
    "health": 350,
    "percentMovespeed": 4,
    "abilityHaste": 25
  },
  "shop": {
    "prices": {
      "total": 3000,
      "combined": 450,
      "sell": 1200
    },
    "tags": [
      "MAGE",
      "MOVEMENT"
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
  id: 4629,
  name: 'Cosmic Drive',
  nicknames: ['hat'],
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800,
    },
    {
      id: 3113,
      name: 'Aether Wisp',
      gold: 900,
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4629_mage_t3_cosmicdrive.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Spelldance',
      effects:
        'Dealing magic damage or true damage damage to an enemy champion grants you 20 <b>bonus</b> movement speed ms for 4 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 1200,
      total: 3000,
    },
    tags: ['MAGE', 'MOVEMENT'],
  },
  simpleDescription: 'Massive amounts of Cooldown Reduction',
  specialRecipe: 0,
  stats: {
    abilityHaste: 25,
    abilityPower: 70,
    health: 350,
    percentMovespeed: 4,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
