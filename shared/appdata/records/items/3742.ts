const item: Item =  {
  "name": "Dead Man's Plate",
  "id": 3742,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3066,
      "name": "Winged Moonplate",
      "gold": 800
    },
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    },
    {
      "id": 1031,
      "name": "Chain Vest",
      "gold": 800
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3742_tank_t3_deadmansplate.png",
  "simpleDescription": "Build momentum as you move around then smash into enemies.",
  "nicknames": [
    "dmp",
    "gangplank",
    "juggernaut",
    "dreadnought"
  ],
  "passives": [
    {
      "name": "Shipwrecker",
      "effects": "While moving, generates 7 stacks of <i>Momentum</i> every 0.25 seconds, granting up to 20 <b>bonus</b> movement speed at 100 stacks after 3.75 seconds of moving. Basic attacks consume all stacks to deal 0 – 40 (based on Momentum) physical damage (+0% – 100% (based on Momentum) <b>base</b> AD) <b>bonus</b> physical damage on-hit.",
      "unique": true
    },
    {
      "name": "Unsinkable",
      "effects": "Gain 15% <img src=\"/img/icons/slow-resist.webp\" class=\"tip-icon\" />slow resist.",
      "unique": true
    }
  ],
  "stats": {
    "armor": 55,
    "health": 350,
    "percentMovespeed": 4
  },
  "shop": {
    "prices": {
      "total": 2900,
      "combined": 900,
      "sell": 1160
    },
    "tags": [
      "FIGHTER",
      "TANK"
    ]
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item