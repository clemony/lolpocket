const item: Item =  {
  "name": "Symbiotic Soles",
  "id": 3010,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    }
  ],
  "buildsInto": [
    {
      "id": 3013,
      "name": "Synchronized Souls",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Spend Mana to recover Health",
  "nicknames": [
    "Synchronized Souls"
  ],
  "passives": [
    {
      "name": "Synchrony",
      "effects": "Gain 10 <b>bonus</b> movement speed, going on cooldown for 6 seconds upon taking or dealing damage.",
      "unique": true
    },
    {
      "name": "Symbiosis",
      "effects": "After moving a total of 150,000 units of distance, capped at 500 units at a time for <img src=\"/img/icons/dash.webp\" class=\"tip-icon\" />dashes and <img src=\"/img/icons/blink.webp\" class=\"tip-icon\" />blinks, upgrade this item to <img src=\"/img/icons/synchronized-souls.webp\" class=\"tip-icon\" />Synchronized Souls.",
      "unique": true
    }
  ],
  "stats": {
    "flatMovespeed": 40
  },
  "maps": [
    11,
    21
  ],
  "gold": {
    "base": 600,
    "total": 900,
    "sell": 630
  }
}
export default item