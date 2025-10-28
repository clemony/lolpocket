<<<<<<< HEAD
const item: Item =  {
  "name": "Anti-Tower Socks",
  "id": 1508,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1508_antitowersocks.png",
  "passives": [
    {
      "effects": "<img src=\"/img/icons/turret.webp\" class=\"tip-icon\" />Turret basic attacks are modified to deal 14% – 8% (based on turret type) of this minion's <b>maximum</b> health as pre-mitigation damage.",
      "unique": true
    }
  ],
  "stats": {},
  "shop": {
    "prices": {
      "total": 0,
      "combined": 0,
      "sell": 0
    },
    "purchasable": false
  },
  "maps": [
    11,
    12,
    21,
    30,
    35
  ]
}
export default item
=======
const item: Item = {
  id: 1508,
  name: 'Anti-Tower Socks',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1508_antitowersocks.png',
  maps: [11, 12, 21, 30, 35],
  noEffects: false,
  passives: [
    {
      effects:
        '<img src="/img/icons/turret.webp" class="tip-icon" />Turret basic attacks are modified to deal 14% – 8% (based on turret type) of this minion\'s <b>maximum</b> health as pre-mitigation damage.',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 0,
      sell: 0,
      total: 0,
    },
    purchasable: false,
  },
  specialRecipe: 0,
  stats: {},
}
export default item
>>>>>>> refs/remotes/origin/main
