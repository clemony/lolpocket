// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Dreaded Return",
  "width": "70",
  "affects": "Enemies",
  "blurb": "Active:  Zaahen extends his glaive in the target direction, dealing physical damage to enemies hit. Upon reaching maximum range, all enemies in the area are dealt physical damage,  stunned briefly, and  pulled toward Zaahen.",
  "castTime": "0.5",
  "cooldown": "16 / 15 / 14 / 13 / 12",
  "cost": "50",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zaahen extends his glaive in the target direction, dealing physical damage to enemies hit. Upon reaching maximum range, all enemies hit are dealt the same physical damage, stunned for 0.25 seconds, and pulled 225 units toward Zaahen.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "40 / 60 / 80 / 100 / 120"
            },
            {
              "unit": "% bonus AD",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
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
  "icon": "https://cdn.communitydragon.org/latest/champion/Zaahen/ability-icon/w",
  "notes": "Spell shield will block both passes, as well as the second one individually if circumstances permit.\n Intercepting the initial projectile will instantly trigger Dreaded Return's pull.\n Displacement immunity will not resist the application of the  stun.\nThe projectile is shown on the minimap and Dreaded Return can be cast targeting the minimap.\nThis ability will cast from wherever the caster is at the end of the cast time.\nDreaded Return's end point will not move in relation to Zaahen if he moves during the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2900 / 900",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Direction",
  "targetRange": "850"
}
export default ability
