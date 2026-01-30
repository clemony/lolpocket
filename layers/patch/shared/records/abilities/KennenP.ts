// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Mark of the Storm",
  "affects": "Enemies",
  "blurb": "Innate:  Kennen's  abilities apply a  stack of Mark of the Storm to enemies hit.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Kennen's abilities apply a stack of Mark of the Storm to enemies hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times.</p>"
    },
    {
      "description": "The third stack against a target consumes them all to stun them for 1.25 seconds and restore 25 energy. The stun duration is reduced to 0.5 seconds if this occurs on the same target again within 6 seconds."
    },
    {
      "description": "Slicing Maelstrom can apply only up to 3 stacks on a target."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kennen/ability-icon/p",
  "notes": "Kennen will still restore energy if the target dies from the third stack of Mark of the Storm.\nAfter  Slicing Maelstrom applies its third stack, the target gains a 6-second stack immunity against Slicing Maelstrom that refreshes on subsequent hits.",
  "spellshieldable": "True",
  "targeting": "Passive"
}
  export default ability
