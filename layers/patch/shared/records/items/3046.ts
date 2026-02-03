// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Phantom Dancer",
  "id": 3046,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1042,
      "name": "Dagger",
      "gold": 250
    },
    {
      "id": 3086,
      "name": "Zeal",
      "gold": 1200
    },
    {
      "id": 1042,
      "name": "Dagger",
      "gold": 250
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "pd"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Spectral Waltz",
      "effects": "Become permanently <img src=\"/img/icons/ghosted.webp\" class=\"tip-icon \" />ghosted."
    }
  ],
  "stats": {
    "attackSpeed": 65,
    "criticalStrikeChance": 25,
    "percentMovespeed": 10
  },
  "description": "65% Attack Speed\n25% Critical Strike Chance\n10% Move Speed\n\nSpectral Waltz\nBecome Ghosted.",
  "gold": {
    "base": 950,
    "total": 2650,
    "sell": 1855
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item