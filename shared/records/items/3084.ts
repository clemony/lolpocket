const item: Item =  {
  "name": "Heartsteel",
  "id": 3084,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1011,
      "name": "Giant's Belt",
      "gold": 900
    },
    {
      "id": 3801,
      "name": "Crystalline Bracer",
      "gold": 800
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
  "simpleDescription": "Restores Health on kill or assist",
  "nicknames": [
    "Quest",
    "Steal",
    "Boy Band",
    "BoyBand"
  ],
  "passives": [
    {
      "name": "Colossal Consumption",
      "effects": "While within 700 units of an enemy champion, generate a stack on them each second, stacking up to 3 times. Your next basic attack against a target with 3 stacks is empowered to consume them all to deal 70 physical damage (+6% <b>maximum</b> health) <b>bonus</b> physical damage on-hit and grant you permanent <b>bonus</b> health equal to 8% of that amount (30 second cooldown per target).",
      "unique": true
    },
    {
      "name": "Goliath",
      "effects": "Gain 0% – 30% (based on maximum health) hp increased size.",
      "unique": true
    }
  ],
  "stats": {
    "health": 900,
    "healthRegen": 100
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 400,
    "total": 3000,
    "sell": 2100
  }
}
export default item