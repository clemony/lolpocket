// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Precision Protocol",
  "affects": "Self",
  "blurb": "Active:  Camille's next basic attack deals bonus physical damage and grants her  bonus movement speed.",
  "castTime": "none",
  "cooldown": "9 / 8 / 7 / 6 / 5",
  "cost": "25",
  "damageType": "Other damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Camille empowers her next basic attack within 4 seconds to have an uncancellable windup, gain 50 bonus range, deal bonus physical damage and grant her bonus movement speed for 1 second. This attack cannot critically strike.</p>",
      "leveling": [
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "unit": "% AD",
              "values": "20 / 25 / 30 / 35 / 40"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "25 / 30 / 35 / 40 / 45"
            }
          ]
        }
      ]
    },
    {
      "description": "After 0.25 seconds of using the empowered attack, Precision Protocol can then be recast within the next 3.5 seconds at no additional cost."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Camille mimics the first cast's effects. If Precision Protocol is recast after 1.5 seconds of the first attack, then the bonus damage is doubled, and 40% - 100% (based on level) of the attack's total damage will be dealt as true damage.</p>",
      "leveling": [
        {
          "attribute": "Increased Mixed Damage",
          "modifiers": [
            {
              "unit": "% AD",
              "values": "40 / 50 / 60 / 70 / 80"
            }
          ]
        }
      ]
    },
    {
      "description": "Both casts of Precision Protocol reset Camille's basic attack timer. Camille is able to cast Tactical Sweep, Hookshot, or The Hextech Ultimatum during the windup of Precision Protocol's empowered attack without cancelling it."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Camille/ability-icon/q",
  "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nBoth enhanced attacks cannot  critically strike.\nThe 1.5-second delay is \"fuzzy\", meaning it may take up to another 0.25 seconds to ready the window for the empowered attack.\nThis syncs up perfectly with  Sheen's cooldown between casts at 0 item haste, which is also \"fuzzy\".\nThe second attack will also become empowered if it simply starts after the 1.5-second delay, even if the recast was consumed earlier.\nThe empowered recast's  true damage:\nHas a special case to factor  Spellblade into the true damage conversion of part of her attack's damage.\nOther on-hit effects do not interact with the true damage conversion.\nRandomly dependent on buff order, if (e.g.  Plated Steelcaps' Plating,  Path Maker) applies first before the conversion, then the resulting damage will be reduced, otherwise if the conversion happens first, then the damage will not be successfully reduced (both effects are pre-mitigation on-take-damage events).(bug)\nIs dealt just prior to the physical damage portion of the attack.\nPrecision Protocol applies to structures but the recast does not convert to true damage.\nThe enhanced attack will still complete and hit the target even if they become  untargetable during the attack's windup.\n Warden's Mail's flat damage reduction is reduced on the second cast, reducing the physical damage but not the true damage.(note)",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "false",
  "targeting": "Auto"
}
export default ability
