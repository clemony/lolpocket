const item: Item =  {
  "name": "Immortal Shieldbow",
  "id": 6673,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
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
  "passives": [
    {
      "name": "Lifeline",
      "cooldown": "90",
      "effects": "If you would take damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />400 – 700 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />320 – 560) damage for 3 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 55,
    "criticalStrikeChance": 25
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 825,
    "total": 3000,
    "sell": 2100
  }
}
export default item