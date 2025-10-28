<<<<<<< HEAD
const item: Item =  {
  "name": "Goredrinker",
  "id": 226630,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6630_fighter_t4_goredrinker.png",
  "nicknames": [
    "slurp"
  ],
  "active": [
    {
      "name": "Thirsting Slash",
      "effects": "Deal 175% <b>base</b> AD physical damage to enemies in a 450 radius centered around you. <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />Heal for 20% AD (+8% of your <b>missing</b> health) for each enemy champion hit.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 55,
    "health": 400,
    "abilityHaste": 20
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    },
    "tags": [
      "FIGHTER"
    ]
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 226630,
  name: 'Goredrinker',
  nicknames: ['slurp'],
  active: [
    {
      name: 'Thirsting Slash',
      effects:
        'Deal 175% <b>base</b> AD physical damage to enemies in a 450 radius centered around you. <img src="/img/icons/heal.webp" class="tip-icon" />Heal for 20% AD (+8% of your <b>missing</b> health) for each enemy champion hit.',
      unique: true,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6630_fighter_t4_goredrinker.png',
  maps: [30],
  noEffects: false,
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
    tags: ['FIGHTER'],
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 20,
    attackDamage: 55,
    health: 400,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
