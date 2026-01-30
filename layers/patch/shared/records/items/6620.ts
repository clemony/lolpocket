// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Echoes of Helia",
  "id": 6620,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 4642,
      "name": "Bandleglass Mirror",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "spooky cup"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Soul Siphon",
      "effects": "Gain 35% of pre-mitigation damage dealt to champions as <i>Soul Charges</i>, up to 80 – 250 (based on level). <img src=\"/img/icons/healing.webp\" class=\"tip-icon\" />Healing or <img src=\"/img/icons/shielding.webp\" class=\"tip-icon\" />shielding an allied champion <i>(excluding yourself)</i> consumes all charges to heal them equal to the consumed amount."
    }
  ],
  "stats": {
    "abilityPower": 35,
    "health": 200,
    "manaRegen": 125,
    "abilityHaste": 20
  },
  "description": "35 Ability Power\n200 Health\n20 Ability Haste\n125% Base Mana Regen\n\nSoul Siphon\nGain 35% of pre-mitigation damage dealt to champions as Soul Charges. Healing or Shielding an ally consumes all Soul Charges to restore Health.",
  "gold": {
    "base": 500,
    "total": 2200,
    "sell": 1540
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item