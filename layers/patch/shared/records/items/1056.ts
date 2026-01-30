// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Doran's Ring",
  "id": 1056,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "dring"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Drain",
      "effects": "Restore 1 mana every second. Dealing damage to an enemy champion increases the restoration to 2 mana for the next 5 seconds. If you cannot gain mana, <img src=\"/img/icons/healing.webp\" class=\"tip-icon\" />heal for 45% of the value instead."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Helping Hand",
      "effects": "Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions."
    }
  ],
  "stats": {
    "abilityPower": 18,
    "health": 90
  },
  "description": "18 Ability Power\n90 Health\n\nDrain\nRestore 1 Mana every second, increased to 2 Mana per second for 5 seconds after dealing damage to an enemy champion. If you can't gain Mana, heal for 45% of this value instead.\n\nHelping Hand\nAttacks deal 5 bonus physical damage to minions.",
  "gold": {
    "base": 400,
    "total": 400,
    "sell": 160
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item