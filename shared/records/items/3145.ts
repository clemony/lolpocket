const item: Item =  {
  "name": "Hextech Alternator",
  "id": 3145,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1052,
      "name": "Amplifying Tome",
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
      "id": 4646,
      "name": "Stormsurge",
      "gold": 2800
    },
    {
      "id": 4645,
      "name": "Shadowflame",
      "gold": 3200
    },
    {
      "id": 3152,
      "name": "Hextech Rocketbelt",
      "gold": 2650
    },
    {
      "id": 4636,
      "name": "Night Harvester",
      "gold": 2765
    },
    {
      "id": 6655,
      "name": "Luden's Companion",
      "gold": 2750
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3145_mage_t2_hextechalternator.png",
  "simpleDescription": "Increases Ability Power. Deal bonus magic damage on attack periodically.",
  "nicknames": [
    "revolver",
    "pewpew"
  ],
  "passives": [
    {
      "name": "Revved",
      "cooldown": "40",
      "effects": "Damaging an enemy champion deals 65 <b>bonus</b> magic damage.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 45
  },
  "shop": {
    "prices": {
      "total": 1100,
      "combined": 300,
      "sell": 440
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