const item: Item =  {
  "name": "Sanguine Gift",
  "id": 443062,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "Patronage",
      "effects": "Store 15% of post-mitigation damage dealt. Whenever the stored amount exceeds a value of 333, consume it to <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal yourself and the nearest allied champion for that same amount. Stored damage is reset every round and between each phase in a round.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 80,
    "healAndShieldPower": 15,
    "abilityHaste": 20
  },
  "maps": [
    30
  ],
  "gold": {
    "base": 1000,
    "total": 1000,
    "sell": 400
  }
}
export default item