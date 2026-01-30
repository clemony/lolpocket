// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Goredrinker",
  "id": 226630,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "slurp"
  ],
  "active": [
    {
      "unique": true,
      "name": "Thirsting Slash",
      "effects": "Deal 175% <b>base</b> AD physical damage to enemies in a 450 radius centered around you. <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />Heal for 20% AD (+8% of your <b>missing</b> health) for each enemy champion hit."
    }
  ],
  "stats": {
    "attackDamage": 55,
    "health": 400,
    "abilityHaste": 20,
    "omnivamp": 10
  },
  "description": "55 Attack Damage\n400 Health\n20 Ability Haste\n10% Omnivamp\n\nActive - Thirsting Slash: Deal damage to nearby enemies. Restore Health for each champion hit.",
  "gold": {
    "base": 1000,
    "total": 1000,
    "sell": 400
  },
  "maps": [
    30
  ]
}
export default item