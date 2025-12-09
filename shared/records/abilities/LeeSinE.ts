// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Cripple",
  "affects": "Enemies",
  "blurb": "Active:  Lee Sin sends a wave to nearby enemies marked by  Tempest, inflicting a decaying  slow that lasts a few seconds.",
  "castTime": "none",
  "cooldown": "8",
  "cost": "50",
  "effectRadius": "550 / 600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lee Sin slows nearby enemies marked by Tempest, decaying over 4 seconds.</p>",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "35 / 45 / 55 / 65 / 75"
            }
          ]
        }
      ]
    },
    {
      "description": "A nearby marked enemy is required to cast this ability."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/e",
  "notes": "Tempest's reveal is not removed when Lee Sin casts Cripple.\nCripple cannot be cast without a marked target within 550 range.",
  "resource": "Energy",
  "speed": "1600",
  "spellshieldable": "True",
  "targeting": "Proximity"
}
export default ability
