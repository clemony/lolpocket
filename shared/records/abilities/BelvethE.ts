// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Royal Maelstrom",
  "affects": "Self, Enemies",
  "blurb": "Active:  Bel'Veth enters a brief defensive stance, gaining  life steal and damage reduction.\nDuring this time, Bel'Veth rapidly slashes at the most wounded enemy, with the max number of slashes increased based on her bonus attack speed. Each slash deals physical damage, and applies  life steal,  on-hit and  spell effects based on the target's missing health.",
  "castTime": "None",
  "cooldown": "20 / 19 / 18 / 17 / 16",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "500",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Bel'Veth enters a frenzy for 1.5 seconds, during which she is unable to move, but gains damage reduction and 20% (+ 100% life steal) life steal.</p>",
      "leveling": [
        {
          "attribute": "Damage Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "35 / 40 / 45 / 50 / 55"
            }
          ]
        }
      ]
    },
    {
      "description": "While active, she rapidly slashes at the nearest enemy with the lowest current health percentage for up to 6 (+ 1 per 33.3% bonus attack speed) times over the duration. Each slash deals physical damage, increased by 0% - 300% (based on target's missing health), triggers on-attack effects, and applies on-hit effects and spell effects, with on-hit and spell effect damage reduced to 8% - 32% (based on target's missing health) effectiveness. Bel'Veth cannot perform slashes while she is affected by cast-inhibiting crowd control.",
      "leveling": [
        {
          "attribute": "Minimum Physical Damage per hit",
          "modifiers": [
            {
              "values": "6 / 7 / 8 / 9 / 10"
            },
            {
              "unit": "% AD",
              "values": "8"
            }
          ]
        },
        {
          "attribute": "Maximum Physical Damage per hit",
          "modifiers": [
            {
              "values": "24 / 28 / 32 / 36 / 40"
            },
            {
              "unit": "% AD",
              "values": "32"
            }
          ]
        }
      ]
    },
    {
      "description": "Royal Maelstrom deals 150% damage to monsters, applies life steal at 100% effectiveness, and is affected by critical strike modifiers.",
      "leveling": [
        {
          "attribute": "Minimum Monster Damage per hit",
          "modifiers": [
            {
              "values": "9 / 10.5 / 12 / 13.5 / 15"
            },
            {
              "unit": "% AD",
              "values": "12"
            }
          ]
        },
        {
          "attribute": "Maximum Monster Damage per hit",
          "modifiers": [
            {
              "values": "36 / 42 / 48 / 54 / 60"
            },
            {
              "unit": "% AD",
              "values": "48"
            }
          ]
        }
      ]
    },
    {
      "description": "Royal Maelstrom can be recast after 0.75 seconds within the duration, and does so automatically after the duration or when Bel'Veth casts an ability."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Bel'Veth ends Royal Maelstrom.</p>"
    },
    {
      "description": "The target does not have to be visible to be hit by this ability."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Belveth/ability-icon/e",
  "notes": "Applies  spell damage and procs  basic damage required effects.\nRoyal Maelstrom does not prioritize champions over other units.\nBel'Veth cannot attack  structures,  wards, nor jungle plants with Royal Maelstrom.\nIf Bel'Veth is  berserked or  taunted, she will slash at the unit she is forced to attack.\nBel'Veth will perform the slashes even if she is affected by  flee.(bug)\nEach slash's damage triggers a stack of  Conqueror.\nDespite this ability's cooldown starts on cast, it cannot be reduced by  Navori Flickerblade's Transcendence during the effect of this ability.(bug) Cooldowns of the other basic abilities can be normally reduced during this ability, though.\nRoyal Maelstrom is special cased to end early if she is hit by  Kassadin's  Null Sphere.\nThe following table refers for interactions while Bel'Veth is performing Royal Maelstrom:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nAll items interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Hexflash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath",
  "spellEffects": "special",
  "spellshieldable": "false",
  "targeting": "Auto"
}
export default ability
