// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Chempunk Chainsword",
  "id": 6609,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3123,
      "name": "Executioner's Calling",
      "gold": 800
    },
    {
      "id": 1011,
      "name": "Giant's Belt",
      "gold": 900
    },
    {
      "id": 3133,
      "name": "Caulfield's Warhammer",
      "gold": 1050
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "grievous",
    "grievous wounds"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Hackshorn",
      "effects": "Dealing physical damage to enemy champions inflicts them with <img src=\"/img/icons/grievous-wounds.webp\" class=\"tip-icon \" />Grievous Wounds for 3 seconds."
    }
  ],
  "stats": {
    "attackDamage": 45,
    "health": 450,
    "abilityHaste": 15
  },
  "description": "45 Attack Damage\n450 Health\n15 Ability Haste\n\nHackshorn\nDealing physical damage applies 40% Wounds to enemy champions for 3 seconds.",
  "gold": {
    "base": 350,
    "purchasable": true,
    "total": 3100,
    "sell": 2170
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item