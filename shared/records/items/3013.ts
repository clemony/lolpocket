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
  "nicknames": [
    "boots"
  ],
  "passives": [
    {
      "name": "Voidborn",
      "effects": "Gain <img src=\"/img/icons/empowered-recall.webp\" class=\"tip-icon\" />Empowered Recall.",
      "unique": true
    },
    {
      "name": "Synchrony",
      "effects": "Gain 45 <b>bonus</b> movement speed, going on cooldown for 6 seconds upon taking or dealing damage.",
      "unique": true
    }
  ],
  "stats": {
    "flatMovespeed": 45
  },
  "maps": [
    11,
    21
  ],
  "gold": {
    "base": 0,
    "purchasable": false,
    "total": 900,
    "sell": 630
  }
}
export default item