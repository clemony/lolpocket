// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Dawning Shadow",
  "width": "320 / 2400",
  "affects": "Allies / Enemies",
  "blurb": "Active:  Senna fires a massive beam in the target direction.",
  "castTime": "1",
  "cooldown": "140 / 120 / 100",
  "cost": "100",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Senna fires a massive beam in the target direction. The beam consists of a broad wave of light, and a narrow wave of shadow at the center.</p>"
    },
    {
      "description": "The shadow wave deals physical damage to enemy champions hit and reveals them for 3 seconds, as well as hits all Mist Wraiths.",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "250 / 400 / 550"
            },
            {
              "unit": "% bonus AD",
              "values": "115"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        }
      ]
    },
    {
      "description": "The light wave grants a shield to Senna and allied champions hit for 3 seconds, and grants sight of the area along the path for 2 seconds.",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "120 / 160 / 200"
            },
            {
              "unit": "% AP",
              "values": "50"
            },
            {
              "unit": " per Mist",
              "values": "1.5"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Senna/ability-icon/r",
  "notes": "The broad wave is a singular projectile that can be  destroyed.\nThe narrow wave will be destroyed with it in the process.\nThis ability will cast from wherever the caster is at the start of the cast time.\nSenna reveals herself during the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "20000",
  "spellEffects": "aoe",
  "spellshieldable": "true",
  "targeting": "Direction",
  "targetRange": "Global"
}
export default ability
