// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1509,
  name: 'Gusto',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 0,
    purchasable: false,
    sell: 0,
    total: 0
  },
  maps: [
    11,
    12,
    21,
    30,
    35
  ],
  passives: [
    {
      name: 'Gusto',
      effects: '<img src="/img/icons/turret.webp" class="tip-icon " />Turret basic attacks are modified to deal 45% of this minion\'s <b>maximum</b> health as pre-mitigation damage.',
      mythic: false,
      unique: true
    },
    {
      name: 'Minion Wounder',
      effects: 'Against lane minions, this minion deals <b>bonus</b> physical damage on-hit equal to 2% of the target\'s <b>current</b> health.',
      mythic: false,
      unique: true
    }
  ],
  stats: {}
}
export default item