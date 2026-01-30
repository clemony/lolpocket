// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Everfrost",
  "id": 446656,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "GLP",
    "hose",
    "supersoaker"
  ],
  "active": [
    {
      "unique": true,
      "name": "Glaciate",
      "effects": "Unleash a fan of icy shards in a cone in the target direction, dealing 300 magic damage (+85% AP) magic damage to enemies struck within and <img src=\"/img/icons/slow.webp\" class=\"tip-icon\" />slowing them by 70% for 1.5 seconds. Enemies hit in the center of the cone are <img src=\"/img/icons/root.webp\" class=\"tip-icon\" />rooted for the same duration instead."
    }
  ],
  "stats": {
    "abilityPower": 100,
    "health": 250,
    "mana": 600,
    "abilityHaste": 25
  },
  "description": "100 Ability Power\n250 Health\n600 Mana\n25 Ability Haste\n\nACTIVE (0s)\nGlaciate\n Deal damage in a cone, Slowing enemies hit. Enemies at the center of the cone are Rooted instead.",
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