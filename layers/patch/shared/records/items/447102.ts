// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Reality Fracture",
  "id": 447102,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "Kevins"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "ZZ'Rot",
      "effects": "Basic attacks on-attack and damaging abilities against enemies summon 8 allied <img src=\"/img/icons/voidmites.webp\" class=\"tip-icon\" />Voidmites that are <img src=\"/img/icons/untargetable.webp\" class=\"tip-icon \" />untargetable and attack the target (12 second cooldown). <img src=\"/img/icons/voidmites.webp\" class=\"tip-icon\" />Voidmites deal 6 magic damage (+4% of your AD) (+8% of your AP) magic damage with each of their basic attacks and last for up to 3 seconds. Additionally, summon 6 <img src=\"/img/icons/voidmites.webp\" class=\"tip-icon\" />Voidmites upon your death."
    }
  ],
  "stats": {
    "abilityPower": 80,
    "attackSpeed": 40,
    "health": 300
  },
  "description": "80 Ability Power\n40% Attack Speed\n300 Health\n\nZZ'Rot (0s)\nOn Attack or when damaging an enemy with an ability, summon 8 Voidgrubs to Attack the target. Voidgrubs deal  magic damage and live for up to 3 seconds.\n\nWhen you die, spawn 6.",
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