// Updated Patch 16.1 - 01/29/2026 04:26:56 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Wither",
  "affects": "Enemies",
  "blurb": "Active:  Nasus ages the target enemy champion for a few seconds, gradually  slowing and  crippling them over the duration.",
  "castTime": "0.25",
  "cooldown": "15 / 14 / 13 / 12 / 11",
  "cost": "80",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nasus ages the target enemy champion for 5 seconds, slowing them by 35% and crippling them by[ 75% of that amount, ][ 26.25%, ]both increasing every second over the duration.</p>",
      "leveling": [
        {
          "attribute": "Maximum Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "47 / 59 / 71 / 83 / 95"
            }
          ]
        },
        {
          "attribute": "Additional Slow Per Second",
          "modifiers": [
            {
              "unit": "%",
              "values": "3 / 6 / 9 / 12 / 15"
            }
          ]
        },
        {
          "attribute": "Maximum Cripple",
          "modifiers": [
            {
              "unit": "%",
              "values": "35.25 / 44.25 / 53.25 / 62.25 / 71.25"
            }
          ]
        },
        {
          "attribute": "Additional Cripple Per Second",
          "modifiers": [
            {
              "unit": "%",
              "values": "2.25 / 4.5 / 6.75 / 9 / 11.25"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/w",
  "notes": "Wither interrupts the target's attack windup when it is first applied. (bug)\nIf Wither's duration is affected by  Tenacity the effects will apply slower (negative tenacity percentage) or faster (positive tenacity percentage) so the maximum values are still reached when the modified duration ends.\nWither's cripple effectiveness calculates from its slow's base values, thus  slow resist will not interact with the attack speed modifier indirectly.\nBoth  slow and  cripple from Wither are considered to be a single debuff. (note)\nTherefore,  slow immunity will prevent both, even without technical  cripple immunity.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "resource": "Mana",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "700"
}
  export default ability
