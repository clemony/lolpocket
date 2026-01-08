const item: Item =  {
  "name": "Black Cleaver",
  "id": 3071,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3044,
      "name": "Phage",
      "gold": 1100
    },
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Dealing physical damage to enemy champions reduces their Armor",
  "nicknames": [
    "bc"
  ],
  "passives": [
    {
      "name": "Carve",
      "effects": "Dealing physical damage to an enemy champion applies a stack of <i>Carve</i> for 6 seconds, stacking up to 5 times. Each stack inflicts 6% armor reduction, up to 30% armor at 5 stacks.",
      "unique": true
    },
    {
      "name": "Fervor",
      "effects": "Dealing physical damage grants you 20 <b>bonus</b> movement speed for 2 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 40,
    "health": 400,
    "abilityHaste": 20
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 225,
    "total": 3000,
    "sell": 2100
  }
}
export default item