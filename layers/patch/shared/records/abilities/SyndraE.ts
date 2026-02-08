// Updated Patch 16.1 - 01/29/2026 04:27:10 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Scatter the Weak',
  width: '120 / 200',
  affects: 'Enemies',
  angle: '56° / 84°',
  blurb: 'Active:  Syndra propels a wave of force in a cone in the target direction that deals magic damage and  knocks back enemies hit based on proximity.',
  castTime: '0.25',
  collisionRadius: '70',
  cooldown: '15',
  cost: '50',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Syndra/ability-icon/e',
  notes: 'Scatter the Weak is blocked by the portion of  Wind Wall it collides with. Spheres thrown will stop upon colliding with the wall.\nSpheres spawned at close range of the ability are more likely to be hit.\nEnemies and spheres will be knocked into the direction directly away from Syndra, and the knock back has no dispersion.\nScatter the Weak will knock back Spheres even farther if they are inside terrain, up until they reach open space. If the terrain they\'re inside in cannot be surpassed, the Spheres will be knocked in the opposite direction.\nScatter the Weak will delay the expiration of a Sphere until after it finishes being knocked back.\nThis ability will cast from wherever the caster is at the end of the cast time.\nOnce Scatter the Weak has been learned, an arrow directly in front of every  Dark Sphere will appear to signify the direction the sphere will be knocked towards, each one corresponding to Syndra\'s position. This is only visible to Syndra.',
  projectile: 'SPECIAL',
  resource: 'Mana',
  speed: '2500 / 2000',
  spellEffects: 'Aoe',
  spellshieldable: 'True',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Syndra propels a wave of force in a cone in the target direction that deals magic damage to enemies hit and knocks them back for 400 units and up to 800 units away from Syndra based on proximity, though not through terrain.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '60 / 95 / 130 / 165 / 200'
            },
            {
              unit: '% AP',
              values: '60'
            }
          ]
        }
      ]
    },
    {
      description: 'Dark Spheres can be knocked back for 950 units and up to 1200 units away from Syndra based on proximity, knocking back enemies they hit over 70 units, though not through terrain. Targets hit are also stunned for 1.25 seconds, during which they are also revealed, and dealt Scatter the Weak\'s damage if they were not damaged by the initial cast.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Transcendent Bonus:</span> Collecting 80 Splinters of Wrath enhances Scatter the Weak to have an increased scatter angle and slow enemies hit by 70% for 1.25 seconds starting after the knock back ends or if the target was hit by a pushed Dark Sphere, after the stun has ended.</p>'
    }
  ]
}
export default ability
