// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Farsight Alteration",
  "id": 3363,
  "rank": "Trinket",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "blue",
    "totem",
    "trinket"
  ],
  "active": [
    {
      "unique": true,
      "name": "Trinket",
      "effects": "Places a visible <img src=\"/img/icons/farsight-ward.webp\" class=\"tip-icon\" />Farsight Ward at the target location that grants <img src=\"/img/icons/sight.webp\" class=\"tip-icon\" />sight of the surrounding area, including over terrain and through brush and lasting indefinitely. Also grants sight of the area in a 800 radius for 2 seconds. Upon detecting an enemy champion, the ward will increase its sight radius to 800 units and destroy itself after 3 seconds.",
      "range": 4000
    }
  ],
  "stats": {},
  "description": "Active (198 - 99s)\nReveals a distant area for 2 seconds and leaves a Ward that expires upon spotting an enemy champion.",
  "gold": {
    "base": 0,
    "total": 0,
    "sell": 0
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item