// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Mirage Blade",
  "id": 447100,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Blur",
      "effects": "Basic attacks on-hit reduce the remaining cooldowns of your abilities and spells with <img src=\"/img/icons/dash.webp\" class=\"tip-icon\" />dashes and/or <img src=\"/img/icons/blink.webp\" class=\"tip-icon\" />blinks by 12%, modified to 4% for your ultimate ability."
    }
  ],
  "stats": {
    "attackSpeed": 60,
    "percentMovespeed": 6
  },
  "description": "65 Adaptive Force\n60% Attack Speed\n6% Move Speed\n\nBlur\nOn-Hit reduce the remaining cooldowns of your Dash and Blink Abilities by 12% (reduced to 4% for Ultimates).",
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