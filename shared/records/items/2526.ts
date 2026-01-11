// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Whispering Circlet",
  "id": 2526,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3114,
      "name": "Forbidden Idol",
      "gold": 600
    },
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    },
    {
      "id": 3070,
      "name": "Tear of the Goddess",
      "gold": 400
    }
  ],
  "buildsInto": [
    {
      "id": 2530,
      "name": "Diadem of Songs",
      "gold": 2250
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "tear"
  ],
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
      "name": "Manaflow",
      "effects": "Grants a charge every 8 seconds, up to 5 charges. Affecting an enemy or ally with an ability consumes a charge to grant 4 <b>bonus</b> mana, increased to 8 mana if they are a champion, up to a <b>maximum</b> of 360 <b>bonus</b> mana."
    },
    {
      "unique": false,
      "mythic": false,
      "effects": "Transforms into <img src=\"/img/icons/diadem-of-songs.webp\" class=\"tip-icon\" />Diadem of Songs at 360 <b>bonus</b> mana."
    }
  ],
  "stats": {
    "healAndShieldPower": 8,
    "health": 200,
    "mana": 300,
    "manaRegen": 75
  },
  "description": "200 Health\n8% Heal and Shield Power\n75% Base Mana Regen\n300 Mana\n\nHarmony\nGain % Heal and Shield Power.\n\nManaflow (8s, max 5 charges)\nLanding Abilities grants 4 max Mana (doubled vs. champions).\nTransforms into Diadem of Songs at 360 max Mana.",
  "maps": [
    11,
    12,
    21
  ],
  "gold": {
    "base": 850,
    "total": 2250,
    "sell": 1575
  }
}
export default item