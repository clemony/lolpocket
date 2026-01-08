const item: Item =  {
  "name": "Horizon Focus",
  "id": 4628,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    },
    {
      "id": 1052,
      "name": "Amplifying Tome",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Immobilizing a champion causes lightning to strike them",
  "nicknames": [
    "lock on",
    "snipe"
  ],
  "passives": [
    {
      "name": "Hypershot",
      "effects": "Dealing ability damage to a champion at 600 or more units away from the cast position <img src=\"/img/icons/standard-sight.webp\" class=\"tip-icon\" />reveals them for 6 seconds. Deals 10% increased damage to champions revealed by <i>Hypershot</i>.",
      "unique": true
    },
    {
      "name": "Focus",
      "cooldown": "30",
      "effects": "Upon triggering <i>Hypershot</i>, grant <img src=\"/img/icons/sight.webp\" class=\"tip-icon\" />sight of the area 1400 units around the target for 2 seconds and apply <i>Hypershot's</i> effects to enemy champions within the area for 3 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 75,
    "abilityHaste": 25
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 200,
    "total": 2750,
    "sell": 1925
  }
}
export default item