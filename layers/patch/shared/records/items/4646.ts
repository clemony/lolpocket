// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Stormsurge",
  "id": 4646,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3145,
      "name": "Hextech Alternator",
      "gold": 1100
    },
    {
      "id": 3113,
      "name": "Aether Wisp",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Stormraider",
      "effects": "Dealing damage to an enemy champion equal to 25% of their <b>maximum</b> health within 2.5 seconds inflicts them with <i>Squall</i> (30 second cooldown, starts on <i>Squall's</i> application)."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Squall",
      "effects": "After 2 seconds of having applied <i>Squall</i>, strike the target with lightning, dealing 125 magic damage (+10% AP) magic damage to them. If the target dies before being struck, they emit an electric field instantly that shocks all enemy champions in a 600 radius, dealing them the same damage."
    }
  ],
  "stats": {
    "abilityPower": 90,
    "flatMagicPenetration": 15,
    "percentMovespeed": 6
  },
  "description": "90 Ability Power\n15 Magic Penetration\n6% Move Speed\n\nStormraider\nDealing 25% of a champion's maximum Health within 2.5s applies Squall to them.\n\nSquall\nAfter 2 seconds, deal magic damage. If the target dies before Squall triggers, it damages nearby enemies.",
  "gold": {
    "base": 800,
    "total": 2800,
    "sell": 1960
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item