// Updated Patch 15.23.1 - 11/30/2025 12:24:08 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Contaminate",
  "affects": "Enemies",
  "blurb": "Active:  Twitch spreads a toxin to nearby enemies afflicted with  Deadly Venom, dealing physical damage. This deals additional physical and magic damage based on stacks of  Deadly Venom.",
  "castTime": "0.25",
  "cooldown": "12 / 11 / 10 / 9 / 8",
  "cost": "50 / 60 / 70 / 80 / 90",
  "damageType": "Physical damage",
  "effectRadius": "1200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Twitch sends out a lethal toxin to each nearby enemy afflicted by Deadly Venom, dealing them physical damage.</p>",
      "leveling": [
        {
          "attribute": "Base Physical Damage",
          "modifiers": [
            {
              "values": "20 / 30 / 40 / 50 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "Contaminate deals additional physical damage and 35% AP magic damage for each stack of Deadly Venom on the target.",
      "leveling": [
        {
          "attribute": "Physical Damage Per Stack",
          "modifiers": [
            {
              "values": "15 / 20 / 25 / 30 / 35"
            },
            {
              "unit": "% bonus AD",
              "values": "35"
            }
          ]
        },
        {
          "attribute": "Minimum Mixed Damage",
          "modifiers": [
            {
              "values": "35 / 50 / 65 / 80 / 95"
            },
            {
              "unit": "% bonus AD",
              "values": "35"
            },
            {
              "unit": "% AP",
              "values": "35"
            }
          ]
        },
        {
          "attribute": "Maximum Mixed Damage",
          "modifiers": [
            {
              "values": "110 / 150 / 190 / 230 / 270"
            },
            {
              "unit": "% bonus AD",
              "values": "210"
            },
            {
              "unit": "% AP",
              "values": "210"
            }
          ]
        }
      ]
    },
    {
      "description": "A nearby enemy with Deadly Venom is required to cast this ability. The target does not have to be visible to be targeted by this ability."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Twitch/ability-icon/e",
  "notes": "Contaminate will deal the additional damage to targets based on the number of  Deadly Venom stacks they had at the start of the cast time.\nTwitch is given a range indicator for Contaminate's radius upon infecting an enemy champion with  Deadly Venom (actual range is slightly larger than shown by the indicator).\nContaminate will not deal damage to enemies that are not within range of the ability before the cast time completes.\nIf the target moves out of range after the cast time, they are still dealt the damage.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "Aoe",
  "spellshieldable": "True",
  "targeting": "Proximity"
}
export default ability
