// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Kaenic Rookern",
  "id": 2504,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3211,
      "name": "Spectre's Cowl",
      "gold": 1250
    },
    {
      "id": 1057,
      "name": "Negatron Cloak",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Magebane",
      "effects": "After not taking magic damage for 15 seconds, gain a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs magic damage equal to 15% of <b>maximum</b> health until destroyed."
    }
  ],
  "stats": {
    "health": 400,
    "healthRegen": 100,
    "magicResistance": 80
  },
  "description": "400 Health\n80 Magic Resist\n100% Base Health Regen\n\nMagebane\nAfter not taking magic damage for 15 seconds, gain a magic shield. ",
  "gold": {
    "base": 800,
    "total": 2900,
    "sell": 2030
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item