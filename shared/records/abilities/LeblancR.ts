// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Mimic",
  "affects": "Self",
  "blurb": "Active:  LeBlanc casts a mimicked version of her most recent ability, which deals modified damage.",
  "cooldown": "45 / 35 / 25",
  "cost": "0",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> LeBlanc casts a mimicked version of her most recently used basic ability, applying the same effects and dealing modified magic damage.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Mimic:</span> Sigil of Malice: The orb deals modified damage, while the mark consumption deals double that amount.</p>",
      "leveling": [
        {
          "attribute": "Orb Magic Damage",
          "modifiers": [
            {
              "values": "70 / 140 / 210"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Mark Magic Damage",
          "modifiers": [
            {
              "values": "140 / 280 / 420"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "210 / 420 / 630"
            },
            {
              "unit": "% AP",
              "values": "120"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Mimic:</span> Distortion: Deals modified damage.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 300 / 450"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Mimic:</span> Ethereal Chains: The tether's application deals modified damage, while its fracturing deals double that amount.</p>",
      "leveling": [
        {
          "attribute": "Application Magic Damage",
          "modifiers": [
            {
              "values": "70 / 140 / 210"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Fracture Magic Damage",
          "modifiers": [
            {
              "values": "140 / 280 / 420"
            },
            {
              "unit": "% AP",
              "values": "85"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "210 / 420 / 630"
            },
            {
              "unit": "% AP",
              "values": "125"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Leblanc/ability-icon/r",
  "notes": "Mimic will default to  Mimic: Sigil of Malice if LeBlanc ranks up Mimic without having used any abilities beforehand (even if she has not yet learned  Sigil of Malice).\nBoth  Mimic: Ethereal Chains and  Mimic: Sigil of Malice will apply damage twice if the original ability's condition to do so is met.",
  "targeting": "Varied"
}
export default ability
