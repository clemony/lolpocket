// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Shield of Durand",
  "affects": "Self / Enemies",
  "castTime": "none",
  "cooldown": "18 / 17 / 16 / 15 / 14",
  "cost": "50",
  "damageType": "Magic damage",
  "effectRadius": "175 : 350 (based on channel time)",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Galio gains Anti-Magic Bulwark, and restores it after 12 / 10 / 8 (based on level) seconds without taking damage.Anti-Magic Bulwark: Gain a shield that absorbs magic damage.</p>",
      "leveling": [
        {
          "attribute": "Magic Shield Strength",
          "modifiers": [
            {
              "unit": "% of maximum health",
              "values": "7.5 / 9 / 10.5 / 12 / 13.5"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Galio charges for up to 2 seconds, slowing himself by 15%, and gaining physical and magic damage reduction; charging increases Shield of Durand's radius, damage and taunt duration over the first 1.25 seconds of the channel.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "12.5 / 15 / 17.5 / 20 / 22.5"
            },
            {
              "unit": "% per 100 AP",
              "values": "1.5"
            },
            {
              "unit": "% per 100 bonus magic resistance",
              "values": "4"
            },
            {
              "unit": "% per 100 bonus health",
              "values": "0.5"
            }
          ]
        },
        {
          "attribute": "Magic Damage Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "25 / 30 / 35 / 40 / 45"
            },
            {
              "unit": "% per 100 AP",
              "values": "4"
            },
            {
              "unit": "% per 100 bonus magic resistance",
              "values": "8"
            },
            {
              "unit": "% per 100 bonus health",
              "values": "1"
            }
          ]
        }
      ]
    },
    {
      "description": "Shield of Durand can be recast within the duration and does so automatically afterwards or if it is interrupted."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Galio refreshes the damage reduction for 2 seconds and deals magic damage to nearby enemy champions, increased by 0% - 200% (based on channel time), as well as taunts them for 0.5 - 1.5 (based on channel time) seconds and, after a brief delay, sets their movement speed to a static 60 for the same duration but slightly longer.</p>",
      "leveling": [
        {
          "attribute": "Minimum Magic Damage",
          "modifiers": [
            {
              "values": "20 / 30 / 40 / 50 / 60"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "60 / 90 / 120 / 150 / 180"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        }
      ]
    },
    {
      "description": "Galio is unable to basic attack or cast abilities for 0.4 seconds after the recast."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Galio/ability-icon/w",
  "notes": "Galio may still buffer his actions during the recast lockout.\nStatic movement speed cannot be modified by  bonus movement speed or  slow resist.\nThis effect is negated only if the target is  slow-immune.\nThe ability key does not need to be held down when buffered in other abilities except  Winds of War.\nThe following table refers for interactions while Galio is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Hexflash\n\n\nInterrupted by\n\n Recall\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
  export default ability
