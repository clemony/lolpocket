const item: Item =  {
  "name": "Plated Steelcaps",
  "id": 3047,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    },
    {
      "id": 1029,
      "name": "Cloth Armor",
      "gold": 300
    }
  ],
  "buildsInto": [
    {
      "id": 3174,
      "name": "Armored Advance",
      "gold": 1700
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Enhances Move Speed and reduces incoming basic attack damage",
  "nicknames": [
    "boots",
    "ninja tabi"
  ],
  "passives": [
    {
      "name": "Plating",
      "effects": "Reduces all incoming <img src=\"/img/icons/basic-damage.webp\" class=\"tip-icon\" />basic damage by 10% (<i>excluding from turret attacks</i>).",
      "unique": true
    }
  ],
  "stats": {
    "armor": 25,
    "flatMovespeed": 45
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 600,
    "total": 1200,
    "sell": 840
  }
}
export default item