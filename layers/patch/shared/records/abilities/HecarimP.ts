// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Warpath",
  "affects": "Self",
  "blurb": "Innate:  Hecarim gains  bonus attack damage equal to a portion of his  bonus movement speed.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Hecarim gains bonus attack damage equal to 12% - 24% (based on level) of his bonus movement speed.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Hecarim/ability-icon/p",
  "notes": "Warpath's bonus attack damage will adjust itself to any temporary movement speed buffs and debuffs Hecarim is affected by.\nSince this only affects bonus values Hecarim will not dip below his regular attack damage if he is  slowed below his base movement speed.\nThe amount of movement speed scaling to bonus attack damage is refreshed every 0.25 seconds.",
  "targeting": "Passive"
}
  export default ability
