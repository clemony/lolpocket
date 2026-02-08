// Updated Patch 16.1 - 01/29/2026 04:27:02 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Ferromancy: Mount Up',
  affects: 'Enemies',
  blurb: 'Passive: While  Rell is Dismounted, she gains  bonus armor and  bonus magic resist.',
  castTime: 'none',
  cooldown: '10',
  cost: '40',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Rell/ability-icon/w',
  notes: 'Rell will always respawn and start the game as mounted.\nThe basic attack reset is not considered one for  Hail of Blades.\nRell can use the empowered attack even while  grounded or  rooted.\nThe  dash can be  knocked down but the attack\'s effects will still be applied.\n Displacement immunity will not resist the application of the  stun.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the empowered attack\'s cast time, it is cancelled but not consumed.',
  spellEffects: 'spell',
  spellshieldable: 'true',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> While Rell is Dismounted, she gains 15% bonus armor, 15% bonus magic resistance, 20% bonus attack speed, and 75 bonus attack range.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rell becomes Mounted, gaining 30% bonus movement speed decaying over 2 seconds and empowering her next basic attack within 3.5 seconds to have a 0.2-second cast time, gain 100 bonus attack range and 40% bonus attack speed, and cause her to charge at the target\'s location. Upon arrival or collision of the charge, her basic attack deals bonus magic damage, stuns the target for 0.6 seconds, and flings them 150 units over herself, though not through terrain, over 0.4 seconds.</p>',
      leveling: [
        {
          attribute: 'Bonus Magic Damage',
          modifiers: [
            {
              values: '10 / 25 / 40 / 55 / 70'
            },
            {
              unit: '% AP',
              values: '40'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">While Rell is Mounted, she can cast Ferromancy:</span> Crash Down.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Ferromancy:</span> Mount Up resets Rell\'s basic attack timer. This ability can be cast only while Rell is Dismounted.</p>'
    }
  ]
}
export default ability
