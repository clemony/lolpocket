// Updated Patch 15.23.1 - 11/30/2025 12:24:02 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Broken Wings",
  "affects": "Enemies",
  "blurb": "Active:  Riven can cast this ability up to three times in quick succession, dealing physical damage to enemies hit.\nFirst Cast: Riven  dashes forward and slashes her sword in a circle.\nSecond Cast: Riven mimics the first cast.\nThird Cast: Riven mimics the first cast's dash, but now slams her sword in a larger circle, briefly  knocking back enemies hit as well.",
  "castTime": "none",
  "cooldown": "13",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "150 / 250 / 200 / 300",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Riven can activate Broken Wings three times before the ability goes on cooldown, with a 0.3125-second static cooldown between casts. If Riven does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.</p>"
    },
    {
      "description": "Riven slashes with her sword for each of the three casts, dealing physical damage to enemies struck within an area, resetting her basic attack timer, and ordering her to basic attack the target of Broken Wings if there are any.",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "45 / 75 / 105 / 135 / 165"
            },
            {
              "tooltip": "Scaling per rank:\n65 / 70 / 75 / 80 / 85% bonus AD",
              "unit": "% bonus AD",
              "values": "65 - 85"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "135 / 225 / 315 / 405 / 495"
            },
            {
              "tooltip": "Scaling per rank:\n195 / 210 / 225 / 240 / 255% bonus AD",
              "unit": "% bonus AD",
              "values": "195 - 255"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">First Cast:</span> Riven dashes 225 units in the direction she is currently facing, or up to 225 units towards the target enemy, striking enemies in the target area 100 units away. This cast cannot cross terrain.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Second Cast:</span> Riven mimics the first cast's effects.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Third Cast:</span> Riven mimics the first cast's effects in a larger area while also knocking back enemies hit 75 units over 0.5 seconds. This cast can cross terrain.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Riven/ability-icon/q",
  "notes": "This ability always employs Quick cast.\nEach cast counts as a single ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThe basic attack reset is not considered one for  Hail of Blades.\nMoving after using Broken Wings allows Riven to do other actions faster.\nThe Third Cast prevents Riven from using basic attacks and abilities for longer than the other 2 casts.\nThe Third Cast may have an extended dash range when crossing terrain.",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Auto / Unit"
}
export default ability
