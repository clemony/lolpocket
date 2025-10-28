<<<<<<< HEAD
const item: Item =  {
  "name": "Darksteel Talons",
  "id": 443054,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3054_silversteeltalons.png",
  "passives": [
    {
      "name": "Gash",
      "effects": "Basic attacks on-hit deal (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />20 – 40 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />10 – 20) true damage (+(<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />25% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />20%) <b>bonus</b> armor) <b>bonus</b> true damage.",
      "unique": true
    }
  ],
  "stats": {
    "armor": 55,
    "attackSpeed": 50,
    "percentMovespeed": 10
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    },
    "tags": [
      "TANK"
    ]
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 443054,
  name: 'Darksteel Talons',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3054_silversteeltalons.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Gash',
      effects:
        'Basic attacks on-hit deal (<img src="/img/icons/melee.webp" class="inline-icon" />20 – 40 /<img src="/img/icons/ranged.webp" class="inline-icon" />10 – 20) true damage (+(<img src="/img/icons/melee.webp" class="inline-icon" />25% /<img src="/img/icons/ranged.webp" class="inline-icon" />20%) <b>bonus</b> armor) <b>bonus</b> true damage.',
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
    tags: ['TANK'],
  },
  specialRecipe: 220007,
  stats: {
    armor: 55,
    attackSpeed: 50,
    percentMovespeed: 10,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
