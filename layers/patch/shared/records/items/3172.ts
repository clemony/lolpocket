// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Gunmetal Greaves",
  "id": 3172,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3006,
      "name": "Berserker's Greaves",
      "gold": 1100
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Like the Wind",
      "effects": "Basic attacks on-hit grant a stack of <i>Like The Wind</i> for 6 seconds, refreshing on subsequent attacks. For each stack, gain 5% <b>bonus</b> movement speed ms, stacking up to 5 times for a total of 25% ms."
    }
  ],
  "stats": {
    "attackSpeed": 50,
    "percentMovespeed": 10,
    "abilityHaste": 30,
    "tenacity": 20
  },
  "description": "40% Attack Speed\n45 Move Speed\n5% Life Steal\n\nNoxian Gait\nAttacks against Champions grant Move Speed On-Hit decaying over 2 seconds.",
  "gold": {
    "base": 0,
    "total": 1100,
    "sell": 770
  },
  "maps": [
    11,
    21,
    35
  ]
}
export default item