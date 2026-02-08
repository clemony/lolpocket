// Updated Patch 16.1 - 01/29/2026 04:27:14 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Ambush',
  affects: 'Self',
  blurb: 'Active:  Twitch becomes  camouflaged for some time, gaining  bonus movement speed, increased while facing enemy  champions that cannot see him.',
  castTime: 'none',
  cooldown: '16',
  cost: '40',
  icon: 'https://cdn.communitydragon.org/latest/champion/Twitch/ability-icon/q',
  notes: 'Entering stealth cancels Twitch\'s current basic attack.\nAmbush follows the same rules as stealth but he can still perform actions normally before entering  camouflage. Activating  Recall during the 1-second delay allows him to  channel it while stealthed.\nIf Twitch enters  stasis during the delay, he will gain the  camouflage after the stasis ends.\nUsing a basic attack  breaks the stealth at the start of the attack windup.',
  resource: 'Mana',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> After a 1-second delay, Twitch becomes camouflaged for a duration. Attacking or casting Venom Cask or Contaminate ends Ambush immediately.</p>',
      leveling: [
        {
          attribute: 'Stealth Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '10 / 11 / 12 / 13 / 14'
            }
          ]
        }
      ]
    },
    {
      description: 'During this time, Twitch gains 10% bonus movement speed, increased to 30% while facing enemy champions within a 1000-unit radius who cannot see him.'
    },
    {
      description: 'Upon breaking stealth, Twitch gains bonus attack speed for 6 seconds.',
      leveling: [
        {
          attribute: 'Bonus Attack Speed',
          modifiers: [
            {
              unit: '%',
              values: '45 / 50 / 55 / 60 / 65'
            }
          ]
        }
      ]
    },
    {
      description: 'When an enemy champion dies while afflicted with Deadly Venom, Ambush\'s cooldown is reset.'
    }
  ]
}
export default ability
