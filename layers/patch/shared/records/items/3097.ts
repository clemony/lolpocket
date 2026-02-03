// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Stormrazor",
  "id": 3097,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1038,
      "name": "B. F. Sword",
      "gold": 1300
    },
    {
      "id": 1018,
      "name": "Cloak of Agility",
      "gold": 600
    },
    {
      "id": 3144,
      "name": "Scout's Slingshot",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "energize",
    "Windblade"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Energized",
      "effects": "Moving and basic attacking generates <i>Energize</i> stacks, up to 100."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Bolt",
      "effects": "When fully <img src=\"/img/icons/energized.webp\" class=\"tip-icon \" />Energized, your next basic attack deals 100 <b>bonus</b> magic damage on-hit and grants you 45% <b>bonus</b> movement speed for 1.5 seconds."
    }
  ],
  "stats": {
    "attackDamage": 50,
    "attackSpeed": 20,
    "criticalStrikeChance": 25
  },
  "description": "50 Attack Damage\n20% Attack Speed\n25% Critical Strike Chance\n\nEnergized\nMoving and Attacking generates an Energized Attack.\n\nBolt\nYour Energized Attack applies  bonus magic damage and grants 45% Move Speed for 1.5s.\n",
  "gold": {
    "base": 700,
    "total": 3200,
    "sell": 2240
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item