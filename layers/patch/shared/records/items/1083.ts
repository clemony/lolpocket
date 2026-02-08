// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1083,
  name: 'Cull',
  nicknames: [
    'dblade'
  ],
  description: '7 Attack Damage\n\nReap\nRestore 3 Health On-Hit.\nKilling minions grants 1 gold, up to 100. Reaching the limit grants another 350 gold.\n',
  noEffects: false,
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 450,
    sell: 180,
    total: 450
  },
  maps: [
    11
  ],
  passives: [
    {
      name: 'Reap',
      effects: 'Killing a minion grants an additional <img src="/img/icons/gold-coin.webp" class="inline-icon" />1, up to a <b>maximum</b> of <img src="/img/icons/gold-coin.webp" class="inline-icon" />100.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 7
  }
}
export default item