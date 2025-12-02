// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Eclipse",
  "affects": "Self, Enemies",
  "blurb": "Active:  Leona raises her guard for a short time, gaining flat damage reduction,  bonus armor and  bonus magic resistance.",
  "castTime": "none",
  "cooldown": "14 / 13 / 12 / 11 / 10",
  "cost": "60",
  "damageType": "Magic damage",
  "effectRadius": "450",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Leona raises her guard for 3 seconds, gaining flat damage reduction of up to 50% of the damage instance and bonus armor and bonus magic resistance.</p>",
      "leveling": [
        {
          "attribute": "Flat Damage Reduction",
          "modifiers": [
            {
              "values": "8 / 12 / 16 / 20 / 24"
            }
          ]
        },
        {
          "attribute": "Bonus Armor",
          "modifiers": [
            {
              "values": "20 / 27.5 / 35 / 42.5 / 50"
            },
            {
              "unit": "% bonus armor",
              "values": "20"
            }
          ]
        },
        {
          "attribute": "Bonus Magic Resistance",
          "modifiers": [
            {
              "values": "20 / 27.5 / 35 / 42.5 / 50"
            },
            {
              "unit": "% bonus magic resistance",
              "values": "20"
            }
          ]
        }
      ]
    },
    {
      "description": "Her shield detonates after the duration, dealing magic damage to nearby enemies. If this hits an enemy, Leona's guard is extended for an additional 3 seconds.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "55 / 85 / 115 / 145 / 175"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/w",
  "notes": "Neither the cast nor detonation of Eclipse interrupts any of Leona's previous orders or ongoing attack windups.\nThe resistance scaling will factor from all other sources, excluding Eclipse's flat bonus. This will recalculate over the duration.\n Spell shield will block the damage but Eclipse's extended duration will not be prevented.",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Auto"
}
export default ability
