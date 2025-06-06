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
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3140_marksman_t2_quicksilversash.png",
  "simpleDescription": "Activate to remove all crowd control debuffs",
  "nicknames": [
    "qss"
  ],
  "active": [
    {
      "name": "Quicksilver",
      "unique": true,
      "effects": "Removes all crowd control debuffs (except <img src=\"/img/icons/airborne.webp\" class=\"tip-icon\" />Airborne) from your champion."
    }
  ],
  "stats": {
    "magicResistance": 30
  },
  "shop": {
    "prices": {
      "total": 1300,
      "combined": 900,
      "sell": 520
    },
    "tags": [
      "FIGHTER",
      "MARKSMAN",
      "ASSASSIN"
    ]
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item