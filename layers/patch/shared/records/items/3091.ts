// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Wit's End",
  "id": 3091,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1043,
      "name": "Recurve Bow",
      "gold": 700
    },
    {
      "id": 1057,
      "name": "Negatron Cloak",
      "gold": 850
    },
    {
      "id": 1043,
      "name": "Recurve Bow",
      "gold": 700
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Fray",
      "effects": "Basic attacks deal 45 <b>bonus</b> magic damage on-hit."
    }
  ],
  "stats": {
    "attackSpeed": 50,
    "magicResistance": 45,
    "tenacity": 20
  },
  "description": "50% Attack Speed\n45 Magic Resist\n20% Tenacity\n\nFray\nAttacks deal bonus magic damage On-Hit.",
  "gold": {
    "base": 550,
    "total": 2800,
    "sell": 1960
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item