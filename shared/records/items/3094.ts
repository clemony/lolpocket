// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Rapid Firecannon",
  "id": 3094,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3086,
      "name": "Zeal",
      "gold": 1200
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
    "canon",
    "gun",
    "rapidfire",
    "rfc"
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
      "name": "Sharpshooter",
      "effects": "When fully <img src=\"/img/icons/energized.webp\" class=\"tip-icon\" />Energized, your next basic attack deals 40 <b>bonus</b> magic damage on-hit. <i>Energized</i> attacks gain 35% <b>bonus</b> range, capped at 150."
    }
  ],
  "stats": {
    "attackSpeed": 35,
    "criticalStrikeChance": 25,
    "percentMovespeed": 4
  },
  "description": "35% Attack Speed\n25% Critical Strike Chance\n4% Move Speed\n\nSharpshooter\nYour Energized Attack deals 40 bonus magic damage and gains 35% bonus Attack Range.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 850,
    "total": 2650,
    "sell": 1855
  }
}
export default item