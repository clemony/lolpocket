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
  "simpleDescription": "Marks the ground, and returns you there after a few moments",
  "nicknames": [
    "lethality"
  ],
  "active": [
    {
      "name": "Soul Anchor",
      "cooldown": 45,
      "effects": "Mark your current location. After 4 seconds, you automatically <img src=\"/img/icons/blink.webp\" class=\"tip-icon\" />blink to the marked location after a 0.5-second delay. <i>Soul Anchor</i> may be recast within its duration to manually blink to the marked location after the same delay (45 second cooldown, starts after the blink).",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 25,
    "lethality": 5,
    "percentMovespeed": 4
  },
  "maps": [
    12,
    21,
    35
  ],
  "gold": {
    "base": 475,
    "total": 1600,
    "sell": 1120
  }
}
export default item