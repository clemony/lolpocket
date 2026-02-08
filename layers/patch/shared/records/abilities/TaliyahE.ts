// Updated Patch 16.1 - 01/29/2026 04:27:10 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Unraveled Earth',
  affects: 'Enemies',
  angle: '80°',
  blurb: 'Active:  Taliyah scatters a field of stones in the target direction that deals magic damage to enemies hit. The stones remain for a few seconds and  slow enemies within.',
  castTime: '0.25',
  cooldown: '14',
  cost: '90',
  damageType: 'Magic damage',
  effectRadius: '800',
  icon: 'https://cdn.communitydragon.org/latest/champion/Taliyah/ability-icon/e',
  notes: 'Unraveled Earth fires 6 rows of stones: the first row has 2 stones, and the rest have 4 each.\nThe stones spawn in rows that cascade in 0.17 second intervals.\nUnraveled Earth will not detonate if the target dashes over the stones while being untargetable.\nUnraveled Earth will not detonate against enemies that blink onto the stones.\nThis ability will cast from wherever the caster is at the start of the cast time.',
  projectile: 'FALSE',
  resource: 'Mana',
  spellEffects: 'spellaoe',
  spellshieldable: 'true',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Taliyah scatters a field of 22 stones across the ground in the target direction that deals magic damage to enemies hit while they erupt. The stones then remain for 4 seconds and slow enemies within the area by 20%.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '60 / 105 / 150 / 195 / 240'
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
      description: 'Enemies that dash or are knocked over a stone will detonate it, taking magic damage and becoming stunned for 0.75 seconds, increased to 2 seconds if they are a monster. The stun is applied once the displacement ends.',
      leveling: [
        {
          attribute: 'Detonation Magic Damage',
          modifiers: [
            {
              values: '25 / 40 / 55 / 70 / 85'
            },
            {
              unit: '% AP',
              values: '30'
            }
          ]
        }
      ]
    },
    {
      description: 'An enemy can detonate up to 4 stones, but the damage is reduced by 0% - 75% (based on stones detonated). Unraveled Earth can affect targets only once per cast; the stones will still detonate but not apply their effects.',
      leveling: [
        {
          attribute: 'Total Maximum Detonation Damage',
          modifiers: [
            {
              values: '62.5 / 100 / 137.5 / 175 / 212.5'
            },
            {
              unit: '% AP',
              values: '75'
            }
          ]
        }
      ]
    },
    {
      description: 'Unraveled Earth deals 190% damage against monsters.'
    }
  ]
}
export default ability
