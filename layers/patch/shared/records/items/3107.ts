// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Redemption",
  "id": 3107,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    },
    {
      "id": 3114,
      "name": "Forbidden Idol",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "burn"
  ],
  "active": [
    {
      "unique": true,
      "name": "Intervention",
      "effects": "Call upon a 550-radius beam of light to strike upon the target location after 2.5 seconds, granting <img src=\"/img/icons/sight.webp\" class=\"tip-icon light:invert\" />sight of the area for the duration. Allies within the area are <img src=\"/img/icons/heal.webp\" class=\"tip-icon light:invert\" />healed for 150 – 350 (based on target's level), while enemy champions within take 10% of target's <b>maximum</b> health as true damage. <b>Can be used while dead.</b>",
      "range": 5500
    }
  ],
  "stats": {
    "abilityPower": 30,
    "healAndShieldPower": 10,
    "manaRegen": 100,
    "abilityHaste": 15
  },
  "description": "30 Ability Power\n15 Ability Haste\n100% Base Mana Regen\n10% Heal and Shield Power\n\nIntervention\nRestore 150 - 350 Health to allied units and deal 10% max Health true damage to enemy champions after 2.5 seconds.",
  "gold": {
    "base": 850,
    "total": 2300,
    "sell": 1610
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item