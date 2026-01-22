// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Noxious Blast",
  "affects": "Enemies",
  "blurb": "Active:  Cassiopeia blasts an area with  Poison after a brief delay, dealing magic damage over time to enemies hit. She gains  bonus movement speed if she hits an enemy  champion.",
  "castTime": "0.25",
  "cooldown": "3.5",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effectRadius": "200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Cassiopeia creates a blast at the target location that explodes after a 0.4-second delay. Enemies within the blast are poisoned for 3 seconds, taking magic damage every 0.429 seconds over the duration.</p>",
      "leveling": [
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "75 / 110 / 145 / 180 / 215"
            },
            {
              "unit": "% AP",
              "values": "65"
            }
          ]
        },
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "values": "10.71 / 15.71 / 20.71 / 25.71 / 30.71"
            },
            {
              "unit": "% AP",
              "values": "9.29"
            }
          ]
        }
      ]
    },
    {
      "description": "If Noxious Blast hits an enemy champion, Cassiopeia gains bonus movement speed that decays over 3 seconds.",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
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
  "icon": "https://cdn.communitydragon.org/latest/champion/Cassiopeia/ability-icon/q",
  "notes": "Noxious Blast always uses quick cast, regardless of player settings.\nThe damage inflicted by Noxious Blast is calculated as follows: damage / 7 ticks rounded down to the nearest integer.\nFor example: with 0 bonus AP Noxious Blast inflicts 75 damages over 7 ticks of damage, so 75/7 (≈10.71) deals first of all 10 damage, then (2 × 75/7)  −  10 (≈11.43) deals in a second time 11 damages, then (3 × 75/7)  −  10  −  11 (≈11.14) deals in a third time 11 damages, and so on.\nThe damage displayed for Noxious Blast DOT (Damage_over_time) always remains constant and corresponds to the previously mentioned formula: damage / 7 ticks rounded down to the nearest integer. It's important not to confuse the consistent displayed damage with the actual damage, which is updated with each tick, see tick and updates.\nWith the same example as above, the damage displayed is always 10.\nOccasionally, Noxious Blast may not deal the displayed damage. This discrepancy occurs when the calculated damage falls between 0.5 and 1. In such cases, rounding to the nearest integer, specifically rounding up, creates a 1-point difference. It's important to note that the damage is rounded down to the nearest integer.\nFor example: with a  Blasting Wand's, Noxious Blast shows  so rounded to the nearest integer 116 magic damage, but really deals using the formula above 115 magic damage.\n(bug) When Cassiopeia has precisely 20 bonus AP or 40 bonus AP. In this scenario, Noxious Blast may inflict 1 less damage than intended. Importantly, this bug occurs independently of rounding considerations.\nPENDING FOR TEST: Enemies within the blast of Noxious Blast are  poisoned for something between 3.2 and 3.3 seconds.",
  "resource": "Mana",
  "spellEffects": "aoedot",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "850"
}
export default ability
