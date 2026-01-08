const item: Item =  {
  "name": "Lich Bane",
  "id": 3100,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3057,
      "name": "Sheen",
      "gold": 900
    },
    {
      "id": 3113,
      "name": "Aether Wisp",
      "gold": 900
    },
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Grants a bonus to next attack after spell cast",
  "nicknames": [
    "Spellblade"
  ],
  "passives": [
    {
      "name": "Spellblade",
      "effects": "After using an ability, your next basic attack within 10 seconds gains 50% <b>bonus</b> attack speed and deals 75% <b>base</b> AD (+40% AP) <b>bonus</b> magic damage on-hit (1.5 second cooldown, starts after using the empowered attack).",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 100,
    "percentMovespeed": 4,
    "abilityHaste": 10
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 250,
    "total": 2900,
    "sell": 2030
  }
}
export default item