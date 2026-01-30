// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Slightly Magical Footwear",
  "id": 2422,
  "rank": "Special",
  "buildsInto": [
    {
      "id": 3006,
      "name": "Berserker's Greaves",
      "gold": 1100
    },
    {
      "id": 3047,
      "name": "Plated Steelcaps",
      "gold": 1200
    },
    {
      "id": 3020,
      "name": "Sorcerer's Shoes",
      "gold": 1100
    },
    {
      "id": 3158,
      "name": "Ionian Boots of Lucidity",
      "gold": 900
    },
    {
      "id": 3111,
      "name": "Mercury's Treads",
      "gold": 1250
    },
    {
      "id": 3117,
      "name": "Mobility Boots",
      "gold": 1000
    },
    {
      "id": 3009,
      "name": "Boots of Swiftness",
      "gold": 1000
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Slightly Quicker",
      "effects": "Gain 10 <b>bonus</b> movement speed."
    }
  ],
  "stats": {
    "flatMovespeed": 25
  },
  "description": "25 Move Speed\n\nGrants an additional 10 Move Speed. Boots that build from Slightly Magical Footwear retain this bonus Move Speed.",
  "gold": {
    "base": 300,
    "purchasable": false,
    "total": 300,
    "sell": 90
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item