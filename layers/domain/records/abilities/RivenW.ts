// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Ki Burst",
  "affects": "Enemies",
  "blurb": "Active:  Riven emits a flash of runic energy, dealing physical damage and briefly  stunning nearby enemies.",
  "castTime": "0.25",
  "cooldown": "11 / 10 / 9 / 8 / 7",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "300 / 360",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Riven emits a flash of runic energy, dealing physical damage to nearby enemies and stunning them for 0.75 seconds.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "65 / 95 / 125 / 155 / 185"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Riven/ability-icon/w",
  "notes": "Riven is briefly unable to basic attack after the cast time.\n Broken Wings may be cast while  basic attacking briefly after casting Ki Burst.(bug)\nKi Burst's effects occur before the cast time.",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
