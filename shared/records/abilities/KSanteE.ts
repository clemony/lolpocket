// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Footwork",
  "affects": "Self, Allies",
  "blurb": "Active:  K'Sante  dashes, granting himself a  shield.",
  "castTime": "none",
  "cooldown": "10 / 9.5 / 9 / 8.5 / 8",
  "cost": "45 / 50 / 55 / 60 / 65",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> K'Sante dashes to the target location, though not through terrain, and grants himself a shield for 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
            },
            {
              "unit": "% bonus health",
              "values": "15"
            }
          ]
        }
      ]
    },
    {
      "description": "Footwork can also be cast on allies with increased range and speed, and the ability to dash through terrain. If the target ally is a champion, they receive the shield as well."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">All Out Bonus:</span> Footwork's dash speed is increased, and its cooldown is reduced by 50%.</p>"
    },
    {
      "description": "K'Sante can cast any of his abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/KSante/ability-icon/e",
  "notes": "Footwork's cast on allies has a  forgiveness radius of 150 units.\nDashing to the side or behind will cancel current move or attack orders. Exception when attack order was given at melee range from target.\nThe shield is granted instantly on cast for both K'Sante and the potential allied champion.",
  "resource": "Mana",
  "speed": "(500 / 1250 / 1100 / 1400) + 100% movement speed",
  "targeting": "Location /  Unit"
}
export default ability
