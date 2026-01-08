const item: Item =  {
  "name": "Doran's Ring",
  "id": 1056,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Good starting item for casters",
  "nicknames": [
    "dring"
  ],
  "passives": [
    {
      "name": "Drain",
      "effects": "Restore 1 mana every second. Dealing damage to an enemy champion increases the restoration to 2 mana for the next 5 seconds. If you cannot gain mana, <img src=\"/img/icons/healing.webp\" class=\"tip-icon\" />heal for 45% of the value instead.",
      "unique": true
    },
    {
      "name": "Helping Hand",
      "effects": "Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 18,
    "health": 90
  },
  "maps": [
    11,
    12,
    21
  ],
  "gold": {
    "base": 400,
    "total": 400,
    "sell": 160
  }
}
export default item