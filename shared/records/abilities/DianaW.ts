// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Pale Cascade",
  "affects": "Self, Enemies",
  "blurb": "Active:  Diana  shields herself, creating three orbiting spheres that detonate on contact with enemies to deal magic damage in an area.",
  "castTime": "none",
  "cooldown": "15 / 13.5 / 12 / 10.5 / 9",
  "cost": "40 / 45 / 50 / 55 / 60",
  "damageType": "Magic damage",
  "effectRadius": "200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Diana grants herself a shield for up to 5 seconds and creates three spheres that orbit her counterclockwise for the same duration, detonating upon contact with an enemy to deal magic damage to nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "45 / 60 / 75 / 90 / 105"
            },
            {
              "unit": "% AP",
              "values": "30"
            },
            {
              "unit": "% bonus health",
              "values": "9"
            }
          ]
        },
        {
          "attribute": "Magic Damage per Orb",
          "modifiers": [
            {
              "values": "20 / 32 / 44 / 56 / 68"
            },
            {
              "unit": "% AP",
              "values": "18"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "60 / 96 / 132 / 168 / 204"
            },
            {
              "unit": "% AP",
              "values": "54"
            }
          ]
        }
      ]
    },
    {
      "description": "If all three spheres detonate, Pale Cascade's shield is reapplied, stacking with its original shield and refreshing the duration.",
      "leveling": [
        {
          "attribute": "Maximum Shield Strength",
          "modifiers": [
            {
              "values": "90 / 120 / 150 / 180 / 210"
            },
            {
              "unit": "% AP",
              "values": "60"
            },
            {
              "unit": "% bonus health",
              "values": "18"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Diana/ability-icon/w",
  "notes": "On the second application of Pale Cascade's shield,  Shield Power will apply to both the new shield amount and the shield amount remaining from the first shield, which has already benefited from shield power.\nBecause of this, shield power effectively applies to the second shield twice, but with reduced efficiency, for up to an increase of 50% of shield power (maximum benefit if no damage was mitigated by the first shield). With 10% shield power, the second shield's total amount will be increased by up to an additional 5%, for a total of 15.5% bonus shield.\nThe formula for the total amount of shield Diana will receive from both shield applications is:\nTotal Shield = (((Shield Amount × (1 + Shield Power)) - Damage Blocked by Shield) + Shield Amount) × (1 + Shield Power)",
  "projectile": "TRUE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
