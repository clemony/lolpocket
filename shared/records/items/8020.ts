const item: Item =  {
  "name": "Abyssal Mask",
  "id": 8020,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 1057,
      "name": "Negatron Cloak",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "Unmake",
      "effects": "Enemy champions within 700 units of you become cursed, causing them to receive 12% increased magic damage from all sources.",
      "unique": true
    }
  ],
  "stats": {
    "health": 350,
    "magicResistance": 45,
    "abilityHaste": 15
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 1000,
    "total": 2650,
    "sell": 1855
  }
}
export default item