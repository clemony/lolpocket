// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Darksteel Talons",
  "id": 443054,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "bloodrazor",
    "kitae"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Gash",
      "effects": "Basic attacks on-hit deal (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />20 – 40 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />10 – 20) true damage (+(<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />25% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />20%) <b>bonus</b> armor) <b>bonus</b> true damage."
    }
  ],
  "stats": {
    "armor": 55,
    "attackSpeed": 50,
    "percentMovespeed": 5
  },
  "description": "50% Attack Speed\n55 Armor\n5% Move Speed\n\nGash\nAttacks apply  true damage on hit.",
  "gold": {
    "base": 1000,
    "purchasable": true,
    "total": 1000,
    "sell": 400
  },
  "maps": [
    30
  ]
}
export default item