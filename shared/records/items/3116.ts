const item: Item =  {
  "name": "Rylai's Crystal Scepter",
  "id": 3116,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
    },
    {
      "id": 1011,
      "name": "Giant's Belt",
      "gold": 900
    },
    {
      "id": 1052,
      "name": "Amplifying Tome",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Abilities slow enemies",
  "nicknames": [
    "rylais"
  ],
  "passives": [
    {
      "name": "Rimefrost",
      "effects": "Dealing ability damage <img src=\"/img/icons/slow.webp\" class=\"tip-icon\" />slows affected units by 30% for 1 second.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 65,
    "health": 400
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 450,
    "total": 2600,
    "sell": 1820
  }
}
export default item