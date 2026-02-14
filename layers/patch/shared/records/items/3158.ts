// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Ionian Boots of Lucidity",
  "id": 3158,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    },
    {
      "id": 2022,
      "name": "Glowing Mote",
      "gold": 250
    }
  ],
  "buildsInto": [
    {
      "id": 3171,
      "name": "Crimson Lucidity",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Ionian Insight",
      "effects": "Gain 10 summoner spell haste."
    }
  ],
  "stats": {
    "flatMovespeed": 45,
    "abilityHaste": 10
  },
  "description": "10 Ability Haste\n45 Move Speed\n\nIonian Insight\nGain 10 Summoner Spell Haste.\n\n",
  "gold": {
    "base": 350,
    "purchasable": true,
    "total": 900,
    "sell": 630
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item