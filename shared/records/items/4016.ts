const item: Item =  {
  "name": "Wordless Promise",
  "id": 4016,
  "rank": "Legendary",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "Promise",
      "effects": "While your <i>Promised</i> ally is tethered to you, gain ability power equal to 20% of <i>Promised</i> ally's AP, and grant your <i>Promised</i> ally ability haste equal to 20% of your ability haste. <i>Increases and decreases to each teammate's stats recalculate this effect.</i>",
      "unique": true
    }
  ],
  "active": [
    {
      "name": "Promise",
      "effects": "Make a <i>Promise</i> to the target allied champion, forming a <img src=\"/img/icons/tether.webp\" class=\"tip-icon\" />tether between you and them.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 50,
    "healAndShieldPower": 25,
    "abilityHaste": 25
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