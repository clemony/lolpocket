// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Dark Binding",
  "width": "140",
  "affects": "Enemies",
  "blurb": "Active:  Morgana throws a sphere of dark magic in the target direction that deals magic damage to the first enemy hit and  roots them for a \"short time\".",
  "castTime": "0.25",
  "cooldown": "10",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Morgana throws a sphere of dark magic in the target direction that deals magic damage to the first enemy hit and roots them for a duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 135 / 190 / 245 / 300"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        },
        {
          "attribute": "Root Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "2 / 2.25 / 2.5 / 2.75 / 3"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/q",
  "notes": "This ability will cast from wherever the caster is at the start of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1200",
  "spellEffects": "Single target",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
