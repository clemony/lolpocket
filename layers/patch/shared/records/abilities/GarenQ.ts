// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Decisive Strike',
  affects: 'Self, Enemies',
  blurb: 'Active:  Garen gains  bonus movement speed and  cleanses from  slows.',
  castTime: 'none',
  cooldown: '8',
  cost: '0',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Garen/ability-icon/q',
  notes: 'The enhanced attack will apply other  on-hit effects and can  critically strike as normal (the bonus damage does not).\nThe bonus damage will also apply  life steal.\nThe bonus damage is applied to  structures.\nDecisive Strike locks Garen out of using basic attacks for a short period of time. This is shortened with  attack speed.\nThe enhanced attack will still complete and hit the target even if they become  untargetable during the attack\'s windup.\nDecisive Strike will not prevent the reapplication of  slows (e.g. the persistent slow from  Pillar of Ice will be immediately reapplied after removal if Garen is still within its area of effect).\n Spell shield will only negate the  silence.\nDecisive Strike\'s  lunge can pass very thin terrain and will otherwise not be able to. In any case, Garen will still hit his target.',
  spellEffects: 'spell',
  spellshieldable: 'Special',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Garen cleanses himself of all slows and gains 35% bonus movement speed for a duration.</p>',
      leveling: [
        {
          attribute: 'Movement Speed Duration',
          modifiers: [
            {
              values: '1 / 1.65 / 2.3 / 2.95 / 3.6'
            }
          ]
        }
      ]
    },
    {
      description: 'Additionally, Garen empowers his next basic attack within 4.5 seconds to have an uncancellable windup, lunge at the target, deal bonus physical damage, and silence them for 1.5 seconds.',
      leveling: [
        {
          attribute: 'Bonus Physical Damage',
          modifiers: [
            {
              values: '30 / 60 / 90 / 120 / 150'
            },
            {
              unit: '% AD',
              values: '50'
            }
          ]
        }
      ]
    },
    {
      description: 'Decisive Strike resets Garen\'s basic attack timer.'
    }
  ]
}
export default ability
