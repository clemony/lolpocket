// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Fiendhunter Bolts",
  "id": 2512,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3086,
      "name": "Zeal",
      "gold": 1200
    },
    {
      "id": 3144,
      "name": "Scout's Slingshot",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Night Vigil",
      "effects": "Gain 30 ultimate haste."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Opening Barrage",
      "effects": "After casting your ultimate ability, your next 3 basic attacks within 8 seconds gain 50% <b>bonus</b> attack speed and will <img src=\"/img/icons/critically-strike.webp\" class=\"tip-icon\" />critically strike for {{critical damage|50|50|50}} <b>bonus</b> damage. If an attack would have already critically struck, it instead critically strikes for {{critical damage|100|100|100}} <b>bonus</b> damage and deals <b>bonus</b> true damage equal to 10% of the triggering attack's damage.",
      "cooldown": 45
    }
  ],
  "stats": {
    "attackSpeed": 40,
    "criticalStrikeChance": 25,
    "percentMovespeed": 4
  },
  "description": "40% Attack Speed\n25% Critical Strike Chance\n4% Move Speed\n\nNight Vigil\nGain 30 Ultimate Ability Haste.\n\nOpening Barrage\nAfter casting your Ultimate, your next 3 basic attacks gain 50% Attack Speed and Critically Strike for 75% of your normal Critical Strike damage for 8 seconds. If an attack would already Critically Strike, instead it deals 10% bonus true damage.",
  "gold": {
    "base": 850,
    "total": 2650,
    "sell": 1855
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item