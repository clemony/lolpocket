// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Hemorrhage',
  affects: 'Enemies',
  blurb: 'Innate:  Darius\'  basic attacks and damaging  abilities apply a  stack of Hemorrhage, stacking up to a cap.',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Darius/ability-icon/p',
  notes: 'If Hemorrhage\'s total post-mitigation damage is higher than the target\'s current health, a small area of  sight is granted around the target for the duration of Hemorrhage and for another 2 seconds after it ends.\nHemorrhage does not apply to  structures nor  wards.\nDarius\' attacks and abilities have to deal damage to apply Hemorrhage.\nHemorrhage cannot be applied to/refreshed against  invulnerable targets.\nHemorrhage can be applied to and refreshed against  shielded targets.\nHemorrhage can also be applied  on-hit, but will specifically not do so if the target is invulnerable.\n Spell shield prevents Hemorrhage\'s application from abilities only.',
  spellEffects: 'proc',
  spellshieldable: 'special',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Darius\' damaging basic attacks and abilities apply a stack of Hemorrhage to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Hemorrhage:</span> For each stack, the target is dealt[ 13 - 30 (based on level) (+ 30% bonus AD) total physical damage over the duration, ][ 3.25 - 7.5 (based on level) (+ 7.5% bonus AD) physical damage every 1.25 seconds over the duration, ]up to a maximum of[ 65 - 150 (based on level) (+ 150% bonus AD) total physical damage over the duration. ][ 16.25 - 37.5 (based on level) (+ 37.5% bonus AD) physical damage with each tick. ]Hemorrhage deals 200% damage against monsters.</p>'
    },
    {
      description: 'When Darius kills a champion with Noxian Guillotine, or applies 5 stacks on an enemy champion, he becomes empowered with Noxian Might for 5 seconds.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Noxian Might:</span> Darius gains 30 - 230 (based on level) bonus attack damage and instantly applies 5 Hemorrhage stacks through his usual means.</p>'
    }
  ]
}
export default ability
