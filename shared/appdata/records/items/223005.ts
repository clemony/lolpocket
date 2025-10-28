<<<<<<< HEAD
const item: Item =  {
  "name": "Ghostcrawlers",
  "id": 223005,
  "rank": "Boots",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4001_ghostwalkers.png",
  "active": [
    {
      "name": "Wall Walk",
      "effects": "Become ghostly for 6 seconds, ignoring terrain collision until you basic attack or cast an ability. While inside terrain, gain 300 <b>bonus</b> movement speed.",
      "unique": true
    }
  ],
  "stats": {
    "flatMovespeed": 70
  },
  "shop": {
    "prices": {
      "total": 500,
      "combined": 500,
      "sell": 200
    }
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 223005,
  name: 'Ghostcrawlers',
  active: [
    {
      name: 'Wall Walk',
      effects:
        'Become ghostly for 6 seconds, ignoring terrain collision until you basic attack or cast an ability. While inside terrain, gain 300 <b>bonus</b> movement speed.',
      unique: true,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4001_ghostwalkers.png',
  maps: [30],
  noEffects: false,
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 200,
      total: 500,
    },
  },
  specialRecipe: 0,
  stats: {
    flatMovespeed: 70,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
