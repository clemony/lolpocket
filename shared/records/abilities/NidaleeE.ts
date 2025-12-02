// Updated Patch 15.23.1 - 11/30/2025 12:23:56 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Swipe",
  "affects": "Enemies",
  "angle": "180°",
  "blurb": "Active:  Nidalee slashes in an arc in the target direction, dealing magic damage to enemies hit.",
  "castTime": "0.25",
  "cooldown": "12",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effectRadius": "310",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nidalee slashes in an arc in the target direction, dealing magic damage to enemies hit.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 130 / 190 / 250"
            },
            {
              "unit": "% bonus AD",
              "values": "70"
            },
            {
              "unit": "% AP",
              "values": "55"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nidalee/ability-icon/e",
  "notes": "This ability always employs Quick cast.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe visual effects will be seen from her position if she moves however.(bug)",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
