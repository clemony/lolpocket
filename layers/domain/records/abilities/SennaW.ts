// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Last Embrace",
  "width": "140",
  "affects": "Enemies",
  "blurb": "Active:  Senna throws a globule of Black Mist in the target direction that deals physical damage to the first enemy hit and sticks onto them.",
  "castTime": "0.25",
  "cooldown": "11",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Physical damage",
  "effectRadius": "280",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Senna throws a globule of Black Mist in the target direction that deals physical damage to the first enemy hit and attaches to them for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "70 / 115 / 160 / 205 / 250"
            },
            {
              "unit": "% bonus AD",
              "values": "70"
            }
          ]
        }
      ]
    },
    {
      "description": "After the duration or when the target dies, the Black Mist spreads out of the target, rooting them and surrounding enemies for a few seconds.",
      "leveling": [
        {
          "attribute": "Root Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1.25 / 1.5 / 1.75 / 2 / 2.25"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Senna/ability-icon/w",
  "notes": "Last Embrace will not  root the primary target if they are  untargetable.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1200",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "1300"
}
export default ability
