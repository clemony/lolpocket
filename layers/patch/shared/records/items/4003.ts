// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Lifeline",
  "id": 4003,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 6690,
      "name": "Rectrix",
      "gold": 775
    },
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    }
  ],
  "buildsInto": [
    {
      "id": 4004,
      "name": "Spectral Cutlass",
      "gold": 2800
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "lethality"
  ],
  "active": [
    {
      "unique": true,
      "name": "Soul Anchor",
      "effects": "Mark your current location. After 4 seconds, you automatically <img src=\"/img/icons/blink.webp\" class=\"tip-icon\" />blink to the marked location after a 0.5-second delay. <i>Soul Anchor</i> may be recast within its duration to manually blink to the marked location after the same delay (45 second cooldown, starts after the blink).",
      "cooldown": 45
    }
  ],
  "stats": {
    "attackDamage": 25,
    "lethality": 5,
    "percentMovespeed": 4
  },
  "description": "25 Attack Damage\n5 Lethality\n4% Move Speed\n\nActive - Soul Anchor (0s)\nMark your current location. After 4 seconds, return to that location. You may recast at any point during Soul Anchor's duration to return to your marked location early.",
  "gold": {
    "base": 475,
    "total": 1600,
    "sell": 1120
  },
  "maps": [
    12,
    21,
    35
  ]
}
export default item