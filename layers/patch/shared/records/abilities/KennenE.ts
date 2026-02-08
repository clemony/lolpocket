// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Lightning Rush',
  affects: 'Self, Enemies',
  blurb: 'Active:  Kennen becomes lightning, a  ghosted form that gains  bonus movement speed for a short time. He deals magic damage to enemies he passes through and restores  energy if he damaged an enemy at all. Lightning Rush can be recast within the duration and automatically recasts afterwards.',
  castTime: 'none',
  cooldown: '10 / 9 / 8 / 7 / 6',
  cost: '80',
  damageType: 'Magic damage',
  effectRadius: '200',
  icon: 'https://cdn.communitydragon.org/latest/champion/Kennen/ability-icon/e',
  notes: 'Lightning Rush will only damage any particular enemy once per cast.\nFor the purpose of aim-assist, Kennen\'s  attack range is reduced[ by 575 ][ to -25 ]during Lightning Rush, further reduced to -33.75 with  Rapid Firecannon.',
  resource: 'Energy',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kennen turns into lightning for 2 seconds, becoming unable to declare basic attacks but gaining ghosting and 100% bonus movement speed. He deals magic damage to enemies he passes through, reduced to 65% against non-champions, and restores 40 energy upon damaging at least one enemy.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '80 / 120 / 160 / 200 / 240'
            },
            {
              unit: '% AP',
              values: '80'
            }
          ]
        },
        {
          attribute: 'Non-Champion Damage',
          modifiers: [
            {
              values: '52 / 78 / 104 / 130 / 156'
            },
            {
              unit: '% AP',
              values: '52'
            }
          ]
        }
      ]
    },
    {
      description: 'Lightning Rush can be recast after 0.5 seconds, and does so automatically after the duration.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Kennen ends Lightning Rush to gain bonus attack speed and be allowed to exceed the attack speed cap by the amount gained for 4 seconds.</p>',
      leveling: [
        {
          attribute: 'Bonus Attack Speed',
          modifiers: [
            {
              unit: '%',
              values: '40 / 50 / 60 / 70 / 80'
            }
          ]
        }
      ]
    },
    {
      description: 'Lightning Rush\'s recast can be used while affected by cast-inhibiting crowd control.'
    }
  ]
}
export default ability
