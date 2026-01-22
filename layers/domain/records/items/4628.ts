// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
      const item: Item =  {
  "name": "Horizon Focus",
  "id": 4628,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
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
  "nicknames": [
    "lock on",
    "snipe"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Hypershot",
      "effects": "Dealing ability damage to a champion with a champion ability at 600 or more units away from the cast position marks them for 6 seconds, <img src=\"/img/icons/standard-sight.webp\" class=\"tip-icon\" />revealing them and increasing your damage dealt to them by 10%."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Focus",
      "effects": "Upon triggering <i>Hypershot</i>, grant <img src=\"/img/icons/sight.webp\" class=\"tip-icon\" />sight of the area 1400 units around the target for 2 seconds and apply <i>Hypershot's</i> mark to enemy champions within the area for 3 seconds.",
      "cooldown": "30"
    }
  ],
  "stats": {
    "abilityPower": 75,
    "abilityHaste": 25
  },
  "description": "75 Ability Power\n25 Ability Haste\n\nHypershot\nDealing Ability damage to champions at 600 range or greater Reveals them for 6 seconds. \n\nFocus\nWhen Hypershot is triggered, Reveal all other enemy champions within 1400 range of them for 3 seconds.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 600,
    "total": 2700,
    "sell": 1890
  }
}
export default item