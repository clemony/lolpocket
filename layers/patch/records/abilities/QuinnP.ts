// Updated Patch 15.24.1 - 12/26/2025 07:04:12 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Harrier',
  affects: 'Self',
  blurb: 'Innate:  Quinn\'s damaging abilities mark enemies with Vulnerable and  reveal them for a few seconds. Periodically,  Valor marks a nearby enemy with Vulnerable.',
  damageType: 'Physical damage',
  effectRadius: '525',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Quinn\'s Blinding Assault against the primary target, Vault, and Skystrike mark enemies hit with Vulnerable for 4 seconds, during which they are revealed. Valor will periodically mark a nearby visible enemy if no Vulnerable targets exist for 1 second.</p>'
    },
    {
      description: 'Quinn\'s basic attacks against Vulnerable targets are empowered to consume the mark to deal 10 - 95 (based on level) (+ 16% - 50% (based on level) AD) bonus physical damage.'
    },
    {
      description: 'While Behind Enemy Lines is active, Harrier is disabled and all Vulnerable marks are removed.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Quinn/ability-icon/p',
  notes: 'If a mark applied by an ability is overwritten, consumed, or timed out, Harrier goes on a 1-second cooldown if it\'s not already on cooldown.\nHarrier\'s targeting priority:\nLast unit hit (if it was a small minion it appears to select a different target).\nLowest-health enemy champion.\nLowest-health enemy minion.\nHarrier is consumed even if it is parried, the attack is negated in any case.\nHarrier will not mark enemy  minions while Quinn is not  visible, but will mark enemy  champions.',
  spellEffects: 'Proc',
  spellshieldable: 'False',
  targeting: 'Passive'
}
export default ability
