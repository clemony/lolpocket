<<<<<<< HEAD
const item: Item =  {
  "name": "Forever Forward",
  "id": 3176,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 3013,
      "name": "Synchronized Souls",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/boots_tier3_syncronisedsouls_64.png",
  "passives": [
    {
      "name": "Voidborn",
      "effects": "Gain <img src=\"/img/icons/empowered-recall.webp\" class=\"tip-icon\" />Empowered Recall.",
      "unique": true
    },
    {
      "name": "Noxian Synchrony",
      "effects": "Gain 45 (+8% <b>total</b> movement speed) <b>bonus</b> movement speed while out-of-combat.",
      "unique": true
    }
  ],
  "stats": {
    "flatMovespeed": 55
  },
  "shop": {
    "prices": {
      "total": 1400,
      "combined": 500,
      "sell": 560
    }
  },
  "maps": [
    11
  ]
}
export default item
=======
const item: Item = {
  id: 3176,
  name: 'Forever Forward',
  buildsFrom: [
    {
      id: 3013,
      name: 'Synchronized Souls',
      gold: 900,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/boots_tier3_syncronisedsouls_64.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Voidborn',
      effects:
        'Gain <img src="/img/icons/empowered-recall.webp" class="tip-icon" />Empowered Recall.',
      unique: true,
    },
    {
      name: 'Noxian Synchrony',
      effects:
        'Gain 45 (+8% <b>total</b> movement speed) <b>bonus</b> movement speed while out-of-combat.',
      unique: true,
    },
  ],
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 560,
      total: 1400,
    },
  },
  specialRecipe: 0,
  stats: {
    flatMovespeed: 55,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
