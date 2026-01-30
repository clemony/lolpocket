// Updated Patch 16.1 - 01/29/2026 04:27:02 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Dominus",
  "affects": "Enemies / Self",
  "blurb": "Active:  Renekton empowers himself for some time, gaining Fury,  bonus health, bonus size,  bonus attack range, and increased area on  Cull the Meek.",
  "castTime": "0.25",
  "cooldown": "120 / 100 / 80",
  "cost": "0",
  "damageType": "Magic damage",
  "effectRadius": "375",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Renekton empowers himself for 15 seconds, gaining bonus health, 20% increased size, 25 bonus attack range, and 20 Fury, as well as increasing Cull the Meek's effect radius.</p>",
      "leveling": [
        {
          "attribute": "Bonus Health",
          "modifiers": [
            {
              "values": "300 / 500 / 700"
            }
          ]
        }
      ]
    },
    {
      "description": "During this time, he deals magic damage every 0.5 seconds to nearby enemies and generates 5 Fury per second, up to a maximum of 75 Fury.",
      "leveling": [
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "values": "30 / 75 / 120"
            },
            {
              "unit": "% bonus AD",
              "values": "5"
            },
            {
              "unit": "% AP",
              "values": "5"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "900 / 2250 / 3600"
            },
            {
              "unit": "% bonus AD",
              "values": "150"
            },
            {
              "unit": "% AP",
              "values": "150"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/r",
  "notes": "Dominus'  cooldown is not refunded if Renekton  dies during the cast animation.\nDominus' bonus health gain does not interact with  Spirit Visage or  Grievous Wounds.\nRenekton retains Dominus' bonus health (if not over his normal maximum) once the duration ends.",
  "spellEffects": "aoedot",
  "spellshieldable": "False",
  "targeting": "Auto"
}
  export default ability
