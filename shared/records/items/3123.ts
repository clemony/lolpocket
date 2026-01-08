const item: Item =  {
  "name": "Executioner's Calling",
  "id": 3123,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    }
  ],
  "buildsInto": [
    {
      "id": 3033,
      "name": "Mortal Reminder",
      "gold": 3300
    },
    {
      "id": 6609,
      "name": "Chempunk Chainsword",
      "gold": 3100
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Overcomes enemies with high health gain",
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
    "attackDamage": 15
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 450,
    "total": 800,
    "sell": 560
  }
}
export default item