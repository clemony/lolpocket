<<<<<<< HEAD
const item: Item =  {
  "name": "Warden's Eye",
  "id": 1503,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/096_eye_of_the_observer.png",
  "passives": [
    {
      "name": "True Sight",
      "effects": "Can see <img src=\"/img/icons/camouflage.webp\" class=\"tip-icon\" />camouflaged and <img src=\"/img/icons/invisible.webp\" class=\"tip-icon\" />invisible units within 1100 units.",
      "unique": true
    }
  ],
  "stats": {},
  "shop": {
    "prices": {
      "total": 0,
      "combined": 0,
      "sell": 0
    },
    "purchasable": false
  },
  "maps": [
    11,
    12,
    21,
    30,
    35
  ]
}
export default item
=======
const item: Item = {
  id: 1503,
  name: 'Warden\'s Eye',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/096_eye_of_the_observer.png',
  maps: [11, 12, 21, 30, 35],
  noEffects: false,
  passives: [
    {
      name: 'True Sight',
      effects:
        'Can see <img src="/img/icons/camouflage.webp" class="tip-icon" />camouflaged and <img src="/img/icons/invisible.webp" class="tip-icon" />invisible units within 1100 units.',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 0,
      sell: 0,
      total: 0,
    },
    purchasable: false,
  },
  specialRecipe: 0,
  stats: {},
}
export default item
>>>>>>> refs/remotes/origin/main
