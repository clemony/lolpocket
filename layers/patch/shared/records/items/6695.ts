// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Serpent's Fang",
  "id": 6695,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3134,
      "name": "Serrated Dirk",
      "gold": 1000
    },
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "lethality"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Shield Reaver",
      "effects": "Dealing damage to an enemy champion inflicts them with venom for 3 seconds, reducing any <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shields they gain within the duration by (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />50% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />35%), and if the target was not already afflicted by the venom, reducing all of their active shields by the same amount."
    }
  ],
  "stats": {
    "attackDamage": 55,
    "lethality": 15
  },
  "description": "55 Attack Damage\n15 Lethality\n\nShield Reaver\nDamaging an enemy champion reduces Shields they gain by % for 3 seconds. \nIf they were not already affected by Shield Reaver, reduce Shields on them by %.",
  "gold": {
    "base": 625,
    "total": 2500,
    "sell": 1750
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item