const item: Item =  {
  "name": "The Collector",
  "id": 6676,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    },
    {
      "id": 3134,
      "name": "Serrated Dirk",
      "gold": 1000
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
  "nicknames": [
    "deathblade",
    "gun",
    "lethality"
  ],
  "passives": [
    {
      "name": "Death",
      "effects": "If you deal post-mitigation damage that would leave a champion below 5% of their <b>maximum</b> health, <img src=\"/img/icons/execute.webp\" class=\"tip-icon\" />execute them.",
      "unique": true
    },
    {
      "name": "Taxes",
      "effects": "Killing a champion grants you an additional <img src=\"/img/icons/gold-coin.webp\" class=\"inline-icon\" />25.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 50,
    "criticalStrikeChance": 25,
    "lethality": 10
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 525,
    "total": 3000,
    "sell": 2100
  }
}
export default item