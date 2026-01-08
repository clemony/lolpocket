const item: Item =  {
  "name": "Sword of Blossoming Dawn",
  "id": 4011,
  "rank": "Legendary",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "Effervescence",
      "effects": "Gain 1.2% <b>bonus</b> attack speed per 1% <img src=\"/img/icons/heal-and-shield-power.webp\" class=\"tip-icon\" />heal and shield power.",
      "unique": true
    },
    {
      "name": "Peppermint",
      "effects": "Basic attacks on-hit cause the most wounded and nearest allied champion to be <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />healed for 15 – 45 (based on level) (+10% <b>bonus</b> AD) (+7% AP).",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 45,
    "healAndShieldPower": 12,
    "health": 200,
    "abilityHaste": 15
  },
  "maps": [
    30
  ],
  "gold": {
    "base": 2500,
    "total": 2500,
    "sell": 1250
  }
}
export default item