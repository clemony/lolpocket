// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Mortal Reminder",
  "id": 3033,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3123,
      "name": "Executioner's Calling",
      "gold": 800
    },
    {
      "id": 3035,
      "name": "Last Whisper",
      "gold": 1450
    },
    {
      "id": 1018,
      "name": "Cloak of Agility",
      "gold": 600
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
    "armorPenetration": 30,
    "attackDamage": 35,
    "criticalStrikeChance": 25
  },
  "description": "35 Attack Damage\n30% Armor Penetration\n25% Critical Strike Chance\n\nGrievous Wounds\nDealing physical damage applies 40% Wounds to enemy champions for 3 seconds.",
  "gold": {
    "base": 150,
    "total": 3000,
    "sell": 2100
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item