// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Fling",
  "affects": "Enemies",
  "blurb": "Active:  Singed  flings the target enemy, dealing magic damage based on their maximum health.",
  "castTime": "0.25",
  "cooldown": "10 / 9.5 / 9 / 8.5 / 8",
  "cost": "60 / 70 / 80 / 90 / 100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Singed flings the target enemy 550 units over himself over 0.693 seconds, dealing magic damage. The damage based on the target's health ratio is capped at 300 against minions and monsters.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "50 / 60 / 70 / 80 / 90"
            },
            {
              "unit": "% of target's maximum health",
              "values": "6 / 6.5 / 7 / 7.5 / 8"
            },
            {
              "unit": "% AP",
              "values": "55"
            }
          ]
        }
      ]
    },
    {
      "description": "If the target lands on Mega Adhesive's area of effect after the displacement, they are rooted for a duration.",
      "leveling": [
        {
          "attribute": "Root Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1 / 1.25 / 1.5 / 1.75 / 2"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Singed/ability-icon/e",
  "notes": "Fling can throw enemies over walls (circumstances permitting).\n Slow-immune enemies will not be  rooted when flung into  Mega Adhesive.\nFling is special cased to not  fling  Warwick while Singed is  suppressed by  Infinite Duress after the cast time.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "resource": "Mana",
  "spellEffects": "Spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "125"
}
  export default ability
