// Updated Patch 16.1 - 01/29/2026 04:27:10 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Petricite Burst',
  affects: 'Self',
  blurb: 'Innate:  Sylas\'  ability casts generate  stacks of Unshackled that stack up to a cap. While he has stacks, he gains tremendous  bonus attack speed.',
  damageType: 'Magic damage',
  effectRadius: '300',
  icon: 'https://cdn.communitydragon.org/latest/champion/Sylas/ability-icon/p',
  notes: 'Spellblade damage does not get converted to magic damage, and will deal its damage only to the primary target.\nApplies  proc damage to the primary target and  area damage to secondary targets.\nPetricite Burst\'s damage cannot critically strike against secondary targets.\nPetricite Burst only applies  on-hit effects to the primary target.\nPetricite Burst attacks benefit from  life steal.\nPetricite Burst can be  dodged,  blocked, or missed while Sylas is  blinded as the primary target but not as a secondary target.',
  spellEffects: 'special',
  spellshieldable: 'False',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Whenever Sylas casts an ability, he generates a stack of Unshackled for 4 seconds, refreshing on subsequent casts and stacking up to 3 times.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Unshackled:</span> Sylas\' next basic attack gains 125% bonus attack speed and is empowered to have an uncancellable windup and consume a stack to whirl his chains around him, dealing 130% AD (+ 30% AP) magic damage to the primary target and 40% AD (+ 20% AP) magic damage to nearby enemies.</p>'
    },
    {
      description: 'Unshackled deals 115% damage to monsters, and executes minions that are secondary targets and would be left below 25 health.'
    },
    {
      description: 'Petricite Burst can critically strike for (175% + 30%) damage only against the primary target.'
    }
  ]
}
export default ability
