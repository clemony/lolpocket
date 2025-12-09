// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Battle Fury",
  "affects": "Self",
  "blurb": "Innate:  Tryndamere generates  Fury on his  basic attacks,  critical strikes, and enemy kills. His Fury begins to decay after a period without dealing or taking damage.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Tryndamere generates 5 Fury on his basic attacks, and 10 Fury on critical strikes and each time he kills an enemy. After 8 seconds without dealing or taking damage, Tryndamere loses 5 Fury per second.</p>"
    },
    {
      "description": "Tryndamere gains 0% - 50% (based on Fury) critical strike chance."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Tryndamere/ability-icon/p",
  "notes": "Fury generation stacks additively: if the given action triggers multiple ways of generating Fury, all of them apply.\nKilling an enemy with a basic attack  basic attack generates 15 Fury (5 Fury from the  basic attack + 10 Fury from the kill).\nKilling an enemy with a  critical strike generates 20 Fury (10 Fury from the  critical strike + 10 Fury from the kill).\nThe Fury gain for killing an enemy also stacks with  Spinning Slash's Fury generation per enemy hit.\nAttacks against  structures will not grant bonus Fury, but will still reset the timer on Fury decay.\nAttacks against  wards behave like attacks on normal enemies, generating 5 Fury and resetting the decay timer. Attacks against wards can  critically strike, generating 10 Fury.\nAttacks against jungle plants will generate 5 Fury and reset the decay timer. Attacks can also  critically strike, generating 10 Fury. Additionally,  Honeyfruit drops restore 5 Fury for each pod collected and reset the decay timer.\nAttacking an  Honeyfruit and collecting the pods generates 30 Fury, or 35 Fury if the plant was hit by a  critical strike.\nFury is only granted if the  basic attack hits and will not be granted if Tryndamere cancels his attack windup.\nTryndamere will not generate Fury if the attack is  dodged.\nPENDING FOR TEST: Fury generation with parrying effects ( block,  blind)\nBattle Fury's bonus is worth  0 : 2000 (based on Fury).",
  "targeting": "Passive"
}
export default ability
