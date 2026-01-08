const item: Item =  {
  "name": "Boots of Swiftness",
  "id": 3009,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    }
  ],
  "buildsInto": [
    {
      "id": 3170,
      "name": "Swiftmarch",
      "gold": 1500
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Enhances Move Speed and reduces the effect of slows",
  "nicknames": [
    "swifties"
  ],
  "passives": [
    {
      "name": "Fleetfooted",
      "effects": "Gain 25% slow resist.",
      "unique": true
    }
  ],
  "stats": {
    "flatMovespeed": 55
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 700,
    "total": 1000,
    "sell": 700
  }
}
export default item