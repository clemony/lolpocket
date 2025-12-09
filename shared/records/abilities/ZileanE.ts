// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Time Warp",
  "affects": "Enemies, Allies",
  "blurb": "Active:  Zilean applies Time Warp to the target champion that lasts for a short time.",
  "castTime": "none",
  "cooldown": "15",
  "cost": "50",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zilean applies Time Warp to the target champion which lasts for 2.5 seconds.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Time Warp:</span> If the target is an ally, they gain bonus movement speed. If the target is an enemy, they are slowed.</p>",
      "leveling": [
        {
          "attribute": "Movement Speed Modifier",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 55 / 70 / 85 / 99"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zilean/ability-icon/e",
  "notes": "No additional notes.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "550"
}
export default ability
