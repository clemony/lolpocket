const item: Item =  {
  "name": "Morellonomicon",
  "id": 3165,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3916,
      "name": "Oblivion Orb",
      "gold": 800
    },
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
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
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3165_mage_t3_morellonomicon.png",
  "simpleDescription": "Increases magic damage",
  "nicknames": [
    "nmst",
    "grievous",
    "last shadow",
    "book",
    "forbidden book"
  ],
  "passives": [
    {
      "name": "Grievous Wounds",
      "unique": true,
      "effects": "Dealing magic damage to enemy champions inflicts them with <img src=\"/img/icons/grievous-wounds.webp\" class=\"tip-icon\" />Grievous Wounds for 3 seconds."
    }
  ],
  "stats": {
    "abilityPower": 75,
    "health": 350,
    "abilityHaste": 15
  },
  "shop": {
    "prices": {
      "total": 2850,
      "combined": 400,
      "sell": 1140
    },
    "tags": [
      "MAGE",
      "SUPPORT"
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