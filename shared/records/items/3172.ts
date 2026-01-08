const item: Item =  {
  "name": "Zephyr",
  "id": 3172,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3006,
      "name": "Berserker's Greaves",
      "gold": 1100
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Mobility and Tenacity",
  "passives": [
    {
      "name": "Like the Wind",
      "effects": "Basic attacks on-hit grant a stack of <i>Like The Wind</i> for 6 seconds, refreshing on subsequent attacks. For each stack, gain 5% <b>bonus</b> movement speed ms, stacking up to 5 times for a total of 25% ms.",
      "unique": true
    }
  ],
  "stats": {
    "attackSpeed": 50,
    "percentMovespeed": 10,
    "abilityHaste": 30,
    "tenacity": 20
  },
  "maps": [
    11,
    21,
    35
  ],
  "gold": {
    "base": 500,
    "total": 1600,
    "sell": 1120
  }
}
export default item