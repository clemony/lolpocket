// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Innervating Locket",
  "id": 447104,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Fill the Soul",
      "effects": "Gain a charge each time you or champions within 800 units cast an ability, up to 30. At maximum charges, gain 100 – 250 (based on level) ability power and 15% – 25% (based on %) <b>bonus</b> movement speed for the rest of the round, as well as a 400 – 750 (based on level) <img src=\"/img/icons/shield.webp\" class=\"tip-icon light:invert\" />shield that lasts until destroyed. Charges are reset every round and between each phase in a round."
    }
  ],
  "stats": {
    "abilityPower": 70,
    "health": 200,
    "abilityHaste": 20
  },
  "description": "70 Ability Power\n20 Ability Haste\n200 Health\n\nFill the Soul\nAny Ability cast within 800 range grants you a charge.\n\nAt 30 charges, gain  Shield,  Ability Power, and  Move Speed for the rest of the round.",
  "gold": {
    "base": 1000,
    "purchasable": true,
    "total": 1000,
    "sell": 400
  },
  "maps": [
    30
  ]
}
export default item