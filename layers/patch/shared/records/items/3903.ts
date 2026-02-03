// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "<rarityLegendary>Raise Morale</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>",
  "id": 3903,
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "requiredChampion": "Gangplank",
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Raise Morale",
      "effects": "{{ci|Gangplank|Gangplank}} and his allies within {{ai|Cannon Barrage|Gangplank|Gangplank}} gain 40% <b>bonus</b> movement speed, which persists for 2 seconds after leaving the area."
    }
  ],
  "stats": {},
  "description": "Allies in the Cannon Barrage gain bonus Move Speed.",
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