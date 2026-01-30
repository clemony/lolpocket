// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Turbo Chemtank",
  "id": 443079,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "catastrophe"
  ],
  "active": [
    {
      "unique": true,
      "name": "Supercharged",
      "effects": "Removes all crowd control debuffs (except <img src=\"/img/icons/airborne.webp\" class=\"tip-icon\" />Airborne) from your champion and grants you <img src=\"/img/icons/cc-immune.webp\" class=\"tip-icon\" />total crowd control immunity for the next 3 seconds."
    }
  ],
  "stats": {
    "health": 600
  },
  "description": "600 Health\n80 Adaptive Force\n\nACTIVE (0s)\nSupercharged\nRemove all crowd control debuffs (excluding Airborne) and become Unstoppable for 3 seconds.",
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