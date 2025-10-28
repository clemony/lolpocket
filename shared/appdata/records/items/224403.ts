<<<<<<< HEAD
const item: Item =  {
  "name": "The Golden Spatula",
  "id": 224403,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4403_goldenspatula.png",
  "nicknames": [
    "debug"
  ],
  "passives": [
    {
      "name": "Doing Something",
      "effects": "You are permanently 20px|link= <b>On Fire!</b>, causing you to Burn nearby enemies every second for magic damage and reduce your cooldowns twice as fast as well as gain <b>bonus</b> movement speed while facing nearby enemy champions, <b>bonus</b> attack speed, and <b>bonus</b> mana regeneration. While <b>On Fire!</b>, however, you also take increased damage and reduce the effectiveness of incoming heals and shields.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 125,
    "armor": 40,
    "attackDamage": 90,
    "attackSpeed": 60,
    "criticalStrikeChance": 25,
    "health": 350,
    "healthRegen": 200,
    "lifesteal": 15,
    "magicResistance": 40,
    "mana": 350,
    "manaRegen": 200,
    "percentMovespeed": 10,
    "abilityHaste": 20
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 2500,
      "sell": 0
    }
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 224403,
  name: 'The Golden Spatula',
  nicknames: ['debug'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4403_goldenspatula.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Doing Something',
      effects:
        'You are permanently 20px|link= <b>On Fire!</b>, causing you to Burn nearby enemies every second for magic damage and reduce your cooldowns twice as fast as well as gain <b>bonus</b> movement speed while facing nearby enemy champions, <b>bonus</b> attack speed, and <b>bonus</b> mana regeneration. While <b>On Fire!</b>, however, you also take increased damage and reduce the effectiveness of incoming heals and shields.',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 2500,
      sell: 0,
      total: 0,
    },
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 125,
    armor: 40,
    attackDamage: 90,
    attackSpeed: 60,
    criticalStrikeChance: 25,
    health: 350,
    healthRegen: 200,
    lifesteal: 15,
    magicResistance: 40,
    mana: 350,
    manaRegen: 200,
    percentMovespeed: 10,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
