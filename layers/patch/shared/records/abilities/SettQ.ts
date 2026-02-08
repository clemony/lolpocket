// Updated Patch 16.1 - 01/29/2026 04:27:08 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Knuckle Down',
  affects: 'Self, Enemies',
  blurb: 'Active:  Sett empowers his next two basic attacks within a few seconds to gain  bonus range and deal bonus physical damage based on the target\'s maximum health.',
  castTime: 'none',
  cooldown: '9 / 8 / 7 / 6 / 5',
  cost: '0',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Sett/ability-icon/q',
  notes: 'The bonus movement speed buff is named Looking For a Fight.\nKnuckle Down can be  dodged,  blocked or missed while Sett is  blinded.',
  spellEffects: 'spell',
  spellshieldable: 'False',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sett empowers his next two basic attacks within 5 seconds to gain 50 bonus range and deal bonus physical damage, capped at 400 total damage of each attack against monsters.</p>',
      leveling: [
        {
          attribute: 'Bonus Physical Damage',
          modifiers: [
            {
              values: '10 / 20 / 30 / 40 / 50'
            },
            {
              unit: '% (+ 1 / 1.5 / 2 / 2.5 / 3% per 100 AD) of target\'s maximum health',
              values: '1'
            }
          ]
        },
        {
          attribute: 'Total Bonus Physical Damage',
          modifiers: [
            {
              values: '20 / 40 / 60 / 80 / 100'
            },
            {
              unit: '% (+ 2 / 3 / 4 / 5 / 6% per 100 AD) of target\'s maximum health',
              values: '2'
            }
          ]
        }
      ]
    },
    {
      description: 'For 1.5 seconds, Sett also gains 30% bonus movement speed while facing visible enemy champions within 2000 units.'
    },
    {
      description: 'Knuckle Down resets Sett\'s basic attack timer. The empowered attacks are guaranteed to be a Left Punch followed by a Right Punch, resetting Sett\'s current Pit Grit state (if applicable) and ignoring the usual time-out period for a follow-up Right Punch.'
    }
  ]
}
export default ability
