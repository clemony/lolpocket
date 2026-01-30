// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Guardian's Orb",
  "id": 3112,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Recovery",
      "effects": "Gain 10 <b>bonus</b> mana regeneration. Manaless champions gain 15 <b>bonus</b> health regeneration instead."
    }
  ],
  "stats": {
    "abilityPower": 50,
    "health": 150
  },
  "description": "50 Ability Power\n150 Health\n\n\nRecovery: Restores 10 Mana every 5 seconds. If you can't gain mana, restores 15 Health instead.\n",
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