// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Overlord's Bloodmail",
  "id": 2501,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    },
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Tyranny",
      "effects": "Gain <b>bonus</b> attack damage equal to 2.5% <b>bonus</b> health."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Retribution",
      "effects": "Gain <b>bonus</b> attack damage equal to 0% – 70% (based on missing health) of your <b>total</b> attack damage from other sources."
    }
  ],
  "stats": {
    "attackDamage": 30,
    "health": 550
  },
  "description": "30 Attack Damage\n550 Health\n\nTyranny\nGain 2.5% of your bonus Health as Attack Damage. \n\nRetribution\nGain up to 12% increased Attack Damage based on your percent missing Health. ",
  "gold": {
    "base": 1000,
    "total": 3300,
    "sell": 2310
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item