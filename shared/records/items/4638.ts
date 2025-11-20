const item: Item =  {
  "name": "Watchful Wardstone",
  "id": 4638,
  "rank": "Epic",
  "buildsInto": [
    {
      "id": 4643,
      "name": "Vigilant Wardstone",
      "gold": 2300
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4638_enchanter_t3_watchfulsightstone.png",
  "nicknames": [
    "Support",
    "Ward"
  ],
  "passives": [
    {
      "name": "Arcane Cache",
      "effects": "Purchasing a <img src=\"/img/icons/control-ward.webp\" class=\"tip-icon\" />Control Ward stocks it as a charge, up to maximum of 3.",
      "unique": true
    }
  ],
  "active": [
    {
      "effects": "Consumes a charge of <i>Arcane Cache</i> to place a visible <img src=\"/img/icons/control-ward.webp\" class=\"tip-icon\" />Control Ward at the target location (600 range).",
      "unique": true
    }
  ],
  "stats": {
    "armor": 10,
    "health": 150,
    "magicResistance": 15,
    "abilityHaste": 10
  },
  "shop": {
    "prices": {
      "total": 1100,
      "combined": 1100,
      "sell": 440
    },
    "tags": [
      "SUPPORT"
    ]
  },
  "maps": [
    11
  ]
}
export default item