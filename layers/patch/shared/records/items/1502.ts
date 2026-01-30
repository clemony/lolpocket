// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Reinforced Armor",
  "id": 1502,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "effects": "While no enemy <img src=\"/img/icons/minions.webp\" class=\"tip-icon\" />minions or <img src=\"/img/icons/rift-herald-mercenary.webp\" class=\"tip-icon\" />Rift Herald Mercenary are within range, gain 80% damage reduction, including against true damage."
    }
  ],
  "stats": {},
  "description": "Reinforced\nTurrets take 80% reduced damage, including True Damage, when no enemy Lane Minions or Rift Herald are nearby.\n\nMelee Weakness\nTurrets take 20% increased damage from melee Champions.",
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