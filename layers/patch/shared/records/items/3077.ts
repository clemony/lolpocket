// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Tiamat",
  "id": 3077,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    },
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    }
  ],
  "buildsInto": [
    {
      "id": 3074,
      "name": "Ravenous Hydra",
      "gold": 3300
    },
    {
      "id": 3748,
      "name": "Titanic Hydra",
      "gold": 3300
    },
    {
      "id": 6698,
      "name": "Profane Hydra",
      "gold": 2850
    },
    {
      "id": 6631,
      "name": "Stridebreaker",
      "gold": 3300
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
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
      "name": "Crescent",
      "effects": "Deal 75% AD physical damage to enemies within a 450 radius in front of you."
    }
  ],
  "stats": {
    "attackDamage": 20
  },
  "description": "20 Attack Damage\n\nCleave\nAttacks deal physical damage to nearby enemies.\nCrescent\nDeal physical damage to enemies around you.",
  "gold": {
    "base": 500,
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