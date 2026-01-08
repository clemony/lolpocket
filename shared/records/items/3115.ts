const item: Item =  {
  "name": "Nashor's Tooth",
  "id": 3115,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1043,
      "name": "Recurve Bow",
      "gold": 700
    },
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Increases Attack Speed, Ability Power, and Cooldown Reduction",
  "nicknames": [
    "nashors"
  ],
  "passives": [
    {
      "name": "Icathian Bite",
      "effects": "Basic attacks deal 15 (+15% AP) <b>bonus</b> magic damage on-hit.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 80,
    "attackSpeed": 50,
    "abilityHaste": 15
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 500,
    "total": 2900,
    "sell": 2030
  }
}
export default item