// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
      const item: Item =  {
  "name": "Luden's Echo",
  "id": 6655,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3802,
      "name": "Lost Chapter",
      "gold": 1200
    },
    {
      "id": 3145,
      "name": "Hextech Alternator",
      "gold": 1100
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Echo",
      "effects": "Gain 6 <i>Echo</i> stacks. Dealing ability damage to an enemy consumes all <i>Echo</i> stacks to deal 75 magic damage (+5% AP) <b>bonus</b> magic damage to them and, for each stack consumed beyond the first, an additional enemy within 600 units of them, firing an orb at each secondary target that impacts after 0.528 seconds to deal the damage. If the number of additional targets fired at is less than the number of stacks consumed,deal an additional 15 – 75 (based on remaining <i>Echo</i> stacks) magic damage (+1% – 5% (based on remaining <i>Echo</i> stacks) AP) magic damage to the primary target, for a total of 1 – 5 (based on remaining <i>Echo</i> stacks) magic damage (+1% – 5% (based on remaining <i>Echo</i> stacks) AP)",
      "cooldown": "12"
    }
  ],
  "stats": {
    "abilityPower": 100,
    "mana": 600,
    "abilityHaste": 10
  },
  "description": "100 Ability Power\n600 Mana\n10 Ability Haste\n\nEcho\nDamaging Abilities fire 6 Echoes that deal bonus magic damage to the target and nearby enemies. Remaining Echoes fire on the primary target, dealing 20% damage.\n",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 450,
    "total": 2750,
    "sell": 1925
  }
}
export default item