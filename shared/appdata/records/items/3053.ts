<<<<<<< HEAD
const item: Item =  {
  "name": "Sterak's Gage",
  "id": 3053,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    },
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    },
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3053_steraks_gage.png",
  "simpleDescription": "Shields against large bursts of damage",
  "nicknames": [
    "juggernaut",
    "primal",
    "shield",
    "sterak's cage"
  ],
  "passives": [
    {
      "name": "The Claws that Catch",
      "effects": "Gain <b>bonus</b> attack damage equal to 45% <b>base</b> AD.",
      "unique": true
    },
    {
      "name": "Lifeline",
      "cooldown": "90",
      "effects": "If you would take damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs damage equal to 60% of <b>bonus</b> health which decays over 4.5 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "health": 400,
    "tenacity": 20
  },
  "shop": {
    "prices": {
      "total": 3200,
      "combined": 775,
      "sell": 1280
    },
    "tags": [
      "FIGHTER",
      "ATTACK_DAMAGE"
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
  id: 3053,
  name: 'Sterak\'s Gage',
  nicknames: ['juggernaut', 'primal', 'shield', 'sterak\'s cage'],
  buildsFrom: [
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150,
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3053_steraks_gage.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'The Claws that Catch',
      effects: 'Gain <b>bonus</b> attack damage equal to 45% <b>base</b> AD.',
      unique: true,
    },
    {
      name: 'Lifeline',
      cooldown: '90',
      effects:
        'If you would take damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs damage equal to 60% of <b>bonus</b> health which decays over 4.5 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 775,
      sell: 1280,
      total: 3200,
    },
    tags: ['FIGHTER', 'ATTACK_DAMAGE'],
  },
  simpleDescription: 'Shields against large bursts of damage',
  specialRecipe: 0,
  stats: {
    health: 400,
    tenacity: 20,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
