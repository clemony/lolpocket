// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Actualizer",
  "id": 2522,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3802,
      "name": "Lost Chapter",
      "gold": 1200
    },
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "active": [
    {
      "unique": true,
      "name": "Mana Made Real",
      "effects": "For 8 seconds, your mana is <i>Empowered</i>. While <i>Empowered</i>: your abilities cost 100% more mana; you gain 15% (+0.5% per 100 <b>bonus</b> mana) increased ability damage, <img src=\"/img/icons/healing.webp\" class=\"tip-icon\" />healing, and <img src=\"/img/icons/shielding.webp\" class=\"tip-icon\" />shielding; and your basic ability cooldowns progress 30% faster."
    }
  ],
  "stats": {
    "abilityPower": 90,
    "mana": 300,
    "abilityHaste": 10
  },
  "description": "90 Ability Power\n300 Mana\n10 Ability Haste\n\nMana Made Real (0s)\nFor 8 seconds, your mana is Empowered. While Empowered, your spells cost 100% more Mana, you gain  increased Ability damage, Shielding, and Healing, and your basic ability cooldowns progress 30% faster.",
  "gold": {
    "base": 1050,
    "total": 3100,
    "sell": 2170
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item