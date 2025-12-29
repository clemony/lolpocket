// Updated Patch 15.24.1 - 12/26/2025 07:03:54 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Iron Will",
  "affects": "Self",
  "blurb": "Active:  Lee Sin gains  life steal and  spell vamp for a few seconds.",
  "castTime": "none",
  "cooldown": "12",
  "cost": "50",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lee Sin gains life steal and spell vamp for 4 seconds.</p>",
      "leveling": [
        {
          "attribute": "Life steal and spell vamp",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 14 / 18 / 22 / 26"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/w",
  "notes": "No additional details.",
  "resource": "Energy",
  "targeting": "Auto"
}
export default ability
