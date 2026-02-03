// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Opportunity",
  "id": 6701,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    },
    {
      "id": 3134,
      "name": "Serrated Dirk",
      "gold": 1000
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
    "lethality"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Preparation",
      "effects": "After being out-of-combat with enemy champions for 8 seconds, gain (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />11 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />5) lethality. This bonus remains for 3 seconds after dealing damage to an enemy champion."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Extraction",
      "effects": "Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon light:invert\" />takedown against an enemy champion within 3 seconds of damaging them grants you 200 <b>bonus</b> movement speed that decays over 1.5 seconds."
    }
  ],
  "stats": {
    "attackDamage": 55,
    "lethality": 18
  },
  "description": "55 Attack Damage\n18 Lethality\n\nPreparation\nAfter being out of combat with Champions for 8 seconds gain Lethality. This Lethality lasts for 3 seconds after dealing damage to champions.\n\nExtraction\nWhen a champion that you damaged within 3 seconds dies, gain 200 decaying Move Speed for 1.5 seconds.\n",
  "gold": {
    "base": 475,
    "total": 2700,
    "sell": 1890
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item