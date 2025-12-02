// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Thundering Shuriken",
  "width": "100",
  "affects": "Enemies",
  "blurb": "Active:  Kennen throws a shuriken in the target direction that deals magic damage to the first enemy hit.",
  "castTime": "0.175",
  "cooldown": "7 / 6.25 / 5.5 / 4.75 / 4",
  "cost": "60 / 55 / 50 / 45 / 40",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kennen throws a shuriken in the target direction that deals magic damage to the first enemy hit.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "75 / 125 / 175 / 225 / 275"
            },
            {
              "unit": "% AP",
              "values": "75"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kennen/ability-icon/q",
  "notes": "This ability will cast from wherever the caster is at the start of the cast time.",
  "projectile": "TRUE",
  "resource": "Energy",
  "speed": "1700",
  "spellEffects": "Single target",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "1050"
}
export default ability
