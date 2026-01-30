// Updated Patch 16.1 - 01/29/2026 04:27:18 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Rewind",
  "affects": "Self",
  "blurb": "Active:  Zilean  reduces the  remaining cooldowns of his other basic abilities.",
  "castTime": "none",
  "cooldown": "14 / 12 / 10 / 8 / 6",
  "cost": "35",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zilean reduces the remaining cooldowns of Time Bomb and Time Warp by 10 seconds each.</p>"
    },
    {
      "description": "Either Time Bomb or Time Warp must be on cooldown to cast this ability."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zilean/ability-icon/w",
  "notes": "No additional details.",
  "resource": "Mana",
  "targeting": "Auto"
}
  export default ability
