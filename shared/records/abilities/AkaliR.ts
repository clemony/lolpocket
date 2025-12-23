// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Perfect Execution",
  "affects": "Enemies",
  "blurb": "Active:  Akali  dashes in the direction of the target enemy champion, dealing physical damage to enemies she passes through.",
  "castTime": "0.25 / None",
  "collisionRadius": "110",
  "cooldown": "120 / 90 / 60",
  "cost": "0",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Akali dashes 750 units in the direction of the target enemy champion, dealing magic damage to enemies she passes through. If this hits an enemy, she flips over them to continue the dash up to the normal range but for at least another 150 units.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "110 / 220 / 330"
            },
            {
              "unit": "% bonus AD",
              "values": "50"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        }
      ]
    },
    {
      "description": "Perfect Execution can be recast after a 2.5-second static cooldown within 10 seconds of the first activation."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Akali dashes 800 units in the target direction, dealing magic damage to enemies she passes through, increased by 0% - 200% (based on target's missing health).</p>",
      "leveling": [
        {
          "attribute": "Minimum Magic Damage",
          "modifiers": [
            {
              "values": "70 / 140 / 210"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "210 / 420 / 630"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Akali/ability-icon/r",
  "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nWith the first cast, Akali can dash up to a maximum of 900 units if the first enemy she hit was at the maximum dash range.\nCasting  Flash during either dashes will interrupt them, but Akali will deal damage to any enemies she comes in contact with at the new location.\nEnemies already hit by either of Perfect Execution's casts cannot be affected more than once by the same cast.\n Shuriken Flip can be used during the initial dash if it is cast after Perfect Execution's cast time finishes.\nThis ability's damage is calculated based on the caster's stats at the start of cast and does not change dynamically.",
  "speed": "1500 / 3000",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Unit / Direction",
  "targetRange": "675"
}
export default ability
