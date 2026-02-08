// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 446671,
  name: 'Galeforce',
  nicknames: [
    'squallrider'
  ],
  description: '65 Attack Damage\n30% Attack Speed\n25% Critical Strike Chance\n6% Move Speed\n\nCloudburst II \nDash in target direction over terrain, firing three missiles at the lowest Health enemy near your destination. Deals physical damage, increased against low Health targets.',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  active: [
    {
      name: 'Cloudburst II',
      effects: '<img src="/img/icons/dash.webp" class="tip-icon " />Dash to the target location and fire three homing missiles at the most wounded enemy within 750 units of you at the end of the dash, prioritizing enemy champions. Each missile deals (+26.6 {{recurring|6|6|6|6}}% <b>bonus</b> AD) physical damage, for a total of 150 – 350 (based on level) (+80% <b>bonus</b> AD) physical damage, increased by 0% – 50% (based on target\'s missing health).',
      range: 0,
      unique: true
    }
  ],
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  stats: {
    attackDamage: 65,
    attackSpeed: 30,
    criticalStrikeChance: 25,
    percentMovespeed: 6
  }
}
export default item