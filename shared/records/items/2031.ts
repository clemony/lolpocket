const item: Item =  {
  "name": "Refillable Potion",
  "id": 2031,
  "rank": "Consumable",
  "buildsInto": [
    {
      "id": 2033,
      "name": "Corrupting Potion",
      "gold": 500
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Restores Health over time. Refills at shop.",
  "nicknames": [
    "consumable",
    "Green Potion"
  ],
  "passives": [
    {
      "effects": "Holds charges that refill upon visiting the shop.",
      "unique": true
    }
  ],
  "stats": {},
  "maps": [
    11,
    12,
    21
  ],
  "gold": {
    "base": 150,
    "total": 150,
    "sell": 60
  }
}
export default item