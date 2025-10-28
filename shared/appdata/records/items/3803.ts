<<<<<<< HEAD
const item: Item =  {
  "name": "Catalyst of Aeons",
  "id": 3803,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    },
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    },
    {
      "id": 1027,
      "name": "Sapphire Crystal",
      "gold": 300
    }
  ],
  "buildsInto": [
    {
      "id": 326657,
      "name": "Rod of Ages",
      "gold": 2600
    },
    {
      "id": 4402,
      "name": "Innervating Locket",
      "gold": 2950
    },
    {
      "id": 6657,
      "name": "Rod of Ages",
      "gold": 2600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3803_mage_t2_catalystofaeons.png",
  "passives": [
    {
      "name": "Eternity",
      "effects": "Restore mana equal to 10% of pre-mitigation damage taken from champions, and <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal for an amount equal to 25% of mana spent, up to 20 per cast. Toggled abilities can only heal for up to 20 per second.",
      "unique": true
    }
  ],
  "stats": {
    "health": 350,
    "mana": 375
  },
  "shop": {
    "prices": {
      "total": 1300,
      "combined": 200,
      "sell": 520
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
  id: 3803,
  name: 'Catalyst of Aeons',
  buildsFrom: [
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400,
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400,
    },
    {
      id: 1027,
      name: 'Sapphire Crystal',
      gold: 300,
    },
  ],
  buildsInto: [
    {
      id: 326657,
      name: 'Rod of Ages',
      gold: 2600,
    },
    {
      id: 4402,
      name: 'Innervating Locket',
      gold: 2950,
    },
    {
      id: 6657,
      name: 'Rod of Ages',
      gold: 2600,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3803_mage_t2_catalystofaeons.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Eternity',
      effects:
        'Restore mana equal to 10% of pre-mitigation damage taken from champions, and <img src="/img/icons/heal.webp" class="tip-icon" />heal for an amount equal to 25% of mana spent, up to 20 per cast. Toggled abilities can only heal for up to 20 per second.',
      unique: true,
    },
  ],
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 200,
      sell: 520,
      total: 1300,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 0,
  stats: {
    health: 350,
    mana: 375,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
