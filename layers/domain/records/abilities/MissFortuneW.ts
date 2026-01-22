// Updated Patch 15.24.1 - 12/26/2025 07:04:06 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Strut",
  "affects": "Self",
  "blurb": "Passive:  Miss Fortune gains  bonus movement speed after a few seconds without being attacked. This bonus is increased after another few seconds, and is granted instantly whenever Strut is cast.",
  "castTime": "none",
  "cooldown": "12",
  "cost": "45",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Miss Fortune gains bonus movement speed after 4 seconds without taking non- persistent damage. This bonus is increased after another 3 seconds, and is granted instantly whenever Strut is cast.</p>",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "values": "30 / 35 / 40 / 45 / 50"
            }
          ]
        },
        {
          "attribute": "Increased Bonus Movement Speed",
          "modifiers": [
            {
              "values": "60 / 70 / 80 / 90 / 100"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Miss Fortune gains bonus attack speed for 4 seconds.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 55 / 70 / 85 / 100"
            }
          ]
        }
      ]
    },
    {
      "description": "Marking a new target with Love Tap reduces Strut's current cooldown by 2 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/w",
  "notes": "No additional notes.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
