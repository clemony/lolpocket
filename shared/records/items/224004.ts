// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Spectral Cutlass",
  "id": 224004,
  "rank": "Legendary",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "active": [
    {
      "unique": true,
      "name": "Soul Anchor",
      "effects": "Mark your current location. After 4 seconds, you automatically <img src=\"/img/icons/blink.webp\" class=\"tip-icon\" />blink to the marked location after a 0.5-second delay. <i>Soul Anchor</i> may be recast within its duration to manually blink to the marked location after the same delay (45 second cooldown, starts after the blink).",
      "cooldown": 45
    }
  ],
  "stats": {
    "attackDamage": 50,
    "lethality": 15,
    "percentMovespeed": 4
  },
  "description": "55 Attack Damage\n21 Lethality\n\nActive - Soul Anchor (0s)\nMark your current location. After 5 seconds, return to that location. You may recast at any point during Soul Anchor's duration to return to your marked location early.",
  "maps": [
    30
  ],
  "gold": {
    "base": 2500,
    "total": 2500,
    "sell": 1250
  }
}
export default item