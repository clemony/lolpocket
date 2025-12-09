// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Zenith Blade",
  "width": "140",
  "affects": "Enemies",
  "blurb": "Active:  Leona projects her sword in the target direction that deals magic damage to enemies hit.",
  "castTime": "0.25",
  "cooldown": "12 / 10.5 / 9 / 7.5 / 6",
  "cost": "40 / 45 / 50 / 55 / 60",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Leona projects her sword in the target direction that deals magic damage to enemies hit.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "50 / 90 / 130 / 170 / 210"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "If she hits at least one enemy champion, she will dash 225 units behind the last one struck within 3000 range and root them for 0.5 seconds."
    },
    {
      "description": "Leona is unable to move or attack while Zenith Blade is in flight. She can cast any of her abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/e",
  "notes": "Leona will be ordered to basic attack the target.\n Spell shield will block Zenith Blade's effects, and prevent Leona from dashing to the target.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2000",
  "spellEffects": "aoe",
  "spellshieldable": "true",
  "targeting": "Direction",
  "targetRange": "900"
}
export default ability
