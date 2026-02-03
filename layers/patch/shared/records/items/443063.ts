// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Eleisa's Miracle",
  "id": 443063,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Enduring Vitality",
      "effects": "Gain <img src=\"/img/icons/hsp.webp\" class=\"tip-icon\" />hsp per 100 <b>current</b> health you are missing, up to 60% at 2400 <b>current</b> health missing."
    }
  ],
  "stats": {
    "armor": 50,
    "magicResistance": 50,
    "abilityHaste": 25
  },
  "description": "50 Armor\n50 Magic Resist\n25 Ability Haste\n\nEnduring Vitality\nGain +2.5% Heal and Shield Power per 100 Missing Health, up to 60%.",
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