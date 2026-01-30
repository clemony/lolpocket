// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Mercury's Treads",
  "id": 3111,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    },
    {
      "id": 1033,
      "name": "Null-Magic Mantle",
      "gold": 400
    }
  ],
  "buildsInto": [
    {
      "id": 3173,
      "name": "Chainlaced Crushers",
      "gold": 1250
    }
  ],
  "specialRecipe": 0,
  "noEffects": true,
  "removed": false,
  "nicknames": [
    "boots",
    "mercs"
  ],
  "stats": {
    "magicResistance": 20,
    "flatMovespeed": 45,
    "tenacity": 30
  },
  "description": "20 Magic Resist\n45 Move Speed\n30% Tenacity\n\n",
  "gold": {
    "base": 550,
    "total": 1250,
    "sell": 875
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item