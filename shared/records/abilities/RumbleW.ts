// Updated Patch 15.23.1 - 11/30/2025 12:24:02 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Scrap Shield",
  "affects": "Self",
  "blurb": "Active:  Rumble briefly  shields himself and gains  bonus movement speed.",
  "castTime": "none",
  "cooldown": "6",
  "cost": "0",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rumble generates 20 Heat to grant himself a shield for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "25 / 55 / 85 / 115 / 145"
            },
            {
              "unit": "% AP",
              "values": "30"
            },
            {
              "unit": "% of maximum health",
              "values": "4"
            }
          ]
        }
      ]
    },
    {
      "description": "Rumble also gains bonus movement speed for 1 to 1.32 seconds.",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 15 / 20 / 25 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Danger Zone Bonus:</span> Scrap Shield's shield strength and bonus movement speed are increased in effectiveness by 50%.</p>",
      "leveling": [
        {
          "attribute": "Enhanced Shield Strength",
          "modifiers": [
            {
              "values": "37.5 / 82.5 / 127.5 / 172.5 / 217.5"
            },
            {
              "unit": "% AP",
              "values": "45"
            },
            {
              "unit": "% of maximum health",
              "values": "6"
            }
          ]
        },
        {
          "attribute": "Enhanced Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "15 / 22.5 / 30 / 37.5 / 45"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/w",
  "notes": "The movement speed buff is supposed to last for 1 second, but due to a bug may last 0.264 seconds longer.\nLike most buffs, the stat bonus is already only gained at the next stat update (every 0.264 seconds). Despite this, the duration still inconsistent.",
  "targeting": "Auto"
}
export default ability
