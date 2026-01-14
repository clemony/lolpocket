// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
      const item: Item =  {
  "name": "Hextech Gunblade",
  "id": 3146,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1053,
      "name": "Vampiric Scepter",
      "gold": 900
    },
    {
      "id": 3145,
      "name": "Hextech Alternator",
      "gold": 1100
    },
    {
      "id": 1052,
      "name": "Amplifying Tome",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "active": [
    {
      "unique": true,
      "name": "Lightning Bolt",
      "effects": "Shocks the target enemy champion with a bolt of lightning, dealing 175 – 253 (based on level) magic damage (+30% AP) magic damage and <img src=\"/img/icons/slow.webp\" class=\"tip-icon\" />slowing them by 25% for 1.5 seconds.",
      "range": 0
    }
  ],
  "stats": {
    "abilityPower": 80,
    "attackDamage": 40,
    "omnivamp": 10
  },
  "description": "80 Ability Power\n40 Attack Damage\n10% Omnivamp\n\nACTIVE (0s)\nLightning Bolt\nShocks the target enemy champion, dealing  magic damage and slowing them by 25% for 1.5 seconds.",
  "maps": [
    11,
    12,
    21
  ],
  "gold": {
    "base": 600,
    "total": 3000,
    "sell": 2100
  }
}
export default item