// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Phase",
  "blurb": "Active:  Aphelios switches between his main weapon and off-hand weapon.",
  "castTime": "None",
  "cooldown": "0.8",
  "cost": "0",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Toggle:</span> Aphelios switches between his main weapon and off-hand weapon over 0.25 seconds.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/w",
  "notes": "Toggled abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nSwitching does not interrupt any commands Aphelios was issued before or during Phase.",
  "targeting": "Auto"
}
  export default ability
