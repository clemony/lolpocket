const item: Item =  {
  "name": "Swiftmarch",
  "id": 3170,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 3009,
      "name": "Boots of Swiftness",
      "gold": 1000
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Improves defense and reduces duration of disabling effects",
  "nicknames": [
    "boots"
  ],
  "passives": [
    {
      "name": "Fleetfooted",
      "effects": "Gain 40% slow resist.",
      "unique": true
    },
    {
      "name": "Noxian Fervor",
      "effects": "Gain <img src=\"/img/icons/adaptive-force.webp\" class=\"tip-icon\" />adaptive force equal to 5% of your <b>total</b> movement speed.",
      "unique": true
    }
  ],
  "stats": {
    "flatMovespeed": 65
  },
  "maps": [
    11
  ],
  "gold": {
    "base": 500,
    "total": 1500,
    "sell": 1050
  }
}
export default item