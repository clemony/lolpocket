// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "On the Hunt",
  "affects": "Allies",
  "blurb": "Active:  Sivir gains On the Hunt for a period, and creates an aura that grants allied champions On the Hunt for the remaining duration. Sivir can refresh her duration whenever she scores an enemy  takedown within a short time of damaging them.",
  "castTime": "none",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "effectRadius": "1000",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sivir gains On the Hunt for a duration and grants it to nearby allied champions for the remaining duration.</p>",
      "leveling": [
        {
          "attribute": "Buff Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "8 / 10 / 12"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">On the Hunt:</span> Gain bonus movement speed.</p>",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 25 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "While active, Sivir's basic attacks on-attack reduce her basic abilities' current cooldowns by 0.5 seconds each."
    },
    {
      "description": "Sivir can refresh the duration of her On the Hunt buff whenever she scores a takedown against an enemy champion within 3 seconds of damaging them."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/r",
  "notes": "No additional notes.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
