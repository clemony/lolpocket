// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Shadow Assault",
  "width": "280",
  "affects": "Enemies",
  "blurb": "Active:  Talon disperses a ring of blades around him that deals physical damage to enemies it passes through and lingers for a short time, during which he gains  invisibility and  bonus move speed.",
  "castTime": "none",
  "cooldown": "100 / 80 / 60",
  "cost": "100",
  "damageType": "Physical damage",
  "effectRadius": "550",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Talon disperses a ring of blades around him that deals physical damage to enemies hit and lingers at maximum range for up to 2.5 seconds, during which he gains invisibility and bonus movement speed.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "90 / 135 / 180"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 55 / 70"
            }
          ]
        }
      ]
    },
    {
      "description": "Shadow Assault can be recast after 1 second within the duration, and does so automatically after the duration or if Talon breaks stealth."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Talon breaks stealth and converges the blades to him, dealing the same physical damage to enemies hit. Breaking stealth with a basic attack or Noxian Diplomacy will converge the blades to the target instead.</p>",
      "leveling": [
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "180 / 270 / 360"
            },
            {
              "unit": "% bonus AD",
              "values": "200"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/r",
  "notes": "Shadow Assault casts a total of 12 blades evenly distributed in all directions. 4 of them travel down the cardinal directions (Relative to the map, not relative to Talon), while all blades have an angle of 30° to one another.\n Spell shield will block a single pass.\nShadow Assault does not cancel Talon's basic attacks.\nShadow Assault has a minimum lifetime of 0.8 seconds before convergence.\nThe blades each will fail to converge on their target (Talon or the attacked target) if the target is more than 20000 units from them.(bug)\nThis distance is barely achievable between fountains on Summoner's Rift.\nUsing a basic attack breaks the stealth at the end of the attack windup.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2400 / 4000",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
