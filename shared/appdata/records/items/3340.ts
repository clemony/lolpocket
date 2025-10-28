<<<<<<< HEAD
const item: Item =  {
  "name": "Stealth Ward",
  "id": 3340,
  "rank": "Consumable",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3340_class_t1_wardingtotem.png",
  "simpleDescription": "Periodically place a Stealth Ward",
  "nicknames": [
    "yellow",
    "totem",
    "trinket"
  ],
  "active": [
    {
      "name": "Trinket",
      "effects": "Consume a charge to place an invisible <img src=\"/img/icons/totem-ward.webp\" class=\"tip-icon\" />Totem Ward at the target location, which grants <img src=\"/img/icons/sight.webp\" class=\"tip-icon\" />sight of the surrounding area for 90 – 120 (based on average champion level) seconds.",
      "range": 600,
      "unique": true
    }
  ],
  "stats": {},
  "shop": {
    "prices": {
      "total": 0,
      "combined": 0,
      "sell": 0
    }
  },
  "maps": [
    11,
    21
  ]
}
export default item
=======
const item: Item = {
  id: 3340,
  name: 'Stealth Ward',
  nicknames: ['yellow', 'totem', 'trinket'],
  active: [
    {
      name: 'Trinket',
      effects:
        'Consume a charge to place an invisible <img src="/img/icons/totem-ward.webp" class="tip-icon" />Totem Ward at the target location, which grants <img src="/img/icons/sight.webp" class="tip-icon" />sight of the surrounding area for 90 – 120 (based on average champion level) seconds.',
      range: 600,
      unique: true,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3340_class_t1_wardingtotem.png',
  maps: [11, 21],
  noEffects: false,
  rank: 'Consumable',
  removed: false,
  shop: {
    prices: {
      combined: 0,
      sell: 0,
      total: 0,
    },
  },
  simpleDescription: 'Periodically place a Stealth Ward',
  specialRecipe: 0,
  stats: {},
}
export default item
>>>>>>> refs/remotes/origin/main
