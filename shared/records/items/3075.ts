// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Thornmail",
  "id": 3075,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3076,
      "name": "Bramble Vest",
      "gold": 800
    },
    {
      "id": 1031,
      "name": "Chain Vest",
      "gold": 800
    },
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "grievous wounds"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Thorns",
      "effects": "When struck by a basic attack on-hit, deal 20 (+10% <b>bonus</b> armor) magic damage to the attacker and, if they are a champion, inflict them with <img src=\"/img/icons/grievous-wounds.webp\" class=\"tip-icon\" />Grievous Wounds for 3 seconds."
    }
  ],
  "stats": {
    "armor": 75,
    "health": 150
  },
  "description": "150 Health\n75 Armor\n\nThorns\nWhen struck by an Attack, deal magic damage to the attacker and apply 40% Wounds for 3 seconds if they are a champion.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 450,
    "total": 2450,
    "sell": 1715
  }
}
export default item