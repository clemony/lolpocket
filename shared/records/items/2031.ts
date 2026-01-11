// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
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
  "nicknames": [
    "consumable",
    "Green Potion"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "effects": "Holds charges that refill upon visiting the shop."
    }
  ],
  "stats": {},
  "description": "\n\nActive (2 charges)\nRestores 100 Health over 12 seconds. \nRefills upon visiting the shop.",
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