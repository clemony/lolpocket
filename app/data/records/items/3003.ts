const item: Item =  {
  "name": "Archangel's Staff",
  "id": 3003,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3070,
      "name": "Tear of the Goddess",
      "gold": 400
    },
    {
      "id": 3802,
      "name": "Lost Chapter",
      "gold": 1200
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3003_mage_t3_archangelstaff.png",
  "simpleDescription": "Increases Ability Power based on maximum Mana",
  "nicknames": [
    "aa"
  ],
  "passives": [
    {
      "name": "Awe",
      "unique": true,
      "effects": "Grants ability power equal to 1% <b>bonus</b> mana."
    },
    {
      "name": "Manaflow",
      "unique": true,
      "effects": "Grants a charge every 8 seconds, up to 5 charges. Affecting an enemy or ally with an ability consumes a charge to grant 5 <b>bonus</b> mana, increased to 10 mana if they are a champion, up to a <b>maximum</b> of 360 <b>bonus</b> mana."
    },
    {
      "unique": false,
      "effects": "Transforms into <img src=\"/img/icons/seraphs-embrace.webp\" class=\"tip-icon\" />Seraph's Embrace at 360 <b>bonus</b> mana."
    }
  ],
  "stats": {
    "abilityPower": 70,
    "mana": 600,
    "abilityHaste": 25
  },
  "shop": {
    "prices": {
      "total": 2900,
      "combined": 450,
      "sell": 1160
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