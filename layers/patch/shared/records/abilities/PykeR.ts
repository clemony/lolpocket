// Updated Patch 16.1 - 01/29/2026 04:27:00 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Death from Below",
  "affects": "Self, Enemies",
  "blurb": "Active:  Pyke strikes the target location in a X pattern, which  executes enemy  champions hit that are at low health. Other enemies hit are instead dealt physical damage.",
  "castTime": "0.5",
  "cooldown": "100 / 85 / 70",
  "cost": "100",
  "damageType": "Other damage",
  "effectRadius": "125 / 282.5  ×  100",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Pyke marks the target location with the shape of an X before striking it, executing enemy champions within the area that are below 250 - 550 (based on level) (+ 80% bonus AD) (+ 1.5 per 1 Lethality) health. Other enemies hit and enemy champions above the threshold are instead dealt[ 50% of the amount as physical damage. ][ 125 - 275 (based on level) (+ 40% bonus AD) (+ 0.75 per 1 Lethality) physical damage. ]</p>"
    },
    {
      "description": "If Death from Below hits an enemy champion or at least one is killed inside the X by the execution or an ally, Pyke will blink to the center of the X. For the latter case Pyke can also recast the ability within 20 seconds at no cost."
    },
    {
      "description": "Each successful execution grants one Your Cut to the last assisting ally, instead of its natural assist gold. Otherwise, Pyke is granted a Your Cut for each enemy champion killed inside the X by an ally during Death from Below's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Pyke/ability-icon/r",
  "notes": "Applies  raw damage to executed targets and  area damage to targets above the threshold.\nDeath from Below's execute against an enemy champion will aggro nearby enemy minions.\nDeath from Below cannot execute  clones. They are always dealt 50% physical damage.\nIf the target is in a  zombie state, does not enter the  death state, or is killed by the ability while above the execution threshold, Death from Below does not grant  Your Cut nor the recast.\n Spell shield does not prevent Pyke from  blinking.\nDeath from Below cannot be  interrupted; Pyke will always appear at the target location if enemy champions are caught inside the X even if he is moved (e.g. by being  displaced) during the cast time.\nThe only exception is if he is being  suppressed, in which case he will not  blink.\n Axiom Arcanist does not refund the cooldown while Pyke is able to recast.(note)\n Axiom Arcanist's tooltip counts it refunding Death from Below even when it doesn't.(bug)\nDeath from Below will not go on cooldown if Pyke dies during its cast.\nPyke will still generate  Your Cut from enemies that die inside the X before Pyke dies.",
  "resource": "Mana",
  "spellEffects": "special",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "750"
}
  export default ability
