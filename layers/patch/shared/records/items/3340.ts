// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Stealth Ward",
  "id": 3340,
  "rank": "Trinket",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "yellow",
    "sweeper",
    "totem",
    "trinket"
  ],
  "active": [
    {
      "unique": true,
      "name": "Trinket",
      "effects": "Consume a charge to place an invisible <img src=\"/img/icons/totem-ward.webp\" class=\"tip-icon \" />Totem Ward at the target location, which grants <img src=\"/img/icons/sight.webp\" class=\"tip-icon light:invert\" />sight of the surrounding area for 90 – 120 (based on average champion level) seconds.",
      "range": 600
    }
  ],
  "stats": {},
  "description": "Active (170 - 90s, max 2 charges)\nPlaces an Invisible Stealth Ward that grants vision for 90-120 seconds.",
  "gold": {
    "base": 0,
    "total": 0,
    "sell": 0
  },
  "maps": [
    11,
    21
  ]
}
export default item