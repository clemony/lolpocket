// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Spear of Shojin",
  "id": 3161,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    },
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    },
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Dragonforce",
      "effects": "Gain 25 basic ability haste."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Focused Will",
      "effects": "Dealing ability damage with a non-innate ability generates a stack for 6 seconds, stacking up to 4 times and up to once per cast instance per second and every second for damage over time abilities. For each stack, your non-<img src=\"/img/icons/basic-damage.webp\" class=\"tip-icon\" />basic damage dealt by non-items gain 3% increased damage, for a total increase of 12% at <b>maximum</b> stacks."
    }
  ],
  "stats": {
    "attackDamage": 45,
    "health": 450
  },
  "description": "45 Attack Damage\n450 Health\n\nDragonforce \nGain 25 Basic Ability Haste.\n\nFocused Will \nDealing damage with Abilities increases your Champion's Ability and Passive damage by 3% for 6 seconds. (stacks 4 times).",
  "gold": {
    "base": 675,
    "total": 3100,
    "sell": 2170
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item