<<<<<<< HEAD
const item: Item =  {
  "name": "Phantom Dancer",
  "id": 3046,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1042,
      "name": "Dagger",
      "gold": 250
    },
    {
      "id": 3086,
      "name": "Zeal",
      "gold": 1200
    },
    {
      "id": 1042,
      "name": "Dagger",
      "gold": 250
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3046_marksman_t3_phantomdancer.png",
  "simpleDescription": "Move faster while attacking enemies and gain a shield when on low health.",
  "nicknames": [
    "pd"
  ],
  "passives": [
    {
      "name": "Spectral Waltz",
      "effects": "Become permanently <img src=\"/img/icons/ghosted.webp\" class=\"tip-icon\" />ghosted.",
      "unique": true
    }
  ],
  "stats": {
    "attackSpeed": 65,
    "criticalStrikeChance": 25,
    "percentMovespeed": 10
  },
  "shop": {
    "prices": {
      "total": 2650,
      "combined": 950,
      "sell": 1060
    },
    "tags": [
      "MARKSMAN",
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
  id: 3046,
  name: 'Phantom Dancer',
  nicknames: ['pd'],
  buildsFrom: [
    {
      id: 1042,
      name: 'Dagger',
      gold: 250,
    },
    {
      id: 3086,
      name: 'Zeal',
      gold: 1200,
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3046_marksman_t3_phantomdancer.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Spectral Waltz',
      effects:
        'Become permanently <img src="/img/icons/ghosted.webp" class="tip-icon" />ghosted.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 950,
      sell: 1060,
      total: 2650,
    },
    tags: ['MARKSMAN', 'MOVEMENT'],
  },
  simpleDescription:
    'Move faster while attacking enemies and gain a shield when on low health.',
  specialRecipe: 0,
  stats: {
    attackSpeed: 65,
    criticalStrikeChance: 25,
    percentMovespeed: 10,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
