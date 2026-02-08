// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Icathian Surprise',
  affects: 'Self, Enemies',
  blurb: 'Innate: Upon  dying,  Kog\'Maw enters an  untargetable  zombie state for a few seconds, gradually gaining  bonus movement speed. He explodes at the end of the duration, dealing true damage to nearby enemies.',
  damageType: 'True damage',
  effectRadius: '400',
  icon: 'https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/p',
  notes: 'Icathian Surprise grants 3.125% bonus movement speed every 0.264 seconds over the duration, up to the maximum of 50%. However, as a result of the ticks being rounded up from 0.25 seconds, the movement speed only reaches up to 40.625%.\nIcathian Surprise\'s  untargetability does not  destroy in-flight  projectiles.\nIcathian Surprise will still trigger if Kog\'Maw is killed by the  Nexus Obelisk.\nIf Kog\'Maw has the missile from a basic attack in-flight at the same time that he\'s moving while he dies, as long as the missile hits the target after Icathian Surprise has started, Kog\'Maw will be able to use a basic attack once during Icathian Surprise.\nKog\'Maw\'s usable summoner spells will be placed on a 5 second cooldown upon becoming a zombie.\nDuring Icathian Surprise, Kog\'Maw\'s  attack range is reduced[ to 0 ][ by 500 ], making him automatically path near enemies he is trying to target.\nZombie states trigger upon taking  lethal damage.\n Raw damage effects will not prevent zombie states from triggering.\nAll  resurrection effects will take precedence over effects that reanimate as a zombie.\nA champion that enters a zombie state will start their death timer upon triggering the effect.\nMost buffs and debuffs will be lost upon transitioning into a zombie state.\nThose that persist through death, such as  Brand\'s  Blaze, will remain.\nUndisplayed marker buffs, such as those imposed by  Veigar\'s  Event Horizon and  Viktor\'s  Gravity Field to prevent being affected multiple times by the same effect, will be lost.(bug)\nThis does not apply when transitioning from one zombie state to another zombie state.(bug)\nUnits within a zombie state cannot:\nUse  Recall or  Refillable Potion.\nActivate  resurrection effects.\nTake  Dark Passage, Catapult, or  gates.\nInitate the  Rift Herald Rodeo.\nPick up the  Eye of the Herald.\nBe targeted by the following:\n Bailout\n Chronoshift\n Umbral Trespass.\nBe affected by the following:\n Curse of the Black Mist\n Fear Beyond Death\'s chain missile\n Test of Spirit\'s initial missile\n Lamb\'s Respite\n Realm of Death\nFountain health restore',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Upon taking fatal damage, Kog\'Maw enters a zombie state for 4 seconds, becoming ghosted and gaining 10% bonus movement speed that increases up to 50% over the duration. At the end of the duration, he explodes to deal 140 - 650 (based on level) true damage to nearby enemies.</p>'
    },
    {
      description: 'While under this state, Kog\'Maw becomes invulnerable, untargetable, and immune to crowd control, but is also rendered unable to declare basic attacks, cast abilities, use summoner spells, and activate items.'
    }
  ]
}
export default ability
