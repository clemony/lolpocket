// Updated Patch 15.24.1 - 12/26/2025 07:04:08 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Staggering Blow',
  affects: 'Enemies',
  blurb: 'Innate:  Nautilus\' basic attacks deal bonus physical damage and briefly  root the target.',
  damageType: 'Physical damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Nautilus\' basic attacks are empowered to deal 14 - 116 (based on level) bonus physical damage and root the target for 0.75 - 1.5 (based on level) seconds.</p>'
    },
    {
      description: 'This effect cannot occur on the same target more than once every few seconds.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/p',
  notes: 'Spell shield will block the  root but not the bonus damage.\nStaggering Blow\'s enhanced attack can be  blocked and  dodged (the on-target cooldown will still be applied).\nIt will fail to trigger while he is  blinded.\nThe empowered attack will not trigger against structures.',
  onTargetCdStatic: '6',
  spellEffects: 'Proc',
  spellshieldable: 'Special',
  targeting: 'Passive'
}
export default ability
