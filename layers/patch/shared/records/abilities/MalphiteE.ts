// Updated Patch 16.1 - 01/29/2026 04:26:51 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Ground Slam',
  affects: 'Enemies',
  blurb: 'Active:  Malphite slams the ground beneath him, dealing magic damage to nearby enemies and  crippling them for a short time.',
  castTime: '0.2419',
  cooldown: '7',
  cost: '50',
  damageType: 'Magic damage',
  effectRadius: '400',
  icon: 'https://cdn.communitydragon.org/latest/champion/Malphite/ability-icon/e',
  notes: 'The  cripple  stacks multiplicatively with other sources of attack speed reductions.\nThis ability will cast from wherever the caster is at the end of the cast time.',
  resource: 'Mana',
  spellEffects: 'aoe',
  spellshieldable: 'True',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Malphite slams the ground beneath him, dealing magic damage to nearby enemies and crippling them for 3 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '80 / 120 / 160 / 200 / 240'
            },
            {
              unit: '% AP',
              values: '60'
            },
            {
              unit: '% armor',
              values: '40'
            }
          ]
        },
        {
          attribute: 'Cripple Strength',
          modifiers: [
            {
              unit: '%',
              values: '30 / 35 / 40 / 45 / 50'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
