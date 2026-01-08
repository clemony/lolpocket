const item: Item =  {
  "name": "Ohmwrecker (Turret Item)",
  "id": 1500,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "Dodge Piercing",
      "effects": "Turret attacks cannot be dodged.",
      "unique": true
    },
    {
      "name": "Warming Up",
      "effects": "Turrets gain a stack for 5 seconds each time they strike a champion. Each stack increases their damage dealt by 50%, up to 150%.",
      "unique": true
    }
  ],
  "stats": {
    "armorPenetration": 30
  },
  "maps": [
    11,
    12,
    21,
    30,
    35
  ],
  "gold": {
    "base": 0,
    "purchasable": false,
    "total": 0,
    "sell": 0
  }
}
export default item