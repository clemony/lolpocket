// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Blunt Force Trauma",
  "blurb": "Passive:  Dr. Mundo gains  bonus attack damage based on his maximum health.",
  "castTime": "none",
  "cooldown": "9 / 8.25 / 7.5 / 6.75 / 6",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "155",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Dr. Mundo gains bonus attack damage.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Damage",
          "modifiers": [
            {
              "unit": "% maximum health",
              "values": "2 / 2.3 / 2.6 / 2.9 / 3.2"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Dr. Mundo empowers his next basic attack within 4 seconds to have an uncancellable windup, gain 50 bonus range, and deal bonus physical damage, increased by 0% - 40% (based on Dr. Mundo's missing health). If the target dies or is a small monster, they are sent flying away in a line, though not through terrain, causing all enemies they pass through to take 100% AD physical damage plus Blunt Force Trauma's minimum bonus damage.</p>",
      "leveling": [
        {
          "attribute": "Minimum Bonus Physical Damage",
          "modifiers": [
            {
              "values": "5 / 15 / 25 / 35 / 45"
            },
            {
              "unit": "% bonus health",
              "values": "5"
            }
          ]
        },
        {
          "attribute": "Maximum Bonus Physical Damage",
          "modifiers": [
            {
              "values": "7 / 21 / 35 / 49 / 63"
            },
            {
              "unit": "% bonus health",
              "values": "7"
            }
          ]
        }
      ]
    },
    {
      "description": "Blunt Force Trauma as well as the triggering attack's damage is increased to 140% against minions and 200% against monsters.",
      "leveling": [
        {
          "attribute": "Minimum Minion Physical Damage",
          "modifiers": [
            {
              "values": "7 / 21 / 35 / 49 / 63"
            },
            {
              "unit": "% bonus health",
              "values": "7"
            }
          ]
        },
        {
          "attribute": "Maximum Minion Physical Damage",
          "modifiers": [
            {
              "values": "9.8 / 29.4 / 49 / 68.6 / 88.2"
            },
            {
              "unit": "% bonus health",
              "values": "9.8"
            }
          ]
        },
        {
          "attribute": "Minimum Monster Physical Damage",
          "modifiers": [
            {
              "values": "10 / 30 / 50 / 70 / 90"
            },
            {
              "unit": "% bonus health",
              "values": "10"
            }
          ]
        },
        {
          "attribute": "Maximum Monster Physical Damage",
          "modifiers": [
            {
              "values": "14 / 42 / 70 / 98 / 126"
            },
            {
              "unit": "% bonus health",
              "values": "14"
            }
          ]
        }
      ]
    },
    {
      "description": "Blunt Force Trauma resets Dr. Mundo's basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/DrMundo/ability-icon/e",
  "notes": "Blunt Force Trauma's damage is treated as  basic damage but also triggers spell effects by also being tagged as  spell damage, while the target's body being shoved deals  area damage to enemies it passes through.\nThe  basic attack is also considered a part of Blunt Force Trauma and treated as both  basic damage and  spell damage.\nBlunt Force Trauma's attack works against  structures, consuming the buff and dealing its full damage.\nBlunt Force Trauma cannot knock back  wards,  structures or epic  monsters it kills, nor champions that enter a  zombie state upon dying.\nTargets flung away are rendered  untargetable in the process.\nThe damage of the enemy's corpse colliding with enemies does not benefit from Blunt Force Trauma's attack  critically striking.",
  "resource": "Health",
  "spellEffects": "special",
  "spellshieldable": "false",
  "targeting": "Auto"
}
export default ability
