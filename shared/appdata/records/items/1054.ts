<<<<<<< HEAD
const item: Item =  {
  "name": "Doran's Shield",
  "id": 1054,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1054_tank_t1_doransshield.png",
  "simpleDescription": "Good defensive starting item",
  "nicknames": [
    "dshield"
  ],
  "passives": [
    {
      "name": "Enduring Focus",
      "effects": "After taking damage from a champion, gain <b>bonus</b> health regeneration per second equal to 0 – 75 (based on missing health) for 8 seconds. Reduced to 66% effectiveness if owned by <img src=\"/img/icons/ranged.webp\" class=\"tip-icon\" />ranged champions or when triggered by area of effect, damage over time, or proc.",
      "unique": true
    },
    {
      "name": "Helping Hand",
      "effects": "Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions.",
      "unique": true
    }
  ],
  "stats": {
    "health": 110,
    "healthRegen": 4
  },
  "shop": {
    "prices": {
      "total": 450,
      "combined": 450,
      "sell": 180
    },
    "tags": [
      "FIGHTER",
      "MARKSMAN",
      "ASSASSIN",
      "MAGE",
      "TANK",
      "ONHIT_EFFECTS"
    ]
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item
=======
const item: Item = {
  id: 1054,
  name: 'Doran\'s Shield',
  nicknames: ['dshield'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1054_tank_t1_doransshield.png',
  maps: [11, 12, 21],
  noEffects: false,
  passives: [
    {
      name: 'Enduring Focus',
      effects:
        'After taking damage from a champion, gain <b>bonus</b> health regeneration per second equal to 0 – 75 (based on missing health) for 8 seconds. Reduced to 66% effectiveness if owned by <img src="/img/icons/ranged.webp" class="tip-icon" />ranged champions or when triggered by area of effect, damage over time, or proc.',
      unique: true,
    },
    {
      name: 'Helping Hand',
      effects:
        'Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions.',
      unique: true,
    },
  ],
  rank: 'Starter',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 180,
      total: 450,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ASSASSIN', 'MAGE', 'TANK', 'ONHIT_EFFECTS'],
  },
  simpleDescription: 'Good defensive starting item',
  specialRecipe: 0,
  stats: {
    health: 110,
    healthRegen: 4,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
