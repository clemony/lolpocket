// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Catalyst of Aeons",
  "id": 3803,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    },
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    },
    {
      "id": 1027,
      "name": "Sapphire Crystal",
      "gold": 300
    }
  ],
  "buildsInto": [
    {
      "id": 326657,
      "name": "Rod of Ages",
      "gold": 2600
    },
    {
      "id": 4402,
      "name": "Innervating Locket",
      "gold": 2950
    },
    {
      "id": 6657,
      "name": "Rod of Ages",
      "gold": 2600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "protector"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Eternity",
      "effects": "Restore mana equal to 10% of pre-mitigation damage taken from champions, and <img src=\"/img/icons/heal.webp\" class=\"tip-icon light:invert\" />heal for an amount equal to 25% of mana spent, up to 20 per cast. Toggled abilities can only heal for up to 20 per second."
    }
  ],
  "stats": {
    "health": 300,
    "mana": 375
  },
  "description": "300 Health\n375 Mana\n\nEternity\nRestores 10% of the damage taken from champions as Mana. \nCasting an Ability heals for 25% of Mana spent.",
  "gold": {
    "base": 200,
    "purchasable": true,
    "total": 1300,
    "sell": 910
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item