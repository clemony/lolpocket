const item: Item =  {
  "name": "Sorcerer's Shoes",
  "id": 3020,
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
      "id": 3175,
      "name": "Spellslinger's Shoes",
      "gold": 1600
    }
  ],
  "specialRecipe": 0,
  "noEffects": true,
  "removed": false,
  "simpleDescription": "Enhances Move Speed and magic damage",
  "nicknames": [
    "boots",
    "sorcs"
  ],
  "stats": {
    "flatMagicPenetration": 12,
    "flatMovespeed": 45
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 800,
    "total": 1100,
    "sell": 770
  }
}
export default item