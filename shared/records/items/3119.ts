const item: Item =  {
  "name": "Winter's Approach",
  "id": 3119,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3070,
      "name": "Tear of the Goddess",
      "gold": 400
    },
    {
      "id": 1011,
      "name": "Giant's Belt",
      "gold": 900
    },
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3119_wintersapproach.png",
  "passives": [
    {
      "name": "Awe",
      "effects": "Grants <b>bonus</b> health equal to 15% <b>bonus</b> mana.",
      "unique": true
    },
    {
      "name": "Manaflow",
      "effects": "Grants a charge every 8 seconds, up to 4 charges. Consumes a charge on-hit and whenever affecting an enemy or ally with an ability to grant 3 <b>bonus</b> mana, increased to 6 mana for champion targets, up to a <b>maximum</b> of 360 <b>bonus</b> mana.",
      "unique": true
    },
    {
      "effects": "Transforms into <img src=\"/img/icons/fimbulwinter.webp\" class=\"tip-icon\" />Fimbulwinter at 360 <b>bonus</b> mana.",
      "unique": false
    }
  ],
  "stats": {
    "health": 550,
    "mana": 500,
    "abilityHaste": 15
  },
  "shop": {
    "prices": {
      "total": 2400,
      "combined": 300,
      "sell": 960
    },
    "tags": [
      "TANK"
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