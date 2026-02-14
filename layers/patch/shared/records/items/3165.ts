// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Morellonomicon",
  "id": 3165,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3916,
      "name": "Oblivion Orb",
      "gold": 800
    },
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
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
    "forbidden book",
    "grievous",
    "grievous wounds",
    "last shadow",
    "nmst"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Grievous Wounds",
      "effects": "Dealing magic damage to enemy champions inflicts them with <img src=\"/img/icons/grievous-wounds.webp\" class=\"tip-icon \" />Grievous Wounds for 3 seconds."
    }
  ],
  "stats": {
    "abilityPower": 75,
    "health": 350,
    "abilityHaste": 15
  },
  "description": "75 Ability Power\n350 Health\n15 Ability Haste\n\nGrievous Wounds\nDealing magic damage to champions applies 40% Wounds for 3 seconds.",
  "gold": {
    "base": 400,
    "purchasable": true,
    "total": 2850,
    "sell": 1995
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item