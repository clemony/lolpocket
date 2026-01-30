// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Guardian's Horn",
  "id": 2051,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "Golden Arm of Kobe",
    "Golden Bicep of Kobe",
    "Horn",
    "Horn of the ManWolf",
    "ManWolf"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Undaunted",
      "effects": "Reduces all sources of incoming champion damage by 15, modified to 3.75 against damage over time abilities."
    }
  ],
  "stats": {
    "health": 150,
    "healthRegen": 20
  },
  "description": "150 Health\n\n\nRecovery: Restores 20 Health every 5 seconds.Undaunted: Blocks 15 damage from attacks and spells from champions (25% effectiveness vs. damage over time abilities).\n",
  "gold": {
    "base": 950,
    "total": 950,
    "sell": 665
  },
  "maps": [
    11,
    12,
    35
  ]
}
export default item