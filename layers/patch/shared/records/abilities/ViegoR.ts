// Updated Patch 16.1 - 01/29/2026 04:27:15 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Heartbreaker',
  affects: 'Self, Enemies',
  blurb: 'Active:  Viego  blinks with  displacement immunity to the target location and attacks the most wounded enemy champion nearby, which briefly  slows them, applies  on-hit effects, and deals bonus physical damage by a portion of their missing health.',
  castTime: '0.5',
  cooldown: '120 / 100 / 80',
  cost: '0',
  damageType: 'Physical damage',
  effectRadius: '300',
  icon: 'https://cdn.communitydragon.org/latest/champion/Viego/ability-icon/r',
  notes: 'Heartbreaker will cast at the edge of its range if the target location is further beyond.\nHeartbreaker will cast at maximum range from the end of  Spectral Maw\'s dash if it is cast during the dash.\nThe knockback speed is 1000 units per second. The airborne is removed as soon as the displacement ends.\nThe maximum airborne duration is therefore 0.4 seconds. The minimum is 0.1 seconds.\nTo the struck champion deals  basic damage, but also triggers spell effects by also being tagged as  spell damage; to all other enemies, deals  area damage.\nViego will enter a 0.25-second cast time if he strikes an enemy champion.\nAfter this cast time, he will automatically receive an attack command against that enemy. Previous movement inputs from the player are ignored.(bug)\nHeartbreaker\'s strike to the champion can be  dodged and  blocked, but not  missed.\nViego will be ordered to basic attack the primary target afterwards.',
  spellEffects: 'special',
  spellshieldable: 'true',
  targeting: 'Location',
  targetRange: '500',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Viego gains displacement immunity over the cast time, then blinks to the target location. Upon arrival, he strikes the most wounded enemy champion nearby, dealing physical damage, slowing them by 99% for 0.25 seconds, and applying on-hit effects. Other nearby enemies are knocked back up to 400-units away based on proximity, though not through terrain.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              unit: '%  of target\'s missing health',
              values: '12 / 16 / 20'
            },
            {
              unit: '% per 100 bonus AD',
              values: '5'
            }
          ]
        }
      ]
    },
    {
      description: 'All targets hit are dealt 120% - 240% (based on critical strike chance) AD physical damage.'
    },
    {
      description: 'If a Possession is discarded, Heartbreaker will be placed on a 1.5-second cooldown if it is not already on cooldown.'
    }
  ]
}
export default ability
