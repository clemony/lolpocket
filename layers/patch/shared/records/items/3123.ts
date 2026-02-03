// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Executioner's Calling",
  "id": 3123,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    }
  ],
  "buildsInto": [
    {
      "id": 3033,
      "name": "Mortal Reminder",
      "gold": 3000
    },
    {
      "id": 6609,
      "name": "Chempunk Chainsword",
      "gold": 3100
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "grievous",
    "grievous wounds"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Grievous Wounds",
      "effects": "Dealing physical damage to enemy champions inflicts them with <img src=\"/img/icons/grievous-wounds.webp\" class=\"tip-icon \" />Grievous Wounds for 3 seconds."
    }
  ],
  "stats": {
    "attackDamage": 15
  },
  "description": "15 Attack Damage\n\nGrievous Wounds\nDealing physical damage to champions applies 40% Wounds for 3 seconds.",
  "gold": {
    "base": 450,
    "total": 800,
    "sell": 560
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item