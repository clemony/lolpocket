// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Cryptbloom",
  "id": 3137,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 4630,
      "name": "Blighting Jewel",
      "gold": 1100
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Life From Death",
      "effects": "Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon light:invert\" />takedown against an enemy champion while alive and within 3 seconds of damaging them summons a nova that radiates from the location of their death over 1.75 seconds, <img src=\"/img/icons/heal.webp\" class=\"tip-icon light:invert\" />healing you and allied champions hit for 100 (+20% AP).",
      "cooldown": "60"
    }
  ],
  "stats": {
    "abilityPower": 75,
    "percentMagicPenetration": 30,
    "abilityHaste": 20
  },
  "description": "75 Ability Power\n30% Magic Penetration\n20 Ability Haste\n\nLife from Death\nWhen a champion that you damaged within 3 seconds dies, a nova spreads from their corpse that heals.",
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