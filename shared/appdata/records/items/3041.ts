<<<<<<< HEAD
const item: Item =  {
  "name": "Mejai's Soulstealer",
  "id": 3041,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1082,
      "name": "Dark Seal",
      "gold": 350
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3041_mage_t2_mejaissoulstealer.png",
  "simpleDescription": "Grants Ability Power for kills and assists",
  "nicknames": [
    "book"
  ],
  "passives": [
    {
      "name": "Glory",
      "effects": "Gain 4 stacks for each champion kill and 2 stacks for each assist, up to a <b>maximum</b> of 25 stacks. For every stack, gain 5 ability power, up to 125 AP at <b>maximum</b> stacks. If you have at least 10 stacks, also gain 10% <b>bonus</b> movement speed. Lose 10 stacks on death. Stacks are preserved from <img src=\"/img/icons/dark-seal.webp\" class=\"tip-icon\" />Dark Seal.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 20,
    "health": 100
  },
  "shop": {
    "prices": {
      "total": 1500,
      "combined": 1150,
      "sell": 600
    },
    "tags": [
      "MAGE",
      "MOVEMENT"
    ]
  },
  "maps": [
    11
  ]
}
export default item
=======
const item: Item = {
  id: 3041,
  name: 'Mejai\'s Soulstealer',
  nicknames: ['book'],
  buildsFrom: [
    {
      id: 1082,
      name: 'Dark Seal',
      gold: 350,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3041_mage_t2_mejaissoulstealer.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Glory',
      effects:
        'Gain 4 stacks for each champion kill and 2 stacks for each assist, up to a <b>maximum</b> of 25 stacks. For every stack, gain 5 ability power, up to 125 AP at <b>maximum</b> stacks. If you have at least 10 stacks, also gain 10% <b>bonus</b> movement speed. Lose 10 stacks on death. Stacks are preserved from <img src="/img/icons/dark-seal.webp" class="tip-icon" />Dark Seal.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 1150,
      sell: 600,
      total: 1500,
    },
    tags: ['MAGE', 'MOVEMENT'],
  },
  simpleDescription: 'Grants Ability Power for kills and assists',
  specialRecipe: 0,
  stats: {
    abilityPower: 20,
    health: 100,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
