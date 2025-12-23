// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Caustic Spittle",
  "width": "140",
  "affects": "Enemies",
  "blurb": "Passive:  Kog'Maw gains  bonus attack speed.",
  "castTime": "Basic attack timer",
  "cooldown": "7",
  "cost": "40",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Kog'Maw gains bonus attack speed.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
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
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kog'Maw ejects a wad of spittle in the target direction that deals magic damage to the first enemy hit and reduces their armor and magic resistance for 4 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 125 / 170 / 215 / 260"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        },
        {
          "attribute": "Resistances Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "16 / 20 / 24 / 28 / 32"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/q",
  "notes": "This ability will cast from wherever the caster is at the start of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1650",
  "spellEffects": "Single target",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
