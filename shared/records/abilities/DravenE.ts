// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Stand Aside",
  "width": "260",
  "affects": "Enemies",
  "blurb": "Active:  Draven throws a fan of axes in a line in the target direction that deal physical damage to enemies hit,  knocking them aside and  slowing them.",
  "castTime": "0.25",
  "cooldown": "18 / 17 / 16 / 15 / 14",
  "cost": "70",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Draven throws a fan of axes in a line in the target direction, dealing physical damage to enemies hit, knocking them aside, though not through terrain, and slowing them for 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "75 / 110 / 145 / 180 / 215"
            },
            {
              "unit": "% bonus AD",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 25 / 30 / 35 / 40"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Draven/ability-icon/e",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1400",
  "spellEffects": "aoe",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "1100"
}
export default ability
