// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Lich Bane",
  "id": 3100,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3057,
      "name": "Sheen",
      "gold": 900
    },
    {
      "id": 3113,
      "name": "Aether Wisp",
      "gold": 900
    },
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "Spellblade"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Spellblade",
      "effects": "After using an ability, your next basic attack within 10 seconds gains 50% <b>bonus</b> attack speed and deals 75% <b>base</b> AD (+40% AP) <b>bonus</b> magic damage on-hit (1.5 second cooldown, starts after using the empowered attack)."
    }
  ],
  "stats": {
    "abilityPower": 100,
    "percentMovespeed": 4,
    "abilityHaste": 10
  },
  "description": "100 Ability Power\n4% Move Speed\n10 Ability Haste\n\nSpellblade\nAfter using an Ability, your next Attack deals bonus magic damage On-Hit.",
  "gold": {
    "base": 250,
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