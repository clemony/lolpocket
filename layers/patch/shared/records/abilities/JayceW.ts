// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Hyper Charge',
  affects: 'Self',
  blurb: 'Active:  Jayce gains a massive burst of  bonus attack speed on his next few basic attacks, each one dealing modified physical damage.',
  castTime: 'none',
  cooldown: '10',
  cost: '40',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/w',
  notes: 'The last basic attack is checked on-hit rather than on-attack.\nIf  Runaan\'s Hurricane or  Guinsoo\'s Rageblade hit the target before the basic attack does, the basic attack damage will not be modified.',
  resource: 'Mana',
  spellEffects: 'Proc',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Jayce empowers his next 3 basic attacks within 4 seconds to deal modified physical damage and gain 360% bonus attack speed.Hyper Charge\'s total damage is affected by critical strike modifiers.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              unit: '% AD',
              values: '70 / 78 / 86 / 94 / 102 / 110'
            }
          ]
        },
        {
          attribute: 'Total Physical Damage',
          modifiers: [
            {
              unit: '% AD',
              values: '210 / 234 / 258 / 282 / 306 / 330'
            }
          ]
        }
      ]
    },
    {
      description: 'Hyper Charge resets Jayce\'s basic attack timer.'
    }
  ]
}
export default ability
