// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Subjugate",
  "affects": "Enemies",
  "blurb": "Active:  Trundle drains the life force of the target enemy champion, dealing magic damage based on their maximum health and  healing for the same amount. He also steals a portion of their  armor and  magic resist, and increases in  size while reducing their  size.",
  "castTime": "0.25",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Trundle drains the life force out of the target enemy champion, dealing magic damage and healing himself for the same amount. He also steals 40% of their current armor and magic resistance, and increases in size by 18% while reducing the target's size by 9.9%.</p>",
      "leveling": [
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "unit": "%  of the target's maximum health",
              "values": "20 / 25 / 30"
            },
            {
              "unit": "% per 100 AP",
              "values": "2"
            }
          ]
        }
      ]
    },
    {
      "description": "Half of the total damage and stealing are applied instantly, and the other half, as well as the size modifiers, are applied every second over the next 4 seconds, even if the target has died.",
      "leveling": [
        {
          "attribute": "Initial Magic Damage",
          "modifiers": [
            {
              "unit": "%  of the target's maximum health",
              "values": "10 / 12.5 / 15"
            },
            {
              "unit": "% per 100 AP",
              "values": "1"
            }
          ]
        },
        {
          "attribute": "Magic Damage Per Second",
          "modifiers": [
            {
              "unit": "%  of the target's maximum health",
              "values": "2.5 / 3.13 / 3.75"
            },
            {
              "unit": "% per 100 AP",
              "values": "0.25"
            }
          ]
        }
      ]
    },
    {
      "description": "The armor and magic resistance will remain stolen for 4 seconds after the drain has ended."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/r",
  "notes": "The total value of armor and magic resist stolen and damage dealt is determined at the time of cast. The stolen stats do not update dynamically relative to the target's stats at any point during the effect, as the steal is applied to the current value of armor and magic resistance.\nTrundle gains 11.7 extra  range on his  basic attacks (relative to his and enemy center) as a consequence of his increased  size.\nSo do his enemies.\nHe gains 3.78 to 6.255 range against the target he subjugated, depending on their base size, and so does the target against him.\nThe debuff on the target also persists through death.\nTrundle will lose the buff if the target loses the debuff, for example if it enters  resurrection.(note)\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "resource": "Mana",
  "spellEffects": "dot",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "650"
}
export default ability
