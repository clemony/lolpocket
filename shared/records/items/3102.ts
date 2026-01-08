const item: Item =  {
  "name": "Banshee's Veil",
  "id": 3102,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1058,
      "name": "Needlessly Large Rod",
      "gold": 1200
    },
    {
      "id": 4632,
      "name": "Verdant Barrier",
      "gold": 1600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Periodically blocks enemy abilities",
  "nicknames": [
    "bv",
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
    "abilityPower": 105,
    "magicResistance": 40
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 200,
    "total": 3000,
    "sell": 2100
  }
}
export default item