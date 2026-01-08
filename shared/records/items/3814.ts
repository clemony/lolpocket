const item: Item =  {
  "name": "Edge of Night",
  "id": 3814,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3134,
      "name": "Serrated Dirk",
      "gold": 1000
    },
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Periodically blocks enemy abilities",
  "nicknames": [
    "eon",
    "lethality",
    "spellshield",
    "spell shield"
  ],
  "passives": [
    {
      "name": "Annul",
      "effects": "Grants a <img src=\"/img/icons/spell-shield.webp\" class=\"tip-icon\" />spell shield that blocks the next hostile ability (40 second cooldown, timer restarts upon taking damage from champions).",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 50,
    "health": 250,
    "lethality": 15
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 850,
    "total": 3000,
    "sell": 2100
  }
}
export default item