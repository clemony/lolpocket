const item: Item =  {
  "name": "Unending Despair",
  "id": 2502,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3105,
      "name": "Aegis of the Legion",
      "gold": 1100
    },
    {
      "id": 1011,
      "name": "Giant's Belt",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2502_unendingdespair.png",
  "passives": [
    {
      "name": "Anguish",
      "effects": "Every 4 seconds after entering combat with champions, sap all enemy champions around you within 650 units to deal magic damage equal to 3% of your <b>bonus</b> health to them and <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal yourself equal to 250% of the post-mitigation damage dealt.",
      "unique": true
    }
  ],
  "stats": {
    "armor": 25,
    "health": 400,
    "magicResistance": 25,
    "abilityHaste": 10
  },
  "shop": {
    "prices": {
      "total": 2800,
      "combined": 800,
      "sell": 1120
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