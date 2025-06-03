export const ChainlacedCrushers: Item = {
  "name": "Chainlaced Crushers",
  "id": 3173,
  "rank": [
    "Boots"
  ],
  "buildsFrom": [
    {
      "id": 3111,
      "name": "Mercury's Treads",
      "gold": 1250
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/boots_tier3_mercury_64.png",
  "simpleDescription": "Increases Move Speed and Cooldown Reduction",
  "passives": [
    {
      "name": "Noxian Persistence",
      "unique": true,
      "effects": "Taking magic damage from champions grants you a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs 10 – 120 (based on level) (+4% <b>maximum</b> health) magic damage for 4 seconds.",
      "cooldown": "15"
    }
  ],
  "stats": {
    "magicResistance": 35,
    "flatMovespeed": 50,
    "tenacity": 30
  },
  "shop": {
    "prices": {
      "total": 1750,
      "combined": 500,
      "sell": 700
    },
    "purchasable": true
  },
  "maps": [
    11
  ]
}
