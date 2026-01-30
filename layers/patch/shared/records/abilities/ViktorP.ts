// Updated Patch 16.1 - 01/29/2026 04:27:15 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Glorious Evolution",
  "affects": "Self",
  "blurb": "Innate:  Viktor collects Hex Fragments from enemies he kills and enemy champion  takedowns.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Viktor can augment each of his abilities at the cost of 100 Hex Fragments, which he gains from killing enemies:</p>\n Minions and monsters generate 1 Hex Fragment.\nSiege minions, super minions, and epic monsters generate 10 Hex Fragments.\nEnemy champion takedowns generate 20 Hex Fragments."
    },
    {
      "description": "Arcane Storm can be augmented after all of Viktor's basic abilities have been augmented."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Viktor/ability-icon/p",
  "targeting": "Passive"
}
  export default ability
