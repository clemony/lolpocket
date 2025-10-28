<<<<<<< HEAD
const item: Item =  {
  "name": "Rod of Ages",
  "id": 6657,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
    },
    {
      "id": 3803,
      "name": "Catalyst of Aeons",
      "gold": 1300
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6657_mage_t4_rodofages.png",
  "passives": [
    {
      "name": "Timeless",
      "effects": "This item gains 10 <b>bonus</b> health, 30 <b>bonus</b> mana, and 3 ability power every minute, up to 10 times, for a maximum of 100 <b>bonus</b> health, 300 <b>bonus</b> mana, and 30 ability power. Upon reaching maximum stacks, gain a level that preserves your current experience (cap remains at level 18).",
      "unique": true
    },
    {
      "name": "Eternity",
      "effects": "Restore mana equal to 10% of pre-mitigation damage taken from champions, and <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal for an amount equal to 25% of mana spent, up to 20 per cast. Toggled abilities can only heal for up to 20 per second.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 45,
    "health": 350,
    "mana": 500
  },
  "shop": {
    "prices": {
      "total": 2600,
      "combined": 450,
      "sell": 1040
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
  id: 6657,
  name: 'Rod of Ages',
  buildsFrom: [
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850,
    },
    {
      id: 3803,
      name: 'Catalyst of Aeons',
      gold: 1300,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6657_mage_t4_rodofages.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Timeless',
      effects:
        'This item gains 10 <b>bonus</b> health, 30 <b>bonus</b> mana, and 3 ability power every minute, up to 10 times, for a maximum of 100 <b>bonus</b> health, 300 <b>bonus</b> mana, and 30 ability power. Upon reaching maximum stacks, gain a level that preserves your current experience (cap remains at level 18).',
      unique: true,
    },
    {
      name: 'Eternity',
      effects:
        'Restore mana equal to 10% of pre-mitigation damage taken from champions, and <img src="/img/icons/heal.webp" class="tip-icon" />heal for an amount equal to 25% of mana spent, up to 20 per cast. Toggled abilities can only heal for up to 20 per second.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 1040,
      total: 2600,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 0,
  stats: {
    abilityPower: 45,
    health: 350,
    mana: 500,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
