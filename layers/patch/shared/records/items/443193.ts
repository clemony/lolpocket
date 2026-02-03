// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Gargoyle Stoneplate",
  "id": 443193,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "active": [
    {
      "unique": true,
      "name": "Unbreakable",
      "effects": "Gain a <img src=\"/img/icons/shield.webp\" class=\"tip-icon light:invert\" />shield for 300 (+100% <b>bonus</b> health) that decays over 5 seconds, and 25% increased size for the same duration."
    }
  ],
  "stats": {
    "armor": 65,
    "magicResistance": 65,
    "percentMovespeed": 10,
    "abilityHaste": 15
  },
  "description": "65 Armor\n65 Magic Resist\n15 Ability Haste\n10% Move Speed\n\nActive - Unbreakable: Gain a Shield that decays and grow in size.",
  "gold": {
    "base": 1000,
    "total": 1000,
    "sell": 400
  },
  "maps": [
    30
  ]
}
export default item