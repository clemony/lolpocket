// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Guardian's Amulet",
  "id": 2049,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Recovery",
      "effects": "Restore 10 mana every 5 seconds. Manaless champions restore 3 health instead."
    }
  ],
  "stats": {
    "abilityPower": 20,
    "healAndShieldPower": 15,
    "abilityHaste": 20
  },
  "description": "15% Heal and Shield Power\n20 Ability Power\n20 Ability Haste\n\nRecovery\nRestores 10 Mana every 5 seconds. If you can't gain mana, restores 3 Health instead.",
  "gold": {
    "base": 500,
    "total": 500,
    "sell": 250
  },
  "maps": [
    30
  ]
}
export default item