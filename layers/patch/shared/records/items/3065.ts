// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Spirit Visage",
  "id": 3065,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3211,
      "name": "Spectre's Cowl",
      "gold": 1250
    },
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "sv"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Boundless Vitality",
      "effects": "Increases all <img src=\"/img/icons/heal.webp\" class=\"tip-icon light:invert\" />healing and <img src=\"/img/icons/shield.webp\" class=\"tip-icon light:invert\" />shielding received as well as <img src=\"/img/icons/health-regeneration.webp\" class=\"tip-icon\" />health regeneration by 25%."
    }
  ],
  "stats": {
    "health": 400,
    "healthRegen": 100,
    "magicResistance": 50,
    "abilityHaste": 10
  },
  "description": "400 Health\n50 Magic Resist\n10 Ability Haste\n100% Base Health Regen\n\nBoundless Vitality\nHeals and Shields on you are increased by 25%.",
  "gold": {
    "base": 650,
    "total": 2700,
    "sell": 1890
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item