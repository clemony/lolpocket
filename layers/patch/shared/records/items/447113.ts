// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Detonation Orb",
  "id": 447113,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "The Bomb",
      "effects": "Dealing ability damage against enemy champions marks them for 3 seconds, storing 20% of the post-mitigation damage you deal to them, increased to 25% if they are <img src=\"/img/icons/immobilize.webp\" class=\"tip-icon\" />immobilized. Each instance of your ability damage dealt to a marked target refreshes their mark. Once the mark expires, it detonates to deal true damage equal to the amount stored against the target. If a mark would deal lethal damage to the target, it is detonated immediately."
    }
  ],
  "stats": {
    "abilityPower": 90,
    "flatMagicPenetration": 12,
    "mana": 600,
    "abilityHaste": 20
  },
  "description": "90 Ability Power\n12 Magic Penetration\n600 Mana\n20 Ability Haste\n\nThe Bomb\nAbility damage marks the target, storing 20% of the damage dealt (increased to 25% against Immobilized enemies). \n\n3 seconds after you last damage the target with an ability, detonate the stored damage on them. If at any point the damage is enough to kill the target, detonate immediately.",
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