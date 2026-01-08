const item: Item =  {
  "name": "Umbral Glaive",
  "id": 3179,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3134,
      "name": "Serrated Dirk",
      "gold": 1000
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
  "simpleDescription": "Provides trap and ward detection periodically",
  "nicknames": [
    "lethality"
  ],
  "passives": [
    {
      "name": "Blackout",
      "cooldown": "90",
      "effects": "When spotted by enemy stealthed <img src=\"/img/icons/wards.webp\" class=\"tip-icon\" />wards or <img src=\"/img/icons/stealthed-trap.webp\" class=\"tip-icon\" />traps, gain <i>Blackout</i> for 8 seconds.",
      "range": 400,
      "unique": true
    },
    {
      "name": "Blackout",
      "effects": "You <img src=\"/img/icons/disabled-ward.webp\" class=\"tip-icon\" />disable surrounding stealthed wards, as well as <img src=\"/img/icons/expose.webp\" class=\"tip-icon\" />expose and <img src=\"/img/icons/true-sight.webp\" class=\"tip-icon\" />reveal nearby stealthed wards and traps while <i>Blackout</i> is active. Your basic attacks deal (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />2 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />1) <b>bonus</b> true damage to wards.",
      "unique": false
    },
    {
      "name": "Nightstalker",
      "effects": "While out of vision of enemies for 1 second, and for 4 seconds after seen, your next basic attack against a champion deals 50 (+1.5 per 1 Lethality) <b>bonus</b> true damage.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 60,
    "lethality": 15,
    "abilityHaste": 15
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 450,
    "total": 2500,
    "sell": 1750
  }
}
export default item