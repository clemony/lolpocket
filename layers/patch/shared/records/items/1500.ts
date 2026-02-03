// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Penetrating Bullets",
  "id": 1500,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Dodge Piercing",
      "effects": "Turret attacks cannot be dodged."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Warming Up",
      "effects": "Turrets gain a stack for 5 seconds each time they strike a champion. Each stack increases their damage dealt by 50%, up to 150%."
    }
  ],
  "stats": {
    "armorPenetration": 30
  },
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