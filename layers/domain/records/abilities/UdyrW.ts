// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Iron Mantle",
  "affects": "Self",
  "blurb": "Mantle Stance:  Udyr gains a  shield and his next two basic attacks gain  life steal and  heal him.",
  "castTime": "none",
  "cooldown": "6",
  "cost": "40",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active - Stance:</span> Udyr enters Mantle Stance, empowering his next two basic attacks to gain life steal and heal him for 1.2% of his maximum health (+ 8% AP) on-hit.</p>",
      "leveling": [
        {
          "attribute": "Life Steal",
          "modifiers": [
            {
              "unit": "%",
              "values": "15 / 16 / 17 / 18 / 19 / 20"
            }
          ]
        }
      ]
    },
    {
      "description": "Additionally, Udyr grants himself a shield for 4 seconds.",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "45 / 60 / 75 / 90 / 105 / 120"
            },
            {
              "unit": "% AP",
              "values": "40"
            },
            {
              "tooltip": "Scaling per rank:\n2 / 2.3 / 2.6 / 2.9 / 3.2 / 3.5% maximum health",
              "unit": "% maximum health",
              "values": "2 - 3.5"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast - Awaken:</span> Udyr increases the shield's strength, stacking with the remaining shield from the first cast, and heals every 0.25 seconds over the next 4 seconds, as well as causes the empowered attacks to instead gain doubled life steal and heal him for 2.4% of his maximum health (+ 16% AP) on-hit.</p>",
      "leveling": [
        {
          "attribute": "Increased Shield Strength",
          "modifiers": [
            {
              "values": "20 / 27.65 / 35.29 / 42.94 / 50.59 / 58.24 / 65.88 / 73.53 / 81.18 / 88.82 / 96.47 / 104.12 / 111.76 / 119.41 / 127.06 / 134.71 / 142.35 / 150"
            },
            {
              "values": "45 / 60 / 75 / 90 / 105 / 120"
            },
            {
              "unit": "% AP",
              "values": "65"
            },
            {
              "unit": "% maximum health",
              "values": "8"
            }
          ]
        },
        {
          "attribute": "Total Healing",
          "modifiers": [
            {
              "values": "10 / 13.82 / 17.65 / 21.47 / 25.29 / 29.12 / 32.94 / 36.76 / 40.59 / 44.41 / 48.24 / 52.06 / 55.88 / 59.71 / 63.53 / 67.35 / 71.18 / 75"
            },
            {
              "values": "22.5 / 30 / 37.5 / 45 / 52.5 / 60"
            },
            {
              "unit": "% AP",
              "values": "32.5"
            },
            {
              "unit": "% maximum health",
              "values": "4"
            }
          ]
        },
        {
          "attribute": "Heal per Tick",
          "modifiers": [
            {
              "values": "0.63 / 0.87 / 1.11 / 1.35 / 1.59 / 1.82 / 2.06 / 2.3 / 2.54 / 2.78 / 3.02 / 3.26 / 3.5 / 3.73 / 3.97 / 4.21 / 4.45 / 4.69"
            },
            {
              "values": "1.41 / 1.88 / 2.34 / 2.81 / 3.28 / 3.75"
            },
            {
              "unit": "% AP",
              "values": "2.03"
            },
            {
              "unit": "% maximum health",
              "values": "0.25"
            }
          ]
        },
        {
          "attribute": "Increased Life Steal",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 32 / 34 / 36 / 38 / 40"
            }
          ]
        }
      ]
    },
    {
      "description": "Healing on-hit is reduced to 60% against minions."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/w",
  "notes": "The empowered attacks apply spell effects to the target.\nThe empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.\nThe increased life steal is a buff that expires after two valid attacks have been completed, as opposed to an on-attack modifier for your next two attacks. This means that while the buff is active,  Ravenous Hydra will heal at the increased life steal value.",
  "resource": "Mana",
  "spellEffects": "spell",
  "targeting": "Auto"
}
export default ability
