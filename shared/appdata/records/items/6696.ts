<<<<<<< HEAD
const item: Item =  {
  "name": "Axiom Arc",
  "id": 6696,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 2020,
      "name": "The Brutalizer",
      "gold": 1337
    },
    {
      "id": 3133,
      "name": "Caulfield's Warhammer",
      "gold": 1050
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6696_axiomarc.png",
  "passives": [
    {
      "name": "Flux",
      "effects": "Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against an enemy champion within 3 seconds of damaging them refunds 15% (+0.15% per 1 Lethality) of your ultimate ability's <b>total</b> cooldown.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 55,
    "lethality": 18,
    "abilityHaste": 20
  },
  "shop": {
    "prices": {
      "total": 3000,
      "combined": 363,
      "sell": 1200
    },
    "tags": [
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
  id: 6696,
  name: 'Axiom Arc',
  buildsFrom: [
    {
      id: 2020,
      name: 'The Brutalizer',
      gold: 1337,
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6696_axiomarc.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Flux',
      effects:
        'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them refunds 15% (+0.15% per 1 Lethality) of your ultimate ability\'s <b>total</b> cooldown.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 613,
      sell: 1200,
      total: 3000,
    },
    tags: ['ASSASSIN'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    attackDamage: 55,
    lethality: 18,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
