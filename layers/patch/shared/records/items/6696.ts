// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Axiom Arc",
  "id": 6696,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 2020,
      "name": "The Brutalizer",
      "gold": 1337
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
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Flux",
      "effects": "Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against an enemy champion within 3 seconds of damaging them refunds 15% (+0.15% per 1 Lethality) of your ultimate ability's <b>total</b> cooldown."
    }
  ],
  "stats": {
    "attackDamage": 55,
    "lethality": 18,
    "abilityHaste": 20
  },
  "description": "55 Attack Damage\n18 Lethality\n20 Ability Haste\n\nFlux\nWhen a champion that you damaged within 3 seconds dies, refund some of your Ultimate Ability's total cooldown.",
  "gold": {
    "base": 363,
    "total": 2750,
    "sell": 1925
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item