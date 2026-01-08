const item: Item =  {
  "name": "Stormrazor",
  "id": 223095,
  "rank": "Legendary",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "energize",
    "Windblade"
  ],
  "passives": [
    {
      "name": "Energized",
      "effects": "Moving and basic attacking generates <i>Energize</i> stacks, up to 100.",
      "unique": true
    },
    {
      "name": "Bolt",
      "effects": "When fully <img src=\"/img/icons/energized.webp\" class=\"tip-icon\" />Energized, your next basic attack deals 100 <b>bonus</b> magic damage on-hit and grants you 45% <b>bonus</b> movement speed for 1.5 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 45,
    "attackSpeed": 25,
    "criticalStrikeChance": 25
  },
  "maps": [
    30
  ],
  "gold": {
    "base": 2500,
    "total": 2500,
    "sell": 1250
  }
}
export default item