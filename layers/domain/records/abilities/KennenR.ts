// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Slicing Maelstrom",
  "affects": "Enemies",
  "blurb": "Active:  Kennen summons a storm that strikes at nearby enemy champions, dealing magic damage. Enemies take increased damage from each subsequent strike.",
  "castTime": "0.25",
  "cooldown": "120 / 100 / 80",
  "cost": "0",
  "damageType": "Magic damage",
  "effectRadius": "550",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kennen summons a storm around himself for 3 seconds, gaining bonus armor and bonus magic resistance for the duration.</p>",
      "leveling": [
        {
          "attribute": "Bonus Resistances",
          "modifiers": [
            {
              "values": "20 / 40 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "The storm strikes lightning bolts down on nearby enemies every 0.5 seconds, each one dealing magic damage.",
      "leveling": [
        {
          "attribute": "Magic Damage Per Bolt",
          "modifiers": [
            {
              "values": "40 / 75 / 110"
            },
            {
              "unit": "% AP",
              "values": "22.5"
            }
          ]
        }
      ]
    },
    {
      "description": "Slicing Maelstrom gains 10% additional damage for each subsequent strike a target has received, up to a combined total of 150% of the initial strike's damage.",
      "leveling": [
        {
          "attribute": "Total Single-Target Damage",
          "modifiers": [
            {
              "values": "300 / 562.5 / 825"
            },
            {
              "unit": "% AP",
              "values": "168.75"
            }
          ]
        }
      ]
    },
    {
      "description": "Kennen can move during Slicing Maelstrom's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kennen/ability-icon/r",
  "spellEffects": "aoedot",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
