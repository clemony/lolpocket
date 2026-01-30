// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Doran's Shield",
  "id": 1054,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "dshield"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Enduring Focus",
      "effects": "After taking damage from a champion, gain <b>bonus</b> health regeneration per second equal to (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />0 – 5 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />0 – 3.75) health for 8 seconds, refreshing on subsequent champion damage taken. Area of effect, damage over time, or proc damage taken trigger this effect with the <img src=\"/img/icons/ranged.webp\" class=\"tip-icon\" />ranged values."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Helping Hand",
      "effects": "Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions."
    }
  ],
  "stats": {
    "health": 110,
    "healthRegen": 4
  },
  "description": "110 Health\n\nEnduring Focus\nRestore 4 Health every 5 seconds. \nAfter taking damage from a champion, restore Health over 8 seconds.\n\nHelping Hand\nAttacks deal 5 bonus physical damage to minions.",
  "gold": {
    "base": 450,
    "total": 450,
    "sell": 180
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item