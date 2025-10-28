<<<<<<< HEAD
const item: Item =  {
  "name": "Reinforced Armor (Turret Item)",
  "id": 1502,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3042_netherrift_armor.png",
  "passives": [
    {
      "effects": "While no enemy <img src=\"/img/icons/minions.webp\" class=\"tip-icon\" />minions or <img src=\"/img/icons/rift-herald-mercenary.webp\" class=\"tip-icon\" />Rift Herald Mercenary are within range, gain 80% damage reduction, including against true damage.",
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
  id: 1502,
  name: 'Reinforced Armor (Turret Item)',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3042_netherrift_armor.png',
  maps: [11, 12, 21, 30, 35],
  noEffects: false,
  passives: [
    {
      effects:
        'While no enemy <img src="/img/icons/minions.webp" class="tip-icon" />minions or <img src="/img/icons/rift-herald-mercenary.webp" class="tip-icon" />Rift Herald Mercenary are within range, gain 80% damage reduction, including against true damage.',
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
