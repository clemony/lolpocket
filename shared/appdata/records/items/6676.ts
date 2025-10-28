<<<<<<< HEAD
const item: Item =  {
  "name": "The Collector",
  "id": 6676,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    },
    {
      "id": 3134,
      "name": "Serrated Dirk",
      "gold": 1000
    },
    {
      "id": 1018,
      "name": "Cloak of Agility",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6676_marksman_t3_thecollector.png",
  "nicknames": [
    "deathblade",
    "gun"
  ],
  "passives": [
    {
      "name": "Death",
      "effects": "If you deal post-mitigation damage that would leave a champion below 5% of their <b>maximum</b> health, <img src=\"/img/icons/execute.webp\" class=\"tip-icon\" />execute them.",
      "unique": true
    },
    {
      "name": "Taxes",
      "effects": "Killing a champion grants you an additional <img src=\"/img/icons/gold-coin.webp\" class=\"inline-icon\" />25.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 50,
    "criticalStrikeChance": 25,
    "lethality": 10
  },
  "shop": {
    "prices": {
      "total": 3000,
      "combined": 525,
      "sell": 1200
    },
    "tags": [
      "MARKSMAN",
      "ASSASSIN"
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
  id: 6676,
  name: 'The Collector',
  nicknames: ['deathblade', 'gun'],
  buildsFrom: [
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000,
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6676_marksman_t3_thecollector.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Death',
      effects:
        'If you deal post-mitigation damage that would leave a champion below 5% of their <b>maximum</b> health, <img src="/img/icons/execute.webp" class="tip-icon" />execute them.',
      unique: true,
    },
    {
      name: 'Taxes',
      effects:
        'Killing a champion grants you an additional <img src="/img/icons/gold-coin.webp" class="inline-icon" />25.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 525,
      sell: 1200,
      total: 3000,
    },
    tags: ['MARKSMAN', 'ASSASSIN'],
  },
  specialRecipe: 0,
  stats: {
    attackDamage: 50,
    criticalStrikeChance: 25,
    lethality: 10,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
