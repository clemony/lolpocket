// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Abyssal Mask",
  "id": 8020,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
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
      "name": "Unmake",
      "effects": "Enemy champions within 700 units of you become cursed, causing them to receive 12% increased magic damage from all sources."
    }
  ],
  "stats": {
    "health": 350,
    "magicResistance": 45,
    "abilityHaste": 15
  },
  "description": "350 Health\n45 Magic Resist\n15 Ability Haste\n\nUnmake\nNearby enemy champions take 12% more magic damage.",
  "gold": {
    "base": 1000,
    "total": 2650,
    "sell": 1855
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item