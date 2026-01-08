const item: Item =  {
  "name": "Wit's End",
  "id": 3091,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1043,
      "name": "Recurve Bow",
      "gold": 700
    },
    {
      "id": 1057,
      "name": "Negatron Cloak",
      "gold": 850
    },
    {
      "id": 1043,
      "name": "Recurve Bow",
      "gold": 700
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Resist magic damage and claw your way back to life.",
  "passives": [
    {
      "name": "Fray",
      "effects": "Basic attacks deal 45 <b>bonus</b> magic damage on-hit.",
      "unique": true
    }
  ],
  "stats": {
    "attackSpeed": 50,
    "magicResistance": 45,
    "tenacity": 20
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 550,
    "total": 2800,
    "sell": 1960
  }
}
export default item