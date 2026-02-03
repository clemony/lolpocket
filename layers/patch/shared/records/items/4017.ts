// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Hellfire Hatchet",
  "id": 4017,
  "rank": "Legendary",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "burn"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Char",
      "effects": "Your next ability hit applies a Burn that deals 0% – 2000% (based on maximum health difference) (+0% – 2000% (based on maximum health difference) per 1 Lethality) lethality (based on <b>maximum</b> health difference) hp of the target's <b>current</b> health physical damage seconds over 4 seconds.",
      "cooldown": 15
    }
  ],
  "stats": {
    "attackDamage": 35,
    "lethality": 12
  },
  "description": "35 Attack Damage\n12 Lethality\n\nChar (0s)\nYour next Ability hit Burns enemies for % to % current Health physical damage over 4 seconds, based on how much more max Health they have than you.\n\nBonus damage maximum is reached at 2000 health difference",
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