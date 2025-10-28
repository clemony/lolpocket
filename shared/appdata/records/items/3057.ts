<<<<<<< HEAD
const item: Item =  {
  "name": "Sheen",
  "id": 3057,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 2022,
      "name": "Glowing Mote",
      "gold": 250
    }
  ],
  "buildsInto": [
    {
      "id": 3100,
      "name": "Lich Bane",
      "gold": 2900
    },
    {
      "id": 6662,
      "name": "Iceborn Gauntlet",
      "gold": 2900
    },
    {
      "id": 3078,
      "name": "Trinity Force",
      "gold": 3333
    },
    {
      "id": 6632,
      "name": "Divine Sunderer",
      "gold": 3450
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3057_fighter_t2_sheen.png",
  "simpleDescription": "Grants a bonus to next attack after spell cast",
  "nicknames": [
    "jimmy neutron"
  ],
  "passives": [
    {
      "name": "Spellblade",
      "effects": "After using an ability, your next basic attack within 10 seconds deals 100% <b>base</b> AD <b>bonus</b> physical damage on-hit (1.5 second cooldown, starts after using the empowered attack).",
      "unique": true
    }
  ],
  "stats": {
    "abilityHaste": 10
  },
  "shop": {
    "prices": {
      "total": 900,
      "combined": 650,
      "sell": 360
    },
    "tags": [
      "FIGHTER",
      "MARKSMAN",
      "MAGE",
      "ONHIT_EFFECTS"
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
  id: 3057,
  name: 'Sheen',
  nicknames: ['jimmy neutron'],
  buildsFrom: [
    {
      id: 2022,
      name: 'Glowing Mote',
      gold: 250,
    },
  ],
  buildsInto: [
    {
      id: 3100,
      name: 'Lich Bane',
      gold: 2900,
    },
    {
      id: 6662,
      name: 'Iceborn Gauntlet',
      gold: 2900,
    },
    {
      id: 3078,
      name: 'Trinity Force',
      gold: 3333,
    },
    {
      id: 6632,
      name: 'Divine Sunderer',
      gold: 3450,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3057_fighter_t2_sheen.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Spellblade',
      effects:
        'After using an ability, your next basic attack within 10 seconds deals 100% <b>base</b> AD <b>bonus</b> physical damage on-hit (1.5 second cooldown, starts after using the empowered attack).',
      unique: true,
    },
  ],
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 650,
      sell: 360,
      total: 900,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'MAGE', 'ONHIT_EFFECTS'],
  },
  simpleDescription: 'Grants a bonus to next attack after spell cast',
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
