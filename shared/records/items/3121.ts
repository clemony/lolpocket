const item: Item =  {
  "name": "Fimbulwinter",
  "id": 3121,
  "rank": "Legendary",
  "specialRecipe": 3119,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "Awe",
      "effects": "Grants <b>bonus</b> health equal to 15% <b>bonus</b> mana.",
      "unique": true
    },
    {
      "name": "Everlasting",
      "effects": "<img src=\"/img/icons/immobilize.webp\" class=\"tip-icon\" />Immobilizing, or <img src=\"/img/icons/slow.webp\" class=\"tip-icon\" />slowing if you are <img src=\"/img/icons/melee.webp\" class=\"tip-icon\" />melee, an enemy champion grants a 100 (+4.5% <b>current</b> mana) <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield for 3 seconds (8 second cooldown). The shield's strength is increased by 80% if there is more than one enemy champion within 1200 units.",
      "unique": true
    }
  ],
  "stats": {
    "health": 550,
    "mana": 1000,
    "abilityHaste": 15
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 2400,
    "purchasable": false,
    "total": 2400,
    "sell": 1680
  }
}
export default item