// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Song of Celerity",
  "affects": "Self, Allies",
  "blurb": "Active:  Sona gains  bonus movement speed for a short time, which is extended to a few seconds if she does not take damage during this time.",
  "castTime": "none",
  "cooldown": "14",
  "cost": "65",
  "effectRadius": "400",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sona gains 20% (+ 2% per 100 AP) bonus movement speed for 7 seconds. If she takes damage during this time, the duration ends prematurely once or if 3 seconds have elapsed.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Melody Bonus:</span> Tagged allied champions gain bonus movement speed for 3 seconds.</p>",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 12 / 14 / 16 / 18"
            },
            {
              "unit": "% per 100 of Sona's AP",
              "values": "2"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sona/ability-icon/e",
  "notes": "To achieve a 99%  slow with the empowered attack via  Power Chord, it would require at least 1475 AP.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
