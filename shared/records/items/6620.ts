const item: Item =  {
  "name": "Echoes of Helia",
  "id": 6620,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 4642,
      "name": "Bandleglass Mirror",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Damage low-health enemies to trigger a cursed explosion, dealing damage and slowing nearby foes",
  "nicknames": [
    "spooky cup"
  ],
  "passives": [
    {
      "name": "Soul Siphon",
      "effects": "Gain 35% of pre-mitigation damage dealt to champions as Soul Charges, up to 80 – 250 (based on level) charges. Healing or shielding an ally consumes all Soul Charges to restore 100% of that value as health.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 35,
    "health": 200,
    "manaRegen": 125,
    "abilityHaste": 20
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 500,
    "total": 2200,
    "sell": 1540
  }
}
export default item