<<<<<<< HEAD
const item: Item =  {
  "name": "Radiant Virtue",
  "id": 446667,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6667_tank_t4_radiantvirtue.png",
  "passives": [
    {
      "name": "Guiding Light",
      "cooldown": "30",
      "effects": "Upon casting your ultimate, you <i>Transcend</i> for 9 seconds. While <i>Transcended</i>, increase your <b>maximum</b> health by 12.5% and cause you and all allies within 1200 units to <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal for 2.5% of your <b>maximum</b> health upon you <i>Transcending</i> and every 3 seconds thereafter, for a total healing of 10% of your <b>maximum</b> health.",
      "unique": true
    }
  ],
  "stats": {
    "armor": 35,
    "healAndShieldPower": 12,
    "health": 400,
    "magicResistance": 35
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    },
    "tags": [
      "TANK"
    ]
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 446667,
  name: 'Radiant Virtue',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6667_tank_t4_radiantvirtue.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Guiding Light',
      cooldown: '30',
      effects:
        'Upon casting your ultimate, you <i>Transcend</i> for 9 seconds. While <i>Transcended</i>, increase your <b>maximum</b> health by 12.5% and cause you and all allies within 1200 units to <img src="/img/icons/heal.webp" class="tip-icon" />heal for 2.5% of your <b>maximum</b> health upon you <i>Transcending</i> and every 3 seconds thereafter, for a total healing of 10% of your <b>maximum</b> health.',
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
    tags: ['TANK'],
  },
  specialRecipe: 220007,
  stats: {
    armor: 35,
    healAndShieldPower: 12,
    health: 400,
    magicResistance: 35,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
