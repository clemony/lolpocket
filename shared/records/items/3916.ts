const item: Item =  {
  "name": "Oblivion Orb",
  "id": 3916,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1052,
      "name": "Amplifying Tome",
      "gold": 400
    }
  ],
  "buildsInto": [
    {
      "id": 223011,
      "name": "Chemtech Putrifier",
      "gold": 1900
    },
    {
      "id": 3011,
      "name": "Chemtech Putrifier",
      "gold": 1900
    },
    {
      "id": 3165,
      "name": "Morellonomicon",
      "gold": 2850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Increases magic damage",
  "nicknames": [
    "grievous",
    "grievous wounds"
  ],
  "passives": [
    {
      "name": "Grievous Wounds",
      "effects": "Dealing magic damage to enemy champions inflicts them with <img src=\"/img/icons/grievous-wounds.webp\" class=\"tip-icon\" />Grievous Wounds for 3 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 25
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 400,
    "total": 800,
    "sell": 560
  }
}
export default item