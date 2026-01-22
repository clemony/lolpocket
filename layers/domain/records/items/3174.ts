// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
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
      "effects": "Reduces all incoming <img src=\"/img/icons/basic-damage.webp\" class=\"tip-icon\" />basic damage by 10% (<i>excluding from turret attacks</i>)."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Noxian Endurance",
      "effects": "Taking physical damage from champions grants you a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs 10 – 120 (based on level) (+10% <b>maximum</b> health) physical damage for 5 seconds.",
      "cooldown": "15"
    }
  ],
  "stats": {
    "armor": 35,
    "flatMovespeed": 45
  },
  "description": "35 Armor\n45 Move Speed\n\nPlating\nReduces incoming damage from Attacks by 10%.\n\nNoxian Endurance (0s)\nAfter taking physical damage from a Champion, gain a  physical shield for 5 seconds.",
  "maps": [
    11
  ],
  "gold": {
    "base": 0,
    "total": 1200,
    "sell": 840
  }
}
export default item