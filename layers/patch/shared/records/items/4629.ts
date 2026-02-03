// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Cosmic Drive",
  "id": 4629,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 3113,
      "name": "Aether Wisp",
      "gold": 900
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "cooldown hat"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Spelldance",
      "effects": "Dealing magic damage or true damage damage to an enemy champion grants you 20 <b>bonus</b> movement speed ms for 4 seconds."
    }
  ],
  "stats": {
    "abilityPower": 70,
    "health": 350,
    "percentMovespeed": 4,
    "abilityHaste": 25
  },
  "description": "70 Ability Power\n350 Health\n25 Ability Haste\n4% Move Speed\n\nSpelldance\nDealing magic or true damage to champions grants Move Speed for 4 seconds. ",
  "gold": {
    "base": 450,
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