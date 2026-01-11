// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Diadem of Songs",
  "id": 2530,
  "rank": "Legendary",
  "specialRecipe": 2526,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Harmony",
      "effects": "Grants heal and shield power equal to 0.5% <b>bonus</b> mana."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Consonance",
      "effects": "While you or any allied champion you granted a <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal or <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield to in the last 3 seconds is in combat with champions, each second, you heal the most wounded and nearest allied champion for 0.8% of your <b>bonus</b> mana."
    }
  ],
  "stats": {
    "healAndShieldPower": 8,
    "health": 200,
    "mana": 1000,
    "manaRegen": 100
  },
  "description": "200 Health\n8% Heal and Shield Power\n1000 Mana\n100% Base Mana Regen\n\nHarmony\nGain % Heal and Shield Power.\n\nConsonance\nWhile you or any ally you've healed or shielded in the last 3 seconds is in combat with champions, each second, heal the lowest health nearby ally champion.",
  "maps": [
    11,
    12,
    21
  ],
  "gold": {
    "base": 2250,
    "purchasable": false,
    "total": 2250,
    "sell": 1575
  }
}
export default item