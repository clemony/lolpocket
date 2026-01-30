// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Leap Strike",
  "affects": "Enemies",
  "blurb": "Active:  Jax  dashes to the target unit. If they are an enemy, he deals physical damage.",
  "castTime": "false",
  "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
  "cost": "65",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jax dashes to the target unit's location.</p>"
    },
    {
      "description": "If the target is an enemy and they are in range upon arrival, Jax deals physical damage to them.",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "65 / 105 / 145 / 185 / 225"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "Jax can cast any of his abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/q",
  "notes": "Leap Strike cannot be cast on  structures.\nIf the target is an enemy champion, Jax will be ordered to  basic attack them after the dash ends.\n Spell shield will block the damage, including when  empowered.",
  "resource": "Mana",
  "spellEffects": "single",
  "spellshieldable": "true",
  "targeting": "Unit",
  "targetRange": "700"
}
  export default ability
