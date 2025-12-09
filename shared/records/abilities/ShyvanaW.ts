// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Burnout",
  "affects": "Enemies",
  "blurb": "Active:  Shyvana creates a flame aura, gaining a burst of  movement speed and continually dealing magic damage to nearby enemies.",
  "castTime": "none",
  "cooldown": "12",
  "cost": "0",
  "damageType": "Magic damage",
  "effectRadius": "162.5 / 350 / 365 / 380",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shyvana surrounds herself in flames for 3 seconds, gaining decaying bonus movement speed and dealing magic damage every 0.5 seconds to nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 35 / 40 / 45 / 50"
            },
            {
              "unit": "% per 100 AP",
              "values": "10"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed Decay",
          "modifiers": [
            {
              "unit": "%",
              "values": "4.5 / 5.25 / 6 / 6.75 / 7.5"
            }
          ]
        },
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "values": "10 / 15 / 20 / 25 / 30"
            },
            {
              "unit": "% bonus AD",
              "values": "10"
            }
          ]
        }
      ]
    },
    {
      "description": "During this time, Shyvana's basic attacks deal bonus magic damage on-hit to surrounding enemies and extend the duration of Burnout by 1 second, which can occur up to 4 times for a total of 4 additional seconds.",
      "leveling": [
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "values": "5 / 7 / 9 / 11 / 13"
            },
            {
              "unit": "% bonus AD",
              "values": "5"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Dragon Form Bonus:</span> Burnout's radius increases, scaling with Dragon's Descent's rank.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/w",
  "notes": "Magic damage on-hit can be dodged with  dodging effects.\nPENDING FOR TEST:: Magic damage on-hit's interactions with  blocking and  blinding effects.",
  "spellEffects": "aoedot",
  "spellshieldable": "False",
  "targeting": "Auto"
}
export default ability
