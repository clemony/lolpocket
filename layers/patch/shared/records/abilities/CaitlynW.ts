// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Yordle Snap Trap',
  affects: 'Enemies',
  blurb: 'Active:  Caitlyn sets a trap at the target location that lasts for a while. The trap springs when an enemy champion steps on it,  revealing and  rooting them.',
  castTime: '0.25',
  collisionRadius: '15',
  cooldown: '0.5',
  cost: '20',
  icon: 'https://cdn.communitydragon.org/latest/champion/Caitlyn/ability-icon/w',
  notes: 'Multiple armed traps on the same location will spring all at once if an enemy steps on one of them.',
  rechargeRate: '26 / 22 / 18 / 14 / 10',
  resource: 'Mana',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '800',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Caitlyn sets a visible trap at the target location that is untargetable and arms after 1 second, lasting for a duration. The trap grants sight of the area for 1 second after being placed.</p>',
      leveling: [
        {
          attribute: 'Trap Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '30 / 35 / 40 / 45 / 50'
            }
          ]
        }
      ]
    },
    {
      description: 'Caitlyn periodically stocks a Yordle Snap Trap charge, up to a maximum amount. Deploying traps beyond the maximum destroys the oldest one.',
      leveling: [
        {
          attribute: 'Maximum Number of Traps',
          modifiers: [
            {
              values: '3 / 3 / 4 / 4 / 5'
            }
          ]
        }
      ]
    },
    {
      description: 'The next enemy champion that springs the trap is rooted for 1.5 seconds and revealed for 3 seconds, as well as takes additional damage from the Headshot granted by this ability. Trapped targets become immune to further Yordle Snap Traps for 3 seconds, preventing them from springing subsequent traps for the duration.',
      leveling: [
        {
          attribute: 'Headshot Damage Increase',
          modifiers: [
            {
              values: '35 / 80 / 125 / 170 / 215'
            },
            {
              unit: '% bonus AD',
              values: '30'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
