// Updated Patch 15.23.1 - 11/30/2025 12:24:06 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Rapid Fire",
  "affects": "Self",
  "blurb": "Active:  Tristana gains tremendous  bonus attack speed for a few seconds.",
  "castTime": "none",
  "cooldown": "20 / 19 / 18 / 17 / 16",
  "cost": "30 / 35 / 40 / 45 / 50",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tristana empowers her cannon, gaining bonus attack speed for 7 seconds.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "60 / 75 / 90 / 105 / 120"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Tristana/ability-icon/q",
  "notes": "Rapid Fire is a non-refreshing buff that will not update on rank-up.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
