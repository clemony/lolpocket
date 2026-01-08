const item: Item =  {
  "name": "Experimental Hexplate",
  "id": 3073,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    },
    {
      "id": 3044,
      "name": "Phage",
      "gold": 1100
    },
    {
      "id": 1042,
      "name": "Dagger",
      "gold": 250
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Increases maximum Mana as Mana is spent",
  "passives": [
    {
      "name": "Hexcharged",
      "effects": "Gain 30 ultimate haste.",
      "unique": true
    },
    {
      "name": "Overdrive",
      "effects": "Upon casting your ultimate ability, enter <i>Overdrive</i> to gain 50% <b>bonus</b> attack speed and 20% <b>bonus</b> movement speed for 8 seconds (30 second cooldown, starts on ultimate cast).",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 40,
    "attackSpeed": 20,
    "health": 450
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 500,
    "total": 3000,
    "sell": 2100
  }
}
export default item