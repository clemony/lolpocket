// Updated Patch 16.1 - 01/29/2026 04:27:18 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Deadly Spines',
  affects: 'Enemies',
  blurb: 'Active:  Zyra sprouts a field of thorny vines at the target location that deals magic damage to enemies hit.',
  castTime: '0.25',
  cooldown: '7 / 6.5 / 6 / 5.5 / 5',
  cost: '55',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Zyra/ability-icon/q',
  notes: 'Each  Thorn Spitter will generate 2 stacks of  Conqueror and 1 stack of each of  Phase Rush and  Electrocute.',
  resource: 'Mana',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '800',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zyra sprouts thorny spines at the target location that appear after a 0.625-seconds delay, dealing magic damage to enemies hit.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '60 / 100 / 140 / 180 / 220'
            },
            {
              unit: '% AP',
              values: '65'
            }
          ]
        }
      ]
    },
    {
      description: 'If Deadly Spine hits a Seed, it sprouts into a Thorn Spitter that lasts for 8 seconds.'
    }
  ]
}
export default ability
