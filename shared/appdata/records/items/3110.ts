<<<<<<< HEAD
const item: Item =  {
  "name": "Frozen Heart",
  "id": 3110,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3082,
      "name": "Warden's Mail",
      "gold": 1000
    },
    {
      "id": 3024,
      "name": "Glacial Buckler",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3110_tank_t3_frozenheart.png",
  "simpleDescription": "Massively increases Armor and slows enemy basic attacks",
  "nicknames": [
    "fh"
  ],
  "passives": [
    {
      "name": "Winter's Caress",
      "effects": "<img src=\"/img/icons/cripple.webp\" class=\"tip-icon\" />Cripples the attack speed of enemy champions within 700 units by 20%.",
      "unique": true
    }
  ],
  "stats": {
    "armor": 75,
    "mana": 400,
    "abilityHaste": 20
  },
  "shop": {
    "prices": {
      "total": 2500,
      "combined": 600,
      "sell": 1000
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
  id: 3110,
  name: 'Frozen Heart',
  nicknames: ['fh'],
  buildsFrom: [
    {
      id: 3082,
      name: 'Warden\'s Mail',
      gold: 1000,
    },
    {
      id: 3024,
      name: 'Glacial Buckler',
      gold: 900,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3110_tank_t3_frozenheart.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Winter\'s Caress',
      effects:
        '<img src="/img/icons/cripple.webp" class="tip-icon" />Cripples the attack speed of enemy champions within 700 units by 20%.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 600,
      sell: 1000,
      total: 2500,
    },
    tags: ['TANK', 'SUPPORT'],
  },
  simpleDescription: 'Massively increases Armor and slows enemy basic attacks',
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    armor: 75,
    mana: 400,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
