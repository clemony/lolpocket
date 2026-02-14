// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Armored Advance",
  "id": 3174,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 3047,
      "name": "Plated Steelcaps",
      "gold": 1200
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "boots"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Plating",
      "effects": "Reduces all incoming <img src=\"/img/icons/basic-damage.webp\" class=\"tip-icon \" />basic damage by 10% (<i>excluding from turret attacks</i>)."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Noxian Endurance",
      "effects": "Taking physical damage from champions grants you a <img src=\"/img/icons/shield.webp\" class=\"tip-icon light:invert\" />shield that absorbs 10 – 120 (based on level) (+10% <b>maximum</b> health) physical damage for 5 seconds.",
      "cooldown": "15"
    }
  ],
  "stats": {
    "armor": 35,
    "flatMovespeed": 45
  },
  "description": "35 Armor\n45 Move Speed\n\nPlating\nReduces incoming damage from Attacks by 10%.\n\nNoxian Endurance (0s)\nAfter taking physical damage from a Champion, gain a  physical shield for 5 seconds.",
  "gold": {
    "base": 0,
    "purchasable": true,
    "total": 1200,
    "sell": 840
  },
  "maps": [
    11
  ]
}
export default item