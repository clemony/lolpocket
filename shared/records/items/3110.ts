const item: Item =  {
  "name": "Frozen Heart",
  "id": 3110,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3082,
      "name": "Warden's Mail",
      "gold": 1000
    },
    {
      "id": 3024,
      "name": "Glacial Buckler",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Massively increases Armor and slows enemy basic attacks",
  "nicknames": [
    "fh"
  ],
  "passives": [
    {
      "name": "Winter's Caress",
      "effects": "<img src=\"/img/icons/cripple.webp\" class=\"tip-icon\" />Cripples the attack speed of enemy champions within 700 units by 20%.",
      "unique": true
    }
  ],
  "stats": {
    "armor": 75,
    "mana": 400,
    "abilityHaste": 20
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 600,
    "total": 2500,
    "sell": 1750
  }
}
export default item