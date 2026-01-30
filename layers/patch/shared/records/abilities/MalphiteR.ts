// Updated Patch 16.1 - 01/29/2026 04:26:51 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Unstoppable Force",
  "affects": "Enemies",
  "blurb": "Active:  Malphite  dashes with  displacement immunity to the target location. Upon arrival, he deals magic damage to nearby enemies and briefly  knocks them up.",
  "castTime": "none",
  "cooldown": "130 / 105 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "325",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Malphite dashes with displacement immunity to the target location. Upon arrival, he deals magic damage to nearby enemies and knocks them up for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "200 / 300 / 400"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Malphite/ability-icon/r",
  "notes": "The dash speed can be up-to doubled if Unstoppable Force is targeted at the middle of a wall so that his destination ends up on the other side.\nIt will be decreased if his destination ends up closer to him than his target location.\nIf Malphite dies during his  dash, the ability cancels.\nIf the dash is interrupted without Malphite dying, for instance when he enters  resurrection during Unstoppable Force, he halts and the ability instead affects enemies at the stopped location.",
  "resource": "Mana",
  "speed": "1500 + 100% movement speed",
  "spellEffects": "aoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "1000"
}
  export default ability
