// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Valkyrie",
  "affects": "Enemies",
  "blurb": "Active:  Corki  flies a short distance to the target location, dropping bombs that create a trail of fire that deals magic damage continually to enemies within.",
  "castTime": "none",
  "collisionRadius": "100",
  "cooldown": "20 / 18 / 16 / 14 / 12",
  "cost": "80 / 85 / 90 / 95 / 100",
  "damageType": "Magic damage",
  "effectRadius": "200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Corki dashes to the target location and drops bombs that leave up to 3 blazing patches along his path, depending on the distance traveled. Each patch lasts 2.5 seconds.</p>"
    },
    {
      "description": "Enemies within the patches are dealt magic damage every 0.5 seconds, lingering for 1 second.",
      "leveling": [
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "values": "40 / 55 / 70 / 85 / 100"
            },
            {
              "unit": "% bonus AD",
              "values": "40"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "200 / 275 / 350 / 425 / 500"
            },
            {
              "unit": "% bonus AD",
              "values": "200"
            },
            {
              "unit": "% AP",
              "values": "150"
            }
          ]
        }
      ]
    },
    {
      "description": "Gatling Gun can be cast during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Corki/ability-icon/w",
  "notes": "No additional information.",
  "resource": "Mana",
  "speed": "650 + 100% movement speed",
  "spellEffects": "aoedot",
  "spellshieldable": "False",
  "targeting": "Location",
  "targetRange": "300 / 600"
}
export default ability
