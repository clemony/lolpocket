// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Atma's Reckoning",
  "id": 223039,
  "rank": "Legendary",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "wreckoning"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Big Hands",
      "effects": "Gain <img src=\"/img/icons/critical-strike-chance.webp\" class=\"tip-icon\" />critical strike chance critical strike chance."
    }
  ],
  "stats": {
    "criticalStrikeChance": 20,
    "health": 700
  },
  "description": "700 Health\n20% Critical Strike Chance\n\nBig Hands\nGain 0-30% Critical Strike Chance, scaling with your bonus Health.",
  "gold": {
    "base": 2500,
    "total": 2500,
    "sell": 1250
  },
  "maps": [
    30
  ]
}
export default item