// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Gusto",
  "id": 1509,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Gusto",
      "effects": "<img src=\"/img/icons/turret.webp\" class=\"tip-icon \" />Turret basic attacks are modified to deal 45% of this minion's <b>maximum</b> health as pre-mitigation damage."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Minion Wounder",
      "effects": "Against lane minions, this minion deals <b>bonus</b> physical damage on-hit equal to 2% of the target's <b>current</b> health."
    }
  ],
  "stats": {},
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