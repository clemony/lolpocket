<<<<<<< HEAD
const item: Item =  {
  "name": "Bloodsong",
  "id": 3877,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3867,
      "name": "Bounty of Worlds",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3877_bloodsong.png",
  "passives": [
    {
      "name": "Spellblade",
      "effects": "After using an ability, your next basic attack within 10 seconds deals 100% <b>base</b> AD <b>bonus</b> physical damage on-hit. If the target is a champion, inflict them with <i>Expose Weakness</i> for 4 seconds, causing them to take (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />8% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />5%) increased damage from all sources (1.5 second cooldown, starts after using the empowered attack).",
      "unique": true
    },
    {
      "effects": "Receives diminishing gold from excessive minion kills.",
      "unique": true
    }
  ],
  "active": [
    {
      "name": "Ward",
      "effects": "Consumes a charge to place a <img src=\"/img/icons/stealth-ward.webp\" class=\"tip-icon\" />Stealth Ward at the target location, which grants <img src=\"/img/icons/sight.webp\" class=\"tip-icon\" />sight of the surrounding area. Charges refill upon visiting the shop.",
      "range": 600,
      "unique": true
    }
  ],
  "stats": {
    "goldPer10": 5,
    "health": 200,
    "healthRegen": 75,
    "manaRegen": 75
  },
  "shop": {
    "prices": {
      "total": 400,
      "combined": 0,
      "sell": 160
    },
    "tags": [
      "SUPPORT"
    ]
  },
  "maps": [
    11
  ]
}
export default item
=======
const item: Item = {
  id: 3877,
  name: 'Bloodsong',
  active: [
    {
      name: 'Ward',
      effects:
        'Consumes a charge to place a <img src="/img/icons/stealth-ward.webp" class="tip-icon" />Stealth Ward at the target location, which grants <img src="/img/icons/sight.webp" class="tip-icon" />sight of the surrounding area. Charges refill upon visiting the shop.',
      range: 600,
      unique: true,
    },
  ],
  buildsFrom: [
    {
      id: 3867,
      name: 'Bounty of Worlds',
      gold: 400,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3877_bloodsong.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Spellblade',
      effects:
        'After using an ability, your next basic attack within 10 seconds deals 100% <b>base</b> AD <b>bonus</b> physical damage on-hit. If the target is a champion, inflict them with <i>Expose Weakness</i> for 4 seconds, causing them to take (<img src="/img/icons/melee.webp" class="inline-icon" />8% /<img src="/img/icons/ranged.webp" class="inline-icon" />5%) increased damage from all sources (1.5 second cooldown, starts after using the empowered attack).',
      unique: true,
    },
    {
      effects: 'Receives diminishing gold from excessive minion kills.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 0,
      sell: 160,
      total: 400,
    },
    tags: ['SUPPORT'],
  },
  specialRecipe: 0,
  stats: {
    goldPer10: 5,
    health: 200,
    healthRegen: 75,
    manaRegen: 75,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
