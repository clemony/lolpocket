// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
      const item: Item =  {
  "name": "Manamune",
  "id": 3004,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3070,
      "name": "Tear of the Goddess",
      "gold": 400
    },
    {
      "id": 3133,
      "name": "Caulfield's Warhammer",
      "gold": 1050
    },
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "Muramana",
    "tear"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Awe",
      "effects": "Grants <b>bonus</b> attack damage equal to 2% <b>maximum</b> mana."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Manaflow",
      "effects": "Grants a charge every 8 seconds, up to 4 charges. Consumes a charge on-hit and whenever affecting an enemy or ally with an ability to grant 3 <b>bonus</b> mana, increased to 6 mana for champion targets, up to a <b>maximum</b> of 360 <b>bonus</b> mana. Can only be triggered once per cast instance."
    },
    {
      "unique": false,
      "mythic": false,
      "effects": "Transforms into <img src=\"/img/icons/muramana.webp\" class=\"tip-icon\" />Muramana at 360 <b>bonus</b> mana."
    }
  ],
  "stats": {
    "attackDamage": 35,
    "mana": 500,
    "abilityHaste": 15
  },
  "description": "35 Attack Damage\n500 Mana\n15 Ability Haste\n\nAwe\nGain  bonus Attack Damage.\n\nManaflow (8s, max 4 charges)\nLanding Attacks and Abilities grants 3 max Mana (doubled vs. champions).\nTransforms into Muramana at 360 max Mana.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 1100,
    "total": 2900,
    "sell": 2030
  }
}
export default item