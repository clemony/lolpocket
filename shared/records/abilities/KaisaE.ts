// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Supercharge",
  "affects": "Self",
  "blurb": "Active:  Kai'Sa briefly becomes  ghosted and gains  bonus move speed during the cast time, then gains  bonus attack speed for a few seconds.",
  "castTime": "1.2 : 0.6 (based on bonus attack speed)",
  "cooldown": "16 / 14.5 / 13 / 11.5 / 10",
  "cost": "30",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kai'Sa charges up over the cast time, during which she is still able to move, becoming ghosted and gaining bonus movement speed for the duration, with the effectiveness increased by 0% - 100% (based on bonus attack speed).</p>",
      "leveling": [
        {
          "attribute": "Minimum Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "55 / 60 / 65 / 70 / 75"
            }
          ]
        },
        {
          "attribute": "Maximum Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "110 / 120 / 130 / 140 / 150"
            }
          ]
        }
      ]
    },
    {
      "description": "After completing the charge, she gains bonus attack speed for 4 seconds, during which her attacks have a lower windup of 6.44% and an increased missile speed.",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 50 / 60 / 70 / 80"
            }
          ]
        }
      ]
    },
    {
      "description": "Supercharge's current cooldown is reduced by 0.5 seconds on-attack."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Evolution:</span> Requires[ 100% - 70% (based on level) attack speed from items ][ 100% attack speed from items and stat growth ]to upgrade : Supercharge grants invisibility at the start of the cast time for 0.5 seconds.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kaisa/ability-icon/e",
  "notes": "Her attack commands during this time are switched to movement commands instead. Upon finishing the charge and if an attack command was issued, Kai'Sa will continue walking toward her target.\nKai'Sa behaves normally if attack move click was issued not on a target during the cast time, stopping at attack range of the closest target and starts attacking when charged up.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
