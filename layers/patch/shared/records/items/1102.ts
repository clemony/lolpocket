// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1102,
  name: 'Gustwalker Hatchling',
  nicknames: [
    'jungle',
    'blue',
    'dog',
    'doggo',
    'woof'
  ],
  description: 'Jungle Companions\nSummon a Gustwalker that assists you against monsters.\n\nGustwalker\'s Gait\nThe companion grows as you hunt monsters, empowering your Smite. When fully grown, it grants Move Speed upon entering brush, increased when killing large monsters.',
  noEffects: false,
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 450,
    sell: 0,
    total: 450
  },
  maps: [
    11,
    21
  ],
  passives: [
    {
      name: 'Jungle Companions',
      effects: 'Summon a <i>Gustwalker Hatchling</i> companion to assist you in combat against monsters.',
      mythic: false,
      unique: true
    },
    {
      name: 'Gustwalker\'s Gait',
      effects: 'Feed your companion enough treats to evolve it and upgrade your <img src="/img/icons/smite.webp" class="tip-icon" />Smite. Upon the companion reaching its final evolution, this item is consumed, granting you the {{bi|Gustwalker&#039;s Gait|Gustwalker&#039;s Gait}} buff.',
      mythic: false,
      unique: true
    }
  ],
  stats: {}
}
export default item