// Updated Patch 15.24.1 - 12/26/2025 07:03:55 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Shield of Daybreak',
  affects: 'Enemies',
  blurb: 'Active:  Leona illuminates her shield, causing her next  basic attack within a few seconds to deal bonus magic damage and briefly  stun the target.',
  castTime: 'none',
  cooldown: '5',
  cost: '30 / 35 / 40 / 45 / 50',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Leona illuminates her shield, empowering her next basic attack within 6 seconds to have an uncancellable windup, gain 50 bonus range, deal bonus magic damage and stun the target for 1 second.</p>',
      leveling: [
        {
          attribute: 'Bonus Magic Damage',
          modifiers: [
            {
              values: '10 / 35 / 60 / 85 / 110'
            },
            {
              unit: '% AP',
              values: '30'
            }
          ]
        }
      ]
    },
    {
      description: 'Shield of Daybreak resets Leona\'s basic attack timer.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/q',
  notes: 'The enhanced attack will apply other  on-hit effects and can  critically strike as normal.\n Critical strikes do not interact with Shield of Daybreak\'s bonus damage.\nPENDING FOR TEST:: Shield of Daybreak\'s interactions with  dodging,  blocking.\nShield of Daybreak\'s attack can  miss, nullifying its effects entirely.\nShield of Daybreak\'s attack does not put Leona\'s basic attack on cooldown.\nThis effectively performs a second  attack reset.\nThis is unlike other empowered attacks (including those which, similar to Shield of Daybreak, use a more unconventional spell cast rather than an attack override).\nLeona will wait out Shield of Daybreak\'s wind-down before automatically attacking, anyway. The player must issue the next attack themselves to gain the full benefit of the second reset.\nThe empowered attack can trigger against  turrets exclusively.',
  resource: 'Mana',
  spellEffects: 'spell',
  spellshieldable: 'True',
  targeting: 'Auto'
}
export default ability
