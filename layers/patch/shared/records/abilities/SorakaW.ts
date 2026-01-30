// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Astral Infusion",
  "affects": "Allies / Self",
  "blurb": "Active:  Soraka consumes a portion of her maximum health to  heal the target allied champion.",
  "castTime": "0.25",
  "cooldown": "6 / 5 / 4 / 3 / 2",
  "cost": "40 / 45 / 50 / 55 / 60",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Soraka heals the target allied champion.</p>",
      "leveling": [
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "values": "90 / 110 / 130 / 150 / 170"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "If cast while under Rejuvenation, the health cost will be reduced by a percentage.",
      "leveling": [
        {
          "attribute": "Health Cost Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "80 / 85 / 90 / 95 / 100"
            }
          ]
        },
        {
          "attribute": "Reduced Health Cost",
          "modifiers": [
            {
              "unit": "% of maximum health",
              "values": "2 / 1.5 / 1 / 0.5 / 0"
            }
          ]
        }
      ]
    },
    {
      "description": "Astral Infusion cannot be cast if Soraka is below 5% of her maximum health."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/w",
  "notes": "Astral Infusion can also be targeted on allied  decoys.\nAstral Infusion can be cast even if Soraka doesn't have the sufficient amount of health to pay for the health cost while above  5% of her maximum health.\nAs with all abilities with health costs, Astral Infusion will not reduce Soraka's health below 1.\n Spirit Visage will only increase the health donated to allies if the target ally possesses it, although owning it will boost the heal that Soraka receives from  Starcall and  Wish.\nAstral Infusion's effects occur before the cast time.\nAstral Infusion has a  forgiveness radius of 175 units.",
  "projectile": "FALSE",
  "resource": "Other",
  "targeting": "Unit",
  "targetRange": "550"
}
  export default ability
