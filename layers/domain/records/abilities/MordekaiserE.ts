// Updated Patch 15.24.1 - 12/26/2025 07:04:07 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Death's Grasp",
  "width": "200",
  "affects": "Self, Enemies",
  "blurb": "Passive:  Mordekaiser gains  magic penetration.",
  "castTime": "0.25",
  "cooldown": "18 / 16 / 14 / 12 / 10",
  "cost": "0",
  "damageType": "Magic damage",
  "effectRadius": "800 / 200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Mordekaiser gains magic penetration.</p>",
      "leveling": [
        {
          "attribute": "Magic Penetration",
          "modifiers": [
            {
              "unit": "%",
              "values": "5 / 7.5 / 10 / 12.5 / 15"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mordekaiser summons a claw in the target direction that grants sight of the area. After 0.5 seconds, it deals magic damage to enemies within and pulls them 250 units.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 75 / 90 / 105 / 120"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/e",
  "notes": "Death's Grasp will still  pull even if Mordekaiser  dies.\nThis ability will cast from wherever the caster is at the start of the cast time.",
  "projectile": "FALSE",
  "speed": "3000",
  "spellEffects": "aoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "700 / 900"
}
export default ability
