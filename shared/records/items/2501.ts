const item: Item =  {
  "name": "Overlord's Bloodmail",
  "id": 2501,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    },
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "Tyranny",
      "effects": "Gain <b>bonus</b> attack damage equal to 2.5% <b>bonus</b> health.",
      "unique": true
    },
    {
      "name": "Retribution",
      "effects": "Gain <b>bonus</b> attack damage equal to 0% – 70% (based on missing health) of your <b>total</b> attack damage from other sources.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 30,
    "health": 550
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 1000,
    "total": 3300,
    "sell": 2310
  }
}
export default item