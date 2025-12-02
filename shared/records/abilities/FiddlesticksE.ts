// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Reap",
  "blurb": "Active:  Fiddlesticks slashes the target area, dealing magic damage and  slowing enemies hit.",
  "castTime": "0.4",
  "cooldown": "10 / 9 / 8 / 7 / 6",
  "cost": "40 / 45 / 50 / 55 / 60",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiddlesticks slashes the target location with its scythe, dealing magic damage to enemies within the area and slowing them for 1.25 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 105 / 140 / 175 / 210"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 35 / 40 / 45 / 50"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies hit in the center of the area are also silenced for 1.25 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Fiddlesticks/ability-icon/e",
  "notes": "-  Surprise Party Fiddlesticks has a special icon for this ability.",
  "resource": "Mana",
  "spellEffects": "AoE",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "850"
}
export default ability
