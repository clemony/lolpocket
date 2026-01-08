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
  "simpleDescription": "Deal damage to empower your heals and shields",
  "nicknames": [
    "boots"
  ],
  "passives": [
    {
      "name": "Plating",
      "effects": "Reduces all incoming <img src=\"/img/icons/basic-damage.webp\" class=\"tip-icon\" />basic damage by 10% (<i>excluding from turret attacks</i>).",
      "unique": true
    },
    {
      "name": "Noxian Endurance",
      "cooldown": "15",
      "effects": "Taking physical damage from champions grants you a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs 10 – 120 (based on level) (+10% <b>maximum</b> health) physical damage for 5 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "armor": 35,
    "flatMovespeed": 45
  },
  "maps": [
    11
  ],
  "gold": {
    "base": 500,
    "total": 1700,
    "sell": 1190
  }
}
export default item