// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Three Talon Strike",
  "affects": "Enemies",
  "blurb": "Active:  Xin Zhao empowers his next few  attacks within a duration to deal bonus physical damage and  reduce his other  ability cooldowns.",
  "castTime": "none",
  "cooldown": "7 / 6.5 / 6 / 5.5 / 5",
  "cost": "30",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Xin Zhao empowers his next three basic attacks on-attack within 5 seconds to each have an uncancellable windup, deal bonus physical damage and reduce his other abilities' current cooldowns by 1 second. Each attack refreshes the duration.</p>",
      "leveling": [
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "values": "15 / 30 / 45 / 60 / 75"
            },
            {
              "unit": "% bonus AD",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Total Bonus Physical Damage",
          "modifiers": [
            {
              "values": "45 / 90 / 135 / 180 / 225"
            },
            {
              "unit": "% bonus AD",
              "values": "120"
            }
          ]
        }
      ]
    },
    {
      "description": "The third attack knocks up the target for 0.75 seconds."
    },
    {
      "description": "Three Talon Strike's bonus damage is affected by critical strike modifiers."
    },
    {
      "description": "Three Talon Strike resets Xin Zhao's basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/q",
  "notes": "Spell shield will only block the knock up.\nThe enhanced attacks present input buffering during their wind-up animation (Xin Zhao cannot be issued any commands until after it ends).",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "Special",
  "targeting": "Auto"
}
export default ability
