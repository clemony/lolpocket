// Updated Patch 16.1 - 01/29/2026 04:27:14 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Organic Deconstruction",
  "affects": "Enemies / Self",
  "blurb": "Innate:  Vel'Koz's  abilities apply a stack of Deconstruction to enemies hit for a few seconds.",
  "damageType": "True damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Vel'Koz's abilities apply a stack of Deconstruction to enemies hit for 7 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.</p>"
    },
    {
      "description": "The third stack consumes them all to deal 35 - 180 (based on level) (+ 60% AP) bonus true damage."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Velkoz/ability-icon/p",
  "notes": "No additional notes.",
  "spellEffects": "Proc",
  "spellshieldable": "True",
  "targeting": "Passive"
}
  export default ability
