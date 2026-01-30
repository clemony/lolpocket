// Updated Patch 16.1 - 01/29/2026 04:27:14 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Denting Blows",
  "affects": "Self, Enemies",
  "blurb": "Passive:  Vi's  basic attacks and  Vault Breaker apply a  stack of Denting Blows.",
  "cooldown": "0",
  "cost": "0",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Vi's basic attacks on-hit and Vault Breaker apply a stack of Denting Blows to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack consumes them all to deal bonus physical damage, capped at 300 against non-champions, and inflict 20% armor reduction for 4 seconds.</p>",
      "leveling": [
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "unit": "%  of target's maximum health",
              "values": "4 / 5 / 6 / 7 / 8"
            },
            {
              "unit": "% per 100 bonus AD",
              "values": "3.5"
            }
          ]
        }
      ]
    },
    {
      "description": "After consuming Denting Blows, Vi gains bonus attack speed for 4 seconds, which refreshes on subsequent triggers.",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 35 / 40 / 45 / 50"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vi/ability-icon/w",
  "notes": "The armor penetration will apply after the triggering damage.\nThe enhanced attack applies other  on-hit effects and can both  critically strike as normal as well as apply  life steal (the bonus damage cannot do either).\nDenting Blows can be  blocked but cannot be  dodged nor missed while Vi is  blinded.\nThe attacks do not affect  structures nor  wards.",
  "spellEffects": "Proc",
  "spellshieldable": "False",
  "targeting": "Passive"
}
  export default ability
