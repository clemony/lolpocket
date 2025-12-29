// Updated Patch 15.24.1 - 12/26/2025 07:04:11 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Command: Dissonance",
  "affects": "Enemies, Allies",
  "blurb": "Active:  Orianna commands  The Ball to emit an electric pulse that deals magic damage to nearby enemies.",
  "castTime": "none",
  "cooldown": "7",
  "cost": "60 / 65 / 70 / 75 / 80",
  "damageType": "Magic damage",
  "effectRadius": "225",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Orianna commands The Ball to emit an electric pulse that deals magic damage to nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 110 / 150 / 190 / 230"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    },
    {
      "description": "The pulse leaves behind an electric field that last 3 seconds, granting bonus movement speed to Orianna and her allies when they move within. Enemies that move within the field are slowed by the same amount, decaying over 2 seconds after leaving.",
      "leveling": [
        {
          "attribute": "Movement Speed Modifier",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 25 / 30 / 35 / 40"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Orianna/ability-icon/w",
  "notes": "No additional notes.",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
