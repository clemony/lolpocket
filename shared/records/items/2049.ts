const item: Item =  {
  "name": "Guardian's Amulet",
  "id": 2049,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Increases Health and provides Stealth Wards over time",
  "passives": [
    {
      "name": "Recovery",
      "effects": "Restore 10 mana every 5 seconds. Manaless champions restore 3 health instead.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 20,
    "healAndShieldPower": 15,
    "abilityHaste": 20
  },
  "maps": [
    30
  ],
  "gold": {
    "base": 500,
    "total": 500,
    "sell": 250
  }
}
export default item