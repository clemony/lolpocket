// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
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
  "nicknames": [
    "dmp",
    "dreadnought",
    "gangplank",
    "juggernaut"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Shipwrecker",
      "effects": "While moving, generates 7 stacks of <i>Momentum</i> every 0.25 seconds, granting up to 20 <b>bonus</b> movement speed at 100 stacks after 3.75 seconds of moving. Basic attacks consume all stacks to deal 0 – 40 (based on Momentum) physical damage (+0% – 100% (based on Momentum) <b>base</b> AD) <b>bonus</b> physical damage on-hit."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Unsinkable",
      "effects": "Gain 15% <img src=\"/img/icons/slow-resist.webp\" class=\"tip-icon\" />slow resist."
    }
  ],
  "stats": {
    "armor": 55,
    "health": 350,
    "percentMovespeed": 4
  },
  "description": "350 Health\n55 Armor\n4% Move Speed\n\nShipwrecker\nWhile moving, build up to 20 bonus Move Speed. Your next Attack discharges built up Move Speed to deal bonus physical damage.\n\nUnsinkable\nReduce the effectiveness of Slows by 15%.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 900,
    "total": 2900,
    "sell": 2030
  }
}
export default item