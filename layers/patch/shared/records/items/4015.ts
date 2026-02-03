// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Perplexity",
  "id": 4015,
  "rank": "Legendary",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Giant Slayer",
      "effects": "Deal 0% – 15% (based on maximum health difference) increased damage against enemy champions with greater <b>maximum</b> health than you."
    }
  ],
  "stats": {
    "abilityPower": 60,
    "armorPenetration": 22,
    "percentMagicPenetration": 30,
    "percentMovespeed": 5
  },
  "description": "60 Ability Power\n5% Move Speed\n22% Armor Penetration\n30% Magic Penetration\n\nGiant Slayer\nDeal up to 15% bonus damage against champions with greater max Health than you.\n\nMax damage increase reached when Health difference is greater than 2500.",
  "gold": {
    "base": 2500,
    "total": 2500,
    "sell": 1250
  },
  "maps": [
    30
  ]
}
export default item