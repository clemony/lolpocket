<<<<<<< HEAD
const item: Item =  {
  "name": "Twilight's Edge",
  "id": 447121,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447121_twilightsedge.png",
  "passives": [
    {
      "name": "The Path Between",
      "effects": "If you have at least 130 <b>bonus</b> attack damage and 180 ability power, enter either the <i>Material World</i> or the <i>Spirit World</i>, determined randomly, at the start of the combat phase in each round:<br><br>• <b>Material World</b>: Increase your attack damage by 20% and gain 50% – 150% (based on %) <b>bonus</b> attack speed.<br>• <b>Spirit World</b>: Increase your ability power by 20% and gain 30 – 120 (based on level) ability haste.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 100,
    "attackDamage": 70
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
  id: 447121,
  name: 'Twilight\'s Edge',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447121_twilightsedge.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'The Path Between',
      effects:
        'If you have at least 130 <b>bonus</b> attack damage and 180 ability power, enter either the <i>Material World</i> or the <i>Spirit World</i>, determined randomly, at the start of the combat phase in each round:<br><br>• <b>Material World</b>: Increase your attack damage by 20% and gain 50% – 150% (based on %) <b>bonus</b> attack speed.<br>• <b>Spirit World</b>: Increase your ability power by 20% and gain 30 – 120 (based on level) ability haste.',
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
    abilityPower: 100,
    attackDamage: 70,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
