// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Archangel's Staff",
  "id": 3003,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3070,
      "name": "Tear of the Goddess",
      "gold": 400
    },
    {
      "id": 3802,
      "name": "Lost Chapter",
      "gold": 1200
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "aa",
    "seraph's embrace",
    "tear"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Awe",
      "effects": "Grants ability power equal to 1% <b>bonus</b> mana."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Manaflow",
      "effects": "Grants a charge every 8 seconds, up to 5 charges. Affecting an enemy or ally with an ability consumes a charge to grant 5 <b>bonus</b> mana, increased to 10 mana if they are a champion, up to a <b>maximum</b> of 360 <b>bonus</b> mana."
    },
    {
      "unique": false,
      "mythic": false,
      "effects": "Transforms into <img src=\"/img/icons/seraphs-embrace.webp\" class=\"tip-icon\" />Seraph's Embrace at 360 <b>bonus</b> mana."
    }
  ],
  "stats": {
    "abilityPower": 70,
    "mana": 600,
    "abilityHaste": 25
  },
  "description": "70 Ability Power\n600 Mana\n25 Ability Haste\n\nAwe\nGain Ability Power equal to 1% bonus Mana.\n\nManaflow (8s, max 5 charges)\nLanding Abilities grants 5 max Mana (doubled vs. champions).\nTransforms into Seraph's Embrace at 360 max Mana.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 450,
    "total": 2900,
    "sell": 2030
  }
}
export default item