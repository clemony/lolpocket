// Updated Patch 16.1 - 01/29/2026 04:26:50 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Wild Growth",
  "affects": "Allies / Self, Enemies",
  "blurb": "Active:  Lulu enchants herself or the target allied champion,  knocking up surrounding enemies.",
  "castTime": "none",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "effectRadius": "400 / 400",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lulu enlarges herself or the target allied champion, knocking up nearby enemies for 1 second. For the next 7 seconds, the target gains bonus health and 40% increased size and slows nearby enemies, which lingers for 0.25 seconds.</p>",
      "leveling": [
        {
          "attribute": "Bonus Health",
          "modifiers": [
            {
              "values": "275 / 425 / 575"
            },
            {
              "unit": "% AP",
              "values": "55"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 45 / 60"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lulu/ability-icon/r",
  "notes": "Wild Growth's size increase scales additively with other size increases.",
  "resource": "Mana",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "900"
}
  export default ability
