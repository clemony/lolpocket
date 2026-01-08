const item: Item =  {
  "name": "Maw of Malmortius",
  "id": 3156,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3155,
      "name": "Hexdrinker",
      "gold": 1300
    },
    {
      "id": 3133,
      "name": "Caulfield's Warhammer",
      "gold": 1050
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Grants bonus Attack Damage when Health is low",
  "passives": [
    {
      "name": "Lifeline",
      "cooldown": "90",
      "effects": "If you would take magic damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />200 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />150) magic damage (+(<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />150% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />112.5%) <b>bonus</b> AD) magic damage for 3 seconds. Additionally, triggering this effect grants you 10% omnivamp until the end of combat.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 60,
    "magicResistance": 40,
    "abilityHaste": 15
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 750,
    "total": 3100,
    "sell": 2170
  }
}
export default item