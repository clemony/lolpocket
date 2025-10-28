<<<<<<< HEAD
const item: Item =  {
  "name": "Dream Maker",
  "id": 3870,
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
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3870_dreammaker.png",
  "passives": [
    {
      "name": "Dream Maker",
      "effects": "Every 8 seconds, you gain a <i>Blue Dream Bubble</i> and a <i>Purple Dream Bubble</i>. Granting a <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal or <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield to an allied champion <i>(excluding yourself)</i> causes you to blow both of your <i>Dream Bubbles</i> to them, empowering them for 3 seconds. The <i>Blue Bubble</i> reduces the next instance of non-<img src=\"/img/icons/minion.webp\" class=\"tip-icon\" />minion damage they take by 75 – 255 (based on your level) and the <i>Purple Bubble</i> grants them 50 – 170 (based on your level) <b>bonus</b> magic damage on-hit on their next basic attack.",
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
  id: 3870,
  name: 'Dream Maker',
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3870_dreammaker.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Dream Maker',
      effects:
        'Every 8 seconds, you gain a <i>Blue Dream Bubble</i> and a <i>Purple Dream Bubble</i>. Granting a <img src="/img/icons/heal.webp" class="tip-icon" />heal or <img src="/img/icons/shield.webp" class="tip-icon" />shield to an allied champion <i>(excluding yourself)</i> causes you to blow both of your <i>Dream Bubbles</i> to them, empowering them for 3 seconds. The <i>Blue Bubble</i> reduces the next instance of non-<img src="/img/icons/minion.webp" class="tip-icon" />minion damage they take by 75 – 255 (based on your level) and the <i>Purple Bubble</i> grants them 50 – 170 (based on your level) <b>bonus</b> magic damage on-hit on their next basic attack.',
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
