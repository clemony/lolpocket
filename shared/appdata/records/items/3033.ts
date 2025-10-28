<<<<<<< HEAD
const item: Item =  {
  "name": "Mortal Reminder",
  "id": 3033,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3123,
      "name": "Executioner's Calling",
      "gold": 800
    },
    {
      "id": 3035,
      "name": "Last Whisper",
      "gold": 1450
    },
    {
      "id": 1018,
      "name": "Cloak of Agility",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3033_marksman_t3_mortalreminder.png",
  "simpleDescription": "Overcomes enemies with high Health recovery and Armor",
  "nicknames": [
    "lw",
    "grievous"
  ],
  "passives": [
    {
      "name": "Grievous Wounds",
      "effects": "Dealing physical damage to enemy champions inflicts them with <img src=\"/img/icons/grievous-wounds.webp\" class=\"tip-icon\" />Grievous Wounds for 3 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "armorPenetration": 35,
    "attackDamage": 35,
    "criticalStrikeChance": 25
  },
  "shop": {
    "prices": {
      "total": 3300,
      "combined": 450,
      "sell": 1320
    },
    "tags": [
      "MARKSMAN"
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
  id: 3033,
  name: 'Mortal Reminder',
  nicknames: ['lw', 'grievous'],
  buildsFrom: [
    {
      id: 3123,
      name: 'Executioner\'s Calling',
      gold: 800,
    },
    {
      id: 3035,
      name: 'Last Whisper',
      gold: 1450,
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3033_marksman_t3_mortalreminder.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Grievous Wounds',
      effects:
        'Dealing physical damage to enemy champions inflicts them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon" />Grievous Wounds for 3 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 1320,
      total: 3300,
    },
    tags: ['MARKSMAN'],
  },
  simpleDescription: 'Overcomes enemies with high Health recovery and Armor',
  specialRecipe: 0,
  stats: {
    armorPenetration: 35,
    attackDamage: 35,
    criticalStrikeChance: 25,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
