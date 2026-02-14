// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Randuin's Omen",
  "id": 3143,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3082,
      "name": "Warden's Mail",
      "gold": 1000
    },
    {
      "id": 1011,
      "name": "Giant's Belt",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Resilience",
      "effects": "Reduces incoming damage from <img src=\"/img/icons/critical-strike.webp\" class=\"tip-icon \" />critical strikes by 30%."
    }
  ],
  "active": [
    {
      "unique": true,
      "name": "Humility",
      "effects": "Unleash a shockwave around you that <img src=\"/img/icons/slow.webp\" class=\"tip-icon \" />slows nearby enemies by 70% for 2 seconds.",
      "range": 0
    }
  ],
  "stats": {
    "armor": 75,
    "health": 350
  },
  "description": "350 Health\n75 Armor\n\nResilience\nReceive 30% less damage from Critical Strikes.\nHumility\nSlow nearby enemies by 70% for 2 seconds.",
  "gold": {
    "base": 800,
    "purchasable": true,
    "total": 2700,
    "sell": 1890
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item