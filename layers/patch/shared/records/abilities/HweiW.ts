// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Stirring Lights",
  "affects": "Self, Enemies",
  "blurb": "Active - WE:  Hwei surrounds himself in swirling flares that empower his next 3 basic attacks or abilities to deal bonus magic damage and restore  mana.",
  "castTime": "none",
  "cooldown": "18 / 17.5 / 17 / 16.5 / 16",
  "cost": "90 / 95 / 100 / 105 / 110",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active - WE:</span> Hwei surrounds himself in swirling flares that empower his next 3 basic attacks or ability hits within 9 seconds to each deal bonus magic damage and restore mana.</p>",
      "leveling": [
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "values": "20 / 30 / 40 / 50 / 60"
            },
            {
              "unit": "% AP",
              "values": "15"
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
              "values": "45"
            }
          ]
        },
        {
          "attribute": "Mana Restore",
          "modifiers": [
            {
              "values": "45 / 50 / 55 / 60 / 65"
            }
          ]
        },
        {
          "attribute": "Total Mana Restore",
          "modifiers": [
            {
              "values": "135 / 150 / 165 / 180 / 195"
            }
          ]
        }
      ]
    },
    {
      "description": "Stirring Lights' bonus damage is reduced to 50% against minions or monsters if applied by his area of effect abilities.",
      "leveling": [
        {
          "attribute": "Reduced Bonus Damage",
          "modifiers": [
            {
              "values": "10 / 15 / 20 / 25 / 30"
            },
            {
              "unit": "% AP",
              "values": "7.5"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/w",
  "notes": "Stirring Lights'  bonus damage to non-champions is reduced if applied by  Devastating Fire,  Severing Bolt,  Molten Fissure,  Crushing Maw, or  Spiraling Despair.\n Spell shield will not block the bonus damage even if it is applied by an ability.(bug)",
  "spellEffects": "proc",
  "spellshieldable": "false",
  "targeting": "Auto"
}
  export default ability
