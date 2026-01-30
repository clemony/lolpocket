// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Verdant Barrier",
  "id": 4632,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1052,
      "name": "Amplifying Tome",
      "gold": 400
    },
    {
      "id": 1033,
      "name": "Null-Magic Mantle",
      "gold": 400
    },
    {
      "id": 1052,
      "name": "Amplifying Tome",
      "gold": 400
    }
  ],
  "buildsInto": [
    {
      "id": 3102,
      "name": "Banshee's Veil",
      "gold": 3000
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "necklace"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Annul",
      "effects": "Grants a <img src=\"/img/icons/spell-shield.webp\" class=\"tip-icon\" />spell shield that blocks the next hostile ability (60 second cooldown, timer restarts upon taking damage from champions)."
    }
  ],
  "stats": {
    "abilityPower": 40,
    "magicResistance": 25
  },
  "description": "40 Ability Power\n25 Magic Resist\n\nAnnul\nGrants a Spell Shield that blocks the next enemy Ability.",
  "gold": {
    "base": 400,
    "total": 1600,
    "sell": 1120
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item