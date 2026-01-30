// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Serylda's Grudge",
  "id": 6694,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3133,
      "name": "Caulfield's Warhammer",
      "gold": 1050
    },
    {
      "id": 3035,
      "name": "Last Whisper",
      "gold": 1450
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "slow"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Bitter Cold",
      "effects": "Dealing ability damage to an enemy that is at or below 50% of their <b>maximum</b> health <img src=\"/img/icons/slow.webp\" class=\"tip-icon\" />slows them by 30% for 1 second."
    }
  ],
  "stats": {
    "armorPenetration": 35,
    "attackDamage": 45,
    "abilityHaste": 15
  },
  "description": "45 Attack Damage\n35% Armor Penetration\n15 Ability Haste\n\nBitter Cold\nDamaging Abilities Slow enemies below 50% Health by 30% for 1 second.",
  "gold": {
    "base": 500,
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