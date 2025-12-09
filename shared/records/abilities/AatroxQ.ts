// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "The Darkin Blade",
  "affects": "Enemies",
  "castTime": "0.6",
  "cooldown": "14 / 12 / 10 / 8 / 6",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "Varied",
  "effects": [
    {
      "description": "Aatrox can activate The Darkin Blade three times before the ability goes on cooldown, with a 1-second static cooldown between casts. If Aatrox does not recast the ability within 4 seconds of the previous cast, it goes on cooldown."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aatrox performs a strike with his greatsword for each of the three casts, dealing physical damage to enemies hit within an area. Enemies hit within a Sweetspot of the area take 70% bonus damage and are also knocked up for 0.25 seconds. Each subsequent cast gains 25% more damage.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">First Cast:</span> Aatrox's first strike affects a 625 × 180-unit rectangular area in the target direction, with him centered on the back line and the Sweetspot at the farthest edge.</p>",
      "leveling": [
        {
          "attribute": "First Cast Damage",
          "modifiers": [
            {
              "values": "10 / 25 / 40 / 55 / 70"
            },
            {
              "tooltip": "Scaling per rank:\n60 / 67.5 / 75 / 82.5 / 90% AD",
              "unit": "% AD",
              "values": "60 - 90"
            }
          ]
        },
        {
          "attribute": "First Sweetspot Damage",
          "modifiers": [
            {
              "values": "17 / 42.5 / 68 / 93.5 / 119"
            },
            {
              "tooltip": "Scaling per rank:\n102 / 114.75 / 127.5 / 140.25 / 153% AD",
              "unit": "% AD",
              "values": "102 - 153"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Second Cast:</span> Aatrox's second strike affects a trapezoidal area in the target direction, with the Sweetspot at the farthest edge. The hitbox begins 100-units behind Aatrox and extends 475-units in front of him, measuring between 300 and 500-units wide from behind to in front.</p>",
      "leveling": [
        {
          "attribute": "Second Cast Damage",
          "modifiers": [
            {
              "values": "12.5 / 31.25 / 50 / 68.75 / 87.5"
            },
            {
              "tooltip": "Scaling per rank:\n75 / 84.38 / 93.75 / 103.13 / 112.5% AD",
              "unit": "% AD",
              "values": "75 - 112.5"
            }
          ]
        },
        {
          "attribute": "Second Sweetspot Damage",
          "modifiers": [
            {
              "values": "21.25 / 53.13 / 85 / 116.88 / 148.75"
            },
            {
              "tooltip": "Scaling per rank:\n127.5 / 143.44 / 159.38 / 175.31 / 191.25% AD",
              "unit": "% AD",
              "values": "127.5 - 191.25"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Third Cast:</span> Aatrox's third strike affects a 300-radius circular area centered on a target location that is 200 units in front of him, with a 180-radius Sweetspot within.</p>",
      "leveling": [
        {
          "attribute": "Third Cast Damage",
          "modifiers": [
            {
              "values": "15 / 37.5 / 60 / 82.5 / 105"
            },
            {
              "tooltip": "Scaling per rank:\n90 / 101.25 / 112.5 / 123.75 / 135% AD",
              "unit": "% AD",
              "values": "90 - 135"
            }
          ]
        },
        {
          "attribute": "Third Sweetspot Damage",
          "modifiers": [
            {
              "values": "25.5 / 63.75 / 102 / 140.25 / 178.5"
            },
            {
              "tooltip": "Scaling per rank:\n153 / 172.13 / 191.25 / 210.38 / 229.5% AD",
              "unit": "% AD",
              "values": "153 - 229.5"
            }
          ]
        }
      ]
    },
    {
      "description": "The Darkin Blade deals 55% / 60% / 65% / 70% (based on level) damage against minions. Against monsters, it deals 40 bonus physical damage and the knock up duration from hitting the Sweetspot against them is doubled to 0.5 seconds. The bonus damage to monsters is affected by the subsequent cast and Sweetspot damage modifiers.",
      "leveling": [
        {
          "attribute": "Maximum Non-Minion Non-Sweetspot Damage",
          "modifiers": [
            {
              "values": "37.5 / 93.75 / 150 / 206.25 / 262.5"
            },
            {
              "tooltip": "Scaling per rank:\n225 / 253.13 / 281.25 / 309.38 / 337.5% AD",
              "unit": "% AD",
              "values": "225 - 337.5"
            }
          ]
        },
        {
          "attribute": "Maximum Non-Minion Sweetspot Damage",
          "modifiers": [
            {
              "values": "63.75 / 159.38 / 255 / 350.63 / 446.25"
            },
            {
              "tooltip": "Scaling per rank:\n382.5 / 430.31 / 478.13 / 525.94 / 573.75% AD",
              "unit": "% AD",
              "values": "382.5 - 573.75"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Aatrox/ability-icon/q",
  "notes": "The highlighted areas denote the sweetspot - enemies are affected where the two areas overlap (See  edge range and  center range). The first and second casts function like any point-blank AOE (i.e. an effect centered on the caster). An enemy is considered to be hit by the ability based on  edge range - i.e. if any part of your  gameplay radius is within the hitbox, you are affected.\nThe third cast, as well as the Sweetspot for the first and second cast, function like ground-targeted abilities. An enemy is considered to be hit by the ability based on  center range - i.e. an enemy's center has to be within the hitbox to be affected.\nAs implied by the previous point, the Sweetspot for the first and second cast is implemented as separate areas of effect to the main component of the ability. Enemies must be within both areas to trigger the bonus damage,  knock up and  Deathbringer Stance's cooldown reduction.\nThe 'target gets hit' SFX plays whenever an enemy is within the Sweetspot - meaning it is possible to trigger the sound effect without affecting an enemy.\nIn the game, Sweetspot damage is incorrectly displayed as  a real critical strike.(bug)\nEach cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThe hitbox and Aatrox's model are fixed to the initial target direction.\nAatrox's facing-direction, for effects such as  Petrifying Gaze, is the direction he is moving, and not the direction the model is facing.\nAll damage modifiers  stack multiplicatively.\nThere's a small period of time in which Aatrox can't declare basic attacks after casting The Darkin Blade.(note)\nThis ability's damage is calculated based on the caster's current stats and changes dynamically.\nThis ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Umbral Dash can be cast. Other abilities are disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
