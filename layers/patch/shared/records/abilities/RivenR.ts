// Updated Patch 16.1 - 01/29/2026 04:27:04 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Wind Slash',
  width: '200',
  affects: 'Enemies',
  angle: '18°',
  blurb: 'Active:  Riven unleashes a wave of energy in a cone in the target direction that deals physical damage to enemies hit based on their missing health.',
  castTime: '0.25',
  cooldown: '120 / 90 / 60',
  cost: '0',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Riven/ability-icon/r',
  notes: 'Wind Slash counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nThis ability will cast from wherever the caster is at the end of the cast time.\nWind Slash\'s wave is made up of three individual missiles spread in a cone.\nEach enemy can be damaged by only one missile.\nIf Wind Slash hits an enemy while Riven is not visible, it will briefly grant  sight of the area around her to enemies.\nIf Riven has a basic attack buffered before the end of Wind Slash\'s cast time, the buffered basic attack will start 0.528 seconds after the end of the cast time.\nThe delay is not applied if a basic attack command is input after the cast time.',
  projectile: 'TRUE',
  speed: '1600',
  spellEffects: 'aoe',
  spellshieldable: 'True',
  targeting: 'Direction',
  targetRange: '1100',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Riven unleashes a wave of energy in a cone in the target direction that deals physical damage to enemies hit, increased by 0% - 200% (based on target\'s missing health).</p>',
      leveling: [
        {
          attribute: 'Minimum Physical Damage',
          modifiers: [
            {
              values: '100 / 150 / 200'
            },
            {
              unit: '% bonus AD',
              values: '60'
            }
          ]
        },
        {
          attribute: 'Maximum Physical Damage',
          modifiers: [
            {
              values: '300 / 450 / 600'
            },
            {
              unit: '% bonus AD',
              values: '180'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
