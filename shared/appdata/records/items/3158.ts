<<<<<<< HEAD
const item: Item =  {
  "name": "Ionian Boots of Lucidity",
  "id": 3158,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    },
    {
      "id": 2022,
      "name": "Glowing Mote",
      "gold": 250
    }
  ],
  "buildsInto": [
    {
      "id": 3171,
      "name": "Crimson Lucidity",
      "gold": 1400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3158_class_t2_ionianbootsoflucidity.png",
  "simpleDescription": "Increases Move Speed and Cooldown Reduction",
  "passives": [
    {
      "name": "Ionian Insight",
      "effects": "Gain 10 summoner spell haste.",
      "unique": true
    }
  ],
  "stats": {
    "flatMovespeed": 45,
    "abilityHaste": 10
  },
  "shop": {
    "prices": {
      "total": 900,
      "combined": 350,
      "sell": 360
    }
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
  id: 3158,
  name: 'Ionian Boots of Lucidity',
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300,
    },
    {
      id: 2022,
      name: 'Glowing Mote',
      gold: 250,
    },
  ],
  buildsInto: [
    {
      id: 3171,
      name: 'Crimson Lucidity',
      gold: 1400,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3158_class_t2_ionianbootsoflucidity.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Ionian Insight',
      effects: 'Gain 10 summoner spell haste.',
      unique: true,
    },
  ],
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 350,
      sell: 360,
      total: 900,
    },
  },
  simpleDescription: 'Increases Move Speed and Cooldown Reduction',
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    flatMovespeed: 45,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
