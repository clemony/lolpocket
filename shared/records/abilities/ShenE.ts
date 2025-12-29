// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Shadow Dash",
  "affects": "Enemies",
  "blurb": "Passive: Dealing damage with  Twilight Assault or Shadow Dash will restore  energy.",
  "castTime": "none",
  "collisionRadius": "60 /  150",
  "cooldown": "18 / 16 / 14 / 12 / 10",
  "cost": "150",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Dealing damage with Twilight Assault or Shadow Dash restores 30 / 40 / 50 (based on level) energy.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shen dashes to the target location, dealing physical damage to enemy champions and monsters he passes through and taunting them for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "60 / 85 / 110 / 135 / 160"
            },
            {
              "unit": "% bonus health",
              "values": "11"
            }
          ]
        }
      ]
    },
    {
      "description": "Twilight Assault and Spirit's Refuge can be cast during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Shen/ability-icon/e",
  "notes": "Casting  Flash during Shadow Dash will end the dash prematurely, but the end-of-dash collision check will hit enemies at the blink's location still.\nThis still cannot affect the same enemy more than once.\nThe energy restore from Shadow Dash may only occur once.",
  "resource": "Energy",
  "speed": "800 + 100% movement speed",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "600 / 300"
}
export default ability
