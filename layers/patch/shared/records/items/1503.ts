// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1503,
  name: 'Warden\'s Eye',
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
      name: 'True Sight',
      effects: 'Can see <img src="/img/icons/camouflage.webp" class="tip-icon " />camouflaged and <img src="/img/icons/invisible.webp" class="tip-icon " />invisible units within 1100 units.',
      mythic: false,
      unique: true
    }
  ],
  stats: {}
}
export default item