<<<<<<< HEAD
const item: Item =  {
  "name": "Moonstone Renewer",
  "id": 6617,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 4642,
      "name": "Bandleglass Mirror",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6617_enchanter_t4_moonstonerenewer.png",
  "simpleDescription": "Your heals and shields cool down faster and have greater effect on low health allies",
  "nicknames": [
    "yuumi"
  ],
  "passives": [
    {
      "name": "Starlit Grace",
      "effects": "<img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />Healing or <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shielding an allied champion chains the effect to the other nearest allied champion within 800 units of them (<i>excluding yourself</i>), granting them 30% of the heal or 35% of the shield's initial strength. If no other allied champions are in the radius, grant the same target an additional 30% of the heal or 35% of the shield.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 25,
    "health": 200,
    "manaRegen": 125,
    "abilityHaste": 20
  },
  "shop": {
    "prices": {
      "total": 2200,
      "combined": 500,
      "sell": 880
    },
    "tags": [
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
  id: 6617,
  name: 'Moonstone Renewer',
  nicknames: ['yuumi'],
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800,
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6617_enchanter_t4_moonstonerenewer.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Starlit Grace',
      effects:
        '<img src="/img/icons/heal.webp" class="tip-icon" />Healing or <img src="/img/icons/shield.webp" class="tip-icon" />shielding an allied champion chains the effect to the other nearest allied champion within 800 units of them (<i>excluding yourself</i>), granting them 30% of the heal or 35% of the shield\'s initial strength. If no other allied champions are in the radius, grant the same target an additional 30% of the heal or 35% of the shield.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 880,
      total: 2200,
    },
    tags: ['SUPPORT'],
  },
  simpleDescription:
    'Your heals and shields cool down faster and have greater effect on low health allies',
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 25,
    health: 200,
    manaRegen: 125,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
