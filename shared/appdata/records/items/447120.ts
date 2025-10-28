<<<<<<< HEAD
const item: Item =  {
  "name": "Diamond-Tipped Spear",
  "id": 447120,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447120_diamondtippedspear.png",
  "passives": [
    {
      "name": "Reach Weapon",
      "effects": "Gain <img src=\"/img/icons/range.webp\" class=\"tip-icon\" />range.",
      "unique": true
    },
    {
      "name": "Sweet Spot",
      "effects": "Basic attacks deal 0% – 30% (based on distance) increased damage and abilities deal 0% – 40% (based on distance) increased damage. The distance is calculated from your current position to the target's position when the triggering attack or ability hits them.",
      "unique": true
    }
  ],
  "stats": {
    "attackSpeed": 30
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    },
    "tags": [
      "MARKSMAN",
      "MAGE"
    ]
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 447120,
  name: 'Diamond-Tipped Spear',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447120_diamondtippedspear.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Reach Weapon',
      effects:
        'Gain <img src="/img/icons/range.webp" class="tip-icon" />range.',
      unique: true,
    },
    {
      name: 'Sweet Spot',
      effects:
        'Basic attacks deal 0% – 30% (based on distance) increased damage and abilities deal 0% – 40% (based on distance) increased damage. The distance is calculated from your current position to the target\'s position when the triggering attack or ability hits them.',
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
    tags: ['MARKSMAN', 'MAGE'],
  },
  specialRecipe: 220007,
  stats: {
    attackSpeed: 30,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
