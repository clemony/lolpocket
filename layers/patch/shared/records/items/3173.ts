// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Chainlaced Crushers",
  "id": 3173,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 3111,
      "name": "Mercury's Treads",
      "gold": 1250
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
      "name": "Noxian Persistence",
      "effects": "Taking magic damage from champions grants you a <img src=\"/img/icons/shield.webp\" class=\"tip-icon light:invert\" />shield that absorbs 10 – 120 (based on level) (+10% <b>maximum</b> health) magic damage for 5 seconds.",
      "cooldown": "15"
    }
  ],
  "stats": {
    "magicResistance": 30,
    "flatMovespeed": 45,
    "tenacity": 30
  },
  "description": "30 Magic Resist\n45 Move Speed\n30% Tenacity\n\nNoxian Persistence (0s)\nAfter taking magic damage from a Champion, gain a  magic shield for 5 seconds.",
  "gold": {
    "base": 0,
    "purchasable": true,
    "total": 1250,
    "sell": 875
  },
  "maps": [
    11
  ]
}
export default item