// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Personal Space",
  "affects": "Self, Enemies",
  "blurb": "Active:  Vex emits a shockwave, dealing magic damage to nearby enemies and  shielding herself for a short time.",
  "castTime": "0.25",
  "cooldown": "16 / 15 / 14 / 13 / 12",
  "cost": "75",
  "damageType": "Magic damage",
  "effectRadius": "475 / 550",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vex emits a shockwave around her before the cast time, dealing magic damage to nearby enemies and granting herself a shield for 2.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "50 / 75 / 100 / 125 / 150"
            },
            {
              "unit": "% AP",
              "values": "75"
            }
          ]
        },
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        }
      ]
    },
    {
      "description": "Vex can move during Personal Space's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vex/ability-icon/w",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Auto"
}
export default ability
