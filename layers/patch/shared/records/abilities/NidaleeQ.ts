// Updated Patch 16.1 - 01/29/2026 04:26:57 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Takedown",
  "affects": "Self, Enemies",
  "blurb": "Active:  Nidalee's next  basic attack within some time will gain  bonus range and deal magic damage based on the target's missing health.",
  "castTime": "none",
  "cooldown": "6",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nidalee empowers her next basic attack within 10 seconds to have an uncancellable windup, gain 75 bonus range and deal modified magic damage that is increased by an amount for every 1% of the target's missing health.Takedown can critically strike for (75% + 30%) AD bonus magic damage.</p>",
      "leveling": [
        {
          "attribute": "Minimum Magic Damage",
          "modifiers": [
            {
              "values": "5 / 30 / 55 / 80"
            },
            {
              "unit": "% AD",
              "values": "75"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "10 / 67.5 / 137.5 / 220"
            },
            {
              "unit": "% AD",
              "values": "150 / 168.75 / 187.5 / 206.25"
            },
            {
              "tooltip": "Scaling per rank:\n80 / 90 / 100 / 110% AP",
              "unit": "% AP",
              "values": "80 - 110"
            }
          ]
        },
        {
          "attribute": "Increased Damage Modifier",
          "modifiers": [
            {
              "unit": "%",
              "values": "1 / 1.25 / 1.5 / 1.75"
            }
          ]
        },
        {
          "attribute": "Maximum Increased Damage",
          "modifiers": [
            {
              "unit": "%",
              "values": "100 / 125 / 150 / 175"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Hunt Bonus:</span> Hitting a Hunted target increases Takedown's damage by 30%.</p>",
      "leveling": [
        {
          "attribute": "Prowl-Enhanced Minimum Damage",
          "modifiers": [
            {
              "values": "6.5 / 39 / 71.5 / 104"
            },
            {
              "unit": "% AD",
              "values": "97.5"
            },
            {
              "unit": "% AP",
              "values": "52"
            }
          ]
        },
        {
          "attribute": "Prowl-Enhanced Maximum Damage",
          "modifiers": [
            {
              "values": "13 / 87.75 / 178.75 / 286"
            },
            {
              "unit": "% AD",
              "values": "195 / 219.38 / 243.75 / 268.13"
            },
            {
              "tooltip": "Scaling per rank:\n104 / 117 / 130 / 143% AP",
              "unit": "% AP",
              "values": "104 - 143"
            }
          ]
        }
      ]
    },
    {
      "description": "Takedown resets Nidalee's basic attack timer. Other damage converted to magic damage by Takedown are not increased by Takedown's respective effects. Nidalee loses Takedown's empowered attack immediately when she switches to Human Form."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nidalee/ability-icon/q",
  "notes": "Takedown's attack deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nTakedown's damage is not affected by  critical strike modifiers, but the basic attack can still critically strike and the bonus damage from the critical strike is converted to magic damage.\nTakedown's damage modifier does not affect the bonus damage dealt by the critical strike.\nTakedown converts the bonus damage dealt by  Spellblade to magic damage from physical, but does not apply its damage modifier to the effect.\nTakedown's damage will apply  life steal.\nTakedown's damage modifier does not apply against structures; the minimum damage is always applied.\nPENDING FOR TEST: - Parry interactions ( dodge,  block and  blind).",
  "spellEffects": "Special",
  "spellshieldable": "True",
  "targeting": "Auto"
}
  export default ability
