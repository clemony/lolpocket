// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Determination",
  "affects": "Self",
  "blurb": "Innate:  Xin Zhao's  basic attacks  on-hit and  Wind Becomes Lightning strikes generate a stack of Determination, stacking up to 3 times.",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Xin Zhao's basic attacks on-hit and Wind Becomes Lightning's first slash hit and thrust on at least one enemy hit each generate a stack of Determination, stacking up to 3 times. The third stack consumes them all to deal 15% / 30% / 45% / 60% (based on level) AD bonus physical damage and heal Xin Zhao for 3% / 3.5% / 4% (based on level) of his maximum health (+ 65% AP).</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Challenge:</span> Wind Becomes Lightning and, if Crescent Guard has been learned, Xin Zhao's basic attacks and Audacious Charge, apply a Challenged mark to certain enemies hit for 3 seconds. Only one enemy can be marked as Challenged at a time; applying the mark to a new target removes it from the previous one. Audacious Charge and Crescent Guard have interactions against Challenged targets.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/p",
  "notes": "Determination Details\nThe healing and bonus damage work on different stacking systems, each counting its stacks and being consumed separately. While both stack  on-hit, the bonus damage stacks are consumed  on-attack, and the healing ones  on-hit.\nThe healing stacks are denoted in the buff-bar.\nIf  Guinsoo's Rageblade were to trigger when the stacks are at maximum, they will grant the healing but not the bonus damage, thus causing an out-of-sync between the stacks shown in-game versus when the bonus damage is dealt.\nOnly the initial slash of  Wind Becomes Lightning can generate a Determination stack. Slashes after the first do not count for stack generation.\nThe stack counter displays 1:3 rather than the usual 0:2, meaning that a count of 1 does not translate to having 1 stack.\nStacks reset when Xin Zhao  dies.\nStacks of Determination will be gained even if the attack is  blocked.\nPENDING FOR TEST:: Determination's interaction with parrying effects ( dodge,  blind).\nDetermination deals  proc damage.\nSince it is a separate instance of damage when applied by basic attack or either of  Wind Becomes Lightning's strikes, flat damage reduction that applies to both the main and bonus damage such as  Amumu's  Tantrum's passive will reduce each, for twice the reduction.\nThe bonus damage cannot  critically strike.\nWhen applied by a basic attack:\nThe attack uses a unique animation.\nThe bonus damage benefits from  life steal.\nPENDING FOR TEST: It applies life steal specifically.\nNeither the bonus damage or heal will be blocked by  spell shield.\nWhen applied by  Wind Becomes Lightning:\nTriggers against the closest target struck by the first slash/thrust (equals first target to receive spell effects).\nDoes not benefit from  life steal, including not healing from Wind Becomes Lightning's 33% conversion for this bonus damage.\nSince  proc damage is 'single target',  Vamp will heal from 100% of the bonus damage.\nThe bonus damage will be blocked by  spell shield, the heal will not.\nChallenged Details\n Spell shield will block the mark application from  Wind Becomes Lightning, but not from basic attacks and  Audacious Charge.",
  "spellEffects": "proc",
  "spellshieldable": "special",
  "targeting": "Passive"
}
export default ability
