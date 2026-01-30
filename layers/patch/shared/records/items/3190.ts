// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Locket of the Iron Solari",
  "id": 3190,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 1029,
      "name": "Cloth Armor",
      "gold": 300
    },
    {
      "id": 1033,
      "name": "Null-Magic Mantle",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "active": [
    {
      "unique": true,
      "name": "Devotion",
      "effects": "Grants you and allied champions within 850 units a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield for 200 – 360 (based on target's level) that decays over 2.5 seconds."
    }
  ],
  "stats": {
    "armor": 25,
    "health": 200,
    "magicResistance": 25,
    "abilityHaste": 10
  },
  "description": "200 Health\n25 Armor\n25 Magic Resist\n10 Ability Haste\n\nDevotion\nGrant nearby allies a 200 - 360 Shield that decays over 2.5 seconds.",
  "gold": {
    "base": 700,
    "total": 2200,
    "sell": 1540
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item