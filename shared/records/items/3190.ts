const item: Item =  {
  "name": "Locket of the Iron Solari",
  "id": 3190,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 1029,
      "name": "Cloth Armor",
      "gold": 300
    },
    {
      "id": 1033,
      "name": "Null-Magic Mantle",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Activate to shield nearby allies from damage",
  "active": [
    {
      "name": "Devotion",
      "effects": "Grants you and allied champions within 850 units a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield for 200 – 360 (based on target's level) that decays over 2.5 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "armor": 25,
    "health": 200,
    "magicResistance": 25,
    "abilityHaste": 10
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 700,
    "total": 2200,
    "sell": 1540
  }
}
export default item