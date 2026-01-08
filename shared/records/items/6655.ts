const item: Item =  {
  "name": "Luden's Echo",
  "id": 6655,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3802,
      "name": "Lost Chapter",
      "gold": 1200
    },
    {
      "id": 3145,
      "name": "Hextech Alternator",
      "gold": 1100
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "High burst damage, good against fragile foes",
  "passives": [
    {
      "name": "Echo",
      "cooldown": "12",
      "effects": "Gain 6 <i>Echoes</i> stacks to fire. Dealing ability damage to an enemy consumes all <i>Echoes</i> to deal 75 magic damage (+5% AP) <b>bonus</b> magic damage to them and, for each charge consumed beyond the first, an additional enemy within 600 units of them, firing an orb at each secondary target that impacts after 0.528 seconds to deal the damage. If the number of additional targets fired at is less than the number of charges consumed,deal an additional 15 – 75 (based on remaining <i>Echoes</i>) magic damage (+1% – 5% (based on remaining <i>Echoes</i>) AP) magic damage to the primary target, for a total of 1 – 5 (based on remaining <i>Echoes</i>) magic damage (+1% – 5% (based on remaining <i>Echoes</i>) AP)",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 100,
    "mana": 600,
    "abilityHaste": 10
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 450,
    "total": 2750,
    "sell": 1925
  }
}
export default item