<<<<<<< HEAD
const item: Item =  {
  "name": "Hemomancer's Helm",
  "id": 447103,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7103_hemomancershelm.png",
  "passives": [
    {
      "name": "Scarlet Allegiance",
      "effects": "If your <img src=\"/img/icons/life-steal.webp\" class=\"tip-icon\" />life steal and <img src=\"/img/icons/omnivamp.webp\" class=\"tip-icon\" />omnivamp sum to at least 30%, gain 500 <b>bonus</b> health and <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal yourself equal to 10% of the damage that enemy champions in a 525 units radius around you take from all sources.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 60,
    "abilityHaste": 30,
    "omnivamp": 15
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
  id: 447103,
  name: 'Hemomancer\'s Helm',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7103_hemomancershelm.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Scarlet Allegiance',
      effects:
        'If your <img src="/img/icons/life-steal.webp" class="tip-icon" />life steal and <img src="/img/icons/omnivamp.webp" class="tip-icon" />omnivamp sum to at least 30%, gain 500 <b>bonus</b> health and <img src="/img/icons/heal.webp" class="tip-icon" />heal yourself equal to 10% of the damage that enemy champions in a 525 units radius around you take from all sources.',
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
    tags: ['FIGHTER'],
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 30,
    attackDamage: 60,
    omnivamp: 15,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
