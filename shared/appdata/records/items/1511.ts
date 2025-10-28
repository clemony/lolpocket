<<<<<<< HEAD
const item: Item =  {
  "name": "Super Mech Armor",
  "id": 1511,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1511_supermecharmor.png",
  "passives": [
    {
      "effects": "<img src=\"/img/icons/turret.webp\" class=\"tip-icon\" />Turret basic attacks are modified to deal 7% of this minion's <b>maximum</b> health as pre-mitigation damage.",
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
  id: 1511,
  name: 'Super Mech Armor',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1511_supermecharmor.png',
  maps: [11, 12, 21, 30, 35],
  noEffects: false,
  passives: [
    {
      effects:
        '<img src="/img/icons/turret.webp" class="tip-icon" />Turret basic attacks are modified to deal 7% of this minion\'s <b>maximum</b> health as pre-mitigation damage.',
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
