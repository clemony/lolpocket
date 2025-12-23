// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Acceleration Gate",
  "width": "750",
  "affects": "Allies",
  "blurb": "Active:  Jayce deploys an energy gate centered at the target location for a few seconds. All allied champions that touch the gate will gain a burst of  movement speed.",
  "castTime": "none",
  "cooldown": "20 / 18 / 16 / 14 / 12 / 10",
  "cost": "55",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce deploys an energy gate centered at the target location, lasting for 4 seconds and granting sight of its surroundings. Jayce and all allied champions can move through it to gain bonus movement speed that decays over 3 seconds.</p>",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "35 / 40 / 45 / 50 / 55 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "The buff is continuously refreshed while inside the gate."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/e",
  "notes": "The Gate grants the bonus in an area  750 units wide and  100 units thick.",
  "resource": "Mana",
  "targeting": "Location",
  "targetRange": "650"
}
export default ability
