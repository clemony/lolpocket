// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Dawncore",
  "id": 6621,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
    },
    {
      "id": 3114,
      "name": "Forbidden Idol",
      "gold": 600
    },
    {
      "id": 3114,
      "name": "Forbidden Idol",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "dawncore"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "First Light",
      "effects": "Gain 2% heal and shield power hsp and 10 ability power for every additional 100% <b>base</b> mana regeneration."
    }
  ],
  "stats": {
    "abilityPower": 45,
    "healAndShieldPower": 16,
    "manaRegen": 100
  },
  "description": "45 Ability Power\n16% Heal and Shield Power\n100% Base Mana Regen\n\nFirst Light\nGain 2% Heal and Shield Power and 10 Ability Power per 100% Base Mana Regen.",
  "gold": {
    "base": 450,
    "purchasable": true,
    "total": 2500,
    "sell": 1750
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item