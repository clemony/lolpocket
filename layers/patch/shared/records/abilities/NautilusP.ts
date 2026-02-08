// Updated Patch 16.1 - 01/29/2026 04:26:56 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Staggering Blow',
  affects: 'Enemies',
  blurb: 'Innate:  Nautilus\' basic attacks deal bonus physical damage and briefly  root the target.',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/p',
  notes: 'Spell shield will block the  root but not the bonus damage.\nStaggering Blow\'s enhanced attack can be  blocked and  dodged (the on-target cooldown will still be applied).\nIt will fail to trigger while he is  blinded.\nThe empowered attack will not trigger against structures.',
  onTargetCdStatic: '6',
  spellEffects: 'Proc',
  spellshieldable: 'Special',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Nautilus\' basic attacks are empowered to deal 14 - 116 (based on level) bonus physical damage and root the target for 0.75 - 1.5 (based on level) seconds.</p>'
    },
    {
      description: 'This effect cannot occur on the same target more than once every few seconds.'
    }
  ]
}
export default ability
