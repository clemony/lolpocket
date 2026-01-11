// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Hexdrinker",
  "id": 3155,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    },
    {
      "id": 1033,
      "name": "Null-Magic Mantle",
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
      "id": 3156,
      "name": "Maw of Malmortius",
      "gold": 3100
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Lifeline",
      "effects": "If you would take magic damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />110 – 280 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />82.5 – 210) magic damage for 2.5 seconds.",
      "cooldown": "90"
    }
  ],
  "stats": {
    "attackDamage": 25,
    "magicResistance": 25
  },
  "description": "25 Attack Damage\n25 Magic Resist\n\nLifeline\nTaking magic damage that would reduce your Health below 30% grants a magic damage Shield for 2.5 seconds.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 200,
    "total": 1300,
    "sell": 910
  }
}
export default item