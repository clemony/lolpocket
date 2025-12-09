// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Highlander",
  "affects": "Self",
  "blurb": "Passive: Scoring a champion  takedown massively  reduces the current cooldowns of  Master Yi's basic abilities.",
  "castTime": "none",
  "cooldown": "85",
  "cost": "100",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Scoring a champion takedown reduces the current cooldowns of Master Yi's basic abilities by 70%.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Master Yi cleanses himself from all slows and cripples. For the next 7 seconds, he gains ghosting, bonus attack speed, bonus movement speed, slow immunity, and cripple immunity.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "25 / 45 / 65"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "35 / 45 / 55"
            }
          ]
        }
      ]
    },
    {
      "description": "While active, scoring a champion takedown extends Highlander's duration by 7 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MasterYi/ability-icon/r",
  "notes": "Highlander can be cast during  Alpha Strike.\nThere are two situations that can happen if Master Yi uses Highlander while Highlander's buff is active.\nIf the buff's duration is under 7 seconds, the buff refreshes to 7 seconds.\nIf the buff's duration is above 7 seconds, nothing happens.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
