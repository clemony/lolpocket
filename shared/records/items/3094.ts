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
  "simpleDescription": "Movement builds charges that release a sieging fire attack on release",
  "nicknames": [
    "canon",
    "gun",
    "rapidfire",
    "rfc"
  ],
  "passives": [
    {
      "name": "Energized",
      "effects": "Moving and basic attacking generates <i>Energize</i> stacks, up to 100.",
      "unique": true
    },
    {
      "name": "Sharpshooter",
      "effects": "When fully <img src=\"/img/icons/energized.webp\" class=\"tip-icon\" />Energized, your next basic attack deals 40 <b>bonus</b> magic damage on-hit. <i>Energized</i> attacks gain 35% <b>bonus</b> range, capped at 150.",
      "unique": true
    }
  ],
  "stats": {
    "attackSpeed": 35,
    "criticalStrikeChance": 25,
    "percentMovespeed": 4
  },
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