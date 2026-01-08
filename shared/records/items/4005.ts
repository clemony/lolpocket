const item: Item =  {
  "name": "Imperial Mandate",
  "id": 4005,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    },
    {
      "id": 4642,
      "name": "Bandleglass Mirror",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Defer damage until later.",
  "nicknames": [
    "banner of command",
    "flag"
  ],
  "passives": [
    {
      "name": "Coordinated Fire",
      "effects": "Abilities that <img src=\"/img/icons/slow.webp\" class=\"tip-icon\" />slow or <img src=\"/img/icons/immobilize.webp\" class=\"tip-icon\" />immobilize enemy champions mark them for 5 seconds. Allied champions that damage marked enemies consume the mark to deal 10% of the target's <b>current</b> health <b>bonus</b> magic damage (9 second cooldown per target, starts upon mark application).",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 60,
    "manaRegen": 125,
    "abilityHaste": 20
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 500,
    "total": 2250,
    "sell": 1575
  }
}
export default item