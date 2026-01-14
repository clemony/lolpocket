// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
      const item: Item =  {
  "name": "Bloodletter's Curse",
  "id": 8010,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3147,
      "name": "Haunting Guise",
      "gold": 1300
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Vile Decay",
      "effects": "Dealing magic damage to an enemy champion with a champion ability applies a stack of <i>Vile Decay</i> to them for 6 seconds, stacking up to 4 times and up to once per basic attack or ability per cast instance every 0.3 seconds. Each stack inflicts 7.5% magic resistance reduction, up to 30% mr at 4 stacks."
    }
  ],
  "stats": {
    "abilityPower": 65,
    "health": 400,
    "abilityHaste": 15
  },
  "description": "65 Ability Power\n400 Health\n15 Ability Haste\n\nVile Decay\nDealing magic damage with abilities or passives to champions reduces their Magic Resist by 7.5% for 6 seconds, up to 30%.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 750,
    "total": 2900,
    "sell": 2030
  }
}
export default item