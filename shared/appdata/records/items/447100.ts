<<<<<<< HEAD
const item: Item =  {
  "name": "Mirage Blade",
  "id": 447100,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7100_mirageblade.png",
  "passives": [
    {
      "name": "Blur",
      "effects": "Basic attacks on-hit reduce the remaining cooldowns of your abilities and spells with <img src=\"/img/icons/dash.webp\" class=\"tip-icon\" />dashes and/or <img src=\"/img/icons/blink.webp\" class=\"tip-icon\" />blinks by 12%, modified to 4% for your ultimate ability.",
      "unique": true
    }
  ],
  "stats": {
    "attackSpeed": 60,
    "percentMovespeed": 12
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    }
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 447100,
  name: 'Mirage Blade',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7100_mirageblade.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Blur',
      effects:
        'Basic attacks on-hit reduce the remaining cooldowns of your abilities and spells with <img src="/img/icons/dash.webp" class="tip-icon" />dashes and/or <img src="/img/icons/blink.webp" class="tip-icon" />blinks by 12%, modified to 4% for your ultimate ability.',
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
  },
  specialRecipe: 220007,
  stats: {
    attackSpeed: 60,
    percentMovespeed: 12,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
