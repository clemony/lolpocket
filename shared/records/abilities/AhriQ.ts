// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Orb of Deception",
  "width": "200",
  "affects": "Enemies",
  "blurb": "Active:  Ahri sends out her orb, dealing magic damage to enemies it passes through. After a point, the orb travels back to her, dealing the same amount in true damage to enemies it passes through.",
  "castTime": "0.25",
  "cooldown": "7",
  "cost": "55 / 65 / 75 / 85 / 95",
  "damageType": "Other damage",
  "effectRadius": "100",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ahri sends her orb in the target direction that deals magic damage to enemies it passes through. Upon reaching maximum range, it returns to her to deal the same amount in true damage to enemies it passes through.</p>",
      "leveling": [
        {
          "attribute": "Damage Per Pass",
          "modifiers": [
            {
              "values": "40 / 65 / 90 / 115 / 140"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Total Mixed Damage",
          "modifiers": [
            {
              "values": "80 / 130 / 180 / 230 / 280"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies can be hit only once per pass."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/q",
  "notes": "Orb of Deception will hit additional units around the return point in a small circle when the orb turns around.\nThis applies both to the initial and return missile's damage, but the initial missile only deals damage if the unit was not hit by it already.\nEach pass of the projectile can only damage an enemy once.\nIf Ahri dies while the orb is out, the orb will visually disappear but continue to deal damage and return to Ahri.(bug)\nThis ability will cast from wherever the caster is at the end of the cast time.\nThis ability's damage is calculated based on the caster's current stats and changes dynamically.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1550 / 60 - 2600",
  "spellEffects": "Area of effect",
  "spellshieldable": "Special",
  "targeting": "Direction"
}
export default ability
