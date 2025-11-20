const item: Item =  {
  "name": "Verdant Barrier",
  "id": 4632,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1052,
      "name": "Amplifying Tome",
      "gold": 400
    },
    {
      "id": 1033,
      "name": "Null-Magic Mantle",
      "gold": 400
    },
    {
      "id": 1052,
      "name": "Amplifying Tome",
      "gold": 400
    }
  ],
  "buildsInto": [
    {
      "id": 3102,
      "name": "Banshee's Veil",
      "gold": 3000
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4632_tank_t2_verdantbarrier.png",
  "nicknames": [
    "necklace"
  ],
  "passives": [
    {
      "name": "Annul",
      "effects": "Grants a <img src=\"/img/icons/spell-shield.webp\" class=\"tip-icon\" />spell shield that blocks the next hostile ability (60 second cooldown, timer restarts upon taking damage from champions).",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 40,
    "magicResistance": 25
  },
  "shop": {
    "prices": {
      "total": 1600,
      "combined": 400,
      "sell": 640
    },
    "tags": [
      "MAGE"
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