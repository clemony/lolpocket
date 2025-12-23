// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Drakehound's Step",
  "affects": "Self, Enemies",
  "blurb": "Innate: During any of  Ambessa's  ability  lockouts, the player may right-click to select a location or target to  dash toward after the lockout ends. An indicator appears on the ground denoting the direction and destination location.",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> During the lockout of Ambessa's abilities, inputting an attack or movement command causes her to dash to or towards the target or location, respectively, after the lockout ends. This dash cannot pass through terrain.Ambessa cannot dash while immobilized or grounded.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Ambessa casts an ability, she generates a stack of Medarda Maxim after the ability's respective lockout for 4 seconds, refreshing with subsequent casts and stacking up to 3 times. Basic attacks consume one stack each to become empowered.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Medarda Maxim:</span> Ambessa's next basic attack on-attack is empowered to have an uncancellable windup, gain 75 bonus range and 50% bonus attack speed, deal 5 - 30 (based on level) (+ 30% bonus AD) bonus physical damage, and restore 40 / 55 / 70 (based on level) energy.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ambessa/ability-icon/p",
  "notes": "Stacks of Medarda Maxim are consumed  on-hit, so means of applying on-hit effects without attacking (eg.  Guinsoo's Rageblade's) will consume them without dealing bonus physical damage or restoring energy.(bug)\nIf an Attack command has been queued during an ability lockout and both:\nthe player issues a Hold (default J) or Stop (default S) command, and\nthe acquired target is within Ambessa's  attack range after the end of the lockout\nthen Ambessa's dash will cancel.\nIf Ambessa is  immobilized or  grounded during an ability's lockout, any attack or movement commands inputted during the lockout will not be buffered to cast at the end of the lockout, even if the crowd control has worn off by the time she is able to move (and thus dash).\nThis also applies vice versa where she has successfully buffered an inputted attack or movement command but is afterwards affected with the aforementioned crowd control types during the remaining lockout time. This causes the buffer to be cancelled and the dash to fail to trigger as a consequence.\nAttack commands will not be buffered to cast at the end of the lockout even while  grounded.\nIf multiple attack and movement commands are inputted during the lockout of an ability, the most recent one is used for the dash's targeting.\nIf the most recent input is not an attack or movement command, the dash will not trigger.\nIn this case, the buffer for the previous attack/movement command was cancelled by a new non-attack/movement command such as an input for an ability cast.\nDuring Drakehound's Step, a visual indicator is visible to Ambessa displaying the eventual dash's direction and destination location.\nThe number of available attacks empowered by Medarda Maxim are visible as pips under Ambessa's health bar, only visible to the player.\nThe following table refers for interactions while Ambessa is  dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Recall\n\n\nDisabled\n\n Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath",
  "speed": "770 / 830 / 890 / 950 (based on level) + 100% movement speed",
  "spellEffects": "proc",
  "spellshieldable": "false",
  "targeting": "Passive",
  "targetRange": "175 / 350"
}
export default ability
