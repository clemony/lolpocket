// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Oblivion Orb",
  "id": 3916,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1052,
      "name": "Amplifying Tome",
      "gold": 400
    }
  ],
  "buildsInto": [
    {
      "id": 223011,
      "name": "Chemtech Putrifier",
      "gold": 1900
    },
    {
      "id": 3011,
      "name": "Chemtech Putrifier",
      "gold": 1900
    },
    {
      "id": 3165,
      "name": "Morellonomicon",
      "gold": 2850
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
      "name": "Grievous Wounds",
      "effects": "Dealing magic damage to enemy champions inflicts them with <img src=\"/img/icons/grievous-wounds.webp\" class=\"tip-icon\" />Grievous Wounds for 3 seconds."
    }
  ],
  "stats": {
    "abilityPower": 25
  },
  "description": "25 Ability Power\n\nGrievous Wounds\nDealing magic damage to champions applies 40% Wounds for 3 seconds.",
  "gold": {
    "base": 400,
    "total": 800,
    "sell": 560
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item