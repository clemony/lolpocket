// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 443081,
  name: 'Hexbolt Companion',
  description: '75% Attack Speed\n500 Health\n\nCovering Fire\nWhile near an allied champion, On-Hit gain a stack of Edict, At 1 stacks, the next time you would apply an On-Hit, your teammate also fires a bolt at the target, dealing  physical damage and applying their On-Hit effects.\n\nCovering Fire cannot trigger other Covering Fire.',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Covering Fire',
      effects: 'While your ally is within 1200 units, your basic attacks on-hit generate a stack of <i>Covering Fire</i>. At 1 stack, your next basic attack consumes them all to cause your ally to fire a bolt at the target, dealing 50 – 100 (based on level) physical damage and applying your ally\'s on-hit effects at 100% effectiveness.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackSpeed: 75,
    health: 500
  }
}
export default item