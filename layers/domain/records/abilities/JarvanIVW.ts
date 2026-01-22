// Updated Patch 15.24.1 - 12/26/2025 07:03:49 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Golden Aegis",
  "affects": "Self, Enemies",
  "blurb": "Active:  Jarvan IV  slows nearby enemies for a short time.",
  "castTime": "none",
  "cooldown": "9",
  "cost": "30",
  "effectRadius": "600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jarvan IV slows all nearby enemies for 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "15 / 20 / 25 / 30 / 35"
            }
          ]
        }
      ]
    },
    {
      "description": "Jarvan IV also grants himself a shield for 4 seconds, increased by 1.3% of his maximum health for each enemy champion hit by Golden Aegis.",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "60 / 80 / 100 / 120 / 140"
            },
            {
              "unit": "% bonus AD",
              "values": "70"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/JarvanIV/ability-icon/w",
  "notes": "Golden Aegis  deals no damage and thus does not trigger  turret aggro, or effects such as  Elixir of Sorcery and  Sudden Impact's activation.\nGolden Aegis will activate combat status despite not dealing any damage.",
  "resource": "Mana",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
