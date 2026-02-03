// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Force Of Entropy",
  "id": 443061,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Atrophy",
      "effects": "<img src=\"/img/icons/immobilize.webp\" class=\"tip-icon \" />Immobilizing effects against <img src=\"/img/icons/champions.webp\" class=\"tip-icon \" />champions have a 0% – 100% (based on critical strike chance) chance to increase in duration by 0.25 seconds (+33% of immobilizing effect's duration)."
    }
  ],
  "stats": {
    "criticalStrikeChance": 25,
    "health": 900,
    "abilityHaste": 30
  },
  "description": "900 Health\n30 Ability Haste\n25% Critical Strike Chance\n\nAtrophy\nImmobilizing Crowd Control effects you apply roll your Critical Chance to increase their duration by 0.25 +33% seconds.",
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