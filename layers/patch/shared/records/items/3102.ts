// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Banshee's Veil",
  "id": 3102,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1058,
      "name": "Needlessly Large Rod",
      "gold": 1200
    },
    {
      "id": 4632,
      "name": "Verdant Barrier",
      "gold": 1600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "bv",
    "spellshield",
    "spell shield"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Annul",
      "effects": "Grants a <img src=\"/img/icons/spell-shield.webp\" class=\"tip-icon light:invert\" />spell shield that blocks the next hostile ability (40 second cooldown, timer restarts upon taking damage from champions)."
    }
  ],
  "stats": {
    "abilityPower": 105,
    "magicResistance": 40
  },
  "description": "105 Ability Power\n40 Magic Resist\n\nAnnul\nGrants a Spell Shield that blocks the next enemy Ability.",
  "gold": {
    "base": 200,
    "purchasable": true,
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