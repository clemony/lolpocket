const item: Item =  {
  "name": "Mortal Reminder",
  "id": 3033,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3123,
      "name": "Executioner's Calling",
      "gold": 800
    },
    {
      "id": 3035,
      "name": "Last Whisper",
      "gold": 1450
    },
    {
      "id": 1018,
      "name": "Cloak of Agility",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Overcomes enemies with high Health recovery and Armor",
  "nicknames": [
    "grievous",
    "grievous wounds"
  ],
  "passives": [
    {
      "name": "Grievous Wounds",
      "effects": "Dealing physical damage to enemy champions inflicts them with <img src=\"/img/icons/grievous-wounds.webp\" class=\"tip-icon\" />Grievous Wounds for 3 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "armorPenetration": 30,
    "attackDamage": 35,
    "criticalStrikeChance": 25
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 450,
    "total": 3300,
    "sell": 2310
  }
}
export default item