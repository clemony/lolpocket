const item: Item =  {
  "name": "Synchronized Souls",
  "id": 3013,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 3010,
      "name": "Symbiotic Soles",
      "gold": 900
    }
  ],
  "buildsInto": [
    {
      "id": 3176,
      "name": "Forever Forward",
      "gold": 1400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3010_voidwalkers.png",
  "nicknames": [
    "boots"
  ],
  "passives": [
    {
      "name": "Voidborn",
      "unique": true,
      "effects": "Gain <img src=\"/img/icons/empowered-recall.webp\" class=\"tip-icon\" />Empowered Recall."
    },
    {
      "name": "Synchrony",
      "unique": true,
      "effects": "Gain 45 <b>bonus</b> movement speed while out-of-combat."
    }
  ],
  "stats": {
    "flatMovespeed": 45
  },
  "shop": {
    "prices": {
      "total": 900,
      "combined": 0,
      "sell": 360
    },
    "purchasable": false
  },
  "maps": [
    11,
    21
  ]
}
export default item