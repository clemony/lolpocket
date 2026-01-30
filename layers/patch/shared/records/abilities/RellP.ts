// Updated Patch 16.1 - 01/29/2026 04:27:02 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Break the Mold",
  "affects": "Self, Enemies",
  "blurb": "Innate:  Rell's  basic attacks deal bonus magic damage  on-hit equal to a percentage of her total armor and total magic resistance.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Rell's basic attacks deal bonus magic damage on-hit equal to the sum of 5% of her total armor and 5% of her total magic resistance.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Rell's basic attacks and abilities against non- minions apply a stack of Break The Mold for 5 seconds, refreshing on subsequent hits and stacking up to 5 times. Each stack reduces the target's armor and magic resistance by 3% for a maximum of 15% reduction.</p>"
    },
    {
      "description": "Rell gains bonus armor and bonus magic resistance equal to the sum resistances reduced from all afflicted enemies."
    },
    {
      "description": "Break the Mold will reduce the target's armor and magic resistance by a minimum of 1.5 - 3 (based on level)."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Rell/ability-icon/p",
  "notes": "The attacks do not affect structures.\nThe first stack of Break The Mold that is applied to a target will snapshot the targets current  armor and  magic resistance. All subsequent stacks will reduce the targets resistances based on the snapshotted amount, even if the target's total resistances change. This snapshot lasts until the debuff expires.\nFor example, applying a stack of Break The Mold to a champion with 100  armor and  magic resistance will reduce their resistance by 3 and grant Rell the lost stats. If their resistances are then boosted to 500 before another stack is applied, the subsequent stack will only reduce their resistance by a further 3 despite 3% of 500 being 15.",
  "spellEffects": "proc",
  "spellshieldable": "false",
  "targeting": "Passive"
}
  export default ability
