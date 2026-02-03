// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Warmog's Armor",
  "id": 3083,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1011,
      "name": "Giant's Belt",
      "gold": 900
    },
    {
      "id": 1011,
      "name": "Giant's Belt",
      "gold": 900
    },
    {
      "id": 3801,
      "name": "Crystalline Bracer",
      "gold": 800
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "effects": "Grants <i>Warmog's Heart</i> if you have at least 2000 <b>bonus</b> health."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Warmog's Heart",
      "effects": "<img src=\"/img/icons/health-regeneration.webp\" class=\"tip-icon\" />Health regeneration 1.5% <b>maximum</b> health every 0.5 seconds if damage has not been taken in the last 8 seconds (3 seconds for damage from non-champions)."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Warmog's Vitality",
      "effects": "Gain <b>bonus</b> health equal to 12% <b>bonus</b> health <b>from items</b>."
    }
  ],
  "stats": {
    "health": 1000,
    "healthRegen": 100
  },
  "description": "1000 Health\n100% Base Health Regen\n\nWarmog's Heart \nIf you have 2000 bonus Health and have not taken damage within 8 seconds, restore  Health per second.\n\nWarmog's Vitality\nGain bonus Health equal to 12% of your Item Health (0).",
  "gold": {
    "base": 500,
    "total": 3100,
    "sell": 2170
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item