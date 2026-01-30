// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Force of Nature",
  "id": 4401,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1057,
      "name": "Negatron Cloak",
      "gold": 850
    },
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    },
    {
      "id": 3066,
      "name": "Winged Moonplate",
      "gold": 800
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "fon"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Steadfast",
      "effects": "Taking magic damage from champions generates a stack of <i>Steadfast</i> for 7 seconds, stacking up to 8 times with the duration refreshing on subsequent magic damage from them and whenever dealing damage to them. Becoming <img src=\"/img/icons/immobilize.webp\" class=\"tip-icon\" />immobilized by an enemy champion generates 2 stacks and also refreshes the duration. Once per cast instance, each incoming basic attack, ability, or item effect can only generate 1 stack of <i>Steadfast</i> from their damage every 1 second. At <b>maximum</b> stacks, gain 70 <b>bonus</b> magic resistance and 6% <b>bonus</b> movement speed."
    }
  ],
  "stats": {
    "health": 400,
    "magicResistance": 55,
    "percentMovespeed": 4
  },
  "description": "400 Health\n55 Magic Resist\n4% Move Speed\n\nSteadfast\nGain 70 Magic Resist and 6% bonus Move Speed after taking magic damage from Champions 8 times.",
  "gold": {
    "base": 750,
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