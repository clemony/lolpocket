// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Reinforced Armor",
  "id": 1506,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "effects": "While no enemy <img src=\"/img/icons/minions.webp\" class=\"tip-icon light:invert\" />minions or <img src=\"/img/icons/rift-herald-mercenary.webp\" class=\"tip-icon\" />Rift Herald Mercenary are within range, gain 80% damage reduction, including against true damage."
    },
    {
      "unique": true,
      "mythic": false,
      "effects": "Base turrets have health regeneration, but cannot regenerate past their current segment."
    }
  ],
  "stats": {},
  "description": "Reinforced\nTurrets take 80% reduced damage, including True Damage, when no enemy Lane Minions or Rift Herald are nearby.\n\nMelee Weakness\nTurrets take 20% increased damage from melee Champions.\n\nRegeneration\nInhibitor turrets have health regeneration but cannot regenerate past their current segment at 30%, 75%, and 100% health.",
  "gold": {
    "base": 0,
    "purchasable": false,
    "total": 0,
    "sell": 0
  },
  "maps": [
    11,
    12,
    21,
    30,
    35
  ]
}
export default item