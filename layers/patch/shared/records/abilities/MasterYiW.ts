// Updated Patch 16.1 - 01/29/2026 04:26:53 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Meditate",
  "affects": "Self",
  "castTime": "none",
  "cooldown": "10",
  "cost": "40",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Master Yi channels for up to 4 seconds, healing himself every 0.5 seconds, increased by 0% - 100% (based on missing health).</p>",
      "leveling": [
        {
          "attribute": "Minimum Heal Per Tick",
          "modifiers": [
            {
              "values": "15 / 25 / 35 / 45 / 55"
            },
            {
              "unit": "% AP",
              "values": "12.5"
            }
          ]
        },
        {
          "attribute": "Maximum Heal Per Tick",
          "modifiers": [
            {
              "values": "30 / 50 / 70 / 90 / 110"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        },
        {
          "attribute": "Minimum Total Heal",
          "modifiers": [
            {
              "values": "120 / 200 / 280 / 360 / 440"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Maximum Total Heal",
          "modifiers": [
            {
              "values": "240 / 400 / 560 / 720 / 880"
            },
            {
              "unit": "% AP",
              "values": "200"
            }
          ]
        }
      ]
    },
    {
      "description": "While channeling, Master Yi gains 70% damage reduction for the first 0.5 seconds, which is then modified to a reduced amount for the remaining duration of the channel. Meditate's damage reduction is halved against turrets and lingers for 0.5 seconds after the channel ends.",
      "leveling": [
        {
          "attribute": "Modified Damage Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "45 / 47.5 / 50 / 52.5 / 55"
            }
          ]
        },
        {
          "attribute": "Turret Modified Damage Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "22.5 / 23.75 / 25 / 26.25 / 27.5"
            }
          ]
        }
      ]
    },
    {
      "description": "Meditate resets Master Yi's basic attack timer, pauses Wuju Style's and Highlander's duration, and grants one stack of Double Strike per second during the channel."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MasterYi/ability-icon/w",
  "notes": "Meditate's healing amount updates dynamically as he heals himself, making Master Yi heal for less as his current health increases.\nThe first tick of healing may occur at any moment on the first 0.5 seconds of the channel. This means immediately canceling the channel for the attack reset does not guarantee one tick of healing, though it may occur with some chance.\nThe following table refers for interactions while Master Yi is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "resource": "Mana per second",
  "targeting": "Auto"
}
  export default ability
