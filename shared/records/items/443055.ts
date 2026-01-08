const item: Item =  {
  "name": "Fulmination",
  "id": 443055,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "energize"
  ],
  "passives": [
    {
      "name": "Energized",
      "effects": "Moving and basic attacking generates <i>Energize</i> stacks, up to 100.",
      "unique": true
    },
    {
      "name": "Polarity",
      "effects": "Your <img src=\"/img/icons/energized.webp\" class=\"tip-icon\" />Energized attacks against targets not hit by your previous <i>Energized</i> attack do not consume any <i>Energize</i> stacks on-hit.",
      "unique": true
    },
    {
      "name": "Dynamo",
      "effects": "When fully <img src=\"/img/icons/energized.webp\" class=\"tip-icon\" />Energized, your next basic attack deals <b>bonus</b> magic damage on-hit equal to 13% of the target's <b>current</b> health.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 55,
    "attackSpeed": 45,
    "percentMovespeed": 15
  },
  "maps": [
    30
  ],
  "gold": {
    "base": 1000,
    "total": 1000,
    "sell": 400
  }
}
export default item