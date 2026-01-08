const item: Item =  {
  "name": "Quicksilver Sash",
  "id": 3140,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1033,
      "name": "Null-Magic Mantle",
      "gold": 400
    }
  ],
  "buildsInto": [
    {
      "id": 6035,
      "name": "Silvermere Dawn",
      "gold": 3000
    },
    {
      "id": 3139,
      "name": "Mercurial Scimitar",
      "gold": 3200
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Activate to remove all crowd control debuffs",
  "nicknames": [
    "qss",
    "mercurial scimitar",
    "silvermere dawn"
  ],
  "active": [
    {
      "name": "Quicksilver",
      "effects": "Removes all crowd control debuffs (except <img src=\"/img/icons/airborne.webp\" class=\"tip-icon\" />Airborne) from your champion.",
      "unique": true
    }
  ],
  "stats": {
    "magicResistance": 30
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 900,
    "total": 1300,
    "sell": 910
  }
}
export default item