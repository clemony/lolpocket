// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Nimbus Strike",
  "affects": "Enemies",
  "blurb": "Active:  Wukong  dashes to the target enemy and sends  untargetable clones to briefly attack up to two surrounding enemies, dealing magic damage.",
  "castTime": "none",
  "cooldown": "10 / 9.25 / 8.5 / 7.75 / 7",
  "cost": "30 / 35 / 40 / 45 / 50",
  "damageType": "Magic damage",
  "effectRadius": "187.5",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Wukong dashes to the target enemy's location and sends out untargetable clones to strike up to two additional enemies near the target's location, dealing magic damage.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
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
      "description": "Upon arrival, Wukong gains bonus attack speed for 5 seconds.",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "35 / 40 / 45 / 50 / 55"
            }
          ]
        }
      ]
    },
    {
      "description": "Crushing Blow can be cast during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MonkeyKing/ability-icon/e",
  "notes": "The clones can block non-targeted attacks or abilities for 0.25 seconds after hitting their targets. [2] (note)\nCasting Nimbus Strike interrupts the attack windup of enemies targeting Wukong.(bug)\nNimbus Strike has an offset distance of 75 units from the target dashed to.\nThe ability applies a stack of  Electrocute /  Phase Rush even if the target is  untargetable.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "625"
}
export default ability
