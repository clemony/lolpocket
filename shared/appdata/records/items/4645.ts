<<<<<<< HEAD
const item: Item =  {
  "name": "Shadowflame",
  "id": 4645,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3145,
      "name": "Hextech Alternator",
      "gold": 1100
    },
    {
      "id": 1058,
      "name": "Needlessly Large Rod",
      "gold": 1200
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4645_shadowflame.png",
  "passives": [
    {
      "name": "Cinderbloom",
      "effects": "Your magic damage and true damage damage will <img src=\"/img/icons/critical-strike.webp\" class=\"tip-icon\" />critically strike for 120% damage against enemies below 40% <b>maximum</b> health.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 110,
    "flatMagicPenetration": 15
  },
  "shop": {
    "prices": {
      "total": 3200,
      "combined": 900,
      "sell": 1280
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
  id: 4645,
  name: 'Shadowflame',
  buildsFrom: [
    {
      id: 3145,
      name: 'Hextech Alternator',
      gold: 1100,
    },
    {
      id: 1058,
      name: 'Needlessly Large Rod',
      gold: 1200,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4645_shadowflame.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Cinderbloom',
      effects:
        'Your magic damage and true damage damage will <img src="/img/icons/critical-strike.webp" class="tip-icon" />critically strike for 120% damage against enemies below 40% <b>maximum</b> health.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 900,
      sell: 1280,
      total: 3200,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 0,
  stats: {
    abilityPower: 110,
    flatMagicPenetration: 15,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
