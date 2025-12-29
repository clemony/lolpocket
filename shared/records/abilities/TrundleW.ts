// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Frozen Domain",
  "affects": "Self",
  "blurb": "Active:  Trundle coats the target location in ice for a period. While he is within the area, he gains  bonus attack speed,  bonus movement speed, and increased  healing from all sources.",
  "castTime": "none",
  "cooldown": "18 / 17 / 16 / 15 / 14",
  "cost": "40",
  "effectRadius": "775",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Trundle coats the target location in ice for 8 seconds. While he is within the area, he gains bonus attack speed, bonus movement speed, and 25% increased healing from all sources.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 45 / 60 / 75 / 90"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 28 / 36 / 44 / 52"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/w",
  "notes": "No additional details.",
  "resource": "Mana",
  "targeting": "Location",
  "targetRange": "750"
}
export default ability
