// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Volley",
  "width": "20",
  "affects": "Enemies",
  "angle": "27.75°/ 37° / 46.25° / 4.625°",
  "blurb": "Active:  Ashe fires arrows in a cone dealing physical damage and applying  Critical Slow to the first enemies hit.",
  "castTime": "0.25",
  "cooldown": "18 / 14.5 / 11 / 7.5 / 4",
  "cost": "75 / 70 / 65 / 60 / 55",
  "damageType": "Physical damage",
  "effectRadius": "1200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ashe shoots a volley of arrows in a cone in the target direction, each dealing physical damage to the first enemy hit, and applying Critical Slow to enemy champions hit.</p>",
      "leveling": [
        {
          "attribute": "Arrows",
          "modifiers": [
            {
              "values": "7 / 8 / 9 / 10 / 11"
            }
          ]
        },
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "60 / 95 / 130 / 165 / 200"
            },
            {
              "unit": "% bonus AD",
              "values": "110"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies can intercept multiple arrows but do not take damage from any beyond the first."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ashe/ability-icon/w",
  "notes": "The missiles are spawned in a straight horizontal line 75 units in front of Ashe, with a total width of 75/100/100/123/123 units.\nBetween each missile spawn location is a distance of 12.5 units, except for the two outermost ones at the last two ranks (which are 11.5 units from the closest other one), and the two centermost missiles at ranks 2 and 4 (which have 20 units between them and 15 units to the next missile, respectively).\nThis inconsistent behaviour of spawn locations means the angle between each missile can vary off of 4.625° slighty.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2000",
  "spellEffects": "aoe",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
