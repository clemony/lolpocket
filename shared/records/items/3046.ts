const item: Item =  {
  "name": "Phantom Dancer",
  "id": 3046,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1042,
      "name": "Dagger",
      "gold": 250
    },
    {
      "id": 3086,
      "name": "Zeal",
      "gold": 1200
    },
    {
      "id": 1042,
      "name": "Dagger",
      "gold": 250
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Move faster while attacking enemies and gain a shield when on low health.",
  "nicknames": [
    "pd"
  ],
  "passives": [
    {
      "name": "Spectral Waltz",
      "effects": "Become permanently <img src=\"/img/icons/ghosted.webp\" class=\"tip-icon\" />ghosted.",
      "unique": true
    }
  ],
  "stats": {
    "attackSpeed": 65,
    "criticalStrikeChance": 25,
    "percentMovespeed": 10
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 950,
    "total": 2650,
    "sell": 1855
  }
}
export default item