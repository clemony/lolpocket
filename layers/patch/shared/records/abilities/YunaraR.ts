// Updated Patch 16.1 - 01/29/2026 04:27:17 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Transcend One's Self",
  "affects": "Self",
  "blurb": "Passive:  Arc of Ruin's damage and  Untouchable Shadow's dash speed are increased.",
  "castTime": "none",
  "cooldown": "100 / 90 / 80",
  "cost": "100",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Arc of Ruin's base damage and Untouchable Shadow's dash speed scale with Transcend One's Self's rank.</p>",
      "leveling": [
        {
          "attribute": "Arc of Ruin Base Damage",
          "modifiers": [
            {
              "values": "175 / 350 / 525"
            }
          ]
        },
        {
          "attribute": "Untouchable Shadow Dash Speed",
          "modifiers": [
            {
              "values": "1350 / 1500 / 1650"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yunara enters Transcendent State for 15 seconds, during which each of her basic abilities is empowered:</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Cultivation of Spirit:</span> Automatically becomes active at no cost, with the duration increased to Transcendent State's.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Arc of Judgment:</span> Upgraded into Arc of Ruin, which has no cost and has its remaining cooldown reduced by 80% upon both entering and exiting the state.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Kanmei's Steps:</span> Upgraded into Untouchable Shadow, which has no cost and has its cooldown reset upon both entering and exiting the state.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yunara/ability-icon/r",
  "notes": "An ongoing  Kanmei's Steps' effect is not lost when quickly replaced by  Untouchable Shadow.\n Cultivation of Spirit is cast alongside Transcend One's Self. If the former was not already active, this will also grant its  attack reset.\nThe attack reset does not originate from Transcend One's Self nor is Transcend One's Self tagged as granting one itself (e.g. for the purposes of  Hail of Blades).\nTranscend One's Self cannot be cast again while active.",
  "resource": "Mana",
  "targeting": "Auto"
}
  export default ability
