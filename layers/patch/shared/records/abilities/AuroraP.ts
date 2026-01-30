// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Spirit Abjuration",
  "affects": "Enemies, Self",
  "blurb": "Innate:  Aurora's  basic attacks and damaging  abilities inflict a  stack of Spirit Abjuration, stacking up to 3 times.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Aurora's damaging basic attacks and abilities apply a stack of Spirit Abjuration to enemies for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack against a target consumes them all to deal bonus magic damage equal to 1% (+ 2.7% per 100 AP) of the target's maximum health, capped at 100 - 270 (based on level) against monsters.</p>"
    },
    {
      "description": "Upon consuming the stacks from a champion, Aurora additionally exorcises them, freeing a Spirit from the target that follows her for the same duration. For each active Spirit, Aurora is healed for 3 - 20 (based on level) (+ 2% AP) every second. Subsequent exorcisms free further Spirits and refresh all active Spirits. Aurora may have up to 4 Spirits at a time, for a maximum heal per tick of 12 - 80 (based on level) (+ 8% AP)."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/p",
  "notes": "The spirits grant vision of a small area around themselves.",
  "spellEffects": "proc",
  "spellshieldable": "false",
  "targeting": "Passive"
}
  export default ability
