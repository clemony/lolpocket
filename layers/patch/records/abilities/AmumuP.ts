// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Cursed Touch',
  affects: 'Enemies',
  blurb: 'Innate:  Amumu\'s basic attacks and  Curse of the Sad Mummy mark enemies with Curse.  Despair will refresh ongoing Curse marks on enemies hit.',
  damageType: 'True damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Amumu\'s basic attacks and Curse of the Sad Mummy are empowered to mark enemies with Curse for 3 seconds, refreshing on subsequent applications and Despair\'s per-tick damage.</p>'
    },
    {
      description: 'Cursed targets receive 10% bonus true damage from all incoming pre-mitigation magic damage.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/p',
  notes: 'If the triggering basic attack from Amumu applies magic damage  on-hit, Curse will be applied before the magic damage.\nThe Curse application from  Curse of the Sad Mummy happens after the magic damage is dealt by it, therefore amplifying the damage only if the target was also already marked before the hit.\nNeutral units / enemies affected by the Curse can receive bonus damage from the opposing team of Amumu / neutral units, but the damage will be credited to Amumu.\nThe application of Curse on  Curse of the Sad Mummy is negated if the ability is blocked by a  spell shield.',
  spellEffects: 'default',
  spellshieldable: 'special',
  targeting: 'Passive'
}
export default ability
