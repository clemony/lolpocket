<<<<<<< HEAD
const item: Item =  {
  "name": "Stormsurge",
  "id": 4646,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3145,
      "name": "Hextech Alternator",
      "gold": 1100
    },
    {
      "id": 3113,
      "name": "Aether Wisp",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4646_stormsurge.png",
  "passives": [
    {
      "name": "Stormraider",
      "effects": "Dealing damage to an enemy champion equal to 25% of their <b>maximum</b> health within 2.5 seconds inflicts them with <i>Squall</i> (30 second cooldown, starts on <i>Squall's</i> application).",
      "unique": true
    },
    {
      "name": "Squall",
      "effects": "After 2 seconds of having applied <i>Squall</i>, strike the target with lightning, dealing 125 magic damage (+10% AP) magic damage to them. If the target dies before being struck, they emit an electric field instantly that shocks all enemy champions near them, dealing them the same damage.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 90,
    "flatMagicPenetration": 15,
    "percentMovespeed": 6
  },
  "shop": {
    "prices": {
      "total": 2800,
      "combined": 800,
      "sell": 1120
    },
    "tags": [
      "MAGE"
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
  id: 4646,
  name: 'Stormsurge',
  buildsFrom: [
    {
      id: 3145,
      name: 'Hextech Alternator',
      gold: 1100,
    },
    {
      id: 3113,
      name: 'Aether Wisp',
      gold: 900,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4646_stormsurge.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Stormraider',
      effects:
        'Dealing damage to an enemy champion equal to 25% of their <b>maximum</b> health within 2.5 seconds inflicts them with <i>Squall</i> (30 second cooldown, starts on <i>Squall\'s</i> application).',
      unique: true,
    },
    {
      name: 'Squall',
      effects:
        'After 2 seconds of having applied <i>Squall</i>, strike the target with lightning, dealing 125 magic damage (+10% AP) magic damage to them. If the target dies before being struck, they emit an electric field instantly that shocks all enemy champions near them, dealing them the same damage.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 800,
      sell: 1120,
      total: 2800,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 0,
  stats: {
    abilityPower: 90,
    flatMagicPenetration: 15,
    percentMovespeed: 6,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
