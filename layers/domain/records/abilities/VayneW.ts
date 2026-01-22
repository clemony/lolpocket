// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Silver Bolts",
  "affects": "Enemies",
  "blurb": "Passive:  Vayne's  basic attacks  on-hit and  Condemn will apply a  stack of Silver Bolts, which expires upon attacking a new enemy.",
  "cooldown": "0",
  "cost": "0",
  "damageType": "True damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Vayne's basic attacks on-hit and Condemn apply a stack of Silver Bolts for 3.5 seconds, refreshing on subsequent applications, expiring upon attacking a new enemy, and stacking up to 3 times.</p>"
    },
    {
      "description": "The third stack consumes them all to deal bonus true damage, with a minimum threshold.",
      "leveling": [
        {
          "attribute": "Bonus True Damage",
          "modifiers": [
            {
              "unit": "% of target's maximum health",
              "values": "6 / 7 / 8 / 9 / 10"
            }
          ]
        },
        {
          "attribute": "Minimum Bonus Damage",
          "modifiers": [
            {
              "values": "50 / 65 / 80 / 95 / 110"
            }
          ]
        }
      ]
    },
    {
      "description": "Silver Bolts deals modified damage against monsters.",
      "leveling": [
        {
          "attribute": "Monster Damage",
          "modifiers": [
            {
              "values": "140 / 155 / 170 / 185 / 200"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vayne/ability-icon/w",
  "notes": "Stacks are not removed if Vayne switches to attacking a target immune to Silver Bolts ( structures,  wards).\nSilver Bolts do not apply to additional targets with  Runaan's Hurricane.\nThe stacks can be consumed even if the target is in  stasis.",
  "spellEffects": "Proc",
  "spellshieldable": "False",
  "targeting": "Passive"
}
export default ability
