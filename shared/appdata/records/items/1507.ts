<<<<<<< HEAD
const item: Item =  {
  "name": "Overcharged",
  "id": 1507,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1507_tournament_suddendeath.png",
  "passives": [
    {
      "effects": "At 55 minutes, this turret begins to malfunction, losing armor and magic resist. After 5 minutes, it will start breaking down, losing an increasing percentage of its <img src=\"/img/icons/health.webp\" class=\"tip-icon\" />health every 30 seconds.",
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
  id: 1507,
  name: 'Overcharged',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1507_tournament_suddendeath.png',
  maps: [11, 12, 21, 30, 35],
  noEffects: false,
  passives: [
    {
      effects:
        'At 55 minutes, this turret begins to malfunction, losing armor and magic resist. After 5 minutes, it will start breaking down, losing an increasing percentage of its <img src="/img/icons/health.webp" class="tip-icon" />health every 30 seconds.',
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
