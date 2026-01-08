const item: Item =  {
  "name": "Lord Dominik's Regards",
  "id": 3036,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3035,
      "name": "Last Whisper",
      "gold": 1450
    },
    {
      "id": 6670,
      "name": "Noonquiver",
      "gold": 1300
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Overcomes enemies with high health and armor",
  "nicknames": [
    "lw",
    "ldr",
    "doms"
  ],
  "passives": [
    {
      "name": "Giant Slayer",
      "effects": "Deal 0% – 15% (based on enemy bonus health) against enemy champions.",
      "unique": true
    }
  ],
  "stats": {
    "armorPenetration": 35,
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
    "base": 350,
    "total": 3100,
    "sell": 2170
  }
}
export default item