// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Chomp",
  "affects": "Self, Enemies",
  "blurb": "Active:  Trundle's next  basic attack within a few seconds will deal bonus physical damage and briefly  slow the target.",
  "castTime": "none",
  "cooldown": "3.5",
  "cost": "20",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Trundle empowers his next basic attack within 7 seconds to have an uncancellable windup, gain 25 bonus range, deal bonus physical damage and slow the target by 75% for 0.1 seconds.</p>",
      "leveling": [
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "values": "10 / 30 / 50 / 70 / 90"
            },
            {
              "tooltip": "Scaling per rank:\n15 / 25 / 35 / 45 / 55% AD",
              "unit": "% AD",
              "values": "15 - 55"
            }
          ]
        }
      ]
    },
    {
      "description": "After using the empowered attack, Trundle gains bonus attack damage for 5 seconds and reduces the target's bonus attack damage by half that amount for the same duration.",
      "leveling": [
        {
          "attribute": "Bonus Attack Damage",
          "modifiers": [
            {
              "values": "20 / 25 / 30 / 35 / 40"
            }
          ]
        },
        {
          "attribute": "Attack Damage Reduction",
          "modifiers": [
            {
              "values": "10 / 12.5 / 15 / 17.5 / 20"
            }
          ]
        }
      ]
    },
    {
      "description": "Chomp resets Trundle's basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/q",
  "notes": "Chomp will still incur the  attack damage increase for Trundle even if the attack is  dodged,  blocked, missed while he is  blinded, or it is blocked by  spell shield.\n Spell shield will only block the attack damage reduction and  slow.\nIf the attack damage reduction would reduce the target's bonus attack damage below 0, the target's base attack damage value is unaffected, but their total attack damage will still be reduced. The target will however retain a bonus attack damage value of 0.\nEffects that scale with total attack damage, such as basic attacks, will take the attack damage reduction into account for their calculations.\nThose that have a ratio for base attack damage or bonus attack damage do not take the reduction into account.",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "special",
  "targeting": "Auto"
}
export default ability
