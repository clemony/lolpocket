// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Stridebreaker",
  "id": 6631,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3077,
      "name": "Tiamat",
      "gold": 1200
    },
    {
      "id": 3044,
      "name": "Phage",
      "gold": 1100
    },
    {
      "id": 1042,
      "name": "Dagger",
      "gold": 250
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "kneecapper",
    "whipchain"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Cleave",
      "effects": "Basic attacks on-hit deal (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />40% AD /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />20% AD) ad physical damage to other enemies in a 350 radius centered around the target."
    }
  ],
  "active": [
    {
      "unique": true,
      "name": "Breaking Shockwave",
      "effects": "Deal 80% AD physical damage to enemies in a 450 radius centered around you and <img src=\"/img/icons/slow.webp\" class=\"tip-icon \" />slow them by 35% for 3 seconds. For each champion hit, gain 35% <b>bonus</b> movement speed decaying over 3 seconds. Can move while casting."
    }
  ],
  "stats": {
    "attackDamage": 40,
    "attackSpeed": 25,
    "health": 450
  },
  "description": "40 Attack Damage\n25% Attack Speed\n450 Health\n\nCleave\nAttacks deal physical damage to nearby enemies.\nBreaking Shockwave\nDeal physical damage and Slow nearby enemies by 35%.\nGain 35% decaying Move Speed per champion hit for 3 seconds.",
  "gold": {
    "base": 750,
    "purchasable": true,
    "total": 3300,
    "sell": 2310
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item