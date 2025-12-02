// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Call of the Void",
  "affects": "Enemies",
  "blurb": "Active:  Malzahar opens two portals to the void at the target location that last a brief time, which then deal magic damage to enemies between and briefly  silence them.",
  "castTime": "0.25",
  "cooldown": "6",
  "cost": "60 / 65 / 70 / 75 / 80",
  "damageType": "Magic damage",
  "effectRadius": "200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Malzahar opens two portals to the void centered at the target location, granting sight of the area in between. After 0.4 seconds, enemies between the portals are dealt magic damage and silenced for a duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 105 / 140 / 175 / 210"
            },
            {
              "unit": "% AP",
              "values": "55"
            }
          ]
        },
        {
          "attribute": "Silence Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1 / 1.25 / 1.5 / 1.75 / 2"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Malzahar/ability-icon/q",
  "notes": "Spell shield will prevent Call of the Void's refresh on  Malefic Visions.\n Malefic Visions' debuff will also be removed.(note)",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "900"
}
export default ability
