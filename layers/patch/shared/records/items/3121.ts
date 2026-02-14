// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Fimbulwinter",
  "id": 3121,
  "rank": "Legendary",
  "specialRecipe": 3119,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Awe",
      "effects": "Grants <b>bonus</b> health equal to 15% <b>bonus</b> mana."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Everlasting",
      "effects": "<img src=\"/img/icons/immobilize.webp\" class=\"tip-icon \" />Immobilizing, or <img src=\"/img/icons/slow.webp\" class=\"tip-icon \" />slowing if you are <img src=\"/img/icons/melee.webp\" class=\"tip-icon \" />melee, an enemy champion grants a 100 (+4.5% <b>current</b> mana) <img src=\"/img/icons/shield.webp\" class=\"tip-icon light:invert\" />shield for 3 seconds (8 second cooldown). The shield's strength is increased by 80% if there is more than one enemy champion within 1200 units."
    }
  ],
  "stats": {
    "health": 550,
    "mana": 1000,
    "abilityHaste": 15
  },
  "description": "550 Health\n1000 Mana\n15 Ability Haste\n\nAwe\nGain  Health.\n\nEverlasting (0s)\nImmobilizing or Slowing (Melee only) an enemy champion grants a Shield for 3 seconds. \nThe Shield is increased by 80% if more than one enemy is nearby.",
  "gold": {
    "base": 2400,
    "purchasable": false,
    "total": 2400,
    "sell": 1680
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item