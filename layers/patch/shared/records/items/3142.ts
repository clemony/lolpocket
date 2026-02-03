// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Youmuu's Ghostblade",
  "id": 3142,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3134,
      "name": "Serrated Dirk",
      "gold": 1000
    },
    {
      "id": 6690,
      "name": "Rectrix",
      "gold": 775
    },
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "lethality",
    "haste"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Haunt",
      "effects": "Gain (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />20 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />10) <b>bonus</b> movement speed while out-of-combat with enemy champions for 3 seconds."
    }
  ],
  "active": [
    {
      "unique": true,
      "name": "Wraith Step",
      "effects": "Gain (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />20% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />15%) <b>bonus</b> movement speed and <img src=\"/img/icons/ghosted.webp\" class=\"tip-icon \" />ghosting for (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />6 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />4) seconds."
    }
  ],
  "stats": {
    "attackDamage": 55,
    "lethality": 18,
    "percentMovespeed": 4
  },
  "description": "55 Attack Damage\n18 Lethality\n4% Move Speed\n\nHaunt \nGain  Move Speed while out of combat.\n\nWraith Step\nGain Move Speed and Ghosting for  seconds.",
  "gold": {
    "base": 675,
    "total": 2800,
    "sell": 1960
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item