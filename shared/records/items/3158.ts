const item: Item =  {
  "name": "Ionian Boots of Lucidity",
  "id": 3158,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    },
    {
      "id": 2022,
      "name": "Glowing Mote",
      "gold": 250
    }
  ],
  "buildsInto": [
    {
      "id": 3171,
      "name": "Crimson Lucidity",
      "gold": 1400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Increases Move Speed and Cooldown Reduction",
  "passives": [
    {
      "name": "Ionian Insight",
      "effects": "Gain 10 summoner spell haste.",
      "unique": true
    }
  ],
  "stats": {
    "flatMovespeed": 45,
    "abilityHaste": 10
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 350,
    "total": 900,
    "sell": 630
  }
}
export default item