// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Ardent Blaze",
  "width": "110",
  "affects": "Enemies / Self, Allies",
  "blurb": "Active:  Lucian fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or maximum range, dealing magic damage and marking enemies hit.",
  "castTime": "0.25",
  "cooldown": "14 / 13 / 12 / 11 / 10",
  "cost": "60",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lucian fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or reaching maximum range, dealing magic damage to enemies hit and granting sight of the area for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "75 / 110 / 145 / 180 / 215"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies hit are marked for 6 seconds."
    },
    {
      "description": "Lucian gains bonus movement speed for 1 second when he or allied champions damage a marked target. Allied champions triggering this effect grant Lucian Vigilance.",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "values": "60 / 65 / 70 / 75 / 80"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lucian/ability-icon/w",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nLike most missiles, it will not collide with enemies whose center is beyond the maximum range (not behind Lucian), but this determines only the center and timing of the explosion.\nArdent Blaze will cast from wherever Lucian is at the end of the cast time.\nLucian will not gain Ardent Blaze's bonus movement speed if attacks on marked targets are  dodged,  blocked, or if missed while the attacker is  blinded.\n DoTs will proc Ardent Blaze only once.\n Spell shield will not prevent the mark.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1600",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Direction"
}
export default ability
