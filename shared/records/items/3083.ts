const item: Item =  {
  "name": "Warmog's Armor",
  "id": 3083,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1011,
      "name": "Giant's Belt",
      "gold": 900
    },
    {
      "id": 1011,
      "name": "Giant's Belt",
      "gold": 900
    },
    {
      "id": 3801,
      "name": "Crystalline Bracer",
      "gold": 800
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Grants massive Health and Health Regen",
  "passives": [
    {
      "effects": "Grants <i>Warmog's Heart</i> if you have at least 2000 <b>bonus</b> health.",
      "unique": true
    },
    {
      "name": "Warmog's Heart",
      "effects": "<img src=\"/img/icons/health-regeneration.webp\" class=\"tip-icon\" />Health regeneration 1.5% <b>maximum</b> health every 0.5 seconds if damage has not been taken in the last 8 seconds (3 seconds for damage from non-champions).",
      "unique": true
    },
    {
      "name": "Warmog's Vitality",
      "effects": "Gain <b>bonus</b> health equal to 12% <b>bonus</b> health <b>from items</b>.",
      "unique": true
    }
  ],
  "stats": {
    "health": 1000,
    "healthRegen": 100
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 500,
    "total": 3100,
    "sell": 2170
  }
}
export default item