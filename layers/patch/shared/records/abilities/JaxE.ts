// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Counter Strike',
  affects: 'Self, Enemies',
  blurb: 'Active:  Jax enters Evasion for a short time: a defensive stance that causes him to  dodge all incoming non- turret basic attacks and take reduced damage from all  area of effect abilities from  champions.',
  castTime: 'None',
  cooldown: '17 / 15 / 13 / 11 / 9',
  cost: '50 / 60 / 70 / 80 / 90',
  damageType: 'Magic damage',
  effectRadius: '375',
  icon: 'https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/e',
  notes: 'The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nCounter Strike will also dodge abilities that can trigger  on-hit effects ( Parrrley,  Mystic Shot) which will count towards Counter Strike\'s increased damage. There are exceptions of abilities that Counter Strike will not dodge but will dodge the damage from  on-hit effects that they trigger ( Alpha Strike,  Piercing Darkness).\nThe damage based on the target\'s maximum health is capped at 9000 against  monsters. This is a placeholder value and impossible to reach because it requires a monster to have over 128571 health.',
  resource: 'Mana',
  spellEffects: 'aoe',
  spellshieldable: 'True',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Jax enters Evasion for 2 seconds: a defensive stance that causes him to dodge all incoming non- turret basic attacks and take 25% reduced damage from all area of effect abilities sourced from champions. Counter Strike can be recast after 1 second, and does so automatically after the duration.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Jax deals magic damage to nearby enemies, with the total damage increased by 20% for each attack dodged, up to a 100% increase, and stuns them for 1 second.</p>',
      leveling: [
        {
          attribute: 'Minimum Magic Damage',
          modifiers: [
            {
              values: '40 / 70 / 100 / 130 / 160'
            },
            {
              unit: '% AP',
              values: '70'
            },
            {
              unit: '% of target\'s maximum health',
              values: '3.5'
            }
          ]
        },
        {
          attribute: 'Maximum Magic Damage',
          modifiers: [
            {
              values: '80 / 140 / 200 / 260 / 320'
            },
            {
              unit: '% AP',
              values: '140'
            },
            {
              unit: '% of target\'s maximum health',
              values: '7'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
