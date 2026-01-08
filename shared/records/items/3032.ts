const item: Item =  {
  "name": "Yun Tal Wildarrows",
  "id": 3032,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1038,
      "name": "B. F. Sword",
      "gold": 1300
    },
    {
      "id": 3144,
      "name": "Scout's Slingshot",
      "gold": 600
    },
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "arrow",
    "yuntal"
  ],
  "passives": [
    {
      "name": "Practice Makes Lethal",
      "effects": "Basic attacks grant (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />0.4% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />0.2%) critical strike chance permanently, stacking up to (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />63 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />125) times (capped at 25% critical strike chance).",
      "unique": true
    },
    {
      "name": "Flurry",
      "effects": "Launching a basic attack against an enemy champion grants you 30% <b>bonus</b> attack speed for 6 seconds (30 second cooldown, reduced by 1 second <img src=\"/img/icons/on-hit.webp\" class=\"tip-icon\" />on-hit and 2 seconds if the attack <img src=\"/img/icons/critical-strike.webp\" class=\"tip-icon\" />critically strikes).",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 50,
    "attackSpeed": 40
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 750,
    "total": 3000,
    "sell": 2100
  }
}
export default item