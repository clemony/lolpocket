const item: Item =  {
  "name": "Chainlaced Crushers",
  "id": 3173,
  "rank": "Boots",
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
  "simpleDescription": "Increases Move Speed and Cooldown Reduction",
  "nicknames": [
    "boots"
  ],
  "passives": [
    {
      "name": "Noxian Persistence",
      "cooldown": "15",
      "effects": "Taking magic damage from champions grants you a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs 10 – 120 (based on level) (+10% <b>maximum</b> health) magic damage for 5 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "magicResistance": 30,
    "flatMovespeed": 45,
    "tenacity": 30
  },
  "maps": [
    11
  ],
  "gold": {
    "base": 500,
    "total": 1750,
    "sell": 1225
  }
}
export default item