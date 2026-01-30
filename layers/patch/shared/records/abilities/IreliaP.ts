// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Ionian Fervor",
  "affects": "Self",
  "blurb": "Innate:  Irelia's  abilities generate a  stack of Ionian Fervor for each enemy champion hit, as well as one stack if she hits at least one non-champion.  Basic attacks against enemy  champions and large  monsters will also refresh the duration.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Irelia generates a stack of Ionian Fervor for each enemy champion hit by her abilities, or if she hits at least one non-champion, lasting for 6 seconds, refreshing on basic attacks and ability hits against enemy champions, large monsters, and structures, and stacking up to 4 times.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ionian Fervor:</span> For each stack, Irelia gains 10% - 25% (based on level) bonus attack speed, up to a maximum of 40% - 100% (based on level). At maximum stacks, Irelia's basic attacks are empowered to deal 10 - 61 (based on level) (+ 20% bonus AD) bonus magic damage on-hit, reduced to[ 50% ][ 5 - 30.5 (based on level) (+ 10% bonus AD) ]against structures.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Unsteady:</span> Enemy champions and large monsters hit by Flawless Duet or Vanguard's Edge's initial barrage are marked as Unsteady for 5 seconds. The mark can be consumed by Bladesurge.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Irelia/ability-icon/p",
  "notes": "PENDING FOR TEST:: Parry interactions ( block,  dodge, and  blind).\nIonian Fervor stacks are represented by a counter under Irelia's health bar. It is highlighted while the ability is at its maximum effect.",
  "spellEffects": "Proc",
  "targeting": "Passive"
}
  export default ability
