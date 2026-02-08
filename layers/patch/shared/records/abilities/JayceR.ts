// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Transform Mercury Hammer',
  affects: 'Self',
  blurb: 'Active:  Jayce transforms into  Hammer Stance, becoming  melee and gaining new abilities.',
  castTime: 'none',
  cooldown: '6',
  cost: '0',
  icon: 'https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/r',
  notes: 'Transformations do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nThe enhanced attack will not be consumed if it is parried ( dodge,  block,  blind, and  Riposte).\nThe Mercury Hammer\'s bonus damage can affect structures.\nBoth Transform on-hit effects have no set duration and will only be consumed when Jayce either lands a basic attack or switches stances.\nThe empowered attack will not trigger against  wards.',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Jayce transforms into Hammer Stance, receiving access to its abilities, becoming melee with 125 attack range, gaining 5 / 15 / 25 / 35 (based on level) (+ 7.5% bonus AD) bonus armor and bonus magic resistance, and empowering his next basic attack to deal 25 / 60 / 95 / 130 (based on level) (+ 30% bonus AD) bonus magic damage.</p>'
    },
    {
      description: 'Jayce begins the game with Transform but cannot increase its rank. Instead, his basic abilities each have 6 ranks.'
    }
  ]
}
export default ability
