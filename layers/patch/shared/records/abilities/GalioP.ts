// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Colossal Smash",
  "affects": "Enemies",
  "blurb": "Innate: Every few seconds,  Galio's next  basic attack is modified to gain  attack speed and deal magic damage in an area, increased based on his  bonus magic resist.",
  "damageType": "Magic damage",
  "effectRadius": "250",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Galio's next basic attack is empowered to have an uncancellable windup, gain 40% bonus attack speed and deal 15 - 115 (based on level) (+ 100% AD) (+ 40% AP) (+ 60% bonus magic resistance) modified magic damage to the target and all enemies near them.</p>"
    },
    {
      "description": "Whenever Galio hits at least one enemy champion or epic monster with an ability, Colossal Smash's current cooldown is reduced by 3 seconds. This may occur only once per cast."
    },
    {
      "description": "Colossal Smash's damage based on its AD ratio can critically strike for (175% + 30%) damage to all targets hit."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Galio/ability-icon/p",
  "notes": "Colossal Smash deals  basic damage to the primary target but also triggers spell effects by also being tagged as  spell damage, while dealing  proc damage also tagged as area of effect to secondary targets.\n Spellblade does not get converted to magic damage and it will deal its damage only to the primary target.\nColossal Smash applies  on-hit effects to its primary target twice.(bug)\nThe empowered attack will not trigger against  wards and plants.\nGalio gains attack speed even on non-empowered attacks as long as the ability is not on cooldown.\nPENDING FOR TEST: Does Colossal Smash trigger against allies?\nEven if the ability hit is  spell shielded Colossal Smash's cooldown will still be reduced.",
  "spellEffects": "special",
  "spellshieldable": "False",
  "targeting": "Passive"
}
  export default ability
