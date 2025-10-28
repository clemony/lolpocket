<<<<<<< HEAD
const item: Item =  {
  "name": "Sword of the Divine",
  "id": 443060,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3131_fighter_t3_swordofthedivine.png",
  "nicknames": [
    "sotd"
  ],
  "passives": [
    {
      "name": "Excoriate",
      "effects": "<img src=\"/img/icons/critical-strike.webp\" class=\"tip-icon\" />Critical strikes gain random <b>bonus</b> critical strike damage that scales up to 50% of critical strike chance.",
      "unique": true
    }
  ],
  "stats": {
    "criticalStrikeChance": 50
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    },
    "tags": [
      "ASSASSIN"
    ]
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 443060,
  name: 'Sword of the Divine',
  nicknames: ['sotd'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3131_fighter_t3_swordofthedivine.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Excoriate',
      effects:
        '<img src="/img/icons/critical-strike.webp" class="tip-icon" />Critical strikes gain random <b>bonus</b> critical strike damage that scales up to 50% of critical strike chance.',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
    tags: ['ASSASSIN'],
  },
  specialRecipe: 220007,
  stats: {
    criticalStrikeChance: 50,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
