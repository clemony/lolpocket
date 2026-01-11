// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Sanguine Gift",
  "id": 443062,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Patronage",
      "effects": "Store 15% of post-mitigation damage dealt. Whenever the stored amount exceeds a value of 333, consume it to <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal yourself and the nearest allied champion for that same amount. Stored damage is reset every round and between each phase in a round."
    }
  ],
  "stats": {
    "abilityPower": 80,
    "healAndShieldPower": 15,
    "abilityHaste": 20
  },
  "description": "80 Ability Power\n20 Ability Haste\n15% Heal and Shield Power\n\nPatronage\nStore 15% of the total damage you've dealt to enemies. Whenever this exceeds 333, consume it to heal yourself and your nearest ally for that amount.",
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