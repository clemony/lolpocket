// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Twin Mask",
  "id": 443080,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Unanimity",
      "effects": "Gain 20% of your teammate's attack damage, ability power, <b>total</b> attack speed, <b>maximum</b> health, armor, magic resistance, and ability haste, increased to 35% if they also have <b>Twin Mask</b> and are alive."
    }
  ],
  "stats": {},
  "description": "Unanimity\nGain a percent of your teammate's Health, Armor, Magic Resist, Attack Damage, Ability Power, Attack Speed, and Ability Haste, increased significantly if they also have Twin Mask and are alive.",
  "gold": {
    "base": 1000,
    "total": 1000,
    "sell": 400
  },
  "maps": [
    30
  ]
}
export default item