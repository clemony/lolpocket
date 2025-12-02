// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Skittering Frenzy",
  "affects": "Spiderlings, Self",
  "blurb": "Passive:  Elise's Spiderlings gain permanent  bonus attack speed.",
  "castTime": "none",
  "cooldown": "12",
  "cost": "60 / 70 / 80 / 90 / 100",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Elise's Spiderlings gain bonus attack speed.</p>",
      "leveling": [
        {
          "attribute": "Spiderling Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "5 / 10 / 15 / 20 / 25"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Elise and her Spiderlings gain bonus attack speed for 3 seconds.</p>",
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
    },
    {
      "description": "Skittering Frenzy resets Elise's basic attack timer. Elise loses Skittering Frenzy immediately when she switches to Human Form."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Elise/ability-icon/w",
  "notes": "No additional details.",
  "targeting": "Auto"
}
export default ability
