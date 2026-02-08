// Updated Patch 16.1 - 01/29/2026 04:26:57 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Slipstream',
  affects: 'Enemies',
  blurb: 'Active:  Nilah  dashes in the target enemy\'s direction, dealing physical damage to enemies she passes through.',
  castTime: 'none',
  collisionRadius: '150',
  cooldown: '0.5',
  cost: '40',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Nilah/ability-icon/e',
  notes: 'Formless Blade used during Slipstream might not register, rendering it on cooldown without being casted.(bug)\nSlipstream has a chance of visually not using charge, causing it to showing one available charge without possibility of using it.(bug)\nDashing to target through a wall within casting range will cancel the dash if wall is longer than dash range.(bug)',
  rechargeRate: '26 / 22.5 / 19 / 15.5 / 12',
  resource: 'Mana',
  speed: '2200',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '550',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nilah dashes a fixed distance in the direction of the target unit, dealing physical damage to enemies she passes through.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '60 / 70 / 80 / 90 / 100'
            },
            {
              unit: '% bonus AD',
              values: '20'
            }
          ]
        }
      ]
    },
    {
      description: 'Nilah periodically stocks a Slipstream charge, up to a maximum of 2.'
    },
    {
      description: 'Slipstream resets Nilah\'s basic attack timer. Formless Blade and Apotheosis can be cast during the dash.'
    }
  ]
}
export default ability
