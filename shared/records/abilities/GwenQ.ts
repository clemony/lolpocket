// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Snip Snip!",
  "width": "75 / 360 /  25",
  "affects": "Enemies",
  "blurb": "Passive:  Gwen's  basic attacks  on-hit generate  stacks of Snippy, up to a cap.",
  "castTime": "0.5",
  "cooldown": "6.5 / 5.75 / 5 / 4.25 / 3.5",
  "cost": "40",
  "damageType": "Other damage",
  "effectRadius": "-50 : 465",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Gwen's basic attacks generate a stack of Snippy on-hit for 6 seconds, stacking up to 4 times and refreshing on subsequent attacks.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gwen snips at least twice with her scissors in a cone in the target direction over the cast time, dealing magic damage per snip to all enemies within the area, with the final snip dealing increased damage. The center of each snip converts 50% of the damage to true damage, then applies A Thousand Cuts. Snip Snip! deals 75% damage against minions, and executes them on the first damage instance if they are below 20% health.</p>",
      "leveling": [
        {
          "attribute": "Damage per Snip",
          "modifiers": [
            {
              "values": "10 / 15 / 20 / 25 / 30"
            },
            {
              "unit": "% AP",
              "values": "5"
            }
          ]
        },
        {
          "attribute": "Center Damage per Snip",
          "modifiers": [
            {
              "values": "10 / 15 / 20 / 25 / 30"
            },
            {
              "unit": "% AP",
              "values": "5"
            },
            {
              "unit": "% (+ 0.6% per 100 AP) of the target's maximum health",
              "values": "1"
            }
          ]
        },
        {
          "attribute": "Final Snip Damage",
          "modifiers": [
            {
              "values": "60 / 85 / 110 / 135 / 160"
            },
            {
              "unit": "% AP",
              "values": "35"
            }
          ]
        },
        {
          "attribute": "Final Snip Center Damage",
          "modifiers": [
            {
              "values": "60 / 85 / 110 / 135 / 160"
            },
            {
              "unit": "% AP",
              "values": "35"
            },
            {
              "unit": "% (+ 0.6% per 100 AP) of the target's maximum health",
              "values": "1"
            }
          ]
        }
      ]
    },
    {
      "description": "If Gwen has any Snippy stacks, she consumes them to snip an additional time for each.",
      "leveling": [
        {
          "attribute": "Minimum Damage",
          "modifiers": [
            {
              "values": "70 / 100 / 130 / 160 / 190"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Minimum Center Damage",
          "modifiers": [
            {
              "values": "70 / 100 / 130 / 160 / 190"
            },
            {
              "unit": "% AP",
              "values": "40"
            },
            {
              "unit": "% (+ 1.2% per 100 AP) of the target's maximum health",
              "values": "2"
            }
          ]
        },
        {
          "attribute": "Maximum Damage",
          "modifiers": [
            {
              "values": "110 / 160 / 210 / 260 / 310"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Maximum Center Damage",
          "modifiers": [
            {
              "values": "110 / 160 / 210 / 260 / 310"
            },
            {
              "unit": "% AP",
              "values": "60"
            },
            {
              "unit": "% (+ 3.6% per 100 AP) of the target's maximum health",
              "values": "6"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Gwen/ability-icon/q",
  "notes": "Snip Snip!'s total hitbox uses the intersection of a trapezoid and a circle. Enemies are hit by Snip Snip! only when their hitbox overlaps with both of those areas, or with Gwen's  gameplay radius.\nSubsequent basic attacks on-hit also refresh the duration of Snippy stacks.\nThe amount of Snippy stacks Gwen has is indicated below her health bar.\n Spell shield blocks only one snip.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe first snip happens at 0.13 seconds, the last one at the end of the cast time.\nBonus snips from Snippy stacks each happen at 0.45, 0.4, 0.35 and 0.23 seconds into the cast time.",
  "resource": "Mana",
  "spellEffects": "aoe",
  "spellshieldable": "special",
  "targeting": "Direction"
}
export default ability
