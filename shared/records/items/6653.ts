const item: Item =  {
  "name": "Liandry's Torment",
  "id": 6653,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3147,
      "name": "Haunting Guise",
      "gold": 1300
    },
    {
      "id": 2508,
      "name": "Fated Ashes",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Charge up in combat to deal high damage over time, especially against durable enemies",
  "nicknames": [
    "last shadow",
    "ls",
    "burn"
  ],
  "passives": [
    {
      "name": "Torment",
      "effects": "Dealing ability damage burns enemies, causing them to take 1% of the target's <b>maximum</b> health magic damage every 0.5 seconds over 3 seconds, capped at 20 per tick against monsters.",
      "unique": true
    },
    {
      "name": "Suffering",
      "effects": "For each second in combat with enemy champions, deal 2% increased damage, stacking up to 3 times for a total of 6%.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 60,
    "health": 300
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 800,
    "total": 3000,
    "sell": 2100
  }
}
export default item