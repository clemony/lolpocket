// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Primal Howl",
  "affects": "Enemies",
  "blurb": "Active:  Warwick gains damage reduction for a short time. Primal Howl can be recast within the duration, and does so automatically afterwards.",
  "castTime": "none",
  "cooldown": "15 / 14 / 13 / 12 / 11",
  "cost": "40",
  "effectRadius": "375",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Warwick gains damage reduction for up to 2.5 seconds. Primal Howl can be recast after 1 second, and does so automatically after the duration.</p>",
      "leveling": [
        {
          "attribute": "Damage Reduction",
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
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Warwick howls, ending Primal Howl's effects and fearing nearby enemies for 1 second, slowing them by 90%.</p>"
    },
    {
      "description": "Starting Infinite Duress' channel while Primal Howl is active will initiate the recast without ending the damage reduction buff prematurely."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Warwick/ability-icon/e",
  "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nIf the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.\nThe recast's howling animation has a 0.25-second  lockout time.\nThis will also cancel Warwick's basic attack.\nWarwick cannot attack or cast abilities during the animation, instead the last input will be buffered to play after it ends.\nWarwick will automatically recast if he enters  resurrection.",
  "resource": "Mana",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
