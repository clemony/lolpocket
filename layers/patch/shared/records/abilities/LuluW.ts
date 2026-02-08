// Updated Patch 16.1 - 01/29/2026 04:26:50 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Whimsy',
  affects: 'Enemies / Allies / Self',
  blurb: 'Active:  Lulu can cast Whimsy on herself or the target champion.',
  castTime: '0.2419 / None',
  cooldown: '18',
  cost: '65',
  icon: 'https://cdn.communitydragon.org/latest/champion/Lulu/ability-icon/w',
  notes: 'Whimsy\'s movement speed reduction is not affected by  slow resist.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but still go on  cooldown and pay its cost.(bug)\nThis only applies to the enemy cast.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '2250',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '650',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lulu can cast Whimsy on herself or a champion.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Enemy Cast:</span> Lulu launches a spell onto the target enemy champion that polymorphs them into a harmless critter for a duration, during which their base movement speed is reduced by 60, and disarms them for the same duration.</p>',
      leveling: [
        {
          attribute: 'Disable Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '1.2 / 1.4 / 1.6 / 1.8 / 2'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Self / Ally Cast:</span> Lulu instantly casts erratic magic upon the target allied champion or herself, granting the target bonus attack speed and 25% (+ 5% per 100 AP) bonus movement speed for a duration.</p>',
      leveling: [
        {
          attribute: 'Bonus Attack Speed',
          modifiers: [
            {
              unit: '%',
              values: '20 / 22.5 / 25 / 27.5 / 30'
            }
          ]
        },
        {
          attribute: 'Effect Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '3 / 3.25 / 3.5 / 3.75 / 4'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
