<<<<<<< HEAD
const item: Item =  {
  "name": "Force of Nature",
  "id": 4401,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1057,
      "name": "Negatron Cloak",
      "gold": 850
    },
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    },
    {
      "id": 3066,
      "name": "Winged Moonplate",
      "gold": 800
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4401_tank_t3_forceofnature.png",
  "simpleDescription": "Move Speed, Magic Resist, and max Health Regeneration",
  "nicknames": [
    "fon"
  ],
  "passives": [
    {
      "name": "Steadfast",
      "effects": "Taking magic damage from champions grants a stack of <i>Steadfast</i> for 7 seconds, stacking up to 8 times with the duration refreshing on subsequent magic damage from them and whenever dealing damage to them. Becoming <img src=\"/img/icons/immobilize.webp\" class=\"tip-icon\" />immobilized by an enemy champion grants 2 stacks and also refreshes the duration. Each incoming basic attack, ability per cast instance, or item effect can only grant 1 stack of <i>Steadfast</i> from their damage every 1 second. At <b>maximum</b> stacks, gain 70 <b>bonus</b> magic resistance and 6% <b>bonus</b> movement speed.",
      "unique": true
    }
  ],
  "stats": {
    "health": 400,
    "magicResistance": 55,
    "percentMovespeed": 4
  },
  "shop": {
    "prices": {
      "total": 2800,
      "combined": 750,
      "sell": 1120
    },
    "tags": [
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
  id: 4401,
  name: 'Force of Nature',
  nicknames: ['fon'],
  buildsFrom: [
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850,
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400,
    },
    {
      id: 3066,
      name: 'Winged Moonplate',
      gold: 800,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4401_tank_t3_forceofnature.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Steadfast',
      effects:
        'Taking magic damage from champions grants a stack of <i>Steadfast</i> for 7 seconds, stacking up to 8 times with the duration refreshing on subsequent magic damage from them and whenever dealing damage to them. Becoming <img src="/img/icons/immobilize.webp" class="tip-icon" />immobilized by an enemy champion grants 2 stacks and also refreshes the duration. Each incoming basic attack, ability per cast instance, or item effect can only grant 1 stack of <i>Steadfast</i> from their damage every 1 second. At <b>maximum</b> stacks, gain 70 <b>bonus</b> magic resistance and 6% <b>bonus</b> movement speed.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 750,
      sell: 1120,
      total: 2800,
    },
    tags: ['TANK'],
  },
  simpleDescription: 'Move Speed, Magic Resist, and max Health Regeneration',
  specialRecipe: 0,
  stats: {
    health: 400,
    magicResistance: 55,
    percentMovespeed: 4,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
