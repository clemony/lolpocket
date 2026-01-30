// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Plated Steelcaps",
  "id": 3047,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    },
    {
      "id": 1029,
      "name": "Cloth Armor",
      "gold": 300
    }
  ],
  "buildsInto": [
    {
      "id": 3174,
      "name": "Armored Advance",
      "gold": 1200
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "boots",
    "ninja tabi"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Plating",
      "effects": "Reduces all incoming <img src=\"/img/icons/basic-damage.webp\" class=\"tip-icon\" />basic damage by 10% (<i>excluding from turret attacks</i>)."
    }
  ],
  "stats": {
    "armor": 25,
    "flatMovespeed": 45
  },
  "description": "25 Armor\n45 Move Speed\n\nPlating\nReduces incoming damage from Attacks by 10%.",
  "gold": {
    "base": 600,
    "total": 1200,
    "sell": 840
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item