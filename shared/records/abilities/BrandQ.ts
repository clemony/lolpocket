// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Sear",
  "width": "120",
  "affects": "Enemies",
  "blurb": "Active:  Brand launches a fireball in the target direction that deals magic damage to the first enemy hit.",
  "castTime": "0.25",
  "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
  "cost": "70",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Brand launches a fireball in the target direction that deals magic damage to the first enemy hit.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 100 / 130 / 160 / 190"
            },
            {
              "unit": "% AP",
              "values": "65"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ablaze Bonus:</span> The target is stunned for 1.75 seconds.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Brand/ability-icon/q",
  "notes": "With an ability haste value of 81 / 70 / 58 / 47 / 36 to 162 / 145 / 129 / 113 / 96 based on the ranges of applications from the target, it is possible to apply the stun without having to use other abilities. Sear will apply before the duration of the pre-applied  Blaze times out.\nThe needed ability haste value if you remained at the same range from the target for both casts would be 114 / 100 / 87 / 74 / 60.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1600",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
