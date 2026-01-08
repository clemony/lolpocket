const item: Item =  {
  "name": "Mercurial Scimitar",
  "id": 3139,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3140,
      "name": "Quicksilver Sash",
      "gold": 1300
    },
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    },
    {
      "id": 1053,
      "name": "Vampiric Scepter",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Activate to remove all crowd control debuffs and grant massive Move Speed",
  "nicknames": [
    "merc scim",
    "qss",
    "quicksilver sash",
    "silvermere dawn"
  ],
  "active": [
    {
      "name": "Quicksilver",
      "effects": "Removes all crowd control debuffs (except <img src=\"/img/icons/airborne.webp\" class=\"tip-icon\" />Airborne) from your champion and grants 50% <b>bonus total</b> movement speed and <img src=\"/img/icons/ghosted.webp\" class=\"tip-icon\" />ghosting for 2 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 50,
    "lifesteal": 10,
    "magicResistance": 35
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 125,
    "total": 3200,
    "sell": 2240
  }
}
export default item