// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Weapon Queue System",
  "blurb": "The icon of this ability reflects the next weapon that is the next in  Aphelios' weapon queue.",
  "cooldown": "0",
  "cost": "0",
  "effects": [
    {
      "description": "The icon of this ability reflects the next weapon that is in reserve."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aphelios receives a text prompt of the weapon Alune will create next.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/e",
  "notes": "This ability also includes the icon of the off-hand.",
  "targeting": "Auto"
}
  export default ability
