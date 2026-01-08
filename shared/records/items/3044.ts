const item: Item =  {
  "name": "Phage",
  "id": 3044,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    },
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    }
  ],
  "buildsInto": [
    {
      "id": 6631,
      "name": "Stridebreaker",
      "gold": 3300
    },
    {
      "id": 6630,
      "name": "Goredrinker",
      "gold": 3200
    },
    {
      "id": 3071,
      "name": "Black Cleaver",
      "gold": 3000
    },
    {
      "id": 3073,
      "name": "Experimental Hexplate",
      "gold": 3000
    },
    {
      "id": 3078,
      "name": "Trinity Force",
      "gold": 3333
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Attacks and kills give a small burst of speed",
  "nicknames": [
    "mallet"
  ],
  "passives": [
    {
      "name": "Rage",
      "effects": "Basic attacks on-hit grant (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />20 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />10) <b>bonus</b> movement speed for 2 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 15,
    "health": 200
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 350,
    "total": 1100,
    "sell": 770
  }
}
export default item