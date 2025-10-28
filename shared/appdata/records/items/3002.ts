<<<<<<< HEAD
const item: Item =  {
  "name": "Trailblazer",
  "id": 3002,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3066,
      "name": "Winged Moonplate",
      "gold": 800
    },
    {
      "id": 1031,
      "name": "Chain Vest",
      "gold": 800
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3002_trailblazer.png",
  "passives": [
    {
      "name": "Lead the Way",
      "effects": "While moving, generate 7 stacks of <i>Momentum</i> every 0.25 seconds, granting up to 20 <b>bonus</b> movement speed at 100 stacks after 3.75 seconds of moving. At <b>maximum</b> stacks, you leave behind a path briefly that grants 15% of your <b>total</b> movement speed as <b>bonus</b> movement speed to allied champions within. Basic attacks consume all stacks. If you are <img src=\"/img/icons/melee.webp\" class=\"tip-icon\" />melee and at <b>maximum</b> stacks, your next basic attack <img src=\"/img/icons/slow.webp\" class=\"tip-icon\" />slows the target by 50% for 1 second.",
      "unique": true
    }
  ],
  "stats": {
    "armor": 40,
    "health": 250,
    "percentMovespeed": 4
  },
  "shop": {
    "prices": {
      "total": 2400,
      "combined": 800,
      "sell": 960
    },
    "tags": [
      "SUPPORT",
      "TANK"
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
  id: 3002,
  name: 'Trailblazer',
  buildsFrom: [
    {
      id: 3066,
      name: 'Winged Moonplate',
      gold: 800,
    },
    {
      id: 1031,
      name: 'Chain Vest',
      gold: 800,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3002_trailblazer.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Lead the Way',
      effects:
        'While moving, generate 7 stacks of <i>Momentum</i> every 0.25 seconds, granting up to 20 <b>bonus</b> movement speed at 100 stacks after 3.75 seconds of moving. At <b>maximum</b> stacks, you leave behind a path briefly that grants 15% of your <b>total</b> movement speed as <b>bonus</b> movement speed to allied champions within. Basic attacks consume all stacks. If you are <img src="/img/icons/melee.webp" class="tip-icon" />melee and at <b>maximum</b> stacks, your next basic attack <img src="/img/icons/slow.webp" class="tip-icon" />slows the target by 50% for 1 second.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 800,
      sell: 960,
      total: 2400,
    },
    tags: ['SUPPORT', 'TANK'],
  },
  specialRecipe: 0,
  stats: {
    armor: 40,
    health: 250,
    percentMovespeed: 4,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
