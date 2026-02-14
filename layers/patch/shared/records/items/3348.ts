// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Arcane Sweeper",
  "id": 3348,
  "rank": "Trinket",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "active": [
    {
      "unique": false,
      "effects": "Summons a mist over the target location for 5 seconds, granting <img src=\"/img/icons/sight.webp\" class=\"tip-icon light:invert\" />sight of the area in a 375 radius and <img src=\"/img/icons/true-sight.webp\" class=\"tip-icon \" />revealing enemy <img src=\"/img/icons/stealthed-trap.webp\" class=\"tip-icon \" />traps within for 3 seconds.",
      "range": 800
    }
  ],
  "stats": {},
  "description": "UNIQUE Active - Hunter's Sight: An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions and granting True Sight of traps in the area for 3 seconds (30 second cooldown).",
  "gold": {
    "base": 0,
    "purchasable": false,
    "total": 0,
    "sell": 0
  },
  "maps": [
    30
  ]
}
export default item