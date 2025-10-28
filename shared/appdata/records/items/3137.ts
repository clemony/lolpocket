<<<<<<< HEAD
const item: Item =  {
  "name": "Cryptbloom",
  "id": 3137,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 4630,
      "name": "Blighting Jewel",
      "gold": 1100
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
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
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3137_cryptbloom.png",
  "simpleDescription": "Activate to remove all debuffs and grant massive Move Speed",
  "passives": [
    {
      "name": "Life From Death",
      "cooldown": "60",
      "effects": "Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against an enemy champion while alive and within 3 seconds of damaging them summons a nova that radiates from the location of their death over 1.75 seconds, <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />healing you and allied champions hit for 100 (+20% AP).",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 75,
    "percentMagicPenetration": 30,
    "abilityHaste": 20
  },
  "shop": {
    "prices": {
      "total": 3000,
      "combined": 200,
      "sell": 1200
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
  id: 3137,
  name: 'Cryptbloom',
  buildsFrom: [
    {
      id: 4630,
      name: 'Blighting Jewel',
      gold: 1100,
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3137_cryptbloom.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Life From Death',
      cooldown: '60',
      effects:
        'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion while alive and within 3 seconds of damaging them summons a nova that radiates from the location of their death over 1.75 seconds, <img src="/img/icons/heal.webp" class="tip-icon" />healing you and allied champions hit for 100 (+20% AP).',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 200,
      sell: 1200,
      total: 3000,
    },
    tags: ['MAGE'],
  },
  simpleDescription:
    'Activate to remove all debuffs and grant massive Move Speed',
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 75,
    percentMagicPenetration: 30,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
