// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Fury of the Sands",
  "affects": "Self",
  "blurb": "Active:  Nasus empowers himself for some time, gaining bonus size,  health,  armor,  magic resist, and  attack range.",
  "castTime": "0.2",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "400",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nasus empowers himself for 15 seconds, gaining bonus health, bonus armor, bonus magic resistance, increased size, and 50 bonus attack range for the duration.</p>",
      "leveling": [
        {
          "attribute": "Bonus Health",
          "modifiers": [
            {
              "values": "300 / 450 / 600"
            }
          ]
        },
        {
          "attribute": "Bonus Resistances",
          "modifiers": [
            {
              "values": "40 / 55 / 70"
            }
          ]
        },
        {
          "attribute": "Increased Size",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 35 / 40"
            }
          ]
        }
      ]
    },
    {
      "description": "While Nasus is empowered, he deals magic damage every 0.5 seconds to nearby enemies, capped at 240 per second, and Siphoning Strike's cooldown is halved.",
      "leveling": [
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "unit": "%  of target's maximum health",
              "values": "1.5 / 2 / 2.5"
            },
            {
              "unit": "% per 100 AP",
              "values": "0.5"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "unit": "%  of target's maximum health",
              "values": "45 / 60 / 75"
            },
            {
              "unit": "% per 100 AP",
              "values": "15"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/r",
  "notes": "Fury of the Sands' bonus health is not affected by  Grievous Wounds and Nasus retains it once the duration ends.",
  "resource": "Mana",
  "spellEffects": "aoedot",
  "targeting": "Auto"
}
export default ability
