// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Sword of the Divine",
  "id": 443060,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "sotd"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Excoriate",
      "effects": "Gain a random amount of <b>bonus</b> critical strike damage that scales up to 50% of your critical strike chance, with the value of this amount changing every 0.25 seconds."
    }
  ],
  "stats": {
    "criticalStrikeChance": 50
  },
  "description": "110 Adaptive Force\n50% Critical Strike Chance\n\nExcoriate\nEach Critical strike deals random bonus Critical Strike Damage, scaling up to 50% of your Critical Strike Chance.",
  "gold": {
    "base": 1000,
    "total": 1000,
    "sell": 400
  },
  "maps": [
    30
  ]
}
export default item