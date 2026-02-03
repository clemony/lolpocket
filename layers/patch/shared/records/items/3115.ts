// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Nashor's Tooth",
  "id": 3115,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1043,
      "name": "Recurve Bow",
      "gold": 700
    },
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "nashors"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Icathian Bite",
      "effects": "Basic attacks deal 15 (+15% AP) <b>bonus</b> magic damage on-hit."
    }
  ],
  "stats": {
    "abilityPower": 80,
    "attackSpeed": 50,
    "abilityHaste": 15
  },
  "description": "80 Ability Power\n50% Attack Speed\n15 Ability Haste\n\nIcathian Bite\nAttacks deal bonus magic damage On-Hit.",
  "gold": {
    "base": 500,
    "total": 2900,
    "sell": 2030
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item