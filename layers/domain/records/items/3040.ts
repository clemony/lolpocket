// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
      const item: Item =  {
  "name": "Seraph's Embrace",
  "id": 3040,
  "rank": "Legendary",
  "specialRecipe": 3003,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Awe",
      "effects": "Grants ability power equal to 2% <b>bonus</b> mana."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Lifeline",
      "effects": "If you would take damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield for 3 seconds that absorbs damage equal to 18% <b>maximum</b> mana for 3 seconds.",
      "cooldown": "90"
    }
  ],
  "stats": {
    "abilityPower": 70,
    "mana": 1000,
    "abilityHaste": 25
  },
  "description": "70 Ability Power\n1000 Mana\n25 Ability Haste\n\nAwe\nGain  Ability Power.\n\nLifeline (0s)\nTaking damage that would reduce your Health below 30% grants a  Shield for 3 seconds.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 2900,
    "purchasable": false,
    "total": 2900,
    "sell": 2030
  }
}
export default item