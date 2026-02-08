// Updated Patch 16.1 - 01/29/2026 04:27:14 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Chain of Corruption',
  width: '240',
  affects: 'Enemies',
  blurb: 'Active:  Varus unleashes a tendril in the target direction that infects the first enemy champion hit, dealing magic damage and  rooting them for a short time. They are also  revealed and rapidly inflicted with  Blight stacks.',
  castTime: '0.2419',
  cooldown: '100 / 80 / 60',
  cost: '100',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Varus/ability-icon/r',
  notes: 'The tendril seeks and registers valid targets every 0.264 seconds.\nEnemy champions can be targeted again by the corruption\'s tether if they were not infected the previous time, even if they were targeted and exited its range.\nA tendril that roots into the ground will only seek nearby enemy champions that were already in the area.\nChain of Corruption will not infect  crowd control immune targets or those protected by  spell shields (but will still seek them).\nVarus will turn to face the target direction at the start of the cast.\nThe tendril cannot seek enemy champions that are  untargetable, and will also stop seeking a target if it becomes untargetable (fails to apply its effects if they remain in the area).\nThis ability will cast from wherever the caster is at the end of the cast time.\nChain of Corruption can generate  Blight stacks for Varus to detonate with any ability, even if Blighted Quiver has not been learned. The base detonation damage per Blight stack scales with Blighted Quiver\'s rank, which has a value at rank 0 of 2.5% of the target\'s maximum health per stack detonated.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1500',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Direction',
  tetherRadius: '650 /  600',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Varus unleashes a tendril of corruption in the target direction that infects the first enemy champion hit, dealing magic damage and rooting them for 2 seconds, during which they are revealed. Over the first 1.5 seconds of the root, they are also inflicted with maximum stacks of Blight.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '150 / 250 / 350'
            },
            {
              unit: '% AP',
              values: '100'
            }
          ]
        }
      ]
    },
    {
      description: 'Upon impact, the tendril roots into the ground from which it seeks out nearby enemy champions. If a target does not leave the area within 2 seconds, they subsequently become infected as well, taking the same damage and effects. A new tendril is then spread out from the infected target that is closest to a nearby uninfected enemy champion. The infection can spread repeatedly until there are no new targets.'
    },
    {
      description: 'The target does not have to be visible to be caught by the tendril.'
    }
  ]
}
export default ability
